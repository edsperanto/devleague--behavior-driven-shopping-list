// jshint esversion: 6

class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(shoppinglistitem) {
    if ( shoppinglistitem instanceof ShoppingListItem ) {
    this.items.push(shoppinglistitem);
    } else {
    throw new Error('Not a Shopping list item');
    }
  }
}