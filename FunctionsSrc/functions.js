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

// function pow(x, n) {
//     var result = x;
  
//     for (var temp = 0; temp < n; temp++) {
//       result *= x;
//     }return result;
// }
// console.log (pow(2, 8));


// function pow(x, n) {
//     if (n !== 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
//       return x * pow(x, n - 1);
//     } else {
//       return x;
//     }
//   }
  
//   console.log( pow(2, 8) ); // 8

// function go(arg1, arg2, arg3){
//   if (arg1 < arg2){
//     var diff = arg2 - arg1
//   } for (var temp = 1; temp < diff; temp++){
//       console.log(diff)
//   } 
//       return diff;

// }console.log(go(5,8,9));

function account(sourceMoney, depositRate, depositTime, yearDays ){
var result = (sourceMoney * depositRate * depositTime)/(yearDays*100);
var depositMoney = result;
var rateForRate = depositRate;
    if (depositMoney !==0 & depositMoney < 100000) {
      add();
        function add(){
          var finalRateMoney = (depositMoney * rateForRate * depositTime)
            /(yearDays*100); console.log("Сумма от процентов: "+finalRateMoney); 
            return finalRateMoney;
      }
} 
return result;
}
console.log ("Сумма от процентной cтавки: " + account(100000, 12, 181, 365 )); 





