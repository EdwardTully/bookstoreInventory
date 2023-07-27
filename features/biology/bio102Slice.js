const createSlice = require('@reduxjs/toolkit').createSlice

const initialState= {
    bio102: 15,
}

const bio102Slice = createSlice({
    name: 'bio102',
    initialState:initialState,
    reducers: {
        sold: (state, action)=>{
            state.bio102 -= action.payload
        },
        restock: (state, action)=>{
            state.bio102 += action.payload
        }
    }
})

module.exports = bio102Slice.reducer
module.exports.bio102Actions = bio102Slice.actions