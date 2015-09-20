function validateLogin(form) {
	
var flag = 0;			
var jsonString = localStorage.getItem("comics");
var jsonObj = JSON.parse(jsonString);		
				
for(i=0; i<jsonObj.users.length; i++){
	if (form.id.value == jsonObj.users[i].username) { 
		flag = 1;
		if (form.pass.value == jsonObj.users[i].password) {              
			console.log("login validated");
			jsonObj.justSigned.username = form.id.value;
			jsonObj.justSigned.password = form.pass.value;
			console.log("JSON written successfully: ");
			console.log(jsonObj);
			jsonObj.justSigned.type = getType(jsonObj);
			jsonString = JSON.stringify(jsonObj);
			localStorage.setItem("comics", jsonString);
			location="index.html";
		} else {
				alert("Invalid Password.");
				}
		}
	}	
	if(flag == 0) alert("Invalid User ID, please try again.");
}


function getType(jsonObj){
	var user = jsonObj.justSigned.username;
	var type;
	
	for(i=0; i<jsonObj.users.length; i++){
		console.log(i);
		if(jsonObj.users[i].username == user){
			type = jsonObj.users[i].type;
			//flag = 1;	
		}
	}
	return type;
}