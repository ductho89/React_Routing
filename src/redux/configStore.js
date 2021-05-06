import { applyMiddleware, combineReducers, createStore } from "redux"
import { PhimReducer } from './reducers/PhimReducer'
import { FakebookReducer } from "./reducers/FakebookReducer"
import { NguoiDungReducer } from "./reducers/NguoiDungReducer"
import reduxThunk from "redux-thunk"

const rootReducer = combineReducers({
  FakebookReducer,
  PhimReducer,
  NguoiDungReducer,
  // contains states

});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk))