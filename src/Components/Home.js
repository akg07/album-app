import React, { Component } from "react";

import User from "./User";
import Album from "./Album";
import Photo from "./Photo";

class Home extends Component {
  state = {
    selectedUserId: false,
    selectedAlbumId: false
  };

  // gets the userId from the component User, to which it's passed as props
  onUserSelected = userId => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  onAlbumSelected = albumId => {
    this.setState({ selectedAlbumId: albumId });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title header">Photo Album</h1>
        <div className="album_container">
          <User
            // Pass the func onUserSelected to User Component, this will update the state of selectedUserId here in Home.js
            onUserSelected={this.onUserSelected}
            // Pass the selectedUserId state as props to the User Component to be able to change the colour of the active user on click
            selectedUserId={this.state.selectedUserId}
          />
          <div className="album_photo_container">
            <Album
              // Pass the selectedUserId state as props to Album Component, this will update Axios's url request for album
              selectedUserId={this.state.selectedUserId}
              // Pass the func onAlbumSelected to Album Component, this will update the state of selectedAlbumId here in Home.js
              onAlbumSelected={this.onAlbumSelected}
            />
            <Photo
              // Pass the selectedAlbumId state as props to Album Component, this will update Axios's url request for th selected album's id photos
              selectedAlbumId={this.state.selectedAlbumId}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
