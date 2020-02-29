//jshint esversion:6
import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component  {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));

  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMosters = monsters
            .filter(monster => monster.name.toLowerCase()
            .includes(searchField.toLowerCase()));
            
    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={
            event => {
              this.setState({ searchField: event.target.value } , ()=>{
                // console.log(this.state);
                console.log("Do something more");
              });
            }
          }
        />
        <CardList monsters={filteredMosters}/>

      </div>
    );
  } 
}

export default App;
