//Dynamic programming Concepts using fibonacci and
//greedy algorithm

//dynamic program with recursive fibonacci
function recursiveFib(n) {
  if (n < 2) {
    return n;
  } else {
    return recursiveFib(n-1) + recursiveFib(n-2);
  }
}

//dynamic programming using dynamic concept
function dynFib(n) {
  val = [];
  
  for (var i = 0; i <= n; i++) {
    val[i] = 0;
  }

  if (n == 1 || n == 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (var i = 3; i <= n; i++) {
      val[i] = val[i-1] + val[i-2];
    }

    return val[n-1];

  }
}

//fibonacci without using array
function fibIterable(n) {
  var last = 1;
  var nextLast = 1;
  var result = 1;

  for (var i = 2; i < n; i++) {
    result = nextLast + last;
    nextLast = last;
    last = result;
  }

  return result;
}

//testing speed and efficiency of dynamic and recursive
var start = new Date().getTime();
console.log(recursiveFib(30));
var stop = new Date().getTime();
console.log('Recursive time elapsed '+ (stop - start) + ' milliseconds');
var start = new Date().getTime();
console.log(fibIterable(30));
var stop = new Date().getTime();
console.log('Dynamic programming elapsed ' + (stop - start) + ' miliseconds');