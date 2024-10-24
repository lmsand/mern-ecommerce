const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AV1TOrPPyJXjA0T49NatYG9ylHXiUGQ1MgLJ7gtKzOaAw6W9A8LZB0DH8xSoX1dH2lvKSzoGFAO0K0Pl",
  client_secret: "EOmh4Q7eBblfnbKULC57ZXW9W8wySipBpnX-vN4JyASkEpKkGtnZnXgl2A2gxWz9xXRmYmxHtTR1HElQ",
});

module.exports = paypal;
