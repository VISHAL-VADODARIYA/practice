const { configureStore } = require("@reduxjs/toolkit");

import dataSlice from "./dataSlice";
const store = configureStore({
    reducer:{
        data : dataSlice
    }
})
export default store;