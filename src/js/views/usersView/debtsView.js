import View from '../View';
class DebtsView extends View {
  _parentElement = document.querySelector('.debt__infos');

  _generateMarkup() {
    const internationalNumberFormat = new Intl.NumberFormat('en-US');
    if (this._data) {
      return this._data
        .map(
          debt => `
      <div class="debt__info">
        <span><strong>${debt.debtor}</strong></span>
        需支付給
        <span><strong>${
          debt.creditor
        }</strong></span>${internationalNumberFormat.format(
            Number(Math.round(debt.payment))
          )}元
      </div>`
        )
        .join('');
    } else {
      return `<div class="debt__info">尚無應收/應付帳款</div>`;
    }
  }
}

export default new DebtsView();
