import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageUrl, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    const handleKeyDownEvent = (event) => {
      handleKeyDown(event);
    };

    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [onCloseModal]);

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
};

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
