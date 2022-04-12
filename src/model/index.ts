import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import { storage } from './redux-persist-taro-storage';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// 持久化中间件
const persistedReducer = persistReducer(
  {
    key: process.env.APP_NAME || 'undefined',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['session'],
  },
  rootReducer as any,
);

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger());
}

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // other store enhancers if any
);

export default function configStore() {
  const store = createStore(persistedReducer, enhancer);
  // 持久化
  persistStore(store);
  return store;
}
