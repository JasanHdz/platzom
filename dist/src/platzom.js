'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;
	// Si la palabra original es un palíndromo,
	// ninguna regla anterior cuenta y se devuelve
	// la misma palabra intercalando mayúsculas y minúsculas
	// Nops va a devolver un array (str.split(''))reverse lo que hace es mostrar el array de reversa.
	// join lo que hace es pegar todos los caracteres en ese arreglo
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};
	// Declaramos la funcion minMay Recibe un string y vamos a recorrer el string que nos llegaa
	// y vamos a ir intercalandolo en un nuevo string con mayusculas y minusculas
	function minMay(str) {
		//la logitud de ese string
		var length = str.length;
		// Traslation va a ser una nueva variable porque ya no va a poder ser
		/* lo que teniamos antes porque ya no puede ser el que teniamos declarado
     ya que vamos a ir sumando caracteres a ese string en mayuscula o en minuscula*/
		var translation = '';
		// Luego vamos a necesitar una variable que sea capitalize que significa poner en mayuscula
		// que sea un booleando que sea true o que sea false y por cada uno de los caracteres
		// vamos a preguntar si este valor es true entonces vamos a concatenar a la traduccion
		// el caracter en mayuscula y si es false vamos a ponerlo en minuscula
		var capitalize = true; // Para esto declaramos un loop una repetitiva
		// declaramos el indice, preguntamos si i es menor que la longitud, i va ir avanzando de caracteres.
		for (var i = 0; i < length; i++) {
			// vamos a guardar en una variable
			var char = str.charAt(i);
			// A translation le vamos a concatenar lo que ya tenia le vamos a sumar un valor 
			// si esta en true le vamos a poner el caracter que esta en la repeticion en mayuscula ToUpperCase
			// si esta en false lo vamos a poner en minuscula porque puede ser que el caracter que originalmente
			// nos allan pasado este en minuscula
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			// Luego a capitalize lo vamos a invertir tiene que ser el valor inverso, si estaba en minuscula ahora tiene que estar en mayuscula
			capitalize = !capitalize;
		}
		// Por ultimo vamos a retornar la traducción
		return translation;
	}
	//Si el Str es igual al Str-reversiado tenemos que concatenar mayusculas y minusculas
	if (str == reverse(str)) {
		return minMay(str);
	}

	//Si la palabra termina en "ar", se le quitan esos dos caracteres.
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2); //Nos permite recortar caracteres
	}

	//si la palabre inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión del medio
	var length = translation.length;

	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	return translation;
}