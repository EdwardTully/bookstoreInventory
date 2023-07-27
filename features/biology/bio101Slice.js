const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    bio101: 15,
}

const bio101Slice = createSlice({
    name: 'bio101',
    initialState,
    reducers: {
        sold: (state, action)=>{
            state.bio101 -= action.payload
        },
        restock: (state, action)=>{
            state.bio101 += action.payload
        }
    }
})

module.exports = bio101Slice.reducer
module.exports.bio101Actions = bio101Slice.actions