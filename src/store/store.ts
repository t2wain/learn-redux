import { createStore, Store, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "../actions/counter-reducer";
import { listReducer } from "../actions/list-reducer";
import { IItem } from "../actions/list-types";

export interface IAppState {
  count: number;
  items: IItem[];
}

const rootReducer = combineReducers<IAppState>({
  count: counterReducer,
  items: listReducer
});

export default function configureStore(): Store<IAppState> {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
