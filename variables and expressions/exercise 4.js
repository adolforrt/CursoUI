var number;

number = prompt("enter an integer number");
number = ((number%1000)/100).toFixed(0);
if(number == 7){
	console.log(number);
}
else{
	alert("not 7");
}

	




