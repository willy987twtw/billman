import View from '../View';
class PayerView extends View {
  _parentElement = document.querySelector('.event-form__input--payer');

  _addHandlerRender(handler) {
    window.addEventListener('load', () => {
      handler();
    });
  }

  _generateMarkup() {
    return this._data
      .map(user => `<option value="${user.id}">${user.userName}</option>`)
      .join('');
  }
}

export default new PayerView();
