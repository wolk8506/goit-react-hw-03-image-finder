import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import s from 'components/Searchbar/Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    images: '',
  };

  handleNameChange = e => {
    this.setState({ images: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.images.trim() === '') {
      toast.error('Enter a valid request!');
      return;
    }
    this.setState({ images: '' });
    this.props.onSubmit(this.state.images);
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm}>
          <button
            type="submit"
            className={s.SearchFormButton}
            onClick={this.handleSubmit}
          >
            <ImSearch />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.images}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
