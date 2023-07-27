const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    amer18: 25,
}

const american18Slice = createSlice({
    name: 'amer18',
    initialState,
    reducers: {
        sold: (state, action)=>{
            state.amer18-= action.payload
        },
        restock: (state,action)=>{
            state.amer18 += action.payload
        }
    }
})

module.exports=american18Slice.reducer
module.exports.americanActions = american18Slice.actions

