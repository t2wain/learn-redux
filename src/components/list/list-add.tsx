import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../store/store";
import List from "./list";
import { addItem } from "../../actions/list-actions";

interface IProps {
  addItem: typeof addItem;
}

class ListAdd extends React.Component<IProps> {
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
          <button onClick={this.addItem} disabled={!itemName}>
            Add
          </button>
        </form>
        <List />
      </div>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {};
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (name: string) => dispatch(addItem(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAdd);
