import React, { Component } from "react";

class Timeline extends Component {
  static defaultProps = {
    data: {
      status: "initialized",
      nodes: [
        {
          title: "Initialized",
          dataIndex: "initialized"
        },
        {
          title: "Acknowledged",
          dataIndex: "acknowledged"
        },
        {
          title: "Processed",
          dataIndex: "processed"
        }
      ]
    },
    mode: "vertical" || "horizontal"
  };
  render() {
    const { data, mode } = this.props;
    const lastNode = data.nodes.find(x => x.dataIndex === data.status);
    const lastNodeIndex = lastNode && data.nodes.indexOf(lastNode);
    return (
      <React.Fragment>
        <div className={`container ${mode}`}>
          {data &&
            data.nodes.map((node, i) => (
              <div className={`wrapper ${mode}`}>
                {i !== 0 && (
                  <div
                    className={`line ${
                      i <= lastNodeIndex
                        ? `line-solid ${mode}`
                        : `line-dotted ${mode}`
                    }`}
                  />
                )}
                <div className="node-container">
                  <div className={`title ${mode}`}>{node.title}</div>
                  <div className="node">
                    {i <= lastNodeIndex && (
                      <div
                        className={
                          i === lastNodeIndex ? "circle animate" : "circle"
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Timeline;
