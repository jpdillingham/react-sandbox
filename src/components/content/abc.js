import React, { Component } from 'react';
import Marquee from '../Marquee';
import Game from '../tictactoe/Game';

class ABCContent extends Component {
    render() {
        return (
            <div>
                ABC
                <Marquee id="first" greeting="Tic Tac Toe!"/>
                <Game />
                <Marquee id="second" greeting="This is another greeting!"/>
            </div>
        );
    }
}

export default ABCContent;