import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import GitCard from './Components/GitCard';
import './App.css'

class App extends React.Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Cking351')
    .then(response => {
      this.setState({
        users: response.data
      })
    })
  }





  render() {
    return (
      <div className = 'App'>
        <h1 className = 'App-header'>GitHub User</h1>
        <GitCard data={this.state.users} />
      </div>
    )
  }
}

export default App;
