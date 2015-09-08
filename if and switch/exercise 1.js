var n,m, aux;
n = prompt("Enter an integer number");
m = prompt("Enter another integer number");

if(n > m){
	alert("n = " +n +"m = "+m);
	aux = m;
	m = n;
	n = aux;
	alert("n = " +n +"m = "+m);
}
