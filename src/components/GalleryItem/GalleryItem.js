import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  // state {isClicked} is used in the conditional render to toggle the Gallery Item back and forth between a picture and its description
  state = {
    isClicked: false,
  };

  // uses the axios PUT route to add likes to a picture - sent on props
  handleLikeClick = (event) => {
    console.log('like btn click!');
    this.props.likebtnCallback(this.props.item.id);
  };

  // toggles the state of isClicked between true/false
  handlePicClick = (event) => {
    console.log('picture click');
    if (!this.state.isClicked) {
      this.setState({
        isClicked: true,
      });
    } else {
      this.setState({
        isClicked: false,
      });
    }
  };

  render() {
    // setting default - galleryItem as the picture
    let galleryItem = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );

    // updates galleryItem to the picture's description
    if (this.state.isClicked) {
      galleryItem = (
        <p className="description">{this.props.item.description}</p>
      );
    }

    return (
      <div key={this.props.item.id} className="gallery-container">
        <div onClick={this.handlePicClick}>{galleryItem}</div>
        <button onClick={this.handleLikeClick}>LIKE</button>
        <span> {this.props.item.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
