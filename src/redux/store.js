// import {configureStore} from '@reduxjs/toolkit';
// import rootReducers from './reducer';
// const store = configureStore({
//     reducer: rootReducers,

// })

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage
import rootReducers from './reducer'; // Import your root reducer

// Create a persist configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Configure the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer,
});

// Create a persistor for the store
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };
