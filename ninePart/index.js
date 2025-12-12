import CheckoutBase from "./checkout.js";

const MeicanCheckout = (function () {
  const base = new CheckoutBase();
  const obj = {
    ...base,
    ...Object.getPrototypeOf(base),
  };

  return obj;
})();

export default MeicanCheckout;
