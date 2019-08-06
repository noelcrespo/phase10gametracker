import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <div className="content">
            <h1 className="headline">PHASE 10 GAME TRACKER</h1>
            <h6 className="tagline">
                Track your game scores as you play. <br />
                Keep a history of all of your games and winners. <br />
                View player statistics over time. 
            </h6>
            <div className="home-button-group">
                <Link className='menu-button' id="new-game" to='/newgame'>New Game</Link>
                <button className='menu-button ' id="history">History</button>
                <button className='menu-button ' id="Statistics">Statistics</button>
            </div>
        </div>
    );
}

export default Home;