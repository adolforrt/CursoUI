	var cadena = prompt("Enter a phrase: ");
alert(reverse(cadena));

function reverse(cadena){
	var i,aux;
	aux= cadena;
	cadena = "";
	
	for(i = aux.length -1; i>=0; i--){
			cadena = cadena + aux[i]; 
	}
	return cadena;
}