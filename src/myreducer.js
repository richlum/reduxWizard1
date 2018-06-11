// import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
// import { page } from './pageReducer'
// const reducer = combineReducers({
//     form: reduxFormReducer
//   });
const reducers = Object.assign({},{form:reduxFormReducer})


console.log('reducertype ', typeof reducers);

export { reducers }
