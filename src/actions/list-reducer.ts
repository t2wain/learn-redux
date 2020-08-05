import { Reducer } from "redux";
import { ListActionTypes, ListActions, IItem } from "./list-types";

export const listReducer: Reducer<IItem[], ListActions> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ListActionTypes.ADD_ITEM_BEGIN:
      return state;
    case ListActionTypes.ADD_ITEM_SUCCESS:
      return [...state, action.item];
    case ListActionTypes.ADD_ITEM_ERROR:
      return state;
    case ListActionTypes.DEL_ITEM:
      return state.filter(i => i.id !== action.itemId);
    case ListActionTypes.TOG_ITEM:
      return state.map(i => {
        if (i.id === action.itemId) {
          return { ...i, checked: !i.checked };
        } else return i;
      });
    default:
      return state;
  }
};
