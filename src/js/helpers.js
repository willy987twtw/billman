import { activeGroup } from './config.js';
import * as model from './model.js';

// export const findActiveGroup = function () {
//   return model.state.groupObject.find(
//     group => group.id === model.state.activeGroupId[0]
//   );
// };

export const changeActiveGroup = function (group) {
  model.state.activeGroup = group;
};
