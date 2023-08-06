import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown)  
    };

    componentWillMount() {
      document.addEventListener('keydown', this.handleKeyDown)  
    };

    handleKeyDown = (event) => {
        if (event.code === 'Escape') {
            this.props.onCloseModal();
        }
    }
    handleClose = () => {
        this.props.onCloseModal();
    };
    render() {
        const { imageUrl } = this.props;

    return (
      <div>
        <div className="Overlay" onClick={this.handleClose}>
          <div className="Modal">
            <span className="close" onClick={this.handleClose}>&times;</span>
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
}

export default Modal;