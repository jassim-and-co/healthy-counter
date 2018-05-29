// var container = function select(argument1, argument2){
//     var result = 0;
//     var message = " ";
//     var symbolength1 = 0;
//     var typeOfArguments = typeof(argument1, argument2);
//      if ((argument1 === 0|argument1 === null|argument1 === undefined|typeOfArguments==="string")
//         |(argument2 === 0|argument2 === null|argument2 === undefined)){
//             var message = "Input values in incorrect, result: "}
//           else if ((argument1 <100 && argument2 < 100)){
//               var result = argument1 * argument2; var message = "result of multiply:";
//              } else if (argument1 >= 100 | argument2 >= 100){
//                     var result = argument1 + argument2; var message = "Result of sum: ";
//                      }

//                         return  message + result;
//                     }

// console.log (container(2, 102 ));

function pow(x, n) {
  var result = x;
  for (var temp = 0; temp < n; temp++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 5));

function pow(x, n) {
  if (n !== 1) {
    // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}

console.log(pow(2, 6)); // 8

function account(sourceMoney, Rate, depositTime, yearDays) {
  var result = sourceMoney * Rate * depositTime / (yearDays * 100);
  var depositMoney = result;
  if ((depositMoney !== 0) & (depositMoney < 100000)) {
    add();
    function add() {
      var finalRateMoney = depositMoney * Rate * depositTime / (yearDays * 100);
      console.log("Сумма от процентов: " + finalRateMoney);
      return finalRateMoney;
    }
  }
  return result;
}
console.log("Сумма от процентной cтавки: " + account(100000, 12, 181, 365));

function sumToCycle(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    console.log(sum);
    sum = sum + i;
  }
  return sum;
}
console.log(sumToCycle(5));

function sumTo(n) {
  if (n == 1) return 1;
  else return n + sumTo(n - 1);
}
console.log(sumTo(5));

function factorial(n) {
  var result = 0;
  if (n == 1 || n == 0) {
    return 1;
  } else {
    result = n * factorial(n - 1);
  }
  return result;
}
console.log(factorial(5));

function factorial7(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    var result = 1;
    for (var i = 1; i <= n; i++) {
      result = result * i;
    }
    return result;
  }
}
console.log(factorial7(3));

function f(n) {
  return n ? n * f(n - 1) : 1;
}

console.log(f(5)); // 120
