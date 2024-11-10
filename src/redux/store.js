import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campers/slice.js';
import favoritesReducer from './favorites/slice.js';
import filtersReducer from './filters/slice.js'

import {
  PAUSE,
  FLUSH,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};

const persistFavoritesReducer = persistReducer(persistConfig, favoritesReducer);


export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorites: persistFavoritesReducer,
    filters: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);