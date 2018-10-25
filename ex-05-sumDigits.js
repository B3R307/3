/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 // ++ YOUR CODE below

    function sumDigits(someNum){
        // console.log(someNum);
        // console.log(typeof someNum);
        // dado que el argumento es un numero de varios digitos necesitamos
        // convertirlo a string (arg.toString) para después separar los numeros con
        // comas con el metodo split para variables tipo string
       var totalSum = 0
       var strNumber = someNum.toString();

       strNumber = strNumber.split("")
       // console.log(strNumber);
       // console.log("-------");
       // console.log(typeof strNumber);
          // es un OBJETO
       // hacemos la iteracion sobre el nuevo objeto que se convierte a string
       // despues de la iteracion
       for(var i = 0; i < strNumber.length; i ++){
         var numEl = strNumber[i]
         // console.log(typeof numEl);
         // ya habiendo separado los numero con una coma, el string debe
         // convertirse a numero para poder reañlizar la suma( no se puede hacer
         // aritmetica con un string)
          numEl = parseInt(numEl);
          totalSum = totalSum + numEl
          // para obtener la suma recogemos la variable de salida y
          // sumamos cada elemento del argumento.
        }
            // console.log(totalSum);
            return totalSum
    }
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-05');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 6 from "123"');
console.assert(sumDigits(123) === 6)

console.log('Should return 11 from "911"');
console.assert(sumDigits(911) === 11)

console.log('Should return 12 from "8040"');
console.assert(sumDigits(8040) === 12)

console.log('Should return 15 from "173220"');
console.assert(sumDigits(173220) === 15)

console.log('\n')
