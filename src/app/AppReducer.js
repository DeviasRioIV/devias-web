import en from './Helpers/english.json'

const initialState = {
  language: 'en',
  language_content: en
}

export const reducer = [reduce, initialState]

function reduce(prevState, action) {

  switch (action.type) {

    case 'UPDATE_LANGUAGE':
      prevState.language = action.data
      break

    case 'UPDATE_CONTENT_LANGUAGE':
      prevState.language_content = action.data

  }

  return {...prevState}

}
