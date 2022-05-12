const initialState = {
    isLoggedIn: false,
    user: null,
    error: false,
    registerSuc: false,
    registerFail: false,
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                error: false,
                registerSuc: false,
                registerFail: false,
            }
        case "LOGIN_FAILURE":
            return {
                ...state,
                error: true,
                registerSuc: false,
                registerFail: false,
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                registerSuc: true,
                registerFail: false,
            }
        case "REGISTER_FAILURE":
            return {
                ...state,
                registerFail: true,
                registerSuc: false,
            }
        case "LOGOUT":
            return { initialState }
        default:
            return state
    }
}
