const cart = require ('./cart.js')
const cars = require ('./data/cars.js')

describe ('Cart properties', function (){
 test ('Cart should default to an empty array', function(){
expect(Array.isArray(cart.cart) ).toEqual(true)
expect(cart.cart.length).toEqual (0)  
  });
 test('Total should default to 0', function() {
     expect (cart.total).toEqual (0)
  })
});

describe ('Cart methods', function () {
 afterEach(function() {
     cart.cart = []
     cart.total = 0
 test ('add to cart () should add a car object to the cart array.', function () {
     cart.addToCart(cars [0] )
     cart.addToCart(cars [1] )
     expect (cart.cart.length).toEqual (2)
     expect (cart.cart [0] ).toEqual (cars [0])
     expect (cart.cart [1] ).toEqual (cars [1])
 })
 test ('add to cart () should increase the total property. ', function () {
     cart.addToCart( cars[0] )
     cart.addToCart( cars[8] )
     cart.addToCart( cars[2] )
     expect (cart.total ).toEqual (cars[0].price + cars[8].price + cars[2].price)
  })    
 test ('removeFromCart() should remove a car object from the cart array.', function () {
    cart.addToCart ( cars[0] )
    cart.addToCart ( cart[1] )
    cart.addToCart ( cart[2] )
    cart.removeFromCart( 1, cars[1].price )
 })
 