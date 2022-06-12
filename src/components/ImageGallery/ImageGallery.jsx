import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from 'components/ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    images: '',
    imagesQury: '',
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { images, page, toggleLoader, pagePagination, perPage } = this.props;
    const prevImage = prevProps.images;
    const nextImages = images;
    const prevPage = prevProps.page;
    const nextPage = page;

    if (prevImage !== nextImages || prevPage !== nextPage) {
      toggleLoader();

      fetch(
        `https://pixabay.com/api/?key=25582463-bd7a1371f0d74f28c5559b6f0&q=${nextImages}&image_type=photo&page=${page}&per_page=${perPage}`
      )
        .then(res => res.json())
        .then(res => {
          pagePagination(res.total);
          if (page > 1) {
            this.setState({
              imagesQury: this.state.imagesQury.concat(res.hits),
            });
          } else
            this.setState({
              imagesQury: res.hits,
            });
        })
        .finally(() => {
          if (prevImage !== nextImages) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          toggleLoader();
        });
    }
  }

  render() {
    const { toggleModal } = this.props;
    const { imagesQury } = this.state;
    return (
      <ul className={s.ImageGallery}>
        {imagesQury &&
          imagesQury.map(i => (
            <ImageGalleryItem
              key={i.id}
              url={i.largeImageURL}
              src={i.webformatURL}
              toggleModal={toggleModal}
              alt={i.tags}
            />
          ))}
      </ul>
    );
  }
}
