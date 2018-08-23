import React from 'react';
import Header from './Header';

export default class HomePage extends React.Component {


    render() {

        const username = "accimeesterlin";
        const age = 10;

        return (
            <div>
                <Header name = { username }  old = { age } />

                <nav>
                    <h2>Homeq</h2>
                    <ul>
                        <li>Project</li>
                        <li>Mango</li>
                        <li>Donate</li>
                    </ul>
                </nav>
                <Players name = "Esterling Accime" location = "Atanta, GA" />
            </div>
        );
    }
}



class Players extends React.Component {

    render() {
        // this.props

        return(
            <div>
                <h2>I am the Players Component</h2>

                <p>Name: {this.props.name}</p>
                <p>Location: {this.props.location}</p>
            </div>
        );
    }
}
