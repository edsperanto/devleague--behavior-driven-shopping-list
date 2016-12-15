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
    expect(myItem.render()).equal("<li class='completed_true'><input class='check-box' type='checkbox' checked = 'checked' onchange=\"changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])\")><span>apple</span> <span class='desc'>the fruit</span><button class='x-button' onclick=\"removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))\">[ x ]</button></li>");
  });

  it('should have \'uncheck\' method that sets \'is_done\' to false', () => {
    myItem.uncheck();
    expect(myItem.uncheck).to.be.a('function');
    expect(myItem.is_done).to.be.false;
    expect(myItem.render()).equal("<li class='completed_false'><input class='check-box' type='checkbox' onchange=\"changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])\")><span>apple</span> <span class='desc'>the fruit</span><button class='x-button' onclick=\"removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))\">[ x ]</button></li>");
  });

  it('should have \'render\' method that returns html formatting string', () => {
    expect(myItem.render).to.be.a('function');
    expect(myItem.render()).to.equal("<li class='completed_false'><input class='check-box' type='checkbox' onchange=\"changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])\")><span>apple</span> <span class='desc'>the fruit</span><button class='x-button' onclick=\"removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))\">[ x ]</button></li>");
  });

});