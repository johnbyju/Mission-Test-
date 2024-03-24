
function addItems() {
  const userAddItem = document.getElementById("addItem").value.toLowerCase().trim().split(',');
  const product = {
     items: userAddItem
  };
 
  let stockItems = JSON.parse(localStorage.getItem('products')) || [];

  const uniqueUserAddItem = [...new Set(product)];
 
  
  const index = stockItems.findIndex(ele => {
     return ele.items.every(item => uniqueUserAddItem.includes(item));
  });
 
  if (index !== -1) {
     stockItems.splice(index, 1);
  }
 

  stockItems.push(product);
 
  localStorage.setItem('products', JSON.stringify(stockItems));
 }
 
function listItem() {
  let showTheItems = JSON.parse(localStorage.getItem('products'));
 
  if (showTheItems && showTheItems.length > 0) {
     let ol = document.createElement('ol');
 
     const allItems = showTheItems.flatMap(e => e.items);
     const uniqueItems = [...new Set(allItems)];
 
     uniqueItems.forEach(item => {
       let listItem = document.createElement('li');
       listItem.textContent = item;
       ol.appendChild(listItem);
     });
 
     document.getElementById('itemList').appendChild(ol);
  } else {
     alert("No items found in localStorage");
  }
}
 
 document.getElementById('additembtn').addEventListener('click', () => {
  addItems();
  listItem();
  document.getElementById('itemList').innerHTML = '';
  document.getElementById('addItem').value = '';
  
 });