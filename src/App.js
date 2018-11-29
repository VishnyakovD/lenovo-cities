import React, { Component } from "react";
import axios from "axios";
import Table from "./components/table";
import Form from "./components/form";
import config from './config';
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    list: [],
    newCity: {name: "", region_name: "", isValidName: false, isValidRegion: false }
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios.get(config.URL_CITIES, {
        headers: { Authorization: config.SICRET_KEY }
      })
      .then(response => {
        this.setState({
          loading: false,
          list: response.data.data.slice(0, 100)
        });
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log("Error : " + error);
      });
  }

  removeRow = e => {
    let id = Number(e.currentTarget.dataset.key);
    let { list } = this.state;
    this.setState({ list: list.filter(item => item.id !== id) });
  };

  changeInput = e => {
    let key = e.currentTarget.dataset.name;
    let value = e.currentTarget.value;
    let { newCity } = this.state;
    newCity[key] = value;
    this.setState({ newCity });
    this.validatePropertes();
  };

  validatePropertes = () => {
    let { list, newCity } = this.state;

    if (newCity.name === "") 
      newCity.isValidName = false;
    else 
      newCity.isValidName = true;
    
    this.setState({ newCity });

    if (newCity.region_name === "") {
      newCity.isValidRegion = false;
    }
     else {
      newCity.isValidRegion = true;
      for (let item of list) {
        if (item.name === newCity.name && item.region_name === newCity.region_name) {
          newCity.isValidRegion = false;
        }
      }
    }
    this.setState({ newCity });
  };

  addRow = () => {
    let { list, newCity } = this.state;
    if (newCity.isValidName === true && newCity.isValidRegion === true) {
      list.push({
        id: new Date().getTime(),
        name: newCity.name,
        region_id: new Date().getTime(),
        region_name: newCity.region_name
      });
      this.setState({
        list: list,
        newCity: {name: "", region_name: "", isValidName: false, isValidRegion: false }
      });
    }
  };

  render() {
    let { list, loading, newCity } = this.state;
    let { removeRow, addRow, changeInput } = this;

    return (
      <div className="App">
        <Form eventAdd={addRow} changeInput={changeInput} city={newCity} />
        {
          loading === true
         ? ( <h1>Загрузка...</h1>)
         : ( <Table list={list} removeEvent={removeRow} /> )
        }
      </div>
    );
  }
}

export default App;
