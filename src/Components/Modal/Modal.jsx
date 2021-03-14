import { Component } from 'react';
import s from './Modal.module.css';
class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentdidMount');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }

  render() {
    return (
      <div className={s.backdrop}>
        <div className={s.content}> {this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
