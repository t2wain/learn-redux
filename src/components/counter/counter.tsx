import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../store/store";
import { increment, decrement } from "../../actions/counter-actions";

interface IProps {
  readonly count: number;
  increment: typeof increment;
  decrement: typeof decrement;
}

class Counter extends React.Component<IProps> {
  public static defaultProps = {
    count: 0
  };

  increment = () => {
    this.props.increment();
  };

  decrement = () => {
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    count: state.count
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
