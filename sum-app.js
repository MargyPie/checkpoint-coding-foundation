class SumApp {
  //The sumApp class should have a property numbers which is an array
  constructor(numbers) {
    this.numbers = numbers;
  }

  //The sumApp class should have a method addNumber(n) which will add the given number to the numbers array
  addNumber(n) {
    this.numbers.push(n);
  }

  //The sumApp class should have a method getSum() which return the sum of all numbers added to the numbers array
  //The getSum() method should return 0 if no numbers have been added to the numbers array
  getSum() {
    let sum = 0;
    for (num of this.numbers) {
      sum += num;
    }
    return sum;
  }

  //The sumApp class should have a method reset() which should delete all numbers previously added to the numbers array
  reset() {
    this.numbers.length = 0;
  }
}

/*


Sum App Example
const sumApp = new SumApp();

sumApp.addNumber(1);
sumApp.addNumber(2);

console.log(sumApp.numbers.length); // 2

console.log(sumApp.getSum()); // 3

sumApp.reset();

console.log(sumApp.numbers.length); // 0
console.log(sumApp.getSum()); // 0
*/ 