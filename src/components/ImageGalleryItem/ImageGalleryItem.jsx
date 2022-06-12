import s from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { id, src, alt, toggleModal, url } = this.props;
    return (
      <li key={id} className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItem_image}
          src={src}
          alt={alt}
          onClick={toggleModal}
          id={url}
        />
      </li>
    );
  }
}
