var cancellable = function cancellable(fn, args, t) {
  fn(...args);
  const timeout = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timeout);
};
const fn = (a, b, c)=>console.log(a + b + c);

const args  = [1, 2, 3];
const cancel = cancellable(fn, args, 9000);
cancel();