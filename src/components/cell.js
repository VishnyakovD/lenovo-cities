import React, { Component } from "react";
import PropTypes from "prop-types";

class CellComponent extends Component {
  render() {
    let { className, text, id, event } = this.props;
    return <div className={className} data-key={id} onClick={event}>{text}</div>
  }
}

CellComponent.defaultProps = {
  text: "нет данных",
  id:""
};

CellComponent.propTypes = {
  className: PropTypes.string.isRequired,
  event: PropTypes.func,
  id:PropTypes.any
};

export default CellComponent;
