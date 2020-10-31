import React, { Component } from 'react';

class GalleryItem extends Component {
  state = {
    isClicked: false,
  };

  handleLikeClick = (event) => {
    console.log('like btn click!');
    this.props.likebtnCallback(this.props.item.id);
  };

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
    let galleryItem = (
      <img src={this.props.item.path} alt={this.props.item.description} />
    );

    if (this.state.isClicked) {
      galleryItem = <p>{this.props.item.description}</p>;
    }

    return (
      <div key={this.props.item.id}>
        <div onClick={this.handlePicClick}>{galleryItem}</div>
        <button onClick={this.handleLikeClick}>LIKE</button>
        <span> {this.props.item.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
