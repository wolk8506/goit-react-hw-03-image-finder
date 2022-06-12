import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from 'components/App.module.css';

export class App extends Component {
  state = {
    images: '',
    page: 1,
    pagePagination: '',
    showModal: false,
    showLoader: false,
    imgModal: '',
    perPage: 12,
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (!this.state.showModal) {
      this.setState({ imgModal: e.target.id });
    }
  };

  toggleLoader = () => {
    this.setState(({ showLoader }) => ({ showLoader: !showLoader }));
  };

  handlePagePagination = page => {
    if (page / this.state.perPage < 2) {
      this.setState({ pagePagination: '' });
    } else
      this.setState({ pagePagination: Math.ceil(page / this.state.perPage) });

    if (this.state.page === Number(this.state.pagePagination)) {
      this.setState({ pagePagination: '' });
      toast.info('All images for your request have been uploaded');
    }
  };

  handlePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleFormSubmit = images => {
    this.setState({
      images: images,
      page: 1,
    });
  };

  render() {
    const { images, page, pagePagination, showLoader, showModal, imgModal } =
      this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          pagePagination={this.handlePagePagination}
          images={images}
          page={page}
          toggleModal={this.toggleModal}
          toggleLoader={this.toggleLoader}
          perPage={this.state.perPage}
        />
        {showLoader && <Loader />}
        {pagePagination && <Button onClick={this.handlePage} />}
        {showModal && (
          <Modal toggleModal={this.toggleModal} imgModal={imgModal} />
        )}
        <ToastContainer />
      </div>
    );
  }
}
