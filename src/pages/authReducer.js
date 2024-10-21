const initialState = {
    isAuthenticated: false, 
    // user: { id: 1, name: "John Doe", role: "buyer" }, //  eg:- { id, name, role: 'buyer' | 'seller' | 'admin' }
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            // console.log("LOGIN_SUCCESS action dispatched", action);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user, 
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
