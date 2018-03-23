import React from "react";

class Dogs extends React.Component {
  constructor(props) {
    super(props);
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

  loadDogs() {
    fetch("http://localhost:3000/getDogs")
      .then(res => res.json())
      .then(body => {
        console.log('dog body', body)
        this.setState({
          dogs: body
        })
      })
  }

  handleAdoption(dog) {
    fetch("http://localhost:3000/adoptDog", {
      method: "POST",
      body: JSON.stringify(dog),
      headers: { "Content-Type": "application/json" }
    }).then(result => result.json())
    .then(body => {
      this.setState({
        dogs: body
      })
    })
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
      <input type="text" onChange={this.handleChange} value={this.state.term}/>
      {this.renderDogs(this.state.term)}
    </div>
  }
}

export default Dogs