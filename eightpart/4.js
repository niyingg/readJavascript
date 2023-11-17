function SuperType() {
  this.name = "SuperType";
  this.property = true;
}

SuperType.prototype.getSuperTypeName = function () {
  console.log(this.name);
  return this.property;
};

function SubType() {
  this.name = "subtype";
  this.property = false;
}

SubType.prototype = new SuperType();
SubType.prototype.getSubtypeName = function () {
  console.log(this.name);
  return this.property;
};
const instance = new SubType();

console.log(
  instance,
  instance.name,
  //   instance.getSubtypeName(),
  instance.getSuperTypeName(),
  instance instanceof SubType,
  instance instanceof SuperType
);
