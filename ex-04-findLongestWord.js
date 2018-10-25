/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below

function findLongestWord(someString){
  // console.log(someString);
  var theLongestWord = ""
  // tenemos que quitar el simbolo "'" de las oraciones para que no lo
  // cuente como un caracter
  var noSymbol = someString.replace("'",'')
  // console.log(noSymbol);

    for(var i = 0; i < noSymbol.length; i++){
      var strEl = noSymbol[i]
      // console.log(strEl);
      // console.log(typeof strEl);
// guardamos en una variable la iteraion sobre el nuevo string ya sin
// el simbolo
    }
// necesitamos separar las palabras de la oracion para hacer el conteo
// de caracteres en cada una
          strEl = noSymbol.split(" ")
          // el metodo de split convierte el string a un array separando
          // las palabras con comas
          // console.log(strEl);
    for (var i = 0; i < strEl.length; i ++ ){
        var charCount = strEl[i]

    // realizamos una iteracion sobre el nuevo array para obtener
    // el numero de caracteres de cada palabra

      if(charCount.length > theLongestWord.length){
         theLongestWord = charCount

         // realizamos una validación para comparar el numero de
         // caracteres de cada palabra con el resultado en la variable de salida
      }
    }
        // console.log(theLongestWord);
        return theLongestWord
        // retornamos la variable de salida
  }













// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

//  punctuation should NOT be included in the evaluation for the longest word
console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
