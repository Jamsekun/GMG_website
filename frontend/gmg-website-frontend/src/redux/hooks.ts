import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "./store";

export const useStoreSelector = useSelector.withTypes<RootState>();
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();