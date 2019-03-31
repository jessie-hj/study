function Calc(){ //생성자가 있는 함수는 앞글자를 대문자로 설정(관례)

}

Calc.prototype = {//prototype은 가지고있는 기능의 역할을 한다.
  constructor: Calc,
  add: function(numA, numB) {
    return numA + numB;
  },
  subtract: function(numA, numB) {
    return numA - numB;
  },
  division: function(numA, numB) {
    return Math.floor(numA / numB);
  },
  multiply: function(numA, numB) {
    return numA * numB;
  }
};

var calc = new Calc(); //생성자가 있는 경우 new를 통해 만들어줘야 한다.
var result = calc.add(10,20);
console.log(result);