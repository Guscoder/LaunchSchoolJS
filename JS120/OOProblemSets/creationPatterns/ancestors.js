// name property added to make objects easier to identify
let foo = { name: 'foo' };
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestors());
  }

  return ['Object.prototype'];
};

qux.ancestors(); // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors(); // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors(); // returns ['foo', 'Object.prototype']
foo.ancestors(); // returns ['Object.prototype']
