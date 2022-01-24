'use strict';

import * as model from './model';
import groupsView from './views/groupsView.js';
import payerView from './views/usersView/payerView.js';
import sharerView from './views/usersView/sharerView.js';
import userMngtView from './views/usersView/userMngtView.js';
import eventsView from './views/eventsView/eventsView.js';
import eventsHeaderView from './views/eventsView/eventsHeaderView.js';
import balanceView from './views/balanceView.js';
import debtsView from './views/usersView/debtsView';

const controlRenderAll = function () {
  groupsView.render(model.state.groupObject);
  payerView.render(model.state.activeGroup[0].users);
  sharerView.render(model.state.activeGroup[0].users);
  userMngtView.render(model.state.activeGroup[0].users);
  groupsView._generateActiveGroup(model.state.activeGroup[0].id);
  controlRenderEvents();
};

// Groups
const controlRenderGroups = function () {
  groupsView.render(model.state.groupObject);
};

const controlActiveGroup = function (id = undefined) {
  if (!id) {
    return model.state.activeGroup[0].id;
  }

  model.setActiveGroup(model.state.groupObject.find(group => group.id === id));
  controlRenderAll();
  return id;
};

const controlCreateNewGroup = function () {
  const newGroupName = document.querySelector('.newGroupName').value;
  model.createNewGroup(newGroupName);

  controlRenderAll();
  groupsView._generateActiveGroup(model.state.activeGroup[0].id);
};

const controlDeleteGroup = function (id) {
  if (model.state.groupObject.length === 1) {
    alert('請先新增群組，再刪除此群組');
    return;
  }

  model.deleteGroup(id);
  controlRenderAll();
};

const controlReviseGroup = function (id, newGroupName) {
  if (
    !model.state.groupObject.some(group => group.groupName === newGroupName)
  ) {
    model.reviesGroupInfo(id, newGroupName);
    model.setActiveGroup();
    controlRenderAll();
  } else {
    model.setActiveGroup();
    controlRenderAll();
    return true;
  }
};

//Users
const controlRenderPayers = function () {
  payerView.render(model.state.activeGroup[0].users);
};

const controlRenderSharers = function () {
  sharerView.render(model.state.activeGroup[0].users);
};

const controlRenderUserMngts = function () {
  userMngtView.render(model.state.activeGroup[0].users);
};

const controlCreateNewUser = function (newUserName) {
  model.createNewUser(newUserName);
  model.updateUsersBalance();
  model.isAllMember();
  controlRenderAll();
};

const controlDeleteUser = function (id) {
  model.deleteUser(id);
  model.updateUsersBalance();
  model.isAllMember();
  controlRenderAll();
};

//Events
const controlRenderEvents = function () {
  document.querySelector('.event-list').innerHTML = '';
  model.state.eventDateList = [];
  model.state.activeGroup[0].events.map(event => {
    if (model.createEventDateHeader(event)) {
      eventsHeaderView.render(event, false);
    }
    eventsView._parentElement = document.querySelector(`.Date${event.date}`);
    eventsView.render(event, false);
  });
  eventsView._parentElement = document.querySelector('.event-list');
  balanceView.render(model.state.activeGroup[0].users);
  debtsView.render(model.debtRelationship());
};

const controlRenderCreateNewEvents = function () {
  model.createNewEvent();
  controlRenderEvents();
};

const controlDeleteEvent = function (id) {
  model.deleteEvent(id);
  controlRenderEvents();
};

const controlDeleteAllLocalStorage = function () {
  model.deleteAllLocalStorage();
};

const controlReviseUserMngt = function (id, newUserName) {
  if (
    model.state.activeGroup[0].users
      .map(user => user.userName === newUserName)
      .includes(true)
  ) {
    alert('已有相同使用者，請重新輸入');
    return;
  }

  model.reviesUserInfo(id, newUserName);
  model.setActiveGroup();
  controlRenderAll();
};
const init = function () {
  // Render
  groupsView._addHandlerRender(controlRenderGroups);
  groupsView._addHandlerAddActive(controlActiveGroup);
  payerView._addHandlerRender(controlRenderPayers);
  sharerView._addHandlerRender(controlRenderSharers);
  userMngtView._addHandlerRender(controlRenderUserMngts);
  eventsView._addHandlerRender(controlRenderEvents);
  sharerView._addHandlerMarkSharer();

  // Create
  groupsView._addHandlerNewGroup(controlCreateNewGroup);
  eventsView._addHandlerNewEvent(controlRenderCreateNewEvents);
  userMngtView._addHandlerNewUser(controlCreateNewUser);

  // Delete
  eventsView._addHandlerDeleteEvent(controlDeleteEvent);
  groupsView._addHandlerDeleteGroup(controlDeleteGroup);
  userMngtView._addHandlerDeleteUser(controlDeleteUser);

  // Revise
  groupsView._addHandlerReviseGroup(controlReviseGroup);
  userMngtView._addHandlerReviseUser(controlReviseUserMngt);

  // ToggleVisible
  groupsView._addHandlerToggleSidebar();
  groupsView._addHandlerToggleCreateWindow();
  balanceView._addHandlerToggleSidebar();
  userMngtView._addHandlerToggleWindow();
  userMngtView._addHandlerToggleNewUserWindow();
  sharerView._addHandlerSelectAll();
  eventsView._addHandlerScrolltoEventTop();

  // Local Storage
  groupsView._addHandlerDeleteAllGroups(controlDeleteAllLocalStorage);
};
init();
