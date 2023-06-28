const { createSlice } = require("@reduxjs/toolkit");

const dataSlice = createSlice({
    name:'data',
    initialState : [],
    reducers:{
        fetchData(state,action){
            state = action.payload
        }
    }
})
export const {fetchData} = dataSlice.actions;
export default dataSlice.reducer;