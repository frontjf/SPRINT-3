 // Exercise 6
	
	 

function validate() {

	

	let form = document.getElementById('form');
 
 	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fLastN = document.getElementById("fLastN");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");	
 

	let regex = /^[a-zA-Z]{3,}$/;                                       // Expresión regular que solo permite letras y un mínimo de 3 caracteres
  	let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    // Expresión regular para validar correo electrónico
  	let regexPass = /^[a-zA-Z0-9]+$/g;						            // Expresión regular para validar contraseña
  	let regexPhone = /^[0-9]{0,15}$/;                                   // Expresión regular para validar teléfono




	
	
		
	let error = 0;
	// Get the input fields
	

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorLastN = document.getElementById("errorLastN");
	let errorAddress = document.getElementById("errorAddress");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");



	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !regex.test(fName.value)){
		
		//fName.classList.add('border-danger');   				// con esta linia me sale uncaugh en la consola de forma rapida y desaparece
		
		
		errorName.classList.add('is-invalid');
		errorName.style.display = 'block';
					
		error++;
		
	}
	else {
		errorName.style.display = 'none';
	}
	
  
	if(fEmail.value == "" || !regexMail.test(fEmail.value)){
		
		errorEmail.classList.add('is-invalid');
		errorEmail.style.display = 'block';
		error++;
	}
	else {
		errorEmail.style.display = 'none';
	}

	if(fLastN.value == "" || !regex.test(fLastN.value)){
		
		errorLastN.classList.add('is-invalid');
		errorLastN.style.display = 'block'; 
		error++;
	}
	else {
		errorLastN.style.display = 'none';
	}

	if(fAddress.value == "" || !regex.test(fAddress.value)){
		
		errorAddress.classList.add('is-invalid');
		errorAddress.style.display = 'block';				
		error++;

	}
	else {
		errorAddress.style.display = 'none';
	}

	if(fPassword.value == "" || !regexPass.test(fPassword.value)){
		
		errorPassword.classList.add('is-invalid');
		errorPassword.style.display = 'block';				
		error++;
	}
	else {
		errorPassword.style.display = 'none';
	}

	if(fPhone.value == "" || !regexPhone.test(fPhone.value)){
		
		errorPhone.classList.add('is-invalid');
		errorPhone.style.display = 'block';
		error++;
	}
	else {
		errorPhone.style.display = 'none';
	}
   
	if(error>0){
		return false;
	}
	else{
		alert("OK");
		return true;
	}
	

}
/*
form.addEventListener("submit", (e) =>{
	e.preventDefault();
	validate();
});
*/