import React, { Component } from 'react';

class GalleryItem extends Component {
  handleLikeClick = (event) => {
    console.log('like btn click!');
  };

  render() {
    return (
      <div key={this.props.item.id}>
        <img src={this.props.item.path} alt={this.props.item.description} />
        <p>{this.props.item.description}</p>
        <button onClick={this.handleLikeClick}>LIKE</button>
        <span> {this.props.item.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
