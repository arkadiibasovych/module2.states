import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalroot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentdidMount');
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropclick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.backdrop} onClick={this.handleBackdropclick}>
        <div className={s.content}> {this.props.children}</div>
      </div>,
      modalroot,
    );
  }
}

export default Modal;
