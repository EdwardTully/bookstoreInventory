const createSlice = require('@reduxjs/toolkit').createSlice
const initialState={
    cellBio: 12,
}

const cellBio201Slice = createSlice({
    name: 'cellBio201',
    initialState,
    reducers:{
        sold: (state, action)=>{
            state.cellBio -= action.payload
        },
        restock: (state, action)=>{
            state.cellBio += action.payload
        }
    }
})

module.exports = cellBio201Slice.reducer
module.exports.cellBioActions = cellBio201Slice.actions