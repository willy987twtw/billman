import View from '../View';

class EventsHeaderView extends View {
  _parentElement = document.querySelector('.event-list');

  _addHandlerNewEventHeader(handler) {
    handler();
  }

  _generateMarkup() {
    return `
      <div class="event__content">
        <div class="event__content--dateHeader">${this._data.date}</div>
        <div class="event__infos Date${this._data.date}"></div>
      </div>
      `;
  }
}

export default new EventsHeaderView();
