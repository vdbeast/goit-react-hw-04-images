import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";
import Button from "./Button";

const ImageGallery = ({ query }) => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (query) {
            fetchImages();
        }
    }, [query, page]);

    const fetchImages = () => {
        const apiKey = '37409826-b0d240e7599af91354a714518';
        setIsLoading(true);

        axios
            .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
            .then((response) => {
                setImages((prevImages) => [...prevImages, ...response.data.hits]);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                setIsLoading(false);
            })
    };

    const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1)
    };

    return (
        <div>
            {query && images.length > 0 && (
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
