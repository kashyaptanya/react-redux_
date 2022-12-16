import { combineReducers } from 'redux'
import users from "../reducer/user"

const appReducer = combineReducers({
    users
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer 