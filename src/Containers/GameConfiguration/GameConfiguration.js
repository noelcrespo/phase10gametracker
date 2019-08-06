import React, { Component } from 'react';
import './GameConfiguration.css';

class GameConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idGenerator: 0,
            value: '',
        };
    }

    handleAddPlayer = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.idGenerator, this.state.value);
        this.setState((prevState) => {
            return {
                idGenerator: prevState.idGenerator + 1,
                value: ''
            };
        });
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    displayPlayers() {
        const players = this.props.players;

        return (players.length ? (players.map((player) => {
            return (
                <li className="player-list-item" key={player.id}>
                    <span className="player">{player.name}</span>
                    <span className="buttons">
                        <button className="delete-btn" onClick={() => { this.props.deletePlayer(player.id) }}>Delete</button>
                    </span>
                </li>
            )
        })) : (
                <li className="player-list-item no-players">No players currently</li>
            ));
    }

    render() {
        return (
            <div className="content">
                <h1 className="headline">PHASE 10 GAME TRACKER</h1>
                <h6 className="tagline">
                    Choose your game options
                </h6>
                <div id="configuration">
                    <p>How many phases:</p>
                    <div id="game-modes">
                        <button className="menu-button game-mode-button" id="ten-phases" onClick={() => { this.props.setNumberOfPhases(10) }}>10 Phases</button>
                        <button className="menu-button game-mode-button" id="five-phases" onClick={() => { this.props.setNumberOfPhases(5) }}>5 Phases</button>
                        <button className="menu-button game-mode-button" id="three-phases" onClick={() => { this.props.setNumberOfPhases(3) }}>3 Phases</button>
                    </div>

                    <p>Add players:</p>
                    <form onSubmit={this.handleAddPlayer} id="add-player-form">
                        <input type="text" id="add-player-input" placeholder="Enter player's name" onChange={this.handleChange} value={this.state.value} />
                        <button className="menu-button" id="add-player-btn">Add Player</button>
                    </form>

                </div>
                <div id="players-list-container">
                    <p>Players:</p>
                    <ul className="players-list">
                        {this.displayPlayers()}
                    </ul>
                </div>

            </div>
        );
    }
}

export default GameConfiguration;