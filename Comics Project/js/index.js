function loadUser(){
	var jsonString = localStorage.getItem("comics");
	var jsonObj = JSON.parse(jsonString);			
	var username = jsonObj.justSigned.username;
	document.getElementById("user").innerHTML = "Hello "+ '<a  href="myAccount.html">'+username+'</a>';
}

	
	$('#myTabs a').click(function (e) {
	e.preventDefault()
	$(this).tab('show')
})
