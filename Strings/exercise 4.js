var cadena = prompt("Enter a phrase: ");
var word = prompt("Enter the word to match: ");


/* como uso match */
var str = "The rain in SPAIN stays mainly in the plain"; 
         var re = /ain/g;
         var found = str.match( re );
console.log(found);
console.log(found.length);{}