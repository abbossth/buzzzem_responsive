import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterSlice from "./counter/counterSlice";
import sidebarOpenSlice from "./sidebar";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const sidebarPersistConfig = {
  key: "sidebar",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  counter: persistReducer(persistConfig, counterSlice),
  sidebar: persistReducer(sidebarPersistConfig, sidebarOpenSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
