var bind = Function.bind;
var unbind = bind.bind(bind);
function instantiate(constructor, args) {
  return new (unbind(constructor, null).apply(null, args));
}

Date = function (Date) {
  var props = Object.getOwnPropertyNames(Date);

  for (var i = 0; i < props.length; i++) {
    if (props[i] in CustomDate) continue;
    var desc = Object.getOwnPropertyDescriptor(Date, props[i]);
    Object.defineProperty(CustomDate, props[i], desc);
  }
  return CustomDate;

  function CustomDate() {
    var date = instantiate(Date, arguments);
    // only modify the date if more than one argument is present
    if (arguments.length <= 1) {
      date.setUTCDate(date.getUTCDate() + dateModifier);
      // date.setHours(0,0,0,0);
    }
    return date;
  }
}(Date);
