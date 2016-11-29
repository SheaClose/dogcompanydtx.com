const Order = require("./Order.js")
      , serverConfig = require("../../../serverConfig.js")
      , sg = require('sendgrid')(serverConfig.SENDGRID_API_KEY);

module.exports = {
  submitOrder: (req, res) => {
    // console.log(req.body.cart);
    new Order(req.body).save((err, order)=>{
      if (err) {
        return res.status(500).json(err)
      }
      else {
        console.log(order);
        const orderProductArray = [];
        req.body.cart.forEach((c,i,a)=>{
          let tempProduct =
`
Product: ${c.product.title},
Price: ${c.product.price},
Color: ${c.product.color},
Size: ${c.product.size},
Quantity: ${c.quantity},
Total: ${c.total}
\n`
          orderProductArray.push(tempProduct)
        })
        let orderProductString = orderProductArray.join(" ")
        const request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: {
            personalizations: [
              {
                to: [
                  {
                    email: req.body.user.email,
                  },
                ],
                subject: `Your Dog Company Merchandise Order(${order._id})`,
              },
            ],
            from: {
              email: 'DogCompanyDtx@gmail.com',
            },
            content: [
              {
                type: 'text/plain',
                value:
                `Hello, ${req.body.user.first_name}!

                Thank you for shopping for Dog Company Merchandise! We have received your order, please give us a couple of days to fullfil your order. We will send you an e-mail once we have confirmed your order, total, and shipping costs. We accept Check and Paypal. If for any reason you need to change or cancel your order, you can reach us at DogCompanyDtx@gmail.com.

Order Details:
  Order Number: ${order._id}
  Name: ${req.body.user.first_name} ${req.body.user.last_name}
  Email: ${req.body.user.email}
  Address: ${req.body.user.street}, ${req.body.user.city}, ${req.body.user.state} ${req.body.user.zipcode}
  Total: $${req.body.total}
  Cart:
  ${orderProductString}`,
              },
            ],
          },
        });
        sg.API(request, function(error, response) {
          if (error) {
            console.log('Error response received');
          }
            // console.log(response.statusCode);
            // console.log(response.body);
            // console.log(response.headers);
        });
        return res.status(200).json(order)
      }
    })
  }
}
