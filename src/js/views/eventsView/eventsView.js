import View from '../View';

class EventsView extends View {
  _parentElement = document.querySelector('.event-list');

  _addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _addHandlerNewEvent(handler) {
    const eventForm = document.querySelector('.event-form');
    const spendInput = document.querySelector('.event-form__input--spend');
    const nameInput = document.querySelector('.event-form__input--name');

    eventForm.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
      spendInput.value = '';
      nameInput.value = '';
    });
  }

  _addHandlerDeleteEvent(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const target = e.target.id;
      if (!e.target.classList.contains('event__info__btn--delete')) return;
      handler(target);
    });
  }

  _addHandlerScrolltoEventTop() {
    window.addEventListener('click', function (e) {
      if (!e.target.classList.contains('event__btn--gotoTop')) return;

      document.querySelector('.event__content')?.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });
    });
  }

  _generateMarkup() {
    const internationalNumberFormat = new Intl.NumberFormat('en-US');

    return ` 
      <div class="event__info">
        <div class="event__info__btn--delete" id=${this._data.id}>x</div>
          <div class="event__info--group">
            <span class="event__info--group-value">${this._data.group}</span>
          </div>
        <div class="event__product">
          <div class="event__info--type">
            <span class="event__info--type-value">${this._data.type}</span>
          </div>
          <div class="event__info--productName">
            <span class="event__info--productName-value">${
              this._data.productName
            }
            </span>
          </div>
          <div class="event__info--note">
            <span class="event__info--note-value">${this._data.note}</span>
          </div>
        </div>
        <div class="event__info--spend">
          <span class="event__info--spend-value">
            ${internationalNumberFormat.format(this._data.spend)}
          </span>
          <span class="event__info--spend-unit">NTD</span>
        </div>
        <div class="event__info--payer">
          <class="event__info--payer-value">付款人 : ${this._data.payer}</span>
        </div>
        <div class="event__info--sharer">
          <span class="event__info--sharer-value">分款人 :
          ${this._data.isAllMember ? '全員' : this._data.sharer}
          </span>
        </div>
      </div>
      `;
  }
}

export default new EventsView();
