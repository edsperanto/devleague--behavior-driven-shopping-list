// jshint esversion: 6
console.log('we good');

const theShoppingList = new ShoppingList(); //instance of ShoppingList class

function changeCheckedStatus(idx, checkbox) {
  if ( checkbox.checked === true ) {
    theShoppingList.items[idx].check();
    console.log('checked');
  } else {
    theShoppingList.items[idx].uncheck();
    console.log('uncheck');
  }
}

//function to add things to shopping list and re-render to the browser page
function addToShoppingList() {
  let item = document.getElementById('item-name').value;
  let description = document.getElementById('item-desc').value;
  let newShoppingListItem = new ShoppingListItem(item, description);
  theShoppingList.addItem(newShoppingListItem);
  let outPutList = theShoppingList.render();
  document.getElementById('content').innerHTML = outPutList;

  let checkBoxNodeList = document.querySelectorAll('.check-box');

  for ( let i = 0; i < checkBoxNodeList.length; i ++ ) {
    console.log(checkBoxNodeList[i]);
    checkBoxNodeList[i].addEventListener('change', function() {
      changeCheckedStatus(i, checkBoxNodeList[i]);
    });
  }
}


//event listener for button to add things to the shopping list
add_shopping_list_item_button.addEventListener('click', addToShoppingList);
