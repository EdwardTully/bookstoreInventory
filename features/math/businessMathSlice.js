const createSlice=require('@reduxjs/toolkit').createSlice

const initialState={
    bsnMath: 19,
}

const businessMathSlice = createSlice({
    name: 'bsnMath',
    initialState: initialState,
    reducers: {
        sold:(state, action)=>{
            state.bsnMath -= action.payload
        },
        restock: (state, action)=>{
            state.bsnMath += action.payload
        }
    }
})

module.exports = businessMathSlice.reducer
module.exports.businessMathActions = businessMathSlice.actions