import React from 'react';
import axios from 'axios';

export default class About extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            picture: '',
            bio: ''
        };
    }

    // When the page finishes loading
    componentDidMount = () => {

    }

    fetchUserProfile = (event) => {
        event.preventDefault(); // stop the browser from refreshing
        axios.get('https://api.github.com/users/' + this.state.email)
            .then((response) => {
                this.setState({
                    picture: response.data.avatar_url,
                    bio: response.data.bio
                });
            })
            .catch((error) => {
                console.log('Data: ', error);
            });
    };

    handleChange = (event) => {
        const value = event.target.value;

        this.setState({ email: value });
    };

    render() {



        // props
        // this.props

        console.log('Props: ', this.props);
        console.log('Path: ', this.props.match.path);


        const username = this.props.match.params.name;

        return (
            <div>
                <h2>I am the About Page</h2>

                <img src={this.state.picture} alt="" />
                <p>Bio: {this.state.bio}</p>


                <p>Username: {username}</p>

                <form>
                    <input type="email" name="email" placeholder="email" onChange={this.handleChange} />

                    <button onClick={this.fetchUserProfile} >Submit</button>
                </form>
            </div>
        );
    }
}