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
    myList.addItem(newItem1);
    myList.removeItem(newItem1);
    myList.addItem(newItem2);
    myList.addItem(newItem3);
    myList.addItem(newItem4);
    myList.removeItem();
    expect(myList.render).to.be.a('function');
    expect(myList.render()).to.equal(`<ul>${myList.items[0].render()}${myList.items[1].render()}</ul>`);
  });

});