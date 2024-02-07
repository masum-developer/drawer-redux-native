import { combineReducers, createStore } from 'redux';
import counterReducer from './reducers/counter';
import cartReducer from './reducers/cartReducer'

const routeReducer = combineReducers({counterReducer,cartReducer})

const store = createStore(routeReducer);

export default store;
