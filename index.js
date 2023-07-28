const store = require('./app/store')
const { promotionActions } = require('./features/promos/promotionSlice')
const bio101Actions = require('./features/biology/bio101Slice').bio101Actions
const bio102Actions = require('./features/biology/bio102Slice').bio102Actions
const cellBioActions = require('./features/biology/cellBio201Slice').cellBioActions
const westCivActions = require('./features/history/westCivSlice').westCivActions
const americanActions= require('./features/history/american18Slice').americanActions
const businessMathActions=require('./features/math/businessMathSlice').businessMathActions

console.log('initial state:', store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('updated state:', store.getState())
})

//dispatch actions on store

store.dispatch(bio101Actions.sold(2))

store.dispatch(bio101Actions.sold(5))
store.dispatch(bio101Actions.sold(7))
store.dispatch(bio101Actions.sold(15))
store.dispatch(bio101Actions.restock(15))
store.dispatch(promotionActions.restock(20))

unsubscribe()

//run by command line with node index.js