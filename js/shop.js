// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
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
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
   

var total = 0;

// Exercise 1
function buy(id) {

   for (let i =0; i<products.length; i++){     // recorre array products

        if (products[i].id === id){            // si la id que pasa la funcion buy coincide con la id del producto lo añade a cartList
            cartList.push(products[i]);        
        }
        
   }
   
   console.log(cartList);

    // let productOk = products.find(prod=>id === prod.id);
    // cartList.push(productOk);


    document.getElementById("count_product").innerHTML = cartList.length;   // pone el numero de productos en el HTML 'count_product'
    calculateTotal();         // llama a la funcion que calcula el total
    generateCart();           // llama a la funcion que suma solo la cantidad si el producto ya esta en la cesta de la compra y asi no lo repita  
    
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {

    cartList.length = 0;
    document.getElementById("count_product").innerHTML = cartList.length
    console.log(cartList);

}

// Exercise 3

function calculateTotal() {
    
    
    for (let i=0; i < cart.length; i++){

        total += cart[i].price              // recorre array cartList y va sumando el precio
        
    }
    console.log(total);
    // applyPromotionsCart();
    // Calculate total price of the cart using the "cartList" array
}




// Exercise 4
function generateCart() {

    let cart1 = [];
    
    
     for (let i =0; i<cartList.length; i++){
        let actualProduct = cartList[i];                    // meto cartList en una variable actualProduct
                            
        let istheProduct = cart1.includes(actualProduct);    // aqui pongo los productos de cart que estan incluidos en actualProduct

        if (istheProduct){                                   // si el producto esta incluido se aumenta la cantidad
                                             
            actualProduct.quantity++
        }
        else {                                              // si no esta incluido el producto, añado ese producto al array cart con el metodo push
            
            actualProduct.quantity = 1
            cart1.push(actualProduct)
            
        }
        
          
    }
    
        cart = cart1.map(function(producto) {        // metodo map se crea nuevo array, se crea una funcion dentro que quita la id y añade mas valores       
        cart = [];
        for (let clave in producto) {
          if (clave !== "id") {                     // si el valor es distinto a id entonces lo añade al array cart
            cart[clave] = producto[clave];          // la clave de cart sera el producto, o sea el nombre
          }
        }
        cart.subtotal = 0;                      // se añaden 2 nuevos valores al array creada llamada cart
        cart.subtotalWithDiscount = 0;
        return cart;
      });
     
      
    //applyPromotionsCart();
    console.log(cart);
    
    

    // recorrer el array 'cartList' y añadir items nuevos al array 'cart', si un item ya existe se ha de sumar el precio 
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

   

    for (let i=0; i>cart.length; i++){
        
         if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3){
                          
             cart[i].subtotalWithDiscount = cart[i].quantity * 10;
             
        }
       
    }

            
}

// function applyPromotionsCart() {
//     // Apply promotions to each item in the array "cart"
//     for (i = 0; i < cart.length; i++) {
//         if (cart[i].name == 'cooking oil' && cart[i].quantity >= 3)
//             //promoción aceite si compra más de 3 botellas             
//             cart[i].subtotalWithDiscount = cart[i].quantity * 10;


//         else if (cart[i].name == 'Instant cupcake mixture' && cart[i].quantity >= 10)
//             //con más de 10 productos para hacer pastel
//             cart[i].subtotalWithDiscount = (cart[i].subtotal / 3) * 2; 
//         else {
//             delete cart[i].subtotalWithDiscount;            
//         }
//         cart[i].subtotal = cart[i].quantity * cart[i].price;
//     }

// }

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
    applyPromotionsCart();
    
}