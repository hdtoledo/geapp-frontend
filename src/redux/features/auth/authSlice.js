import { createSlice } from '@reduxjs/toolkit';

const storedFirstname = localStorage.getItem('firstname');

const initialState = {
  isLoggedIn: false,
  firstname: storedFirstname || "", 
  user: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    avatar: "",
    role: "user",
  },
  userID: ""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      
      localStorage.setItem('firstname', action.payload);
      state.firstname = action.payload;

    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.firstname = profile.firstname;
      state.user.lastname = profile.lastname;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.avatar = profile.avatar;
      state.user.role = profile.role;
      localStorage.setItem('userRole', profile.role);

    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.firstname;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
