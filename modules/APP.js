import React  from 'react';
import {Link} from 'react-router';

export default class APP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Router Demo</h1>
                <ul role="nav">
                    <li><Link to="/about"/>About</li>
                    <li><Link to="repos"/>Repos</li>
                </ul>
            </div>
        )
    }
}