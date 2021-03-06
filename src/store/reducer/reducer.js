import React from "react";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  traversedQuestions: [],
  currentQuestion : 1
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUESTION_TRAVERSAL:
      return addToTraversedQuestions(state, action.id);
    default:
      return state;
  }
};

const addToTraversedQuestions = (state, id) => {
  let newTravserd = [...state.traversedQuestions];
  if (newTravserd.indexOf(id) < 0) {
    newTravserd.push(id);
  }
  return {
    ...state,
    traversedQuestions: newTravserd
  };
};
export default reducer;
