function isOdd (num){
  let isOdd;
  num % 2 === 1 ? isOdd = true : isOdd = false;
  return isOdd;
}
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
