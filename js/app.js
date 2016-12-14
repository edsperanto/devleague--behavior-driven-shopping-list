// jshint esversion: 6
console.log('we good');

const theShoppingList = new ShoppingList(); //instance of ShoppingList class


//function to add things to shopping list and re-render to the browser page
function addToShoppingList() {
  let item = document.getElementById('item-name').value;
  let description = document.getElementById('item-desc').value;
  let newShoppingListItem = new ShoppingListItem(item, description);
  theShoppingList.addItem(newShoppingListItem);
  let outPutList = theShoppingList.render();
  document.getElementById('content').innerHTML = outPutList;
}

//event listener for button to add things to the shopping list
add_shopping_list_item_button.addEventListener('click', addToShoppingList);
