import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from './reducers'

export default createStore(rootReducers, devToolsEnhancer());