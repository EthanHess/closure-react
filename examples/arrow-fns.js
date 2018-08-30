function Person(salary) {
  this.salary = salary;

  this.bumpPay = function() {
    this.salary = this.salary * 1.20;
  }

  this.bumpPayWithArrow = () => {
    this.salary = this.salary * 1.20;
  }
}

const peter = new Person(100);

const fn = peter.bumpPay;
// Doesn't work!
fn();
console.log('peter', peter);

const fn2 = peter.bumpPayWithArrow;
fn2();
console.log('peter again', peter);