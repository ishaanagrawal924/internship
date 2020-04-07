import React from "react";

class FeedBar extends React.Component {
  constructor() {
    super();
    this.state = { count1: 0, count2: 0, count3: 0, count4: 0 };
  }
  increment1 = () => {
    this.setState({ count1: this.state.count1 + 1 });
  };
  decrement = () => {
    this.setState({ count2: this.state.count2 + 1 });
  };
  render() {
    return (
      <div className="bottomButtons">
        <div className="me1">
          <button id="button2" onClick={this.increment1}>
            <i class="fa fa-arrow-up" aria-hidden="true" />
            {" " + this.state.count1 + " "}Upvotes
          </button>
        </div>
        <div className="me2">
          <button id="button3">
            <i class="fa fa-comments" aria-hidden="true" />
          </button>
        </div>
        <div className="me4">
          <button id="button5">
            <i class="fa fa-eye" aria-hidden="true" />
          </button>
        </div>

        <div className="me5">
          <button id="button6" onClick={this.decrement}>
            <i class="fa fa-arrow-down" />
            {" " + this.state.count2 + " "} Downvotes
          </button>
        </div>
      </div>
    );
  }
}
export default FeedBar;
