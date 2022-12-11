import { configureStore } from "@reduxjs/toolkit";

//adding slices
import toggleNav from "./toggleNav";

export default configureStore({
    reducer: {
        toggleNav,
    }
})