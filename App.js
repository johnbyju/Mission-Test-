
function addItems() {
  const userAddItem = document.getElementById("addItem").value.toLowerCase().trim().split(',');
  const product = {
    items: userAddItem
  };

  let stockItems = JSON.parse(localStorage.getItem('products')) || [];
  

  const index = stockItems.findIndex(ele => {
    return ele.items.every(item => userAddItem.includes(item));
  });

  if (index !== -1) {
    stockItems.splice(index, 1);
  }

  userAddItem.forEach(temp=>{
    
  })
  stockItems.push(product);
  
  localStorage.setItem('products', JSON.stringify(stockItems));
}


function listItem() {

  let showTheItems = JSON.parse(localStorage.getItem('products'));

  if (showTheItems && showTheItems.length > 0) {
    let ol = document.createElement('ol');

    showTheItems.forEach(e => {
      e.items.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        ol.appendChild(listItem);
      });
    });
     
   
    document.getElementById('itemList').appendChild(ol);
  } else {
    alert("No items found in localStorage");
  }
}
document.getElementById('additembtn').addEventListener('click',()=>{
  addItems();
  listItem();
  document.getElementById('itemList').innerHTML='';
  document.getElementById('addItem').value='';

  // document.getElementById("formsubmit").reset();
});



// -----previous code-------//


// function addItems() {
//   const getTheproduct = document.getElementById("addItem").value.toLowerCase().trim().split(',');

//   let storedProducts={
//     name : item
//   }
//   const storedProduct = JSON.parse(localStorage.getItem('products')) || [];
//   storedProduct
//   getTheproduct.forEach(product => {

//     let removedElement = storedProducts.indexOf(product);
//     if (removedElement !== -1) {
//       storedProducts.splice(removedElement, 1);
//     }
//     storedProduct.push(storedProducts);
//   });

//   localStorage.setItem("products", JSON.stringify(storedProducts));
//   document.getElementById("addItem").value = "";
//   listTheItem();
// }

// function listTheItem() {
//   let itemList = JSON.parse(localStorage.getItem('products'));

//   if (itemList && itemList.length > 0) {
//      itemList.forEach((storedProduct,index) => storedProduct.name);
//     let div = document.createElement('div');
//     let ol = document.createElement('ol');

//     getProduct.forEach(item => {
//       let listItem = document.createElement('li');
//       listItem.textContent = item;
//       ol.appendChild(listItem);
//     });

//     div.appendChild(ol);
//     document.body.appendChild(div);
//   } else {
//     alert("It's an error to print the items in the localStorage");
//   }
// }



// document.getElementById("additembtn").addEventListener("click", addItems,);




