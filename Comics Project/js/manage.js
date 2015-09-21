function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ '<a  href="myAccount.html">'+username+'</a>';
	markup();
	admin();
}

function markup(){
	if(document.getElementById("comicsContainer").innerHTML == "")
	{
		//retrieve data
		var jsonString = localStorage.getItem("list"); 
		var jsonObj = JSON.parse(jsonString);
				
		//generate markup	
		for(i=0; i<jsonObj.comics.length; i++){
			var name = jsonObj.comics[i].name;
			var comic;
			comic = '<div class="comic" id="'+jsonObj.comics[i].name+'"><img src="'
						+jsonObj.comics[i].pic+'" alt="" ><h3>'
						+jsonObj.comics[i].name+'</h3><div>Available: '
						+jsonObj.comics[i].avail+'</div><div>Genre: '
						+jsonObj.comics[i].genre+'</div><div>Pages: '
						+jsonObj.comics[i].pages+'</div><div>Format: '
						+jsonObj.comics[i].format+'<br><br></div><div><input id ="'+name+'btn" type="button" class="btn btn-info" value="Rent Now!" onclick="rent(this)" ></div></div>';
										
			//inject within DOM
			document.getElementById("comicsContainer").innerHTML += comic;
			if(document.getElementById("comicsContainer") == null){
				console.log("couldnt find container");
			}
		}
	}
}


function admin(){
	
	//retrieve
	var jsonString = localStorage.getItem("comics"); 
	var jsonObj = JSON.parse(jsonString);
	
	//inject
	if(jsonObj.justSigned.type == "admin"){
		document.getElementById("manage").innerHTML = '<a href="manage.html">Manage  <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span></a>';
	}
	
}










































//-------------------------------

function rent(button){
	var name = button.id;
	var divId = name.substr(0,name.length-3);
	var div = document.getElementById(divId);
	
	div.className = "comic rented";
	button.parentNode.innerHTML = '<input id ="'+divId+'btn" type="button" class="btn btn-warning" value="Return comic!" onclick="giveBack(this)">';
	rentComic(divId,"yes");
}

function giveBack(button){
	var name = button.id;
	var divId = name.substr(0,name.length-3);
	var div = document.getElementById(divId);
	
	div.className = "comic";
	button.parentNode.innerHTML = '<input id ="'+divId+'btn" type="button" class="btn btn-info" value="Rent Now!" onclick="rent(this)">';
	rentComic(divId, "no");
}

function rentComic(comicName,value){
	
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	
	for(i=0; i<jsonObj.comics.length; i++){
			if(jsonObj.comics[i].name == comicName){
				
				jsonObj.comics[i].rented = value;
				
			}	
	}			
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
	//store
	localStorage.setItem("list", jsonString);
}	