const createSlice = require('@reduxjs/toolkit').createSlice


//this slice is created with a extraReducer tied to the bio102 sold action.  Every bio102 sold reduces this freeby stock by one!

const initialState = {
    bookmarks: 150,
}

const promotionSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        give: (state)=>{
            state.bookmarks --
        },
        restock: (state, action)=>{
            state.bookmarks += action.payload
        }
    },
    extraReducers: {
        //slice reducer name/action. whenever bio101 sold is dispatched, the function fires
        ['bio101/sold']:(state, action)=>{
            state.bookmarks -= action.payload
        }
    }
})

module.exports = promotionSlice.reducer
module.exports.promotionActions = promotionSlice.actions