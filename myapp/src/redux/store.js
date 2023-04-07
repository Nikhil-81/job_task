import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Deeal_reducer from "./deal_details/deal.reducer"
import Stock_reducer from "./stock/stock.reducer"

let rootReducer=combineReducers({
    stock:Stock_reducer,
    deal:Deeal_reducer
})
export const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))
