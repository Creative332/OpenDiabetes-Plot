import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
class Home extends Component {
    render() {
        return (
            <div>
                <h2 id="home_pagetitle">Home</h2>
            </div>
         );
    }
}

export default hot ? hot(module)(Home) : Home;