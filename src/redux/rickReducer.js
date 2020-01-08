import {rickAPI} from './../api/rick&morty.js';
const GET_RICK_DATA = 'GET-RICK-DATA';
const IS_FETCHING_TRUE = 'IS-FETCHING-TRUE';


const initialState = {
  isFetching: true,
  info: {
    count: 0,
    pages: 0
  },
  results: []
}

const rickData = (state = initialState, action) => {
  switch (action.type) {
    case GET_RICK_DATA:
      return {
        ...state,
        ...action.payload.data,
        isFetching: false
      }
    case IS_FETCHING_TRUE:
    debugger;
      return {
        ...state,
        isFetching: true
      }
    default:
      return state;
  }
}

const setIsFetchingTrue = () => {
  return { type: IS_FETCHING_TRUE }
}

const setRickData = (data) => {
  return { type: GET_RICK_DATA, payload: {data}}
}

export const getRickData = (page) => {
  setIsFetchingTrue();
  return (dispatch) => {
    return (
      rickAPI.getCharacters(page).then(data =>
        {
        if (data) {
          dispatch(setRickData(data.data.characters))
        }
      })
    )
  }
}

export default rickData;
