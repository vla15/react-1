import React from "react";
import Header from '../../header/header.jsx';

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      dogs: [],
      term: "",
    }
    this.renderDogs = this.renderDogs.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loadDogs = this.loadDogs.bind(this);
    this.handleAdoption = this.handleAdoption.bind(this);
  }

  componentDidMount() {
    this.loadDogs();
  }

  async loadDogs() {
    try {
      let response = await fetch("http://localhost:3000/api/dogThing")
      let data = await response.json();
      this.setState({
        dogs: data.dogs
      })
    } catch (err) {
      console.error(err);
    }
  }

  async handleAdoption(dog) {
    await fetch("http://localhost:3000/api/dogThing", {
      method: "POST",
      body: JSON.stringify(dog),
      headers: { "Content-Type": "application/json" }
    })
    this.loadDogs();
  }

  renderDogs(searchTerm) {
    let dogs;
    dogs = searchTerm ? this.handleSearch(searchTerm) : this.state.dogs
    return dogs.map((dog,i) => {
      return <div key={i}>
        <div>{dog.name}</div>
        <div>{dog.breed}</div>
        <button onClick={() => {this.handleAdoption(dog)}}>ADOPT ME</button>
      </div>
    })
  }

  handleSearch(searchTerm) {
    return this.state.dogs.filter(dog => dog.breed.indexOf(searchTerm) >= 0 || dog.name.indexOf(searchTerm) >= 0)
  }

  handleChange(e) {
    this.setState({
      term: e.target.value,
    })
  }

  render() {
    return <div>
        <Header />
        <input type="text" onChange={this.handleChange} value={this.state.term} />
        {this.renderDogs(this.state.term)}
      </div>;
  }
}

export default Dogs