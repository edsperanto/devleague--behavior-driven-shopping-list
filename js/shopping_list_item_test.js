// jshint esversion: 6
const should = chai.should();
const expect = chai.expect;

describe('ShoppingListItem', () => {

  let myItem = new ShoppingListItem('apple', 'the fruit');

  it('should be a class', () => {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have property \'name\'', () => {
    myItem.should.have.property('name');
    expect(myItem.name).to.equal('apple');
  });

  it('should have property \'description\'', () => {
    myItem.should.have.property('description');
    expect(myItem.description).to.equal('the fruit');
  });

  it('should have property \'is_done\'', () => {
    myItem.should.have.property('is_done');
    expect(myItem.is_done).to.be.false;
  });

  it('should have \'check\' method that sets \'is_done\' to true', () => {
    myItem.check();
    expect(myItem.check).to.be.a('function');
    expect(myItem.is_done).to.be.true;
  });

  it('should have \'uncheck\' method that sets \'is_done\' to false', () => {
    myItem.uncheck();
    expect(myItem.uncheck).to.be.a('function');
    expect(myItem.is_done).to.be.false;
  });

  it('should have \'render\' method that returns html formatting string', () => {
    expect(myItem.render).to.be.a('function');
    expect(myItem.render()).to.equal(`<li class='completed_${myItem.is_done}'><span>${myItem.name}</span> <span>${myItem.description}</span></li>`);
  });

});

describe('ShoppingList', () => {

  let myList = new ShoppingList();
  let newItem1 = new ShoppingListItem('Asparagus Water', 'Magical water that cures cancer from Whole Foods');
  let newItem2 = new ShoppingListItem('Organic Honey', 'Wild Honey from the Amazon');
  let newItem3 = new ShoppingListItem('Tulips', 'Tiptoe through me~');
  let newItem4 = new ShoppingListItem('Gluten free gluten', 'Now with natural ingredients!');
  let newItem5 = new ShoppingListItem('FAKE CHINESE PRODUCT', 'CHING CHONG POTS');

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
    expect(myList.render()).to.equal(`<ul>${myList.items[0].render()}${myList.items[1].render()}</ul>`);
  });

});