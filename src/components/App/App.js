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
    this.getPhotos();
  }

  getPhotos() {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
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

  updateLikes = (photoId) => {
    console.log('add 1 like!');
    axios({
      method: 'PUT',
      url: `/gallery/like/${photoId}`,
    })
      .then((response) => {
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
        <p>Gallery goes here</p>
        <GalleryList
          likebtnCallback={this.updateLikes}
          photos={this.state.galleryList}
        />
      </div>
    );
  }
}

export default App;
