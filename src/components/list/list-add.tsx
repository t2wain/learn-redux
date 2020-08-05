import React, { useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "../../store/store";
import { IItem } from "../../actions/list-types";
import List from "./list";
import { addItem, delItem, toggleItem } from "../../actions/list-actions";

interface IProps {
  items: IItem[];
  addItem: typeof addItem;
  delItem: typeof delItem;
  toggleItem: typeof toggleItem;
}

export class ListAddOld extends React.Component<IProps> {
  state = {
    itemName: ""
  };

  setItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      itemName: e.target.value
    });
  };

  addItem = () => {
    this.props.addItem(this.state.itemName);
    this.setState({ itemName: "" });
  };

  render() {
    const { itemName } = this.state;

    return (
      <div className="list-form">
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor="">
            Item to buy:
            <input value={itemName} onChange={this.setItemName} />
          </label>
          <button
            className="btn-add"
            onClick={this.addItem}
            disabled={!itemName}
          >
            Add
          </button>
        </form>
        <List
          items={this.props.items}
          delItem={this.props.delItem}
          toggleItem={this.props.toggleItem}
        />
      </div>
    );
  }
}

const ListAdd: React.SFC<IProps> = props => {
  const [itemName, setItemName] = useState("");

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  let addItem = () => {
    props.addItem(itemName);
    setItemName("");
  };

  return (
    <div className="list-form">
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="">
          Item to buy:
          <input value={itemName} onChange={handleChange} />
        </label>
        <button className="btn-add" onClick={addItem} disabled={!itemName}>
          Add
        </button>
      </form>
      <List
        items={props.items}
        delItem={props.delItem}
        toggleItem={props.toggleItem}
      />
    </div>
  );
};

function mapStateToProps(state: IAppState) {
  return { items: state.items };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (name: string) => dispatch(addItem(name)),
    delItem: (itemId: number) => dispatch(delItem(itemId)),
    toggleItem: (itemId: number) => dispatch(toggleItem(itemId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAdd);
