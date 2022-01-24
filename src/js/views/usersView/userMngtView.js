import View from '../View.js';
import imgRevise from 'url:../../../img/revise.png';
import imgDelete from 'url:../../../img/delete.png';

class UserMgntView extends View {
  _parentElement = document.querySelector('.user__infos');

  _addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _addHandlerNewUser(handler) {
    const newUserName = document.querySelector(
      '.user-form__input--newUserName'
    );
    const allUserInfos = document.querySelector('.user__infos');
    const newUserForm = document.querySelector('.user-form');
    const newUserNameInput = document.querySelector(
      '.user-form__input--newUserName'
    );

    newUserForm.addEventListener('submit', e => {
      e.preventDefault();
      handler(newUserName.value);

      const newUserId =
        allUserInfos.children[allUserInfos.children.length - 1].id;

      document.querySelector(`.user__info #${newUserId}`).scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth',
      });

      newUserNameInput.value = '';
    });
  }

  _addHandlerDeleteUser(handler) {
    document.querySelector('.userMngt').addEventListener('click', e => {
      if (!e.target.classList.contains('user__info__btn--delete')) return;
      const target = e.target.parentElement.parentElement.id;
      handler(target);
    });
  }

  _addHandlerToggleWindow() {
    window.addEventListener('click', e => {
      const eventUserMngtBtn = e.target.classList.contains(
        'event__btn--usersMngt'
      );
      const userMngtWindow = document.querySelector('.userMngt');
      const userMngtCloseBtn = e.target.classList.contains(
        'userMngt__btn--close'
      );
      const userInfoButtons = e.target.closest('.user__info__btns');
      const newUserForm = document.querySelector('.user-form');

      // e.target.closest('.userMngt');
      if (
        eventUserMngtBtn ||
        userMngtCloseBtn ||
        (!userMngtWindow.classList.contains('hidden') &&
          !e.target.closest('.userMngt') &&
          !userInfoButtons)
      ) {
        userMngtWindow.classList.toggle('hidden');
        this._usersSetDefault();
        newUserForm.classList.add('hidden');
      }
    });
  }

  _addHandlerToggleNewUserWindow() {
    const createNewUserBtn = document.querySelector(
      '.userMngt-header__btn--createNewUser'
    );
    const newUserName = document.querySelector(
      '.user-form__input--newUserName'
    );

    createNewUserBtn.addEventListener('click', function () {
      const newUserForm = document.querySelector('.user-form');

      newUserForm.classList.toggle('hidden');
      newUserName.focus();
    });
  }

  _addHandlerReviseUser(handler) {
    this._parentElement.addEventListener('click', e => {
      if (!e.target.classList.contains('user__info__btn--revise')) return;
      const allUserNames = document.querySelectorAll('.user__info--name');
      const target = e.target.parentNode.parentNode.id;
      const userName = e.target.parentNode.parentNode.children[0];

      this._usersSetDefault();
      this._usersSetInputField(userName);

      allUserNames.forEach(user =>
        user.addEventListener('keypress', e => {
          if (e.key === 'Enter') {
            if (userName.value === '') {
              userName.setAttribute('value', userName.dataset.name);
            } else {
              userName.setAttribute('value', userName.value);
            }
            userName.setAttribute('readonly', '');
            userName.removeAttribute('placeholder');
            handler(target, userName.value);
          } else {
            return;
          }
        })
      );
    });
  }

  _usersSetDefault = function () {
    const allUserNames = document.querySelectorAll('.user__info--name');

    allUserNames.forEach(user => {
      user.setAttribute('readonly', '');
      user.removeAttribute('placeholder');
      user.value = user.dataset.name;
    });
  };

  _usersSetInputField = function (userName) {
    userName.setAttribute('data-name', userName.value);
    userName.removeAttribute('readonly');
    userName.removeAttribute('value');
    userName.setAttribute('placeholder', '請輸入新名稱');
    userName.value = '';
    userName.focus();
  };
  // _userRevise(e) {
  //   const userNames = document.querySelectorAll('.user__info--name');
  //   if (!e.target.classList.contains('user__btn--revise')) return;

  //   const obj = model.state.activeGroup[0].users.find(
  //     obj => obj.id === e.target.parentNode.parentNode.id
  //   );
  //   const userName = e.target.parentNode.parentNode.children[0];

  //   userNames.forEach(users => {
  //     users.setAttribute('readonly', '');
  //     users.removeAttribute('placeholder');
  //     users.value = users.dataset.name;
  //   });

  //   userName.setAttribute('data-name', userName.value);
  //   userName.removeAttribute('readonly');
  //   userName.removeAttribute('value');
  //   userName.setAttribute('placeholder', '請輸入新名稱');
  //   userName.value = '';
  //   userName.focus();

  //   document.querySelector('.user__btn--OK').addEventListener(
  //     'click',
  //     () => {
  //       if (
  //         model.state.activeGroup[0].users
  //           .map(user => user.userName === userName.value)
  //           .includes(true)
  //       ) {
  //         alert('已有相同名稱，請重新輸入');
  //         userName.value = '';

  //         return;
  //       }

  //       if (userName.value === '') {
  //         userName.setAttribute('value', userName.dataset.name);
  //       } else {
  //         userName.setAttribute('value', userName.value);
  //         obj.userName = userName.value;
  //       }
  //       userName.setAttribute('readonly', '');
  //       userName.removeAttribute('placeholder');
  //       this._renderAll();
  //       model.storeLocalStorage();
  //     },
  //     { once: true }
  //   );

  //   document
  //     .querySelectorAll('.user__info--name')

  //     .forEach(user =>
  //       user.addEventListener('keypress', e => {
  //         if (e.key === 'Enter') {
  //           if (
  //             model.state.activeGroup[0].users
  //               .map(user => user.userName === userName.value)
  //               .includes(true)
  //           ) {
  //             alert('已有相同名稱，請重新輸入');
  //             userName.value = '';
  //             return;
  //           }

  //           if (userName.value === '') {
  //             userName.setAttribute('value', userName.dataset.name);
  //           } else {
  //             userName.setAttribute('value', userName.value);
  //             obj.userName = userName.value;
  //           }
  //           userName.setAttribute('readonly', '');
  //           userName.removeAttribute('placeholder');
  //           this._renderAll();
  //           model.storeLocalStorage();
  //         } else {
  //           return;
  //         }
  //       })
  //     );
  // }

  _generateMarkup() {
    return this._data
      .map(
        user => `
        <div class="user__info" id=${user.id}>
          <input class="user__info--name" id=${user.id} maxlength="5" autocomplete="off" readonly value="${user.userName}" data-name="${user.userName}">

          <div class="user__info__btns">
            <img class="user__info__btn--revise"src="${imgRevise}"></img>
            <img class="user__info__btn--delete"src="${imgDelete}"></img>
          </div>
      </div>`
      )
      .join('');
  }
}

export default new UserMgntView();
