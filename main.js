// FUNCIONES
// Crea una función resta que espere dos parámetros a y b y que devuelva la resta de los mismos.
function resta (a,b){

    return a - b
    
    }
    
    console.log(resta(7,2));

// Crea un programa el cual te pregunte por una nota del 0 al 10 y dependiendo del número, te devuelva la siguiente clasificación.
// Nota: Debes de usar el Switch.
// 0 - 4: Insuficiente.
// 5 - 6: Suficiente.
// 7 - 8: Notable.
// 9 - 10: Sobresaliente.
// _______________________________________

// function calcnota () {
//     let nota = prompt("Introduce nota entre 0 y 10");

//     switch (nota) {

//         case "0":
//         case "1":
//         case "2":
//         case "3": 
//         case "4":   
        
//         console.log("insuficiente");
//         break;
        
//         case "5":
//         case "6":
        
//         console.log("suficiente");
//         break;

//         case "7":
//         case "8":

//         console.log("Notable");
//         break;

//         case "9":
//         case "10": 
             
//         console.log("Sobresaliente");
//         break;
//     }

// return (
//     "El resultado es " +
//     nota 
//   );
// }
// calcnota()


// Crea la función duplicaNumero debe recibir un tipo number y devolver el doble del valor recibido. Si la función no recibe un dato tipo number debe devolver el string ‘Debo ser ejecutada con un número’

function duplicaNumero(numero) {
    if (typeof numero !== "number") {
      return "Debo ser ejecutada con un número";
    } else {
      return numero * 2;
    }
  }
console.log(duplicaNumero())


// Crea la función caracterInicial  debe recibir un tipo string y devolver un string con el primer carácter. 
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'. 
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function caracterInicial(string) {
    if (typeof string !== "string") {
      return "Debo ser ejecutada con un string";
    } else if (string.length === 0) {
      return "Debo ser ejecutada con un string no vacío";
    } else {
      return string.charAt(0);
    }
  }

console.log(caracterInicial())

// Crea la función ultimoCaracter debe recibir un tipo string y devolver un string con el último carácter.
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'.
// Si recibe un string vacío debe devolver 'Debo ser ejecutada con un string no vacío'

function ultimoCaracter(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
      } else if (string.length === 0) {
        return "Debo ser ejecutada con un string no vacío";
      } else {
        return string.charAt(string.length - 1);
      }
    }
  
console.log(ultimoCaracter())

// Crea la función cuentaCaracteres debe recibir un tipo string y devolver un number con el número de carácteres
// Si la función no recibe un dato tipo string debe devolver el string 'Debo ser ejecutada con un string'

function cuentaCaracteres(string) {
    if (typeof string !== "string") {
        return "Debo ser ejecutada con un string";
      } else {
        return string.length;
      }
    }

console.log(cuentaCaracteres("Guille"))

// Un palíndromo es una palabra que se escribe igual del derecho que del revés por ejemplo orejero, rallar o somos.  Crea la función esPalindromo que recibirá una cadena de texto y deberá devolver si es un palíndromo o no.
// Si la función no recibe una cadena de texto o está vacía 'no es un formato correcto'

function esPalindromo (Palind) {
    if (typeof Palind !== "string" || Palind === "") {
        return "No es un formato correcto";
      }
      const strReversed = Palind.split("").reverse().join("");
      return strReversed === Palind ? "es palindromo" : "no es palindromo";

}
console.log(esPalindromo("ana"))

// Crea la función getPrecioMostrar para que devuelva una cadena de texto con formato precio con dos decimales. Para 2 debería devolver 2.00 €. 
// Si la función no recibe un número debería devolver devolver 'no es un formato correcto'

function getPrecioMostrar(precio) {
    if (typeof precio !== 'number') {
      return "No es un formato correcto";
    } else {
      return precio.toFixed(2) + " €";
    }
  }
console.log(getPrecioMostrar(25.23245))

// Crea la función division que acepte como argumento dos números y devuelva el resultado de su división

function division (a,b) {
    return a/b;
}

console.log(division(21,7))

// Crea una función que dada una array de números, devuelve una nueva array que tenga solo los números que son 5 o más. Ejemplo entrada [3, 6, 8, 2] salida [6, 8]

function Array5(array) {
    const arrayFilt = array.filter(numero => numero >= 5);
    return arrayFilt;
  }
  
  const numeros = [3, 6, 8, 2];
  const numerosFilt = Array5(numeros);
  
  console.log(numerosFilt);

//   Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o no un número primo, debe devolver true si es primo sino false. 
// Un número primo es aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

// function Primo(numero) {
//     if(numero < 2) {
//       return false;
//     }
    
//     for(let i = 2; i < numero; i++) {
//       if(numero % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
//   const numero = prompt("Ingresa un número:");
//   const numPrimo = Primo(numero);
  
//   if(numPrimo) {
//     console.log(`${numero} es un número primo.`);
//   } else {
//     console.log(`${numero} no es un número primo.`);
//   }


//   EXTRAS
//   Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares

function obtenerImpares(array) {
    const impares = array.filter(numero => numero % 2 !== 0);
    return impares;
  }
  
  const numerosI = [3, 6, 8, 2, 7, 12, 17, 20, 35];
  const numerosImp = obtenerImpares(numerosI);
  
  console.log(numerosImp);

//   Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6

function sumarArray(array) {
    const suma = array.reduce((sumatotal, numero) => sumatotal + numero, 0);
    return suma;
  }
  
  const numerosA = [1, 2, 3];
  const resultado = sumarArray(numerosA);
  
  console.log(resultado); 

//   Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24

function multiplicarArray(array) {
    const mult = array.reduce((multtotal, numero) => multtotal * numero);
    return mult;
  }
  
  const numerosM = [2, 3, 4];
  const resultadoM = multiplicarArray(numerosM);
  
  console.log(resultadoM); 

//   Crea una función checkPassword con una variable tipo String que contenga una contraseña cualquiera. Después se te pedirá que introduzcas la contraseña (usando prompt), con 3 intentos. Cuando aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo “Enhorabuena”(ej.un alert). Piensa bien en la condición de salida (3 intentos y si acierta sale, aunque le queden intentos).

function checkPassword() {
  const password = "Guille"; 
  let intentos = 3;

  while (intentos > 0) {
    const pass = prompt("Introduce la contraseña:");
    if (pass === password) {
      alert("Enhorabuena");
      return; 
    } else {
      intentos--;
      alert(`Contraseña incorrecta. Te quedan ${intentos} intentos.`);
    }
  }

  alert("Has agotado todos los intentos.");
}

console.log(checkPassword())