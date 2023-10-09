'use client';
const { createSlice } = require("@reduxjs/toolkit");

const dataSlice = createSlice({
    name:'data',
    initialState : {data:[]},
    reducers:{
        fetchData(state,action){
            state.data = action.payload
        }
    }
})
export const {fetchData} = dataSlice.actions;
export default dataSlice.reducer;