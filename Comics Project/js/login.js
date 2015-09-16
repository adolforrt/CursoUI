			function pasuser(form) {
				//first time
				
				//aqui deberia recuperar los datos de login 
				// Retrieve. aqui recupero un string, lo parseo a JSON y de ahi trabajo
				var user = localStorage.getItem("username");
				var pass = localStorage.getItem("password");
			
				//una vez recuperados, valido
				//si el usuario y la clave coinciden con los datos registrados, continuo
				if (form.id.value== user) { 
					if (form.pass.value==pass) {              
					location="index.html";
					
					} else {
							alert("Invalid Password")
							}
				} else {  
						alert("Invalid User ID")
						}
				}
			