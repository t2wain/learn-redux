export enum ListActionTypes {
  ADD_ITEM = "ADD_ITEM"
}

export interface IItem {
  id: number;
  name: string;
}

export interface IListAddItemAction {
  type: ListActionTypes.ADD_ITEM;
  item: IItem;
}
