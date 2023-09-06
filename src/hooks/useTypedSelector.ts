import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/rootReducer";
import { AppDispatch } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;