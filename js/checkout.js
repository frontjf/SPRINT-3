
// // Exercise 6
//    function validate() {
//    	var error = 0;
//    	// Get the input fields
//    	var fName = document.getElementById("fName");
//    	var fEmail = document.getElementById("fEmail");
	

//    	// Get the error elements
//    	var errorName = document.getElementById("errorName");
//    	var errorEmail = document.getElementById("errorEmail");  
	
//    	// Validate fields entered by the user: name, phone, password, and email
//    	if(fName.value == ""){
//    		error++;
//    	}

//    	if(fEmail.value == ""){
//    		error++;
//    	}
	 
//    	if(error>0){
//    		alert("Error");
//    	}else{
//    		alert("OK");
//    	}

//    }

 



// function validate(){

        
//         validateName();
//         validateSurName();
//         validateAdress();
//         validatePass();
//         validatePhone();
//         validateMail();
//   }



//   function validateName(){  

//         let fName = document.getElementById("fName").value;
//         let regex = /^[a-zA-Z]{3,}$/;                                   // Expresión regular que solo permite letras y un mínimo de 3 caracteres
//         let errorName = document.getElementById("errorName");           // Obtener el elemento para el mensaje de error
      
//         if (!regex.test(fName)) {
//           errorName.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       // Agregar el mensaje de error
//           document.getElementById("errorName").style.border = "1px solid red";                                  // Cambiar el borde a rojo
//           return false;
//         } else {
//           errorName.innerHTML = "";                                                     // Restablecer el mensaje de error
//           document.getElementById("errorName").style.border = "none";                   // Restablecer el borde a su estado original
//           return true;
//         }
//     }

//     function validateSurName(){

//         let fLastN = document.getElementById("fLastN").value;
//         let regex = /^[a-zA-Z]{3,}$/;                                   
//         let errorLastN = document.getElementById("errorLastN");           
      
//         if (!regex.test(fLastN)) {
//           errorLastN.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       
//           document.getElementById("errorLastN").style.border = "1px solid red";                                  
//           return false;
//         } else {
//           errorLastN.innerHTML = "";                                                     
//           document.getElementById("errorLastN").style.border = "none";                   
//           return true;
//         }
//     }

//     function validateAdress(){

//         let fAddress = document.getElementById("fAddress").value;
//         let regex = /^[a-zA-Z]{3,}$/;                                   
//         let errorAddress = document.getElementById("errorAddress");           
      
//         if (!regex.test(fAddress)) {
//           errorAddress.innerHTML = "El nombre debe contener solo letras y tener un mínimo de 3 caracteres.";       
//           document.getElementById("errorAddress").style.border = "1px solid red";                                  
//           return false;
//         } else {
//           errorAddress.innerHTML = "";                                                     
//           document.getElementById("errorAddress").style.border = "none";                   
//           return true;
//         }

//     }

//     function validateMail(){


//         let fEmail = document.getElementById("fEmail").value;
//         let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Expresión regular para validar correo electrónico
//         let errorEmail = document.getElementById("errorEmail"); // Obtener el elemento para el mensaje de error

//         if (!regex.test(fEmail)) {
//             errorEmail.innerHTML = "Introduzca una dirección de correo electrónico válida"; // Agregar el mensaje de error
//             document.getElementById("errorEmail").style.border = "1px solid red"; // Cambiar el borde a rojo
//             return false;
//         } else {
//                 errorEmail.innerHTML = ""; // Restablecer el mensaje de error
//                 document.getElementById("errorEmail").style.border = "none"; // Restablecer el borde a su estado original
//                 return true;
//             }

//     }

//     function validatePass(){

        
//             var fPassword = document.getElementById("fPassword").value;
//             var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;               // Expresión regular para validar contraseña
//             var errorPassword = document.getElementById("errorPassword");       // Obtener el elemento para el mensaje de error
          
//             if (!regex.test(fPassword)) {
//               errorPassword.innerHTML = "La contraseña debe incluir al menos una letra y un número, y tener una longitud de al menos 8 caracteres"; // Agregar el mensaje de error
//               document.getElementById("errorPassword").style.border = "1px solid red";          // Cambiar el borde a rojo
//               return false;
//             } else {
//               errorPassword.innerHTML = "";                                             // Restablecer el mensaje de error
//               document.getElementById("errorPassword").style.border = "none";           // Restablecer el borde a su estado original
//               return true;
//             }
        
          

//     }

//     function validatePhone(){

//             var fPhone = document.getElementById("fPhone").value;
//             var regex = /^[0-9]{0,15}$/;                                      // Expresión regular para validar teléfono
//             var errorPhone = document.getElementById("errorPhone");         // Obtener el elemento para el mensaje de error

//                 if (!regex.test(fPhone)) {
//                     errorPhone.innerHTML = "El teléfono debe contener solo números y tener una longitud máxima de 9 caracteres"; // Agregar el mensaje de error
//                     document.getElementById("errorPhone").style.border = "1px solid red"; // Cambiar el borde a rojo
//                 return false;
//                 } else {
//                     errorPhone.innerHTML = "";                                          // Restablecer el mensaje de error
//                     document.getElementById("errorPhone").style.border = "none";        // Restablecer el borde a su estado original
//                     return true;
//                 }
//     }

function validate() {
    var error = 0;
    // Get the input fields
    var fName = document.getElementById("fName");
    var fEmail = document.getElementById("fEmail");
     
 
    // Get the error elements
    var errorName = document.getElementById("errorName");
    var errorEmail = document.getElementById("errorEmail");  
     
    // Validate fields entered by the user: name, phone, password, and email
    if(fName.value == ""){
       error++;
       errorName.innerHTML = "Please enter your name.";
    } else {
       errorName.innerHTML = "";
    }
 
    if(fEmail.value == ""){
       error++;
       errorEmail.innerHTML = "Please enter your email.";
    } else {
       errorEmail.innerHTML = "";
    }
      
    if(error>0){
       alert("Error");
    }else{
       alert("OK");
    }
 }
 
        
        
    
      
        
    
        

  

