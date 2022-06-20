import * as actionTypes from './actionTypes';

export function getMessage(message) {
  return {
    type: actionTypes.GET_MESSAGE,
    message,
  };
}
