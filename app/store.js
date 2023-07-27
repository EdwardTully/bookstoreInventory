const configureStore = require('@reduxjs/toolkit').configureStore
const bio101Reducer = require('../features/biology/bio101Slice')
const bio102Reducer = require('../features/biology/bio102Slice')
const cellBioReducer = require('../features/biology/cellBio201Slice')
const westCivReducer = require('../features/history/westCivSlice')
const americanReducer = require('../features/history/american18Slice')
const businessMathReducer = require('../features/math/businessMathSlice')


const store = configureStore({
    reducer: {
        bio101: bio101Reducer,
        bio102: bio102Reducer,
        cellBio: cellBioReducer,
        westCiv: westCivReducer,
        american: americanReducer,
        bsnMath: businessMathReducer,
    }
})

module.exports = store