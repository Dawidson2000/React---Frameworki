import { combineReducers } from 'redux'
import postsReducer  from './Api/posts'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer