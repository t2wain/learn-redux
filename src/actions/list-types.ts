export enum ListActionTypes {
  ADD_ITEM = "ADD_ITEM",
  DEL_ITEM = "DEL_ITEM",
  TOG_ITEM = "TOG_ITEM"
}

export interface IItem {
  id: number;
  name: string;
  checked: boolean;
}

export interface IListAddItemAction {
  type: ListActionTypes.ADD_ITEM;
  item: IItem;
}

export interface IListDelItemAction {
  type: ListActionTypes.DEL_ITEM;
  itemId: number;
}

export interface IListToggleItemAction {
  type: ListActionTypes.TOG_ITEM;
  itemId: number;
}

export type ListActions =
  | IListAddItemAction
  | IListDelItemAction
  | IListToggleItemAction;
