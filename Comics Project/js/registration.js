function register(form) {

if(form.pass.value != ""){
	if(form.pass.value != form.pass2.value){
		alert("Passwords are not the same");
	}
else{
	//FIRST TIME
	if (!localStorage.getItem("comics")) {
		alert("its the first time");
		localStorage.setItem("comics", firstTime(form));
		
	}else{
		//STORE				
		if (typeof(Storage) !== "undefined") {
				localStorage.setItem("comics", store(form));
		} else {
				document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
		
	}
		location = "login.html";
	}						
}	
}



function firstTime(form){
	var userType = "user";
	if(form.admin.value == "on"){
		userType = "admin";
	}
	
	var jTemp = JSON.parse('{ 	"justSigned": { "username": "" , "password": "","type":""}, "users": [{"username":"'+form.id.value+'","password":"'+form.pass.value+'","type":"'+userType+'"}]}');
	var jsonString = JSON.stringify(jTemp);
	console.log("users length: "+jTemp.users.length +"  elements: ");
	
	for(i=0; i<jTemp.users.length; i++){
		console.log("user: "+ jTemp.users[i].username);
		console.log("pass: "+ jTemp.users[i].password);
	}
	comics();
	return jsonString;
}

function store(form){
	
	//retrieve
	var jsonString = localStorage.getItem("comics"); 
	var jsonObj = JSON.parse(jsonString);
	var userType = "user";
	
	if(form.admin.value == "on"){
		type = "admin";
	}	
	//create the object to put into the array
	var user = {	username:form.id.value,
					password:form.pass.value,
					type:userType
				};
				
	//add the new element (push con el elemento nuevo)
	jsonObj.users.push(user);
	
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
		
	//return the string
	return jsonString;
}


	


/*
	just for simplicity, avoiding the use of a web server
	it'd better to load a JSON ;)
*/
function comics(){
	var list = '{	"comics": [{"pic":"img/spiderman_thumb.jpg", "name" :"Spiderman", "genre":"SuperHeroe", "format":"Paper", "pages":"128", "avail":"50", "rented":"yes"},{"pic":"img/venom_thumb.jpg", "name" :"Venom", "genre":"SuperHeroe", "format":"Ebook", "pages":"160", "avail":"80", "rented":"yes"},{"pic":"img/storm_thumb.jpg", "name" :"Storm", "genre":"SuperHeroe", "format":"Paper", "pages":"210", "avail":"11", "rented":"no"},{"pic":"img/wonderwoman_thumb.jpg", "name" :"Wonder Woman", "genre":"SuperHeroe", "format":"Paper", "pages":"115", "avail":"8", "rented":"no"},{"pic":"img/superman_thumb.jpg", "name" :"Superman", "genre":"SuperHeroe", "format":"Ebook", "pages":"300", "avail":"15", "rented":"no"},{"pic":"img/wolverine_thumb.jpg", "name" :"Wolverine", "genre":"SuperHeroe", "format":"Paper", "pages":"190", "avail":"14", "rented":"no"},{"pic":"img/hulk_thumb.jpg", "name" :"The incredible Hulk", "genre":"SuperHeroe", "format":"Ebook", "pages":"220", "avail":"80", "rented":"no"},{"pic":"img/blackwidow_thumb.jpg", "name" :"Black Widow", "genre":"SuperHeroe", "format":"Ebook", "pages":"200", "avail":"80", "rented":"no"},{"pic":"img/mystique_thumb.jpg", "name" :"Mystique", "genre":"SuperHeroe", "format":"Ebook", "pages":"160", "avail":"80", "rented":"no"}]}';
	
	//STORE				
	if (typeof(Storage) !== "undefined") {
			localStorage.setItem("list", list);
	} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
	
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	
	//show
	console.log("EStos son todos los comics");
	for(i=0; i<jsonObj.comics.length; i++){
		console.log("Name: "+ jsonObj.comics[i].name);
		console.log("Genre: "+ jsonObj.comics[i].genre);
		console.log("pic: "+ jsonObj.comics[i].pic);
		console.log("format: "+ jsonObj.comics[i].format);
		console.log("Pages: "+ jsonObj.comics[i].pages);
		console.log("Available: "+ jsonObj.comics[i].avail);
	}
	
}
	
