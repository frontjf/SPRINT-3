let products = [
    {
         id: 1,
         name: 'cooking oil',
         price: 10.5,
         type: 'grocery',
         offer: {
             number: 3,
             percent: 20
         }
     },
     {
         id: 2,
         name: 'Pasta',
         price: 6.25,
         type: 'grocery'
     },
     {
         id: 3,
         name: 'Instant cupcake mixture',
         price: 5,
         type: 'grocery',
         offer: {
             number: 10,
             percent: 30
         }
     },
     {
         id: 4,
         name: 'All-in-one',
         price: 260,
         type: 'beauty'
     },
     {
         id: 5,
         name: 'Zero Make-up Kit',
         price: 20.5,
         type: 'beauty'
     },
     {
         id: 6,
         name: 'Lip Tints',
         price: 12.75,
         type: 'beauty'
     },
     {
         id: 7,
         name: 'Lawn Dress',
         price: 15,
         type: 'clothes'
     },
     {
         id: 8,
         name: 'Lawn-Chiffon Combo',
         price: 19.99,
         type: 'clothes'
     },
     {
         id: 9,
         name: 'Toddler Frock',
         price: 9.99,
         type: 'clothes'
     }
]

let cartList = [];

let cart = [];

let total = 0;


// Ejercicio 1
function buy(id) {

    for (let i =0; i<products.length; i++){     // recorre array products

        if (products[i].id === id){            // si la id que pasa la funcion buy coincide con la id del producto lo añade a cartList
            cartList.push(products[i]);        
        }
        
   }

   generateCart();
   document.getElementById("count_product").innerHTML = cartList.length;   // pone el numero de productos en el HTML 'count_product'
   // console.log(cartList);
   

}

// Ejercicio 2
function cleanCart() {

    cartList.length = 0;
    document.getElementById("count_product").innerHTML = cartList.length
    console.log(cartList)


}

// Ejercico 3 

function calculateTotal(cart) {

    total = 0;
    for (let i = 0; i < cart.length; i++) {
          total += cart[i].subtotalWithDiscount;
        }
    // console.log(total);
    return total;
    

    
  
}




// Ejercicio 4


function generateCart() {
    // Crear el array 'cart' a partir de 'cartList'
    var cart = cartList.map(function(item) {
      var newItem = {};
      newItem.name = item.name;
      newItem.type = item.type;
      newItem.price = item.price;
      newItem.offer = item.offer;
      newItem.quantity = 1;
      newItem.subtotal = item.price;
      newItem.subtotalWithDiscount = item.price;
      return newItem;
    });
  
    // Actualizar la cantidad y los subtotales si se agregan elementos repetidos

     for (let i = 0; i < cart.length; i++) {                    // bucle dentro de otro que revisa si hay items repetidos
       for (let j = i + 1; j < cart.length; j++) {
         if (cart[i].name === cart[j].name) {                   // aqui mira si existe uno igual
           cart[i].quantity += 1;                               // si lo hay, aumenta la cantidad
           cart[i].subtotal += cart[j].price;                   // le pone el precio (o lo suma si ya hubiera uno anterior)
           cart[i].subtotalWithDiscount += cart[j].price;       // aqui lo mismo con el subTotal, lo pone o lo suma si ya hay uno
           cart.splice(j, 1);                                   // elimina el elemento repetido
           j--;                                                 // decrementa el contador, al borrarse se mueven a la derecha y si no se decrementa 
         }                                                      // omitira el siguiente elemento    
       }
     }
  
    applyPromotionsCart(cart);
    calculateTotal(cart);
    
    console.log(total);                                  
    console.log(cart);
  }
  
  // Ejercicio 5


function applyPromotionsCart(cart){

    for (let i=0; i < cart.length; i++){

        if (cart[i].name === 'cooking oil' && cart[i].quantity >=3){                    // si se llama cooking oil y hay mas de 3 unidades
            cart[i].subtotalWithDiscount = cart[i].quantity *10                         // cada unidad valdra 10eu 
        }
        else if(cart[i].name === 'Instant cupcake mixture' && cart[i].quantity >=10){       // si es Instant cupcake y hay mas de 10 unidades
            //cart[i].subtotalWithDiscount = (cart[i].price*2/3)*cart[i].quantity;          // el precio se reduce 2/3
            cart[i].subtotalWithDiscount = (cart[i].price * 2 * cart[i].quantity) /3;
            //cart[i].subtotalWithDiscount = cart[i].subtotalWithDiscount.toFixed(2);               // redondeamos a 2 decimales
            cart[i].subtotalWithDiscount = parseFloat(cart[i].subtotalWithDiscount.toFixed(2));     // asi evitamos que se '033.00'
                       
        }      
    }
    
    
    
}







function open_modal(){
	console.log("Open Modal");
	
    
}
  
      
  






