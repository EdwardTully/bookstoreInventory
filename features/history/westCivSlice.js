const createSlice = require('@reduxjs/toolkit').createSlice

const initialState={
    westCiv: 22,
}

const westCivSlice = createSlice({
    name: 'westCiv',
    initialState: initialState,
    reducers: {
        sold: (state, action)=>{
            state.westCiv -= action.payload
        },
        restock: (state, action)=>{
            state.westCiv += action.payload
        }
    }
})

module.exports = westCivSlice.reducer
module.exports.westCivActions = westCivSlice.actions
