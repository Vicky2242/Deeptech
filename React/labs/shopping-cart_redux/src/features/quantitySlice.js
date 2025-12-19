import {createSlice} from "@reduxjs/toolkit";

const initialState = {items: 0};

const quantitySlice = createSlice({
    name:"quantity",
    initialState,
    reducers: {
        addItem: (state) => {
            state.items += 1;
            console.log("Item added. Total Items:", state.items);
        },
        removeItem: (state) => {
            if(state.items > 0) {
                state.items -= 1;
                console.log("Item removed. Total Items:", state.items);
            }
        },
            resetCart: (state) => {
                state.items = 0;
                console.log("Cart reset. Total items: ", state.items);
            },
    },
    
});

export const {addItem, removeItem, resetCart} = quantitySlice.actions;
export default quantitySlice.reducer;