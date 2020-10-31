import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

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
        {/* <img src="images/goat_small.jpg" alt="goat" /> */}
        {/* {JSON.stringify(this.state.galleryList)} */}
        {this.state.galleryList.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.path} alt={item.description} />
              <p>{item.description}</p>
              <span>{item.likes}</span>
            </div>
            // <ul key={item.id}>
            //   <dt>
            //     <img src={item.path} alt={item.description} />
            //   </dt>
            //   <dt>{item.description}</dt>
            //   <span>{item.likes}</span>
            // </ul>
          );
        })}
      </div>
    );
  }
}

export default App;
