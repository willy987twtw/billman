//  Group Instance
export class Group {
  constructor(groupName, users, events) {
    this.id = this._getRomdomId();
    this.groupName = groupName;
    this.users = users;
    this.events = events;
  }
  _getRomdomId() {
    return 'G_' + Math.random().toString(36).substr(2, 9);
  }
}

//  User Instance
export class User {
  constructor(userName, assets, debts, group) {
    this.id = this._getRomdomId();
    this.userName = userName;
    this.assets = assets;
    this.debts = debts;
    this.group = group;
    this.balance = this.assets - this.debts;
  }
  _getRomdomId() {
    return 'U_' + Math.random().toString(36).substr(2, 9);
  }
}

//  Event Instance
export class Event {
  // prettier-ignore
  constructor(spend, date, type, productName, note, payer, payerId, sharer, sharerId, group, groupId, isAllMember) {
    this.id = this._getRomdomId();
    this.spend = spend;
    this.date = date;
    this.type = type;
    this.productName = productName;
    this.note = note;
    this.payer = payer;
    this.payerId = payerId;
    this.sharer = sharer;
    this.sharerId = sharerId;
    this.group = group;
    this.groupId = groupId;
    this.isAllMember = isAllMember;
  }

  _getRomdomId() {
    return 'E_' + Math.random().toString(36).substr(2, 9);
  }
}

export const state = {
  activeGroup: [],
  groupObject: [],
  sharerId: [],
  sharer: [],
  eventDateList: [],
};

//------------------------GROUP------------------------

export const createNewGroup = async function (newGroupName) {
  const newGroup = new Group(newGroupName, [], []);

  // 將新群組設定成active
  setActiveGroup(newGroup);
  // 建立預設使用者
  createDefaultUserObject(newGroup);
  state.groupObject.push(newGroup);
  // 更新新使用者的balance
  updateUsersBalance();
  storeLocalStorage();
};

export const deleteGroup = function (id) {
  const target = state.groupObject.find(group => group.id === id);
  const index = state.groupObject.indexOf(target);
  // 刪除特定群組
  state.groupObject.splice(index, 1);
  // 更新active群組
  state.activeGroup.splice(0, 1);
  state.activeGroup.push(state.groupObject[index - 1 > 0 ? index - 1 : 0]);
  storeLocalStorage();
};

export const setActiveGroup = async function (group = undefined) {
  // 若group參數無值，則active群組依舊為目前的active群組
  if (!group) {
    const activeGroup = state.groupObject.find(
      group => group.id === state.activeGroup[0].id
    );
    const index = state.groupObject.indexOf(activeGroup);
    group = state.groupObject[index];
  }

  // 若group參數有值，設定新的active群組
  state.activeGroup.splice(0, 1);
  state.activeGroup.push(group);
  storeLocalStorage();
};

//------------------------USER------------------------

export const createNewUser = function (newUserName) {
  console.log(newUserName);

  if (newUserName.value === '') {
    alert('名稱不可為空');
    return;
  }

  // 建立New User Instance
  createNewUserObject(newUserName);
  storeLocalStorage();
  newUserName.value = '';
};

const createNewUserObject = function (newUserName) {
  if (
    state.activeGroup[0].users
      .map(user => user.userName === newUserName)
      .includes(true)
  ) {
    alert('已有相同名稱，請重新命名');
    return;
  }

  // 建立New User Instance
  const newUser = new User(newUserName, 0, 0, state.activeGroup[0].groupName);
  const index = state.groupObject.findIndex(
    group => group.id === state.activeGroup[0].id
  );

  state.groupObject[index].users.push(newUser);
  setActiveGroup(state.groupObject[index]);
  storeLocalStorage();
};

export const deleteUser = function (id) {
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const activeGroupIndex = state.groupObject.indexOf(activeGroup);
  const obj = state.activeGroup[0].users.find(user => user.id === id);
  const index = state.activeGroup[0].users.indexOf(obj);

  if (index === 0) {
    alert('無法刪除自己');
    return;
  } else if (obj.balance !== 0) {
    alert('帳款尚未平衡');
    return;
  } else {
    state.groupObject[activeGroupIndex].users.splice(index, 1);
    setActiveGroup(state.groupObject[activeGroupIndex]);
  }
  storeLocalStorage();
};

const updateUsersAmont = function (newEvent) {
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const activeGroupIndex = state.groupObject.indexOf(activeGroup);

  //更新使用者應收額
  const payer = state.groupObject[activeGroupIndex].users.find(
    payer => payer.id === `${newEvent.payerId}`
  );
  payer.assets = Number(payer.assets) + Number(newEvent.spend);

  //更新使用者應付額
  for (const i of newEvent.sharer) {
    const [sharer] = state.groupObject[activeGroupIndex].users.filter(
      sharer => sharer.id === `${newEvent.sharerId[newEvent.sharer.indexOf(i)]}`
    );

    if (!sharer) return;

    sharer.debts = Number(
      Number(sharer.debts) +
        Number((newEvent.spend / state.sharer.length).toFixed(2))
    ).toFixed(2);
  }

  updateUsersBalance();
  setActiveGroup(state.groupObject[activeGroupIndex]);
};

export const updateUsersBalance = function () {
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const activeGroupIndex = state.groupObject.indexOf(activeGroup);

  //更新active群組中的user balance
  if (!state.groupObject[activeGroupIndex]) return;

  state.groupObject[activeGroupIndex].users.map(
    user => (user.balance = user.assets - user.debts)
  );
  setActiveGroup(state.groupObject[activeGroupIndex]);
};

export const reviesUserInfo = function (id, newUserName) {
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const groupIndex = state.groupObject.indexOf(activeGroup);
  const target = state.groupObject[groupIndex].users.find(
    user => user.id === id
  );

  target.userName = newUserName;
};
export const reviesGroupInfo = function (id, newGroupName) {
  const target = state.groupObject.find(group => group.id === id);

  target.groupName = newGroupName;
};

//------------------------EVENT------------------------

export const createNewEvent = function () {
  // 確認使用者為分款者的名單
  checkSharerList();
  if (state.sharerId.length === 0) {
    alert('分款者為必填');
    return;
  }
  // 建立new Event Instance
  createNewEventObject();
  // 透過時間排序事件
  sortEventsOrder();
  storeLocalStorage();

  state.sharerId = [];
  state.sharer = [];
};

const createNewEventObject = function () {
  const spend = document.querySelector('.event-form__input--spend');
  const date = document.querySelector('.event-form__input--date');
  const type = document.querySelector('.event-form__input--type');
  const productName = document.querySelector('.event-form__input--name');
  const note = document.querySelector('.event-form__input--note');
  const payerId = document.querySelector('.event-form__input--payer');
  const payer = state.activeGroup[0].users.find(
    user => user.id === payerId.value
  );

  if (
    !Number.isFinite(+spend.value) ||
    Number(spend.value) < 0 ||
    Number(spend.value) % 1 !== 0
  ) {
    alert('請輸入正整數');
    state.sharerId = [];
    state.sharer = [];
    return;
  }

  // 建立new Event Instance
  const newEvent = new Event(
    spend.value,
    date.value,
    type.value,
    productName.value,
    note.value,
    payer.userName,
    payerId.value,
    state.sharer,
    state.sharerId,
    state.activeGroup[0].groupName,
    state.activeGroup[0].id,
    state.sharerId.length === state.activeGroup[0].users.length ? true : false
  );

  const index = state.groupObject.findIndex(
    group => group.id === state.activeGroup[0].id
  );

  state.groupObject[index].events.push(newEvent);
  setActiveGroup(state.groupObject[index]);
  updateUsersAmont(newEvent);
  storeLocalStorage();
};

export const deleteEvent = function (id) {
  // 刪除特定event
  const obj = state.activeGroup[0].events.find(event => event.id === id);
  const index = state.activeGroup[0].events.indexOf(obj);
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const activeGroupIndex = state.groupObject.indexOf(activeGroup);

  updateDeleteEventAmont(id);
  state.groupObject[activeGroupIndex].events.splice(index, 1);
  sortEventsOrder();
  setActiveGroup(state.groupObject[activeGroupIndex]);
  storeLocalStorage();
};

export const updateDeleteEventAmont = function (id) {
  // 更新被刪除event中使用者數值

  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );
  const activeGroupIndex = state.groupObject.indexOf(activeGroup);

  const deletedEvent = state.groupObject[activeGroupIndex].events.find(
    event => event.id === id
  );

  //更新收款者的值;
  const payer = state.groupObject[activeGroupIndex].users.find(
    user => user.id === deletedEvent.payerId
  );

  payer.assets = Number(payer.assets) - Number(deletedEvent.spend);

  //更新分款者的值;
  for (const i of deletedEvent.sharer) {
    const [sharer] = state.groupObject[activeGroupIndex].users.filter(
      user =>
        user.id === `${deletedEvent.sharerId[deletedEvent.sharer.indexOf(i)]}`
    );

    if (!sharer) return;

    sharer.debts = Number(
      Number(sharer.debts) -
        Number((deletedEvent.spend / deletedEvent.sharer.length).toFixed(2))
    ).toFixed(2);
  }
  // 更新使用者balance值
  updateUsersBalance();
};

export const createEventDateHeader = function (event) {
  // 建立日期標誌
  const dateSet = new Set(state.eventDateList);
  if (dateSet.has(event.date)) return false;
  state.eventDateList.push(event.date);
  storeLocalStorage();
  return true;
};

const checkSharerList = function () {
  // 確認使用者中誰為分款者
  document.querySelectorAll('input[type=checkbox]:checked').forEach(el => {
    state.sharerId.push(el.classList[1]);
    state.sharer.push(el.value);
    if (state.sharer.at(-1) === 'selectedAll') {
      state.sharer.splice(-1, 1);
      state.sharerId.splice(-1, 1);
    }
  });
};

export const sortEventsOrder = function () {
  //透過日期排序Event順序
  state.activeGroup[0].events = state.activeGroup[0].events
    .map(event => event)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
};

//------------------------DEBT RELATIONSHIP------------------------

export const debtRelationship = function () {
  const debtRelation = [];
  const renderArr = [];
  if (!state.activeGroup[0]) return;

  //在DebtRelation Array中push所有user的userName與balance
  state.activeGroup[0].users.map(obj => {
    debtRelation.push([`${obj.userName}`, `${obj.balance}`]);
  });

  //將DebtRelation內元素由大至小排序
  debtRelation.sort((a, b) => b[1] - a[1]);

  //宣告所需變數
  let creditor = debtRelation[0][0];
  let debtor = debtRelation[debtRelation.length - 1][0];
  let creditorPayment = +debtRelation[0][1];
  let debtorPayment = +debtRelation[debtRelation.length - 1][1];

  //若DebtRelation內只有預設使用者，或是尚無應收應付帳款，則顯示尚無應收/應付帳款
  if (
    debtRelation.length === 1 ||
    (creditorPayment === 0 && debtorPayment === 0)
  )
    return false;
  else {
    //若有應收/應付帳款時，執行此迴圈
    while (creditorPayment > 0 && debtorPayment < 0) {
      if (creditorPayment > debtorPayment) {
        //更新debtRelation帳款
        if (Math.abs(creditorPayment) > Math.abs(debtorPayment)) {
          debtRelation[0][1] = creditorPayment + debtorPayment;
          debtRelation[debtRelation.length - 1][1] =
            debtorPayment - debtorPayment;

          renderArr.push({ creditor, debtor, payment: -debtorPayment });
        } else if (
          Math.abs(creditorPayment) < Math.abs(debtorPayment) ||
          (Math.abs(creditorPayment) === Math.abs(debtorPayment) &&
            creditorPayment !== 0)
        ) {
          debtRelation[0][1] = creditorPayment - creditorPayment;
          debtRelation[debtRelation.length - 1][1] =
            debtorPayment + creditorPayment;
          renderArr.push({ creditor, debtor, payment: creditorPayment });
        } else {
          return;
        }

        //重新排序debtRelation
        debtRelation.sort((a, b) => b[1] - a[1]);

        //重新宣告變數
        creditor = debtRelation[0][0];
        debtor = debtRelation[debtRelation.length - 1][0];
        creditorPayment = Number(debtRelation[0][1]);
        debtorPayment = Number(debtRelation[debtRelation.length - 1][1]);
      }
    }
    return renderArr;
  }
};

//------------------------INIT------------------------

const getDeviceHeight = () => {
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(`執行成功，目前高度為${vh * 100}px`);
  });
};

const createDefaultUserObject = function (group) {
  // prettier-ignore
  if (group.users.length === 0) {
    newUser = new User('自己', 0, 0, state.activeGroup[0].groupName);
    group.users.push(newUser);
    setActiveGroup(group)
  } else return;
};

export const isAllMember = () => {
  const activeGroup = state.groupObject.find(
    group => group.id === state.activeGroup[0].id
  );

  const activeGroupIndex = state.groupObject.indexOf(activeGroup);

  state.groupObject[activeGroupIndex].events.map(event => {
    event.isAllMember =
      event.sharerId.length === state.groupObject[activeGroupIndex].users.length
        ? true
        : false;
  });

  setActiveGroup(state.groupObject[activeGroupIndex]);
  storeLocalStorage();
};

const createDefaultGroupObject = function () {
  if (state.groupObject.length === 0) {
    createNewGroup('預設群組');
  }
};

const setDefaultDate = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const dates = `${now.getDate()}`.padStart(2, 0);
  const todayDate = `${year}-${month}-${dates}`;
  const dateInput = document.querySelector('.event-form__input--date');
  dateInput.setAttribute('value', todayDate);
};

//------------------------LOCAL STORAGE------------------------

export const storeLocalStorage = function () {
  persistLocalData();
  getLocalData();
};

const persistLocalData = function () {
  localStorage.setItem('groups', JSON.stringify(state.groupObject));
  localStorage.setItem('activeGroup', JSON.stringify(state.activeGroup));
};

const getLocalData = function () {
  const groupsData = JSON.parse(localStorage.getItem('groups'));
  const activeGroupData = JSON.parse(localStorage.getItem('activeGroup'));
  if (!activeGroupData || !groupsData) return;
  state.groupObject = groupsData;
  state.activeGroup[0] = activeGroupData[0];
};

export const deleteAllLocalStorage = () => {
  localStorage.clear();
};

const init = function () {
  getDeviceHeight();
  getLocalData();
  createDefaultGroupObject();
  setDefaultDate();
  updateUsersBalance();
  persistLocalData();
};

init();
