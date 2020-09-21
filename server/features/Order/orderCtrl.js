'use strict';

const { parseProduct, parseBody } = require('./orderStringParsers'),
  sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

module.exports = {
  submitOrder: ({ body }, res) => {
    let { email, first_name, last_name, nonUSAddress, street, city, state, zipcode } = body.user;
    let { cart, total } = body;
    let address = nonUSAddress || `${street}, ${city}, ${state} ${zipcode}`;
    const orderProductArray = cart.map((c, i, a) => {
      let { title, price, color, size, description, category } = c.product;
      let { total, quantity } = c;
      return parseProduct({ title, price, color, size, description, category, total, quantity });
    });
    let orderProductString = orderProductArray.join(' ');
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [
              {
                email,
              },
            ],
            subject: `Your Dog Company Merchandise Order`,
          },
        ],
        from: {
          email: 'DogCompanyDtx@gmail.com',
        },
        content: [
          {
            type: 'text/plain',
            value: parseBody({ first_name, last_name, email, address, total, orderProductString }),
          },
        ],
      },
    });

    /** only email if in production */
    process.env.NODE_ENV !== 'development' ? sg.API(request, () => {}) : console.log(request);
    return res.status(200).json(Object.assign(body, request));
  },
};
