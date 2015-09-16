function register(form) {
				
//FIRST TIME
if (!localStorage.getItem("comics")) {
	alert("its the first time");
	
}

	//STORE				
	if (typeof(Storage) !== "undefined") {
			localStorage.setItem("comics", store(form));
	} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	/*						
	//RETRIEVE
	var jsonString = localStorage.getItem("comics"); 
	var jsonObj = JSON.parse(jsonString);
	console.log(jsonObj);
	*/
	location = "login.html";
}



function firstTime(form){
		
	var jTemp = JSON.parse('{ 	"justSigned": { "username": "'+form.id.value+'" , "password": "'+form.pass.value+'"}, "users": [{"username":"'+form.id.value+'","password":"'+form.pass.value+'"}]}');
	var jsonString = JSON.stringify(jTemp);
	console.log("users length: "+jTemp.users.length +"  elements: ");
	
	for(i=0; i<jTemp.users.length; i++){
		console.log("user: "+ jTemp.users[i].username);
		console.log("pass: "+ jTemp.users[i].password);
	}
	
	return jsonString;
}

function store(form){
	
	//retrieve
	var jsonString = localStorage.getItem("comics"); 
	//console.log(jsonString);
	var jsonObj = JSON.parse(jsonString);
		
	//look in the array arreglo de objetos
	var user = {	username:form.id.value,
					password:form.pass.value
				};
				
	//add the new element (push con el elemento nuevo)
	jsonObj.users.push(user);
	
	//generate jsonString again
	console.log(jsonObj);
	jsonString = JSON.stringify(jsonObj);
	console.log(jsonString);
	
	//return the string
	return jsonString;
}
	
	
	