import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import initialState from './initialState';
import reducers from './reducers';

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(),
);

export default store;