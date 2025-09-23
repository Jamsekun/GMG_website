import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, type PersistConfig } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import authReducer, {type AuthState } from "./slices/auth";
import productReducer, { type ProductsState } from "./slices/products";
import cartReducer, { type CartState } from "./slices/cart";
import profileReducer, { type ProfileState } from "./slices/profile";
import orderReducer, { type OrderState } from "./slices/order";

const token = sessionStorage.getItem("token");
const expiration = sessionStorage.getItem("tokenExpiration");
const isTokenValid = token && expiration && Date.now() < parseInt(expiration);

if (!isTokenValid) {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("tokenExpiration");
}

const authPersistConfig: PersistConfig<AuthState> = {
  key: "auth:coffeeShop",
  storage: storageSession,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const profilePersistConfig: PersistConfig<ProfileState> = {
  key: "profile:coffeeShop",
  storage: storageSession,
  whitelist: ["profile"],
};

const persistedProfileReducer = persistReducer(
  profilePersistConfig,
  profileReducer
);

const productPersistConfig: PersistConfig<ProductsState> = {
  key: "product:coffeeShop",
  storage: storageSession,
  whitelist: [],
};

const persistedProductReducer = persistReducer(
  productPersistConfig,
  productReducer
);

const cartPersistConfig: PersistConfig<CartState> = {
  key: "cart:coffeeShop",
  storage: storageSession,
  whitelist: [],
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

const orderPersistConfig: PersistConfig<OrderState> = {
  key: "order:coffeeShop",
  storage: storageSession,
  whitelist: [],
};

const persistedOrderReducer = persistReducer(orderPersistConfig, orderReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    profile: persistedProfileReducer,
    products: persistedProductReducer,
    cart: persistedCartReducer,
    order: persistedOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["auth.register", "auth.rehydrate"],
      },
    }),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;