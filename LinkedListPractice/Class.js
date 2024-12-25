class student {
  constructor(name) {
    this.name = name;
  }
  getter() {
    return this.name;
  }
  setter(name) {
    this.name = name;
  }
}
let obj = new student();
obj.setter("Shristy");
let val = obj.getter();
console.log(val);
