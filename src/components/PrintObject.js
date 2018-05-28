import React from "react";

export default class PrintObject extends React.Component {
  state = {
    r: Math.random()
  };
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              r: Math.random()
            })
          }
        >
          UPDATE
        </button>
        <br />
        <br />
        {JSON.stringify(this.props.data)}
      </div>
    );
  }
}
