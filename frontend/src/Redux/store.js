import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import quizReducer from "./Quiz/quiz.reducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
