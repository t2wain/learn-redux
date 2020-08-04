import { ActionCreator } from "redux";
import { ListActionTypes, IListAddItemAction } from "./list-types";

export const addItem: ActionCreator<IListAddItemAction> = (item: string) => {
  return {
    type: ListActionTypes.ADD_ITEM,
    item: {
      id: Math.random(),
      name: item
    }
  };
};
