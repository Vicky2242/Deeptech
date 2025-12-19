import {createSlice} from '@reduxjs/toolkit'

// const initialState = {

// }

const messageSlice = createSlice({
    name:"message",
    initialState:{
        text:"No message",
        loading:false,
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        setMessage: (state.action) => {
            state.text = action.payload
            state.loading = false
        }
    }
});

export const {} = messageSlice.actions

export default messageSlice.reducer

export const showMsgAfterDelay = () => {
    return(dispatch) => {

        setTimeout(() => {
            dispatch(setMessage("Welcome to the Thunk Demo"))
        }, 2000)
    }
}