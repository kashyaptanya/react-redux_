import {
    GET_USER_DATA
} from "../action/type"

const initialState = {
    user_data: null
}

const user = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_USER_DATA:
            return {
                ...state,
                user_data: payload
            }
        default:
            return state
    }
}

export default user