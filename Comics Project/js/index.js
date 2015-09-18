function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ '<a  href="myAccount.html">'+username+'</a>';
	markup();
	
}

/*	
function pills(){
$(".nav.nav-pills.nav-stacked li").on("click",function(){
  $(".nav.nav-pills li").removeClass("active");
  $(this).addClass("active");
});
	
}

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

*/



function markup(){
	
	//retrieve data
	var jsonString = localStorage.getItem("list"); 
	var jsonObj = JSON.parse(jsonString);
	
	//generate markup	
	for(i=0; i<jsonObj.comics.length; i++){
		var comic = '<div class="comic"><img src="'
					+jsonObj.comics[i].pic+'" alt="" ><h3>'
					+jsonObj.comics[i].name+'</h3><div>Available: '
					+jsonObj.comics[i].avail+'</div><div>Genre: '
					+jsonObj.comics[i].genre+'</div><div>Pages: '
					+jsonObj.comics[i].pages+'</div><div>Format: '
					+jsonObj.comics[i].format+'</div><div>Rent now!</div></div>';	
		//inject within DOM
		document.getElementById("comicsContainer").innerHTML += comic;
		if(document.getElementById("comicsContainer") == null){
			console.log("couldnt find container");
		}
	}
}	