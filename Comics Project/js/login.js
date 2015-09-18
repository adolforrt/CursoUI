function validateLogin(form) {
	
var flag = 0;			
var jsonString = localStorage.getItem("comics");
var jsonObj = JSON.parse(jsonString);		
				
for(i=0; i<jsonObj.users.length; i++){
	if (form.id.value == jsonObj.users[i].username) { 
		flag = 1;
		if (form.pass.value == jsonObj.users[i].password) {              
			jsonObj.justSigned.username = form.id.value;
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


