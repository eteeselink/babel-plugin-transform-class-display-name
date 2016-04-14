class Banana {
  constructor() {
    this.a = 6;
  }
  static help = "seven";
  moo() {
    return Banana.displayName;
  }
  static displayName = "Banana";
}
class WhatAMess extends Banana {
  constructor() {
    super();
    this.b = 7;
  }
  moo() {
    alert(super.moo() === this.b);
  }
  static displayName = "WhatAMess";
}
