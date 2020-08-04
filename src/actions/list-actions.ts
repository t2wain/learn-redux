import { ActionCreator } from "redux";
import {
  ListActionTypes,
  IListAddItemAction,
  IListDelItemAction,
  IListToggleItemAction
} from "./list-types";

export const addItem: ActionCreator<IListAddItemAction> = (item: string) => {
  return {
    type: ListActionTypes.ADD_ITEM,
    item: {
      id: Math.random(),
      name: item,
      checked: false
    }
  };
};

export const delItem: ActionCreator<IListDelItemAction> = (itemId: number) => {
  return {
    type: ListActionTypes.DEL_ITEM,
    itemId: itemId
  };
};

export const toggleItem: ActionCreator<IListToggleItemAction> = (
  itemId: number
) => {
  return {
    type: ListActionTypes.TOG_ITEM,
    itemId: itemId
  };
};
