import en from '../Helpers/english.json'

export const initialState = {
  language: 'en',
  language_content: en,
}

export function reducer(prevState, action) {

  switch (action.type) {

    case 'UPDATE_LANGUAGE':
      return { ...prevState, language: action.data }

    case 'UPDATE_CONTENT_LANGUAGE':
      return { ...prevState, language_content: action.data }

    default:
      return prevState
  }
}