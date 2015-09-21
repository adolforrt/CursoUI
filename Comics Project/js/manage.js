function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ '<a  href="myAccount.html">'+username+'</a>';
	markup();
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
						+jsonObj.comics[i].name+'</h3><div>Available: <span class="editable" >'
						+jsonObj.comics[i].avail+'</span></div><div>Genre: <span class="editable">'
						+jsonObj.comics[i].genre+'</span></div><div>Pages: <span class="editable">'
						+jsonObj.comics[i].pages+'</span></div><div>Format: <span class="editable">'
						+jsonObj.comics[i].format+
						'</span></div>'+
						'<button type="button" class="btn btn-primary btn-md" data-toggle="modal" data-target="#myModal" onclick="fillForm(this)">Edit</button>'
						+'</div></div>';
										
			console.log(comic);
			//inject within DOM
			document.getElementById("comicsContainer").innerHTML += comic;
			if(document.getElementById("comicsContainer") == null){
				console.log("couldnt find container");
			}
		}
	}
}

function markup2(){
	console.log("markup2");
	if(document.getElementById("deleteComicsContainer").innerHTML == "")
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
						+jsonObj.comics[i].name+'</h3><div>Available: <span class="editable" >'
						+jsonObj.comics[i].avail+'</span></div><div>Genre: <span class="editable">'
						+jsonObj.comics[i].genre+'</span></div><div>Pages: <span class="editable">'
						+jsonObj.comics[i].pages+'</span></div><div>Format: <span class="editable">'
						+jsonObj.comics[i].format+
						'</span></div>'+
						'<button type="button" class="btn btn-primary btn-md" onclick="removeComic(this)">Delete</button>'
						+'</div></div>';
										
			console.log(comic);
			//inject within DOM
			document.getElementById("deleteComicsContainer").innerHTML += comic;
			if(document.getElementById("comicsContainer") == null){
				console.log("couldnt find container");
			}
		}
	}
}

function fillForm(button){
	
	var div = button.parentNode;
	var spans = document.getElementById(div.id).getElementsByTagName("span");
	var img = document.getElementById(div.id).getElementsByTagName("img");
	console.log(img);	
	document.getElementById("name").value = div.id;
	document.getElementById("oldName").value = div.id;
	document.getElementById("avail").value = spans[0].innerHTML;
	document.getElementById("genre").value = spans[1].innerHTML;
	document.getElementById("pages").value = spans[2].innerHTML;
	document.getElementById("format").value = spans[3].innerHTML;
	
}

function save(form, button){
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	console.log(button);
			
	for(i=0; i<jsonObj.comics.length; i++){
		if(jsonObj.comics[i].name == form.oldName.value){
			jsonObj.comics[i].avail = form.avail.value;
			jsonObj.comics[i].genre = form.genre.value;
			jsonObj.comics[i].pages = form.pages.value;
			jsonObj.comics[i].format = form.format.value;
		}
	}
		
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
	
	//store data
	localStorage.setItem("list", jsonString);	
	
	//disable Save button
	button.className = "btn btn-success";
}

function restoreBtnClass(){
	document.getElementById("saveBtn").className = "btn btn-danger"
}

function newComic(form, button){
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	console.log		
	var comic = { 	pic:form.imgUrl.value,
					name:form.name.value,
					genre:form.genre.value,
					format:form.format.value,
					pages:form.pages.value,
					avail:form.avail.value,
					rented:"no"	  
	};
	
	jsonObj.comics.push(comic);
				
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
	
	//store data
	localStorage.setItem("list", jsonString);	
}

function removeComic(button){
	var div = button.parentNode;
	console.log(div.id);
	//retrieve
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	
	for(i=0; i<jsonObj.comics.length; i++){
		if(jsonObj.comics[i].name == div.id){
			jsonObj.comics.splice(i,1);
			break;
		}
	}
		
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
	
	//store data
	localStorage.setItem("list", jsonString);	
	
	document.getElementById("deleteComicsContainer").innerHTML = "";
	markup2();
		
	
	
}










	

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


