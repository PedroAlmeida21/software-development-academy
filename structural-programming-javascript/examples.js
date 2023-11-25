var a = 2; var b = 5; var c = 10;

console.log(a,b,c); //2, 5, 10

function f(){
  var a = 99;
  var b = 999; //local variables override the global ones in the function
  c = 9999; //no "var" keyword, so we operate on a global c variable
  console.log(a,b,c); //99, 999, 9999
}

f();

console.log(a,b,c); //2, 5, 9999