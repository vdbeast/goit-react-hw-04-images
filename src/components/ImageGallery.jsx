import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";
import Button from "./Button";
import { fetchImages } from './services';

const ImageGallery = ({ query }) => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prevQuery, setPrevQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    if (query === prevQuery) {
      fetchImages(query, page)
        .then(({ hits }) => {
          if (page > 1) {
            setImages(prevImages => [...prevImages, ...hits]);
          } else {
            setImages(hits);
          }

          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching images:', error);
          setIsLoading(false);
        });
    } else {
      setImages([]);
      setIsLoading(true);
      setPage(1);
      setPrevQuery(query);
    }
  }, [query, page, prevQuery]);

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1)
    };

    return (
        <div>
            {images.length > 0 && (
                <ul className="ImageGallery">
                    {images.map((image, index) => (
                        <ImageGalleryItem key={index} image={image} />
                    ))}
                </ul>
            )}
            {isLoading && <Loader />}
            {!isLoading && images.length > 0 && <Button onLoadMore={handleLoadMore}/>}
        </div>
    )
}

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};

export default ImageGallery;
