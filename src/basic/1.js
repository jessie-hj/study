/**
 * 점수를 받아서
 * 그 점수에 따라 A, B, C, D, F 등급을 매기는 프로그램
 *
 * switch-case
 * 90 - 100 : A
 * 80 - 89 : B
 * 70 - 79 : C
 * 60 - 69 : D
 * etc: F
 * */

function calcScore(score) {
  var result = Math.floor(score / 10);
  switch (result) {
    case 10 :
    case 9 :
      console.log('A');
      break;
    case 8 :
      console.log('B');
      break;
    case 7 :
      console.log('C');
      break;
    case 6 :
      console.log('D');
      break;
    default :
      console.log('F');
  }
}

var scores = { a: 100, b: 80, c: 70 };
// var result = Math.floor(scores/10);
var score = 90;

if (typeof scores === 'number') {
  calcScore(score);
} else {
  for(var i in scores) {
    calcScore(scores[i]);
  }
}



