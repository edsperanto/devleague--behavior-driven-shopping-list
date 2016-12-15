/* jshint esversion: 6 */
class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    let checking = (this.is_done) ? ("checked = 'checked' ") : ("");
    return `<li class='completed_${this.is_done}'><input class='check-box' type='checkbox' ${checking}onchange="changeCheckedStatus.call(this, this.parentElement.getAttribute('data-idx'), document.querySelectorAll('.check-box')[this.parentElement.getAttribute('data-idx')])")><span>${this.name}</span> <span class='desc'>${this.description}</span><button class='x-button' onclick="removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))">[ x ]</button></li>`;
    /*
      deconstructed
      <li class='completed_${this.is_done}'>
        <input  class='check-box'
                type='checkbox'
                ${checking}
                onchange=
                  "changeCheckedStatus
                    .call(this,
                          this.parentElement.getAttribute('data-idx'),
                          document.querySelectorAll('.check-box')
                            [this.parentElement.getAttribute('data-idx')]
                          )
                  ")
        >
        <span>${this.name}</span>
        <span class='desc'>${this.description}</span>
        <button class='x-button' onclick="removeItemButtonClicked(this.parentElement.getAttribute('data-idx'))">
          [ x ]
        </button>
      </li>
     */
  }
}
