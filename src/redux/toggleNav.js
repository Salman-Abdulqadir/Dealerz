import { createSlice } from "@reduxjs/toolkit";

const toggleNav = createSlice({
    name: "isNavActive",
    initialState: {
        isVisible: false
    },
    reducers:{
        showNav: (state) => {
            state.isVisible = true;
        },
        hideNav: (state) => {
            state.isVisible = false;
        }
    }
})


export const {showNav, hideNav} = toggleNav.actions;
export default toggleNav.reducer;