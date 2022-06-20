import * as actionTypes from './actionTypes';

const initialState = {
  firstField: [],
  secondField: [],
  winningResult: {
    first: [],
    second: [],
  },
  isTicketWon: true,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CREATE_FIRST_FIELD: {
      const firstField = state.firstField;
      if (firstField.length < 8) {
        if (firstField.includes(action.number)) {
          firstField.splice(firstField.indexOf(action.number), 1);
        } else {
          firstField.push(action.number);
        }
      } else {
        if (firstField.includes(action.number)) {
          firstField.splice(firstField.indexOf(action.number), 1);
        }
      }
      console.log(firstField);
      return {
        ...state,
        firstField: firstField,
      };
    }
    case actionTypes.CREATE_SECOND_FIELD: {
      const secondField = state.secondField;
      if (secondField.length < 1) {
        if (secondField.includes(action.number)) {
          secondField.pop(action.number);
        } else {
          secondField.push(action.number);
        }
      } else {
        if (secondField.includes(action.number)) {
          secondField.pop(action.number);
        }
      }
      console.log(secondField);
      return {
        ...state,
        secondField: secondField,
      };
    }
    case actionTypes.SHOW_RESULT: {
      const firstResult = [];
      const secondResult = [];
      let isTicketWon;
      for (let i = 1; i <= 19; i++) {
        const num = Math.floor(Math.random() * 19) + 1;
        if (!firstResult.includes(num) && firstResult.length < 8) {
          firstResult.push(num);
        }
      }
      for (let i = 1; i <= 2; i++) {
        const num = Math.floor(Math.random() * 2) + 1;
        if (secondResult.length < 1) {
          secondResult.push(num);
        }
      }

      if (state.firstField.length === 8 && state.secondField.length === 1) {
        if (
          state.firstField.filter(num => firstResult.includes(num)).length >= 4 || 
          (state.firstField.filter(num => firstResult.includes(num)).length >= 3 && state.secondField[0] === secondResult[0])
        ) {
          isTicketWon = true;
        } else {
          isTicketWon = false;
        }
      }
      return {
        ...state,
        winningResult: {
          first: firstResult,
          second: secondResult,
        },
        isTicketWon: isTicketWon,
      };
    }
    case actionTypes.RANDOM_SELECTION_NUMBERS: {
      const firstField = [];
      const secondField = [];
      for (let i = 1; i <= 19; i++) {
        const num = Math.floor(Math.random() * 19) + 1;
        if (!firstField.includes(num) && firstField.length < 8) {
          firstField.push(num);
        }
      }
      for (let i = 1; i <= 2; i++) {
        const num = Math.floor(Math.random() * 2) + 1;
        if (secondField.length < 1) {
          secondField.push(num);
        }
      }
      return {
        ...state,
        firstField: firstField,
        secondField: secondField,
      };
    }
    default: 
      return state;
  }
};

export default reducer;
