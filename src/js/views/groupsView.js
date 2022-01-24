import View from './View.js';
import imgRevise from 'url:../../img/revise.png';
import imgDelete from 'url:../../img/delete.png';

class GroupsView extends View {
  _parentElement = document.querySelector('.group-list');
  _group = document.querySelector('.group');
  // render all groups
  _addHandlerRender(handler) {
    window.addEventListener('load', handler);
    this._group.addEventListener('click', e => {
      if (
        !e.target.closest('.group') ||
        e.target.classList.contains('group__item--revise') ||
        e.target.classList.contains('group__item--delete')
      )
        return;
      handler();
    });
  }

  _addHandlerAddActive(handler) {
    window.addEventListener('load', () => {
      this._generateActiveGroup(handler());
    });

    this._group.addEventListener('click', e => {
      if (
        e.target.classList.contains('group__item--delete') ||
        e.target.classList.contains('group__item--revise')
      ) {
        return;
      }

      if (!e.target.closest('.group-list__info')) {
        this._generateActiveGroup(handler());
        return;
      }

      const target = e.target.closest('.group-list__info').classList[1];
      this._generateActiveGroup(handler(target));
    });
  }

  _addHandlerNewGroup(handler) {
    const newGroupForm = document.querySelector('.group-create__form');
    const newGroupName = document.querySelector('.newGroupName');

    newGroupForm.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      newGroupName.value = '';
      newGroupForm.classList.add('hidden');
    });
  }

  _addHandlerReviseGroup(handler) {
    this._parentElement.addEventListener('click', e => {
      if (!e.target.classList.contains('group__item--revise')) return;

      const target = e.target.parentNode.parentNode.classList[1];
      const newGroupName = e.target.parentNode.children[1];

      this._groupsSetDefault();
      this._groupsSetInputField(newGroupName);

      newGroupName.addEventListener('keypress', e => {
        if (e.key !== 'Enter') return;

        if (newGroupName.value === '') {
          newGroupName.setAttribute('value', newGroupName.dataset.name);
        }

        if (newGroupName.value !== '') {
          if (handler(target, newGroupName.value)) {
            alert('已有相同群組，請重新命名');
            newGroupName.value = '';
            return;
          }

          e.preventDefault();
          newGroupName.setAttribute('value', newGroupName.value);
          handler(target, newGroupName.value);
        }
        newGroupName.setAttribute('readonly', '');
        newGroupName.removeAttribute('placeholder');
      });
    });
  }

  _addHandlerDeleteGroup(handler) {
    this._parentElement.addEventListener('click', function (e) {
      if (!e.target.closest('.group__item--delete')) return;
      const target = e.target.closest('.group-list__info').classList[1];
      handler(target);
    });
  }

  _addHandlerToggleSidebar() {
    window.addEventListener('click', e => {
      const toggleGroupVisible = document.getElementById('toggleGroupArea');
      const eventGroupBtn = e.target.classList.contains('event__btn--groups');
      const groupCloseBtn = e.target.classList.contains('group__btn--close');
      const groupArea = e.target.closest('.group');
      const groupList = e.target.closest('.group-list__info');

      if (
        eventGroupBtn ||
        groupCloseBtn ||
        (toggleGroupVisible.checked && !groupArea && !groupList)
      ) {
        this._groupsSetDefault();
        toggleGroupVisible.checked = !toggleGroupVisible.checked;
      }
    });
  }

  _addHandlerToggleCreateWindow() {
    const createBtn = document.querySelector('.group-create__btn');
    const newGroupForm = document.querySelector('.group-create__form');
    const newGroupName = document.querySelector('.newGroupName');
    createBtn.addEventListener('click', function () {
      newGroupForm.classList.toggle('hidden');
      newGroupName.focus();
    });
  }

  _groupsSetDefault = function () {
    const allGroupNames = document.querySelectorAll(
      '.group-list__info .group__item--headline'
    );

    allGroupNames.forEach(users => {
      users.setAttribute('readonly', '');
      users.removeAttribute('placeholder');
      users.value = users.dataset.name;
      // console.log(users);
    });
  };

  _groupsSetInputField = function (newGroupName) {
    // console.log(newGroupName);
    newGroupName.removeAttribute('readonly');
    newGroupName.value = '';
    newGroupName.setAttribute('placeholder', '新群組名');
    newGroupName.focus();
  };

  _addHandlerDeleteAllGroups = function (handler) {
    window.addEventListener('click', e => {
      if (!e.target.classList.contains('event__btn--deleteAllInfo')) return;

      const firstCheck = confirm(
        '您確定要刪除所有資料嗎？將會刪除所有的群組、使用者及記錄。'
      );

      if (firstCheck) {
        const secondCheck = confirm('您確定嗎？');
        if (secondCheck) {
          handler();
          alert('所有資料已被刪除！');
          location.reload();
        } else return;
      } else return;
    });
  };

  _generateActiveGroup(id) {
    const allGroup = document.querySelectorAll('.group-list__info');
    allGroup.forEach(group => {
      group.classList.remove('active');
    });

    if (!document.querySelector(`.${id}`)) {
      return;
    }

    document.querySelector(`.${id}`).classList.add('active');
  }

  _generateMarkup() {
    return this._data
      .map(
        group => `
      <div class="group-list__info ${group.id}">
        <div class="group__items">
          <div class="group__item--icon">
            <span>${group.groupName.charAt(0)}</span>
          </div>
          <input
            class="group__item--headline"
            autocomplete="off"
            readonly
            required
            maxlength="5"
            placeholder=""
            value="${group.groupName}"
            data-name="${group.groupName}"
          />
          <div class="group__item--subhead">
            ${group.users.length}位成員
          </div>
          <img class="group__item--revise" src="${imgRevise}"></img>
          <img class="group__item--delete" src="${imgDelete}"></img>
        </div>
      </div>`
      )
      .reverse()
      .join('');
  }
}

export default new GroupsView();
