import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    // use .map to loop through the array sent down on props from app.js - saved in variable listItem
    const listItem = this.props.photos.map((item) => {
      return (
        // likebtnCallback sends axios PUT route down to GalleryItem on props to create each item
        <GalleryItem
          likebtnCallback={this.props.likebtnCallback}
          key={item.id}
          item={item}
        />
      );
    });
    return <div>{listItem}</div>;
  }
}

export default GalleryList;
