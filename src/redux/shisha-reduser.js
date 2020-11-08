import { shishaAPI } from "./../api/api";

const SET_SHISHA = "SET_SHISHA";
const IS_FETCHING = "IS-FETCHING";

const initialState = {
  shishaList: [],
  isFetchingValue: false,
};

const shishaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHISHA: {
      return { ...state, shishaList: [...action.data] };
    }
    case IS_FETCHING: {
      return { ...state, isFetchingValue: action.isFetchingValue };
    }
    default:
      return state;
  }
};

export const setShisha = (data) => ({ type: SET_SHISHA, data });
export const isFatchingFunc = (isFetchingValue) => ({
  type: IS_FETCHING,
  isFetchingValue,
});
export const initialShisha = () => {
  return (dispatch) => {
    shishaAPI.initial()
  };
};
export const getShisha = () => {
  return (dispatch) => {
    dispatch(isFatchingFunc(true));
    shishaAPI.getShishaList().then((data) => {
      dispatch(setShisha(data));
      dispatch(isFatchingFunc(false));
    });
  };
};

export default shishaReducer;
