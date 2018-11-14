import React, { Component } from 'react';
import User from './User/user';
import './App.css';

class App extends Component {
  state = {
    users: [
      {id: 1, name: 'Jay', age: 25},
      {id: 2, name: 'Viru', age: 19},
      {id: 3, name: 'Basanti', age: 23},
    ],
    toggleMe: false
  }

  deleteHandler = (index) => {
    const newUsers = [...this.state.users];

    newUsers.splice(index,1);
    this.setState({
      users:newUsers
    })
  }

  toggleHandler = () => {
    this.setState({
      toggleMe: !this.state.toggleMe
    })
      console.log('i clicked!');
  }

  render() {
    let users = null;
    users = (
      <div>
        {
          this.state.users.map( (usr, index) => {
              return (
                <User 
                  key={usr.id}
                  keyValue={usr.id}
                  name = {usr.name}
                  age = {usr.age}
                  showHide = {this.state.toggleMe}
                  deleteMe={() => this.deleteHandler(index)}
                  toggleOut={() => this.toggleHandler(index)}
                />
              )
            }
          )
        }
      </div>
    )

    return (
      <div className="App">
        <div className= 'main-container'>
          <h1>App</h1>
          {users}
        </div>
      </div>
    );
  }
}

export default App;
