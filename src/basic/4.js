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
  },
  calculate: function(str) {
    var sign = ["+", "-", "*", "/"];
    var useSign = "";
    for (var item in sign){
      if(str.indexOf(sign[item]) > -1){
        // console.log(!!str.indexOf(sign[item]));
        useSign = sign[item];
      }
    }
    // console.log(useSign);
    var splitNum = str.split(useSign);
    var numA = splitNum[0];
    var numB = splitNum[1];
    var result = null;
    switch (useSign){
      case "+":
        result = this.add(numA,numB);
        break;
      case "-":
        result = this.subtract(numA,numB);
        break;
      case "*":
        result = this.multiply(numA,numB);
        break;
      case "/":
        result = this.division(numA,numB);
        break;
      default:
        console.log("계산이 가능한 양식이 아닙니다.");
    }
    return result;
  }
};

var calc = new Calc();
var result = calc.calculate("10*5");
console.log(result);