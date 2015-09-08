var m, n, k, flag = 0;
m = prompt("Enter an integer number: ");
n = prompt("Enter an integer number: ");
k = prompt("Enter an integer number: ");

if(m == 0 || n == 0 || k == 0){  // one number is zero
	flag = 1;	
}
else{
	if(m>0 && n>0 && k>0){ 	//all greater than zero
		flag = 1;
	} 	
	else{ //positive multiplication
		if( (m>0 && n<0 && k<0) || (m<0 && n<0 && k>0) || (m<0 && n>0 && k<0) ){
			flag = 1;
		}
		else{ //negative multiplication
			if( (m>0 && n<0 && k>0) || (m<0 && n>0 && k>0) || (m>0 && n>0 && k<0) || (m<0 && n<0 && k<0) ){
				flag = 0;
				}
			}	
		}		
}

if(flag == 1) document.write("<h1>+</h1>");
else document.write("<h1>-</h1>");
