import { QUIZ_ERROR, QUIZ_LOADING, QUIZ_SUCCESS } from "./../action.types";
const initState = {
  isLoading: false,
  isError: false,
};

function quizReducer(state = initState, action) {
  switch (action.type) {
    case QUIZ_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case QUIZ_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        userInfo: action.payload,
        user: action.user,
      };
    }
    case QUIZ_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
}
export default quizReducer;
