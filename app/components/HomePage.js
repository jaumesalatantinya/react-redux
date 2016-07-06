import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administrator</h1>
                <p>This is react redux router es6</p>
                <Link to="about">About</Link>
            </div>
        );
    }
}

export default HomePage;
