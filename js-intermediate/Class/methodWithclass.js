class Greeter {
  constructor(x) {
    this.x = x;
  }
  greet() {
    console.log('greet1', this.x);
  }

  greet2 = () => {
    console.log('greet2', this.x);
  };

  greet3 = function () {
    //this is typed as any
    console.log('greet3', this.x);
  };
}

let bla = new Greeter(' me');
bla.greet();
bla.greet2();
bla.greet3();

function call(func) {
  func();
}

call(bla.greet2);
call(bla.greet);
call(bla.greet3);
