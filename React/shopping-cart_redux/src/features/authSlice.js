

const authSlice = createSlice({
    intialState: (

    ),
    reducers: {

    }
});

export const {loginStart, loginSuccess, logout} = authSlice.actions

export default authSlice.reducers

export const loginUser = (username, password) => {
    return async(dispatch)

    dispatch(loginStart())

    setTimeout (() => {
        if(username === "admin" && password === "1234")
            dispatch(loginSuccess({name: "Admin User"}))
    }

}