import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div key={this.props.item.id}>
        <img src={this.props.item.path} alt={this.props.item.description} />
        <p>{this.props.item.description}</p>
        <button>LIKE</button>
        <span> {this.props.item.likes} likes</span>
      </div>
    );
  }
}

export default GalleryItem;
