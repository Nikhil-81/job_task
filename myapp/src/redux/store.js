import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import Chart_reducer from "./chart_redux/chart_reducer"
import Deeal_reducer from "./deal_details/deal.reducer"
import Stock_reducer from "./stock/stock.reducer"

let rootReducer=combineReducers({
    stock:Stock_reducer,
    deal:Deeal_reducer,
    chart:Chart_reducer,
})
export const Store=legacy_createStore(rootReducer,applyMiddleware(thunk))
