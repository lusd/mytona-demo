const SET_LANGUAGE = 'SET-LANGUAGE';

let initialData = {
  language: 'ru'
}

const startDataReducer = (state = initialData, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.lang
      }
    default: return state
  }
}

export const setLanguage = (lang) => {
  return {type:SET_LANGUAGE, lang}
}

export default startDataReducer;
