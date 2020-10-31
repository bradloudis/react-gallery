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
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errMsg: 'Could not get gallery pictures!',
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <GalleryList photos={this.state.galleryList} />
      </div>
    );
  }
}

export default App;
