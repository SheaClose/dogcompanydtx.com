"use strict";

const Order = require("./Order.js"),
  serverConfig = require("../../../serverConfig.js"),
  sg = require("sendgrid")(serverConfig.SENDGRID_API_KEY);

module.exports = {
  submitOrder: (req, res) => {
    let {
      email,
      first_name,
      last_name,
      nonUSAddress,
      street,
      city,
      state,
      zipcode
    } = req.body.user;
    let { cart, total } = req.body;

    new Order(req.body).save((err, order) => {
      if (err) {
        return res.status(500).json(err);
      } else {
        let address = nonUSAddress || `${street}, ${city}, ${state} ${zipcode}`;
        const orderProductArray = [];
        cart.forEach((c, i, a) => {
          let { title, price, color, size, description, category } = c.product;
          let { total, quantity } = c;
          let tempProduct;
          if (category === "apparel") {
            tempProduct = `
Product: ${title},
Price: ${price},
Color: ${color},
Size: ${size},
Quantity: ${quantity},
description: ${description},
Total: ${total}
						\n`;
          } else {
            tempProduct = `
Product: ${title},
Price: ${price},
Quantity: ${quantity},
description: ${description},
Total: ${total}
						\n`;
          }

          orderProductArray.push(tempProduct);
        });
        let orderProductString = orderProductArray.join(" ");
        const request = sg.emptyRequest({
          method: "POST",
          path: "/v3/mail/send",
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: email
                  }
                ],
                subject: `Your Dog Company Merchandise Order(${order._id})`
              }
            ],
            from: {
              email: "DogCompanyDtx@gmail.com"
            },
            content: [
              {
                type: "text/plain",
                value: `Hello, ${first_name}!

	Thank you for shopping for Dog Company Merchandise! We have received your order, please give us a couple of days to fullfil your order. We will send you an e-mail once we have confirmed your order, total, and shipping costs. We accept Check and Paypal. If for any reason you need to change or cancel your order, you can reach us at DogCompanyDtx@gmail.com.

Order Details:
	Order Number: ${order._id}
	Name: ${first_name} ${last_name}
	Email: ${email}
	Address: ${address}
	Total: $${total}
	Cart: 
		${orderProductString}`
              }
            ]
          }
        });
        sg.API(request, function(error, response) {
          if (error) {
          }
        });
        return res.status(200).json(order);
      }
    });
  }
};
