import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    const listItem = this.props.photos.map((item) => {
      return <GalleryItem item={item} />;
    });
    return <div>{listItem}</div>;
  }
}

export default GalleryList;
