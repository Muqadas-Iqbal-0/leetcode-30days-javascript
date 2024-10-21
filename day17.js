// let mymap = new Map([
//   ["name", "muqadas"],
//   ["age", 21],
//   [true, "boolkey"],
//   [1, "numberkey"],
// ]);
// mymap.set("class", "BSCS");

// console.log(mymap.delete("age"));
// console.log(mymap);
class TimeLimittedCache {
  constructor() {
    this.cache = new Map();
  }
  set(key, value, timeout = 1000) {
    const alreadyExist = this.cache.get(key);
    if (alreadyExist) {
      clearTimeout(alreadyExist.timeoutId);
    }
    const timeoutId = setTimeout(() => {
      this.cache.delete(key);
    }, timeout);
    this.cache.set(key, { value, timeoutId });
    return Boolean(alreadyExist);
  }
  get(key) {
    if (!this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }
  count() {
    return this.cache.size;
  }
}
const cache = new TimeLimittedCache();
cache.set(1, 24, 1000);
cache.set(2, 24, 1000);
cache.set(3, 24, 1000);
cache.set(4, 24, 1000);
console.log(cache.get(1));

console.log(cache.count());
//   cache.get(4);