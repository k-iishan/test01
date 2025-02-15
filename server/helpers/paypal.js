const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
   client_id: process.env.PAYPAL_ID,
  client_secret: process.env.PAYPAL_KEY,
});

module.exports = paypal;
