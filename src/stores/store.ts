import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/auth/loginSlice";
import {
  productAddReducer,
  productAllReducer,
  productDetailReducer,
} from "./slices/product/productSlice";
import cartSlice from "./slices/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  transactionAllReducer,
  transactionAddReducer,
  transactionUpdateReducer,
} from "./slices/transaction/transactionSlice";
import userSlice from "./slices/users/userSlice";
import userIdSlice from "./slices/users/userIdSlice";
import registerSlice from "./slices/auth/registerSlice";

export const store = configureStore({
  reducer: {
    loginState: loginSlice,
    regisState: registerSlice,
    productAllState: productAllReducer,
    productDetailState: productDetailReducer,
    productAddState: productAddReducer,
    cartState: cartSlice,
    transactionState: transactionAllReducer,
    transactionAddState: transactionAddReducer,
    transactionUpdateState: transactionUpdateReducer,
    userstate: userSlice,
    useridstate: userIdSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
