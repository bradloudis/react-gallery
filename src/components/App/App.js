import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = {
    galleryList: [],
    errMsg: null,
  };

  componentDidMount() {
    // getting complete list of items from server on page load
    this.getPhotos();
  }

  // axios GET call to server to get the complete list of items
  getPhotos() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        // taking response from server and adding it to the galleryList on state
        this.setState({
          galleryList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errMsg: 'Could not get gallery pictures!',
        });
      });
  }

  // axios PUT call to server to update the 'like count'
  updateLikes = (photoId) => {
    console.log('add 1 like!');
    axios({
      method: 'PUT',
      url: `/gallery/like/${photoId}`,
    })
      .then((response) => {
        // call getPhotos() to update DOM with new like count
        this.getPhotos();
      })
      .catch(function (err) {
        console.log(err);
        alert('Something went wrong liking this picture!');
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <h3>My Gallery</h3>
        {/* likebtnCallback sends axios PUT route down to GalleryList on props*/}
        {/* photos sends the array from state down to GalleryList on props */}
        <GalleryList
          likebtnCallback={this.updateLikes}
          photos={this.state.galleryList}
        />
      </div>
    );
  }
}

export default App;
