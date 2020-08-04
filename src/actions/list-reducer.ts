import { Reducer } from "redux";
import { ListActionTypes, IListAddItemAction, IItem } from "./list-types";

export const listReducer: Reducer<IItem[], IListAddItemAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ListActionTypes.ADD_ITEM:
      return [...state, action.item];
    default:
      return state;
  }
};
