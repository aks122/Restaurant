    import countValue from "./Reducers"
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";

// import products from './Components/itemCardAdd'

const persistConfig = {
    key: 'root',
    storage,
  }
const persistReducers = persistReducer(persistConfig, countValue)

const Store = configureStore ({
  
    reducer: {
        persistReducers,
        
    },
    // products,
})

export const persistor=persistStore(Store)
export default Store