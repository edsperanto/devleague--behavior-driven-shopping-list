// jshint esversion: 6
const theShoppingList = new ShoppingList();

function changeCheckedStatus(idx, checkbox) {
  if ( checkbox.checked ) {
    theShoppingList.items[idx].check();
  } else {
    theShoppingList.items[idx].uncheck();
  }
  reRender();
}

function removeItemButtonClicked(idx) {
  theShoppingList.removeItem(theShoppingList.items[idx]);
  reRender();
}

function addToShoppingList() {
  let item = document.getElementById('item-name').value;
  let description = document.getElementById('item-desc').value;
  let newShoppingListItem = new ShoppingListItem(item, description);
  theShoppingList.addItem(newShoppingListItem);
  reRender();
}

function reRender() {
  document.getElementById('content').innerHTML = theShoppingList.render();
  let liElements = document.querySelectorAll('li');
  for ( let i = 0; i < liElements.length; i ++ ) {
    liElements[i].dataset.idx = i;
  }
}

//event listener for button to add things to the shopping list
add_shopping_list_item_button.addEventListener('click', addToShoppingList);
