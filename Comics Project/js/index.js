function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ '<a  href="myAccount.html">'+username+'</a>';
	markup();
}

	
	$('#myTabs a').click(function (e) {
	e.preventDefault()
	$(this).tab('show')
})

function markup(){
	console.log("MARKUP");
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	console.log(jsonString);
	console.log(jsonObj);
	console.log(jsonObj.comics.length);
	
	
	for(i=0; i<jsonObj.comics.length; i++){
		var comic = '<div class="comic"><img src="'
					+jsonObj.comics[i].pic+'" alt="" ><h3>'
					+jsonObj.comics[i].name+'</h3><div>Available: '
					+jsonObj.comics[i].avail+'</div><div>Genre: '
					+jsonObj.comics[i].genre+'</div><div>Pages: '
					+jsonObj.comics[i].pages+'</div><div>Format:'
					+jsonObj.comics[i].format+'</div><div>Rent now!</div></div>';	
		console.log(comic);
		document.getElementById("comicsContainer").innerHTML += comic;
		if(document.getElementById("comicsContainer") == null){
			console.log("couldnt find container");
		}
		
	}
}	