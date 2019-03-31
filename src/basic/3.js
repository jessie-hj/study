function Calc(numA, numB){ //생성자가 있는 함수는 앞글자를 대문자로 설정(관례)
  this.numA = numA;
  this.numB = numB;
}

Calc.prototype = {//prototype은 가지고있는 기능의 역할을 한다.
  constructor: Calc,
  add: function() {
    return this.numA + this.numB;
  },
  subtract: function() {
    return this.numA - this.numB;
  },
  division: function() {
    return Math.floor(this.numA / this.numB);
  },
  multiply: function() {
    return this.numA * this.numB;
  }
};

var calc = new Calc(10,6); //생성자가 있는 경우 new를 통해 만들어줘야 한다.
// var result = calc.add();
var result = calc.multiply();
console.log(result);