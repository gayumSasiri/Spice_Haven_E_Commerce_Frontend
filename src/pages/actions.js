export const loginSuccess = (user) => {
    // console.log(user); 
    return {
      type: 'LOGIN_SUCCESS',
      payload: {
        user,
      },
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};
  