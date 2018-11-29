import React, { Component } from "react";
import PropTypes from "prop-types";
import Cell from "./cell";

class TableComponent extends Component {
  render() {
    let { list, removeEvent } = this.props;
    return (
      <div className="table">
        <div className="table-header">
          <Cell className="col-1" text="ИД" />
          <Cell className="col-2" text="Город" />
          <Cell className="col-3" text="ИД Области" />
          <Cell className="col-4" text="Область" />
          <Cell className="col-5" text="" />
        </div>

        {list.map(row => {
          return (
            <div key={row.id} className="table-row">
              <Cell className="col-1" text={row.id} />
              <Cell className="col-2" text={row.name} />
              <Cell className="col-3" text={row.region_id} />
              <Cell className="col-4" text={row.region_name} />
              <Cell className="col-5 cursor link" text={"Удалить"} id={row.id} event={removeEvent} />
            </div>
          );
        })}
      </div>
    );
  }
}

TableComponent.propTypes = {
    list: PropTypes.array.isRequired,
    removeEvent:PropTypes.func.isRequired
  };

export default TableComponent;
