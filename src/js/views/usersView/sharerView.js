import View from '../View';
class SharerView extends View {
  _parentElement = document.querySelector('.event-form__input--sharers');

  _addHandlerRender(handler) {
    window.addEventListener('load', () => {
      handler();
    });
  }

  _addHandlerMarkSharer() {
    this._parentElement.addEventListener('click', e => {
      if (!e.target.classList.contains('event-form__input--sharer')) return;

      if (!e.target.previousElementSibling.checked) {
        e.target.classList.add('checked');
      }
      if (e.target.previousElementSibling.checked) {
        e.target.classList.remove('checked');
      }
    });
  }

  _addHandlerSelectAll() {
    window.addEventListener('click', e => {
      if (!e.target.classList.contains('selectedAll')) return;
      const selectedAllCheckbox = document.querySelector(
        '.selectedAllCheckbox'
      );
      const allCheckboxes = document.querySelectorAll('.checkbox');

      if (!selectedAllCheckbox.checked) {
        allCheckboxes.forEach(checkbox => {
          checkbox.checked = true;
          checkbox.nextElementSibling.classList.add('checked');
        });
      }

      if (selectedAllCheckbox.checked) {
        allCheckboxes.forEach(checkbox => {
          checkbox.checked = false;
          checkbox.nextElementSibling.classList.remove('checked');
        });
        return;
      }
    });
  }

  _generateMarkup() {
    return (
      this._data
        .map(
          user => `
        <input class="checkbox ${user.id}" type="checkbox" id="${user.id}" value="${user.userName}"/>
        <label class="event-form__input--sharer" for="${user.id}">${user.userName}</label>
        `
        )
        .join('') +
      (this._data.length > 1
        ? `
        <input class="selectedAllCheckbox" type="checkbox" id="selectedAll" value = "selectedAll">
        <label class="event-form__input--sharer selectedAll" for="selectedAll">全選</label>
        `
        : '')
    );
    // : '';
    // this._data.length >
    // 1
    // ? `
    // <input class="checkbox selectedAll" type="checkbox" id="selectedAll" value="全選"/>
    // <label class="event-form__input--sharer" for="selectedAll">全選</label>
    //   `
    // : '';
  }
}

export default new SharerView();
