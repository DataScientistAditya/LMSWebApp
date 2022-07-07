import { createSlice } from "@reduxjs/toolkit";


const InitialState={
    isloggedin:false,
    isStudent:false,
    isTeacher:false,
    isAdmin:false,
    username:null,
    usertoken:null,
}


const AuthSlicer = createSlice({
    name:"userauth",
    initialState:InitialState,
    reducers:{
        setSignin:(state, action)=>{
            state.usertoken = action.payload.token;
            state.username = action.payload.username;
            state.isStudent = action.payload.isStudent;
            state.isTeacher = action.payload.isTeacher;
            state.isAdmin = action.payload.isAdmin;
            state.isloggedin = true;
        },
        
        setSignOut:(state)=>{
            state.isloggedin = false;
            state.isStudent = false;
            state.isTeacher = false;
            state.isAdmin = false;
            state.username = null;
            state.usertoken = null;
        }
    }
});


export const {setSignin, setSignOut} = AuthSlicer.actions;

export const selectIsLoggedIn = (state)=> state.userauth.isloggedin;
export const selectIsStudent = (state)=> state.userauth.isStudent;
export const selectIsTeacher = (state)=> state.userauth.isTeacher;
export const selectIsAdmin = (state)=> state.userauth.isAdmin;
export const selectUsername = (state)=> state.userauth.username;
export const selectUserToken = (state)=> state.userauth.usertoken;

export default AuthSlicer.reducer;