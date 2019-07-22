'use strict';

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
  
};
  //checks if productNames is put into allProducts
  console.table(allProducts);

//randomizes products
function randomProduct(){
    return Math.floor(Math.random() * allProducts.length);
  }
  
//(supposedly) displays products
  function render() {
    var productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
  };

  //prevents duplicate products
  var randomProducts = [];
  randomProducts.push(randomProduct());
  randomProducts.push(randomProduct());
  while(randomProducts[0] === randomProducts[1]){
    randomProducts[1] = randomProduct();
  }
  randomProducts.push(randomProduct());
  while(randomProducts[2] === randomProducts[0] || randomProducts[2] === randomProducts[1]){
    randomProducts[2] = randomProduct();
  }
  //tests success of randomProducts
  console.log(randomProducts);

  //makes sure 3 random imgs are displayed and adds event to log image clicks
  for(var i = 0; i < 3; i++){
    allProducts[randomProducts[i]].views++
    var img = document.createElement('img');
    img.setAttribute('src', allProducts[randomProducts[i]].imageUrl)
    img.setAttribute('data-name', allProducts[randomProducts[i]].name);
    img.addEventListener('click', handleVote);
    productsSection.appendChild(img);
  };


  function handleVote(event) {
    var productName = event.target.dataset.name;
    for(var i = 0; i < allProducts.length; i++){
      if(allProducts[i].name === productName){
        allProducts[i].clicks++
        totalClicks++
        render();
      }
    }
    //limits number of votes to 25
    if(totalClicks === 25){
      var imgs = document.getElementsByTagName('img');
      for(var i = 0; i < imgs.length; i++){
        imgs[i].removeEventListener('click', handleVote);
      }
      displayResults();
    }
    console.table(allProducts);

    //adding a string to a log helps readability. Like a label in console
    console.log('Total Clicks', totalClicks);
    
  }
  
  //creates a list with the results of click votes
  function displayResults(){
    var results = document.getElementById('results');
    var ul = document.createElement('ul');
    for(var i = 0; i < allProducts.length; i++){
      var product = allProducts[i];
      var li = document.createElement('li');
      li.textContent = product.name + ' has ' + product.clicks + ' votes.';
      ul.appendChild(li);
    }
    results.appendChild(ul);
  }
  
  createProducts();
  render();