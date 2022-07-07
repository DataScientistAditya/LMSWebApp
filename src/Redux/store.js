import { configureStore } from "@reduxjs/toolkit";
import AuthSlicer from "./slicer";


export const Store =configureStore({
    reducer:{
        userauth: AuthSlicer
    },
})