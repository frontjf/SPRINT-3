//   onsubit



 // Exercise 6

 function validate() {
		
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fLastN = document.getElementById("fLastN");
	let fAddress = document.getElementById("fAddress");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");		



  let regex = /^[a-zA-Z]{3,}$/;                                       // Expresión regular que solo permite letras y un mínimo de 3 caracteres
  let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    // Expresión regular para validar correo electrónico
  let regexPass = /^[a-zA-Z0-9]+$/g;						          // Expresión regular para validar contraseña
  let regexPhone = /^[0-9]{0,15}$/;                                   // Expresión regular para validar teléfono


	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorLastN = document.getElementById("errorLastN");
	let errorAddress = document.getElementById("errorAddress");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");

	


	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !regex.test(fName.value)){
		
		fName.classList.add('border-danger');   				// con esta linia me sale uncaugh en la consola de forma rapida y desaparece
		//errorName.className.add('is-invalid');					// mismo error que arriba
		alert('nombre');
		//fName.style.border = '1px solid red';
		error++;
		
	}
	
  
	if(fEmail.value == "" || !regexMail.test(fEmail.value)){
		alert('mail');
		error++;
	}

	if(fLastN.value == "" || !regex.test(fLastN.value)){
		alert('apellido')
		error++;


	}

	if(fAddress.value == "" || !regex.test(fAddress.value)){
		alert('direccion');
		error++;

	}

	if(fPassword.value == "" || !regexPass.test(fPassword.value)){
		alert('error pass');
		error++;

		
	 }

	if(fPhone.value == "" || !regexPhone.test(fPhone.value)){
		alert('telefono erroneo');
		error++;

		
	}
   
	 if(error>0){
		 alert("Error");
	 }else{
		 alert("OK");
	 }
		

}
    
 

// function validate(){

        
//          validateName();
//          validateSurName();
//          validateAdress();
//          validatePass();
//          validatePhone();
//          validateMail();
//    }



// function validateName(){  

//          let fName = document.getElementById("fName").value;
//         // let regex = /^[a-zA-Z]{3,}$/;                                   // Expresión regular que solo permite letras y un mínimo de 3 caracteres
//          let errorName = document.getElementById("errorName");           // Obtener el elemento para el mensaje de error
      

//          if (!fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3) {
//             fName.classList.add("is-invalid");
//             //errorName.style.display = "block";
//         } else {
//             fName.classList.remove("is-invalid");
//             errorName.style.display = "none";
//         }
        



         // if (!regex.test(fName)) {
         //   errorName.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       // Agregar el mensaje de error
         //   document.getElementById("fName").style.border = "1px solid red";                                  // Cambiar el borde a rojo
         //   return false;
         // } else {
         //   errorName.innerHTML = "";                                                     // Restablecer el mensaje de error
         //   document.getElementById("fName").style.border = "none";                   // Restablecer el borde a su estado original
         //   return true;
         // }
//      }

// function validateSurName(){

//          let fLastN = document.getElementById("fLastN").value;
//          let regex = /^[a-zA-Z]{3,}$/;                                   
//          let errorLastN = document.getElementById("errorLastN");           
      
//          if (!regex.test(fLastN)) {
//            errorLastN.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       
//            document.getElementById("fLastN").style.border = "1px solid red";                                  
//            return false;
//          } else {
//            errorLastN.innerHTML = "";                                                     
//            document.getElementById("fLastN").style.border = "none";                   
//            return true;
//          }
//      }

// function validateAdress(){

//          let fAddress = document.getElementById("fAddress").value;
//          let regex = /^[a-zA-Z]{3,}$/;                                   
//          let errorAddress = document.getElementById("errorAddress");           
     
//          if (!regex.test(fAddress)) {
//            errorAddress.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       
//            document.getElementById("fAddress").style.border = "1px solid red";                                  
//            return false;
//          } else {
//            errorAddress.innerHTML = "";                                                     
//            document.getElementById("fAddress").style.border = "none";                   
//            return true;
//          }

//      }

// function validateMail(){


//          let fEmail = document.getElementById("fEmail").value;
//          let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Expresión regular para validar correo electrónico
//          let errorEmail = document.getElementById("errorEmail"); // Obtener el elemento para el mensaje de error

//          if (!regex.test(fEmail)) {
//              errorEmail.innerHTML = "Introduzca una dirección de correo electrónico válida"; // Agregar el mensaje de error
//              document.getElementById("fEmail").style.border = "1px solid red"; // Cambiar el borde a rojo
//              return false;
//          } else {
//                  errorEmail.innerHTML = ""; // Restablecer el mensaje de error
//                  document.getElementById("fEmail").style.border = "none"; // Restablecer el borde a su estado original
//                  return true;
//              }

//      }

// function validatePass(){

        
//              let fPassword = document.getElementById("fPassword").value;
//              let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;               // Expresión regular para validar contraseña
//              let errorPassword = document.getElementById("errorPassword");       // Obtener el elemento para el mensaje de error
         
//              if (!regex.test(fPassword)) {
//                errorPassword.innerHTML = "La contraseña debe incluir al menos una letra y un número, y tener una longitud de al menos 8 caracteres"; // Agregar el mensaje de error
//                document.getElementById("fPassword").style.border = "1px solid red";          // Cambiar el borde a rojo
//                return false;
//              } else {
//                errorPassword.innerHTML = "";                                             // Restablecer el mensaje de error
//                document.getElementById("fPassword").style.border = "none";           // Restablecer el borde a su estado original
//                return true;
//              }
        
          

//      }

// function validatePhone(){

//              let fPhone = document.getElementById("fPhone").value;
//              let regex = /^[0-9]{0,15}$/;                                      // Expresión regular para validar teléfono
//              let errorPhone = document.getElementById("errorPhone");         // Obtener el elemento para el mensaje de error

//                  if (!regex.test(fPhone)) {
//                      errorPhone.innerHTML = "El teléfono debe contener solo números y tener una longitud máxima de 9 caracteres"; // Agregar el mensaje de error
//                      document.getElementById("fPhone").style.border = "1px solid red"; // Cambiar el borde a rojo
//                  return false;
//                  } else {
//                      errorPhone.innerHTML = "";                                          // Restablecer el mensaje de error
//                        document.getElementById("fPhone").style.border = "none";        // Restablecer el borde a su estado original
//                      return true;
//                  }
//      }


 
        
// function validate() {
//   var error = 0;
//   // Get the input fields
//   var fName = document.getElementById("fName");
//   var fEmail = document.getElementById("fEmail");


//   // Get the error elements
//   var errorName = document.getElementById("errorName");
//   var errorEmail = document.getElementById("errorEmail");  

//   // Validate fields entered by the user: name, phone, password, and email
//   if(fName.value == ""){
//     error++;
//   }

//   if(fEmail.value == ""){
//     error++;
//   }

//   if(error>0){
//     alert("Error");
//   }else{
//     alert("OK");
//   }

// }        
    
      
        
    
        

  

