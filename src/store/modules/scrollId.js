const SET_SCROLL_ID = 'SET_SCROLL_ID';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SCROLL_ID:
      return action.payload;
    default: return state;
  }
};

export const setScrollId = (payload) => ({ type: SET_SCROLL_ID, payload });
