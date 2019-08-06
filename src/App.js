import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import GameConfiguration from './Containers/GameConfiguration/GameConfiguration';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfPhases: null,
      players: []
    };
  }

  setNumberOfPhases = (mode) => {
    this.setState({
      numberOfPhases: mode
    });
  }
  addPlayer = (id, player) => {
    const players = [...this.state.players, { id: id, name: player, score: 0, currentPhase: null, dealer: false }];
    this.setState({
      players: players
    });
  }

  deletePlayer = (id) => {
    const players = this.state.players.filter(player => player.id !== id);
    this.setState({
      players
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route 
                path='/newgame' 
                render={props => <GameConfiguration players={this.state.players} addPlayer={this.addPlayer} deletePlayer={this.deletePlayer} setNumberOfPhases={this.setNumberOfPhases} />} 
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
