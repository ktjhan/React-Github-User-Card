import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard'

class GithubUser extends React.Component {

  state = {
    name: [],
  }

  componentDidMount() {

    axios.get("https://api.github.com/users/ktjhan")
      .then(response => {
          console.log(response.data)
          this.setState({
            name: response.data.name,
            image: response.data.avatar_url,
            location: response.data.location,
            followers: response.data.followers,
          });
      })
      .catch(error => {
          console.log('boooooooo', error)
      });
  }

  render(){
    return (
      <div>
        <GithubCard
        user={this.state.name}
        image={this.state.image}
        location={this.state.location}
        followers={this.state.followers}
        />
      </div>
    );
  }
}

export default GithubUser;
