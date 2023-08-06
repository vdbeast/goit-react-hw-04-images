import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({imageUrl, onCloseModal}) => {
  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  },[]);
 
  const handleClose = () => {
      onCloseModal();
  };

  return (
      <div>
        <div className="Overlay" onClick={handleClose}>
          <div className="Modal">
            <span className="close" onClick={handleClose}>&times;</span>
            <img src={imageUrl} alt="" />
          </div>
        </div>
      </div>
    );
  }


Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
}

export default Modal;