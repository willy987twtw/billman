import View from './View';

class BalanceView extends View {
  _parentElement = document.querySelector('.balance__infos');

  _addHandlerToggleSidebar() {
    window.addEventListener('click', e => {
      const balanceSidebar = document.getElementById('toggleBalanceArea');
      const eventBalanceBtn = e.target.classList.contains(
        'event__btn--balance'
      );
      const balanceCloseBtn = e.target.classList.contains(
        'balance__btn--close'
      );
      const balanceArea = e.target.closest('.balance');

      if (
        eventBalanceBtn ||
        balanceCloseBtn ||
        balanceSidebar.checked & !balanceArea
      ) {
        balanceSidebar.checked = !balanceSidebar.checked;
      }
    });
  }

  _generateMarkup() {
    const internationalNumberFormat = new Intl.NumberFormat('en-US');

    return this._data
      .map(
        user => `
      <div class="balance__info" id=${user.id}>
        <div class="balance__info--name"><strong>${user.userName}</strong></div>
        <div class="balance__info--money">
        ${
          Number(Math.round(user.balance)) > 0
            ? `需收${internationalNumberFormat.format(
                Number(Math.round(user.balance))
              )}元`
            : Number(Math.round(user.balance)) === 0
            ? '無'
            : `需付${internationalNumberFormat.format(
                Number(Math.round(-user.balance))
              )}元
            `
        }
        </div>
      </div>`
      )
      .join('');
  }
}

export default new BalanceView();
