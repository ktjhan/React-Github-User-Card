import React from 'react';
import axios from 'axios';
import GithubFollowersCard from './GithubFollowersCard'

class GithubFollowers extends React.Component {

  state = {
    followers: [],
  }

  componentDidMount() {

    axios.get("https://api.github.com/users/ktjhan/followers")
      .then(response => {
          console.log(response.data)
          this.setState({
            followers:response.data
          });
      })
      .catch(error => {
          console.log('boooooooo', error)
      });
  }

  render(){
    return (
      <div>
        {this.state.followers.map(follower => (
            <GithubFollowersCard
            key={follower.id}
            user={follower.login}
            image={follower.avatar_url}
            />
        ))}
      </div>
    );
  }

}

export default GithubFollowers;
