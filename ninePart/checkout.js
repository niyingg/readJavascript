import { translate } from "./2.js";

function CheckoutBase() {
  this._language = "ch";
}

CheckoutBase.prototype.init = function (lang) {
  this._language = lang;
};
CheckoutBase.prototype.genI18n = function () {
  console.log(this, "_____");
  return translate(this._language);
};

export default CheckoutBase;
