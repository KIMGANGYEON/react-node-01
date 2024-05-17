const mongoose = require("mongoose");

const PaymentScheam = mongoose.Schema(
  {
    user: {
      type: Object,
    },
    data: {
      tyep: Array,
      default: [],
    },
    product: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", PaymentScheam);
module.exports = Payment;
