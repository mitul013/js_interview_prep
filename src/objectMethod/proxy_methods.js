// even x, y, z propperty does not exist in obj then also we can assign value by creating all those properties
const obj = new ProxyObject({});
obj.x.y.z = "nested value";
obj.x.y.z; // nested value

// Note : here we are using get instead of set, why ?
// because when we assign obj.x.y.z that time first compile call get method for Obj.x and then get method for .y then SET method for .z
// so we have to create empty object in get method only
// why we are ont assigning simple object whenever key is not present?
// so in .x get method we will assign simple {} object then followed .y get method will not create {} object for y.
// so thats why we have to assign new ProxyObject({}) so .y get method will also  create empty object

function ProxyObject(obj) {
  return new Proxy(obj, {
    get(target, handler) {
      if (!(handler in target)) {
        target[handler] = new ProxyObject({});
      } else {
        target[handler];
      }
      return target[handler];
    },
  });
}
