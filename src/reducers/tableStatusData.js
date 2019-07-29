import { TOGGLE_TABLE } from "../constants/constants.js";

let initialTableData = new Array(16).fill(false);

const tableStatusData = (state = initialTableData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    default:
      return state;
  }
};

export default tableStatusData;
