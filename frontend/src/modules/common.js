const NAV_SWITCH = "common/NAV_SWITCH";

export const navSwitch = (navState) => {
  return {
    type: NAV_SWITCH,
    payload: { navState },
  };
};

const initialState = {
  navState: true,
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case NAV_SWITCH:
      return { ...state, navState: action.payload };
    default:
      return state;
  }
};

export default common;
