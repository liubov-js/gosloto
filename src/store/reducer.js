import * as actionTypes from './actionTypes';

const initialState = {
  message: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_MESSAGE: {
      return {
        message: action.message,
      };
    }
    default: 
      return state;
  }
};

export default reducer;
