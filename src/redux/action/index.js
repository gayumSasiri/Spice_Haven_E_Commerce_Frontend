// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}

// Clean cart
export const emptyCart = () => {
    return {
        type: "CLEAR_CART"
    };
};

// For Clearing the Cart on Logout
export const clearCart = () => {
    return {
        type: "LOGOUT"
    };
};