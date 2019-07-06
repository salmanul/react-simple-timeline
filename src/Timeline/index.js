import React, { Component } from "react";

class Timeline extends Component {
  static defaultProps = {
    data: [
      {
        title: "Initialized",
        checked: true
      },
      {
        title: "Acknowledged",
        checked: false
      },
      {
        title: "Processed",
        checked: false
      }
    ]
  };
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          {data &&
            data.map((node, i) => (
              <React.Fragment>
                {i !== 0 && (
                  <hr className={node.checked ? "line-solid" : "line-dotted"} />
                )}
                <div className="node-container">
                  <div className="title">{node.title}</div>
                  <div className="node">
                    {node.checked && <div className="circle" />}
                  </div>
                </div>
              </React.Fragment>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
