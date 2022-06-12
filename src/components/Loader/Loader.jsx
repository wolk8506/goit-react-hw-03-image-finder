import { TailSpin } from 'react-loader-spinner';
import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from 'components/Loader/Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={s.loader}>
        <TailSpin color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
