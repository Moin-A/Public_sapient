import React, { Component } from "react";
class ListGroup extends Component {
  renderList() {
    const { mission_ids } = this.props;
    if (this.props.mission_ids.length === 0) return null;
    return (
      <React.Fragment>
        <p className="font-weight-bold">Mission ids</p>
        <ul className="list-group ">
          {Object.values(mission_ids).map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  render() {
    return this.renderList();
  }
}

export default ListGroup;
