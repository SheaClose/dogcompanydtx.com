module.exports = {
  parseProduct({ title, price, quantity, description, total, category, color, size }) {
    return `
Product: ${title},
Price: ${price},
Quantity: ${quantity},
description: ${description},
Total: ${total}
${
  category === 'apparel'
    ? `Color: ${color},
Size: ${size},`
    : ''
}
`;
  },
  parseBody({ first_name, last_name, email, address, total, orderProductString }) {
    return `Hello, ${first_name}!

	Thank you for shopping for Dog Company Merchandise! We have received your order, please give us a couple of days to fullfil your order. We will send you an e-mail once we have confirmed your order, total, and shipping costs. We accept Check and Paypal. If for any reason you need to change or cancel your order, you can reach us at DogCompanyDtx@gmail.com.

Order Details:
	Name: ${first_name} ${last_name}
	Email: ${email}
	Address: ${address}
	Total: $${total}
	Cart: 
		${orderProductString}`;
  }
};
