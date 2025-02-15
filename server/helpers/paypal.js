const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASvYhKrgdqXnyErQJ0vvORe9I-3ucZOYTuJeA99891RRt-PEqm6uRzgR-BEtLb2xnVaZXc_sI0Ww6147",
  client_secret: "EPTi6NhW7s5S0Qnm0YKweQRbZ2LSHnhxrvgKpU786fkxpWIiaVky-j6BiHabaaIwgS1Tye85yekoU0PN",
});

module.exports = paypal;
