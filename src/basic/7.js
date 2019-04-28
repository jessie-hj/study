/* 1부터 100까지 숫자 중 배열 2개를 만들어서 짝수, 홀수 각 배열에 삽입해서 결과를 출 */
var oddArr = [],
  evenArr = [];
for(var i = 0; i<100; i++){
  if(i % 2){
    evenArr.push(i+1);
  }else{
    oddArr.push(i+1);
  }
}
console.log(evenArr,oddArr);