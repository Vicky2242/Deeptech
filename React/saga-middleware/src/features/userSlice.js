import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUserFailure: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchUsers,
  fetchUserSuccess,
  fetchUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
