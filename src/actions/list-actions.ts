import { ActionCreator } from "redux";
import { createItemLocal } from "../api";
import {
  ListActionTypes,
  IListAddItemBeginAction,
  IListAddItemSuccessAction,
  IListAddItemErrorAction,
  IListDelItemAction,
  IListToggleItemAction,
  IItem
} from "./list-types";

export const addItemAction = (name: string, isError?: boolean) => {
  return (dispatch: any) => {
    dispatch(addItemBeginAction());
    createItemLocal(name)
      .then(item => {
        dispatch(addItemSuccessAction(item));
      })
      .catch(errmsg => {
        dispatch(addItemErrorAction("Error"));
      });
  };
};

export const addItemBeginAction: ActionCreator<
  IListAddItemBeginAction
> = () => {
  return {
    type: ListActionTypes.ADD_ITEM_BEGIN
  };
};

export const addItemSuccessAction: ActionCreator<IListAddItemSuccessAction> = (
  item: IItem
) => {
  return {
    type: ListActionTypes.ADD_ITEM_SUCCESS,
    item
  };
};

export const addItemErrorAction: ActionCreator<IListAddItemErrorAction> = (
  errmsg: string
) => {
  return {
    type: ListActionTypes.ADD_ITEM_ERROR,
    errmsg
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
