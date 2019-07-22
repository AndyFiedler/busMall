'use strict'

//puts all product names in an array
var productNames=['bag', 'banana', 'bathroom', 'boots', 'breakfast',
'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon',
'pen', 'pet-sweep', 'scissors', 'shark', 'sweep',
'tauntaun', 'unicorn', 'usb', 'water-can',
'wine-glass'];

var allProducts=[];

var totalClicks=0;

// sets contructer and properties
function product(name){
    this.name = name;
    this.imageUrl = '../img/' + name + '.jpg';
    this.clicks = 0;
    this.views = 0;
    allProducts.push(this);
}; 

//puts products in allProducts
function createProducts() {
    for(var i = 0; i < productNames.length; i++){
      new Product(productNames[i]);
    }
    //checks if productNames is put into allProducts
    console.table(allProducts);
};

function randomProduct(){
    return Math.floor(Math.random() * allProducts.length);
  }
  
  function render() {
    var productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
  };