var a, b ,c;
a = parseInt(prompt("Enter an integer number: "),10);
b = parseInt(prompt("Enter an integer number: "),10);
c = parseInt(prompt("Enter an integer number: "),10);

/*
a = prompt("Enter an integer number: ");
b = prompt("Enter an integer number: ");
c = prompt("Enter an integer number: ");
*/

//assuming all values are different

console.log("a: "+a +" b: "+b +" c: "+c);
if(a > b && a > c){
	alert(a+" is the biggest one");
}
else{
	if( b > c ){
		alert(b+ " is the biggest one");
	}
	else{
			alert(c+ " is the biggest one");
	}
		
}
