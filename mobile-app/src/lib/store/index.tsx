import { combineReducers, createStore, applyMiddleware } from 'redux';
//@ts-ignore
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { mainReducer } from './mainReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { onboardingReducer } from '../../features';
const persistConfig = {
  key: 'main',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  main: persistReducer({ ...persistConfig, key: 'main' }, mainReducer),
  onboardingReducer: persistReducer(
    { ...persistConfig, key: 'onboarding' },
    onboardingReducer,
  ),
});

let enhacers: any;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  enhacers = applyMiddleware(thunk, createLogger({ collapsed: true }));
} else {
  enhacers = applyMiddleware(thunk);
}

function configureStore() {
  const store = createStore(rootReducer, undefined, enhacers);
  return store;
}

export const store = configureStore();
export const persistor = persistStore(store);
