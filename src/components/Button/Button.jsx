import { Component } from 'react';
import s from 'components/Button/Button.module.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button className={s.button} type="button" onClick={onClick}>
        Load more
      </button>
    );
  }
}
