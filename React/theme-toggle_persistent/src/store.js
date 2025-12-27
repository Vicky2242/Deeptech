import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./features/themeSlice"; 

// 1. Combine reducers
const rootReducer = combineReducers({
  theme: themeReducer,
});

// 2. Persist config
const persistConfig = {
  key: "root",
  storage,
};

// 3. Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // avoid warnings with redux-persist
    }),
});

// 5. Persistor
export const persistor = persistStore(store);