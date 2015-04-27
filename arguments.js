var sum = function () {

  var args = Array.prototype.slice.apply(arguments);
  var accum = 0;
  for (var i = 0; i < args.length; i++) {
    accum += args[i];
  }

  return accum;
};
