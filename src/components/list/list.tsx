import React from "react";
import { connect } from "react-redux";
import { IItem } from "../../actions/list-types";
import { IAppState } from "../../store/store";

interface IProps {
  items: IItem[];
}

export const List: React.SFC<IProps> = ({ items }) => {
  return items.length ? (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
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

export default connect(mapStateToProps)(List);
