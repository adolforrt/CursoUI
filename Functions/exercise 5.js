/* how many times a given number appears in a given array. Write a function to check if the first function works correctly */

var a, limit = 15, number;
a = new Array(limit);

number = parseInt(prompt("Enter the number to look for: "),10);

test(a,limit,number);


function countOccurrences(a,number){
	var counter = 0;

	for(i=0; i<limit; i++){
		if(a[i] == number) counter ++; 
		console.log(a[i]);
	}
	return counter;
}

function test(a,limit,number){
	var expected;

	expected = parseInt(prompt("How many times does the number appear in the array? (enter a number between 0 and "+limit+")"),10);
	//generate the array
	for(i=0; i<expected; i++){
		 a[i] = number;
	}
	
	for(i=expected; i<limit; i++){
		 a[i] = "number";
	}
	//test the function
	if(expected == countOccurrences(a,number)){
		alert("Function Working OK");
	}else{
		alert("Something went wrong");
	}  
}