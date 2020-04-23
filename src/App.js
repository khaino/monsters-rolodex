import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'


class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monster"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
