import {createContext, useReducer} from "react";

export const CartContext = createContext();
export const CartProvider = (props) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                const tempstate = state.filter((item) => item.id === action.payload.id);
                if (tempstate.length > 0) {
                    return state;
                } else {
                return [...state, action.payload]
                }
            case "REMOVE_FROM_CART":
                return {
                    ...state,
                    cart: state.filter(item => item.id !== action.payload)
                }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };


    return (
        <CartContext.Provider value={{info}}>
            {props.children}
        </CartContext.Provider>
    )
}
