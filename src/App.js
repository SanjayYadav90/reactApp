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
    // console.log('i clicked!');
  }


  inputHandler = (event,id) => {
    const userIndex = this.state.users.findIndex(
      (u) => {
        return u.id === id
      }
    );
    const user = {
      ...this.state.users[userIndex]

    }
    user.name = event.target.value;
    const newUsers = [...this.state.users];
    // console.log(user);
    newUsers[userIndex] = user;
    this.setState({
      users:newUsers
    });
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
                  inputValue={(event) => this.inputHandler(event,usr.id)}
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
