import React, { useState } from "react";
import Modal from "./Modal";
import PropTypes from 'prop-types';

const ImageGalleryItem = ({image}) => {
  const { webformatURL, largeImageURL } = image;
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
          onClick={handleOpenModal}
        />
        {isModalOpen && (
          <Modal imageUrl={largeImageURL} onCloseModal={handleCloseModal} />
        )}
      </li>
  );
}


ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImageGalleryItem;
