import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    const listItem = this.props.photos.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.path} alt={item.description} />
          <p>{item.description}</p>
          <button>LIKE</button>
          <span> {item.likes} likes</span>
        </div>
      );
    });
    return <div>{listItem}</div>;
  }
}

export default GalleryList;
