// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola soy alex";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 7;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.1
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
return  str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var suma = x + y;
  return suma;
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resta = x - y;
  return resta;

}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicado = x * y;
  return multiplicado;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
<<<<<<< HEAD
  var division = x / y;
  return division;
=======
>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a

}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
<<<<<<< HEAD
  // Tu código: 
  if (x==y)
  { return true;}
 
  else 
  { return false;}
=======
  // Tu código:

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  var caractere1 = str1;
  var caractere2 = str2;
  var numerosDeCaracteres1 = caractere1.length;
  var numerosDeCaracteres2 = caractere2.length;
  
  if (numerosDeCaractres1 === numerosDeCaracteres2)
  {  return true}
  
  else
  { return false}
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num < 90) {
    return true;
  }
  else {
    return false;
  }
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num > 50 ) {
    return true;
  }
  else {
    return false;
  }
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
<<<<<<< HEAD
  var resto = x % y;
  return resto;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num % 2 === 0) {
    return true;
  }
  else {
    return false ;
  }
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
<<<<<<< HEAD
  if (num % 2 === 1) {
    return true;
  }
  else {
    return false ;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
<<<<<<< HEAD
  return Math.pow (num, 2);
=======
>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a

}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
<<<<<<< HEAD
  return num * 2 * 2;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
<<<<<<< HEAD
  return Math.pow (num, exponent);
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
<<<<<<< HEAD
  var decimal = num % 1;
  var entero = num - decimal;
  if (decimal >= 0.5) {
      return entero + 1;
  }
  else {
    return entero;
    }
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
<<<<<<< HEAD
  return Math.ceil(num);
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
<<<<<<< HEAD
  var numeroAleatorio = Math.random();
  return numeroAleatorio;
=======
>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a

}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
<<<<<<< HEAD
  if ( numero  ===  0 )
  {
  return false;
}
else if ( numero  >  0 )  {
  return  "Es positivo" ;
}
else  {
  return  "Es negativo" ;
}
}
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
<<<<<<< HEAD
  var nombres = nombre +" "+ apellido;
  return nombres;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}



function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
<<<<<<< HEAD
  return "Hola " + nombre + " !"
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
<<<<<<< HEAD
  return  alto  *  ancho;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
<<<<<<< HEAD
  return lado *  4;
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return (base * altura) / 2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
<<<<<<< HEAD
  return euro * 1.2
=======

>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
<<<<<<< HEAD
  if ( letra.longitud  >  1 ) {
    return  "Dato incorrecto";
  }
  else if ( letra  ===  "a"  ||  letra  ===  "e"  ||  letra  ===  "i"  ||  letra  ===  "o"  ||  letra  ===  "u" ) {
    return  "Es vocal";
  }
 else {
   return "Dato incorrecto";
 }
=======
>>>>>>> 5ccbbdd3b67a2199c49fe29b7396ba1fabae316a

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
