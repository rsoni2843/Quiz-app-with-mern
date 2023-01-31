import axios from "axios";
import { QUIZ_LOADING, QUIZ_ERROR, QUIZ_SUCCESS } from "./../action.types";

const getQuiz = (info) => async (dispatch) => {
  dispatch({ type: QUIZ_LOADING });
  try {
    console.log(info);
    let res = await axios.get(`https://m15-bck.vercel.app/getQuiz`, {
      params: info,
    });
    console.log(res)
    dispatch({ type: QUIZ_SUCCESS, payload: res.data, user: info });
  } catch (err) {
    dispatch({ type: QUIZ_ERROR });
  }
};
export default getQuiz;
