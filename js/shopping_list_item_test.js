// jshint esversion: 6
const should = chai.should();
const expect = chai.expect;

describe('ShoppingListItem', () => {

  let myItem;

  beforeEach(() => {
    myItem = new ShoppingListItem('apple', 'the fruit');
  });

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
    expect(myItem.render()).to.equal(`<li class="completed_${myItem.is_done}"><span>${myItem.name}</span> <span>${myItem.description}</span></li>`);
  });

});