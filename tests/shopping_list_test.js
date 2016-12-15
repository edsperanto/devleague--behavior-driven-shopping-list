// jshint esversion: 6

describe('ShoppingList', () => {

  let myList;
  let newItem1 = new ShoppingListItem('Asparagus Water', 'Magical water that cures cancer from Whole Foods');
  let newItem2 = new ShoppingListItem('Organic Honey', 'Wild Honey from the Amazon');
  let newItem3 = new ShoppingListItem('Tulips', 'Tiptoe through me~');
  let newItem4 = new ShoppingListItem('Gluten free gluten', 'Now with natural ingredients!');
  let newItem5 = new ShoppingListItem('FAKE CHINESE PRODUCT', 'CHING CHONG POTS');

  beforeEach(() => {
    myList = new ShoppingList();
  });

  it('should be a class', () => {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have property \'items\'', () => {
    myList.should.have.property('items');
    expect(myList.items.length).to.equal(0);
  });

  it('should initialize \'items\' as an array', () => {
    expect(myList.items.push).to.be.a('function');
  });

  it('should have \'addItem\' method', () => {
    myList.addItem(newItem1);
    expect(myList.addItem).to.be.a('function');
    expect(myList.items[0]).to.equal(newItem1);
    (() => (myList.addItem('ayy lmao'))).should.throw('Not a Shopping list item');
  });

  it('should have \'removeItem\' method', () => {
    myList.addItem(newItem1);
    expect(myList.removeItem).to.be.a('function');
    myList.removeItem(newItem1);
    expect(myList.items.length).to.equal(0);
    myList.addItem(newItem2);
    myList.addItem(newItem3);
    myList.addItem(newItem4);
    myList.removeItem();
    expect(myList.items.length).to.equal(2);
    (() => (myList.removeItem(newItem5))).should.throw('Not a Shopping list item');
  });

  it('should have \'render\' method', () => {
    expect(myList.render).to.be.a('function');
    expect(myList.render()).to.equal("<ul></ul>");
    myList.addItem(newItem1);
    expect(myList.render()).to.equal(`<ul>${newItem1.render()}</ul>`);
    myList.removeItem(newItem1);
    expect(myList.render()).to.equal("<ul></ul>");
    myList.addItem(newItem2);
    expect(myList.render()).to.equal(`<ul>${newItem2.render()}</ul>`);
    myList.addItem(newItem3);
    expect(myList.render()).to.equal(`<ul>${newItem2.render()}${newItem3.render()}</ul>`);
    myList.addItem(newItem4);
    expect(myList.render()).to.equal(`<ul>${newItem2.render()}${newItem3.render()}${newItem4.render()}</ul>`);
    myList.removeItem();
    expect(myList.render()).to.equal(`<ul>${newItem2.render()}${newItem3.render()}</ul>`);
    myList.items[0].check();
    expect(myList.render()).to.equal("<ul><li class='completed_true'><input class='check-box' type='checkbox' checked = 'checked' onchange=\"changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])\")><span>Organic Honey</span> <span class='desc'>Wild Honey from the Amazon</span><button class='x-button' onclick=\"removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))\">[ x ]</button></li><li class='completed_false'><input class='check-box' type='checkbox' onchange=\"changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])\")><span>Tulips</span> <span class='desc'>Tiptoe through me~</span><button class='x-button' onclick=\"removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))\">[ x ]</button></li></ul>");
  });

});