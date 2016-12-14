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

  removeItem(shoppinglistitem) {
    if ( this.items.indexOf(shoppinglistitem) > -1 ) {
      this.items.splice(this.items.indexOf(shoppinglistitem), 1);
    } else {
      if ( shoppinglistitem === undefined ) {
        this.items.pop();
      } else {
        throw new Error('Not a Shopping list item');
      }
    }
  }

  render() {
    let liList = "";
    for (let i = 0; i < this.items.length; i ++ ) {
      liList += this.items[i].render();
    }
    return `<ul>${liList}</ul>`;
  }
}