import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Stock_reducer from "./stock/stock.reducer"

let rootReducer=combineReducers({
    stock:Stock_reducer
})
export const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))
