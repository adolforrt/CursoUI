function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ username;
}

function tab1(){
	
	document.getElementById("tabContainer").innerHTML = "Here comes the html for tab 1";
}

function tab2(){
	
	document.getElementById("tabContainer").innerHTML = "Here comes the html for tab 2";
}

function tab3(){
	
	document.getElementById("tabContainer").innerHTML = "Here comes the html for tab 3";
}