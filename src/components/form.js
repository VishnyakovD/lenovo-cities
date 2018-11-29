import React, { Component } from "react";
import PropTypes from "prop-types";

class FormComponent extends Component {
  render() {
    let { eventAdd, changeInput, city} = this.props;
    return (
      <div className="form">
        <h2 className="title">Добавление города</h2>
        <input
          className={city.isValidName===true ? "valid" : "error"}
          data-name={"name"}
          placeholder="Название города"
          onChange={changeInput}          
          value={city.name}
        />
        <input
          className={city.isValidRegion===true ? "valid" : "error"}
          data-name={"region_name"}
          placeholder="Название области"
          onChange={changeInput}
          value={city.region_name}
        />
        <div className="text-right">
          <button onClick={eventAdd}>Добавить</button>
        </div>
      </div>
    );
  }
}

FormComponent.propTypes = {
  eventAdd: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  city:PropTypes.object.isRequired,
};

export default FormComponent;
