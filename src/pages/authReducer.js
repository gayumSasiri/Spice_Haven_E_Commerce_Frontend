const initialState = {
    isAuthenticated: true, 
    user: { id: 1, name: "John Doe", role: "admin" }, // This will store user data after login, e.g., { id, name, role: 'buyer' | 'seller' | 'admin' }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user, // Assuming action.payload.user contains the user object with the role
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
