var n, divisor, flag = 0;
n = prompt("enter an integer number from 1 to 100");
divisor = n - 1;

while(divisor > 1 && flag == 0){
	
	if(n % divisor == 0){
		flag = 1;
	}
	divisor --;
}

if(flag == 1){
	alert("Not Prime");
}
else{
	alert("Prime");
}