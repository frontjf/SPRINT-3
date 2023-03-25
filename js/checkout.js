
// Exercise 6
//  function validate() {
//  	var error = 0;
//  	// Get the input fields
//  	var fName = document.getElementById("fName");
//  	var fEmail = document.getElementById("fEmail");
	

//  	// Get the error elements
//  	var errorName = document.getElementById("errorName");
//  	var errorEmail = document.getElementById("errorEmail");  
	
//  	// Validate fields entered by the user: name, phone, password, and email
//  	if(fName.value == ""){
//  		error++;
//  	}

//  	if(fEmail.value == ""){
//  		error++;
//  	}
	 
//  	if(error>0){
//  		alert("Error");
//  	}else{
//  		alert("OK");
//  	}

//  }

function validate(){

    
    let nombre = document.getElementById('fName').innerHTML;
    let apellido = document.getElementById('fLastN').innerHTML;
    let email = document.getElementById('fEmail').innerHTML;
    let direccion = document.getElementById('fAddress').innerHTML;
    let pass = document.getElementById('fPassword').innerHTML;
    let telefono = document.getElementById('fPhone').innerHTML;

    let letras = '/^[a-zA-Z]+$/';
    let alfaNum = '^[a-zA-Z0-9 ]+$';
    let onlyNum = '^[0-9]+$';
    let mailOk = '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/';

    if (nombre.length <= 3 || nombre != letras){

        alert('introduce minimo 3 letras')
		

    }
    if (apellido.length <= 3 || apellido != letras){

        alert('introduce minimo 3 letras')

    }
    if (direccion.length <= 3){

        alert('introduce una direccion correcta')

    }
    if (pass.length <= 3 || pass != alfaNum){

        alert('introduce minimo 3 letras')
    }
    if (email.length <=3 || email != mailOk){

        alert('introduce un email valido')
    }
    if (telefono.length <= 9 || telefono != onlyNum){

        alert('introduce un telefono valido de 9 digitos')
    }
	alert('todo ok');
	

	
}