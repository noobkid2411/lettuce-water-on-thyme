
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase.js';
console.log(logo);
class App extends Component {
  componentDidMount() {
    const plantsRef = firebase.database().ref('plants');
    plantsRef.on('value', (snapshot) => {
      let plants = snapshot.val();
      let newState = [];
      for (let plant in plants) {
        newState.push({
          id: plant,
          frequency: plants[plant].frequency,
          plant_name: plants[plant].plant_name
        });
      }
      this.setState({
        plants: newState
      });
    });
  }
  removePlant(plantId) {
    const plantsRef = firebase.database().ref(`/plants/${plantId}`);
    plantsRef.remove();
  }
  constructor() {
    super();
    this.state = {
      frequency: '',
      plant_name: '',
      plants:[]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    handleSubmit(e) {
      e.preventDefault();
      const plantsRef = firebase.database().ref('plants');
      const plant = {
        frequency: this.state.frequency,
        plant_name: this.state.plant_name
      }
      plantsRef.push(plant);
      this.setState({
        frequency: '',
        plant_name: ''
      });
    }
  render() {
    return (
      <div className='app'>
        <header>
            <div className='wrapper'>
              <h1>Lettuce Water On Thyme</h1>
              <img src={logo} style={{ height: 80, width: 80}}/>
            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit} >
                <input type="text" name="plant_name" placeholder="You got a new plant,what kind?" onChange={this.handleChange} value={this.state.plant_name} />
                <input type="text" name="frequency" placeholder="Weekly water frequency?" onChange={this.handleChange} value={this.state.frequency}/>
                <button>Add Item</button>
              </form>
          </section>
          <section className='display-item'>
            <div className='wrapper'>
              <ul>
              {this.state.plants.map((plant) => {return (
              <li key={plant.id}>
            <h3>{plant.plant_name}</h3>
            <p>Frequency of watering: {plant.frequency} times a week!</p>
            <button onClick={() => this.removePlant(plant.id)}>Remove plant</button>
          </li>
        )
      })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default App;
