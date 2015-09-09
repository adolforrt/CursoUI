var n,first ="", second="", third="";
var numberName ="", ten, unit;

n = prompt("Enter an integer number from 0 to 999: ");

if(n.length == 3){
	first = n.slice(0,1);
	second = n.slice(1,2);
	third = n.slice(2,3);
}

if(n.length == 2){
	second = n.slice(0,1); 
	third = n.slice(1,2);
}

if(n.length == 1){
	third = n.slice(0,1);
	numberName = determineNumber(third)
}	
		
	console.log("third: "+ third +" second: " +second +" first: "+ first );
	console.log("number: " + first+second+third);	
	console.log(n.length);
	
	if(first != "" && n.length == 3){
		numberName = determineNumber(first) + " hundred";
		if(third != "0" ) numberName = numberName + " and ";		
	}
	
	if(second != ""){
		if( (second != "1" && second != "0" && third != "0" ) ){
				ten = determineTen(second);
				numberName = numberName + ten + " " + determineNumber(third);
		}
		else if( second != "1"){
				numberName = numberName + determineNumber(second);
				if(third != "0"){
					numberName = numberName + determineNumber(third);	
				} 
				
		}else if( second == "1" && third != "0"){  //teens
				numberName = numberName + Teens(third);
		}
	}
		
	
	alert("n = "+ numberName);

function determineNumber(number){
	switch(number){
		case "1": return "One";
		case "2": return "Two";
		case "3": return "Three";
		case "4": return "Four";
		case "5": return "Five";
		case "6": return "Six";
		case "7": return "Seven";
		case "8": return "Eight";
		case "9": return "Nine";
		case "0": return "Zero";
	}
}

function determineTen(number){
	switch(number){
		case "1": return "Ten";
		case "2": return "Twenty";
		case "3": return "Thirty";
		case "4": return "Forty";
		case "5": return "Fifty";
		case "6": return "Sixty";
		case "7": return "Seventy";
		case "8": return "Eighty";
		case "9": return "Ninety";
		case "0": return "";
	}
}

function Teens(number){
	switch(number){
		case "1": return "Eleven";
		case "2": return "Twelve";
		case "3": return "Thirteen";
		case "4": return "Forteen";
		case "5": return "Fifteen";
		case "6": return "Sixteen";
		case "7": return "Seventeen";
		case "8": return "Eighteen";
		case "9": return "Nineteen";
		case "0": return "";
	}
}
