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

function fillForm(button){
	
	var div = button.parentNode;
	var spans = document.getElementById(div.id).getElementsByTagName("span");
	var img = document.getElementById(div.id).getElementsByTagName("img");
	console.log(img);	
	document.getElementById("name").value = div.id;
	document.getElementById("avail").value = spans[0].innerHTML;
	document.getElementById("genre").value = spans[1].innerHTML;
	document.getElementById("pages").value = spans[2].innerHTML;
	document.getElementById("format").value = spans[3].innerHTML;
}

function save(){
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
	
	
	for(i=0; i<jTemp.users.length; i++){
		console.log("user: "+ jTemp.users[i].username);
		console.log("pass: "+ jTemp.users[i].password);
	}
	
	
				
	//add the new element (push con el elemento nuevo)
	jsonObj.users.push(user);
	
	//generate jsonString again
	jsonString = JSON.stringify(jsonObj);
		
	//return the string
	return jsonString;
}










	

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})


