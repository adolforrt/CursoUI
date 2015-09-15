var address = new String();
address = prompt("Enter a URL (i.e: https://www.google.com/index.aspx): ");
var jAdress = jsonify(address);

function jsonify(address){
	var protocol = address.slice(0, address.indexOf(":"));
	address = address.slice(address.indexOf(":")+3);
	var server = address.slice(0,address.indexOf("/"));
	var resource = address.slice(address.indexOf("/"));
	
	return JSON.parse('{ "protocol":"'+protocol+'","server":"'+server+'","resource":"'+resource+'" }');
}
