function register(form) {
				
//FIRST TIME
if (!localStorage.getItem("comics")) {
	alert("its the first time");
	localStorage.setItem("comics", firstTime(form));
	
}
	//STORE				
	if (typeof(Storage) !== "undefined") {
			localStorage.setItem("comics", store(form));
	} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	location = "login.html";
}



function firstTime(form){
	//falta el dato de user/admin para cada usuario
		
	var jTemp = JSON.parse('{ 	"justSigned": { "username": "'+form.id.value+'" , "password": "'+form.pass.value+'","type":"user"}, "users": [{"username":"'+form.id.value+'","password":"'+form.pass.value+'","type":"user"}]}');
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
	var jsonObj = JSON.parse(jsonString);
		
	//create the object to put into the array
	var user = {	username:form.id.value,
					password:form.pass.value,
					type:"user"
				};
				
	//add the new element (push con el elemento nuevo)
	jsonObj.users.push(user);
	
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
		
	//return the string
	return jsonString;
}
	
	
	