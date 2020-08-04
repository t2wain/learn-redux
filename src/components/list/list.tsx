import React from "react";
import { connect } from "react-redux";
import { IItem } from "../../actions/list-types";
import { IAppState } from "../../store/store";
import { delItem, toggleItem } from "../../actions/list-actions";

interface IProps {
  items: IItem[];
  delItem: typeof delItem;
  toggleItem: typeof toggleItem;
}

export const List: React.SFC<IProps> = ({ items, delItem, toggleItem }) => {
  return items.length ? (
    <ul className="lst-item">
      {items.map(item => (
        <li key={item.id}>
          <span className={item.checked ? "done" : ""}>{item.name}</span>
          <button onClick={() => delItem(item.id)}>x</button>
          <button onClick={() => toggleItem(item.id)}>y</button>
        </li>
      ))}
    </ul>
  ) : (
    <div>No item yet</div>
  );
};

function mapStateToProps(state: IAppState) {
  return {
    items: state.items
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    delItem: (itemId: number) => dispatch(delItem(itemId)),
    toggleItem: (itemId: number) => dispatch(toggleItem(itemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
