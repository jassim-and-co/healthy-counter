function runTestFunction (argument1, argument2){
  var result = 0;
  var message = " ";
  var symbolength1 = 0;
  var typeOfArguments = typeof(argument1, argument2);
   if ((argument1 === 0|argument1 === null|argument1 === undefined|typeOfArguments==="string")
      |(argument2 === 0|argument2 === null|argument2 === undefined)){
          var message = "Input values in incorrect, result: "}
        else if ((argument1 <100 && argument2 < 100)){
            var result = argument1 * argument2; var message = "result of multiply:"; 
           } else if (argument1 >= 100 | argument2 >= 100){
                  var result = argument1 + argument2; var message = "Result of sum: ";
                   }
                       
                      return  message + result;
                  } 

console.log (container(2, 102 ));
export { runTestFunction };