import * as actionTypes from './actionTypes';

export function createFirstField(number) {
  return {
    type: actionTypes.CREATE_FIRST_FIELD,
    number,
  };
}

export function createSecondField(number) {
  return {
    type: actionTypes.CREATE_SECOND_FIELD,
    number,
  };
}

export function showResult() {
  return {
    type: actionTypes.SHOW_RESULT,
  };
}

export function randomSelectionNumbers() {
  return {
    type: actionTypes.RANDOM_SELECTION_NUMBERS,
  };
}
