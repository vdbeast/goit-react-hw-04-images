import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import ImageGalleryItem from "./ImageGalleryItem";
import Loader from "./Loader";
import Button from "./Button";

class ImageGallery extends Component {
    state = {
        page: 1,
        images: [],
        isLoading: false,
    };

    componentDidUpdate(prevProps, prevState) {
        const { query } = this.props;

        if (prevProps.query !== query) {
            this.setState({ images: [], page: 1 },() => this.fetchImages())
        }
    };
    
    fetchImages() {
        const { query } = this.props;
        const { page } = this.state;
        const apiKey = '37409826-b0d240e7599af91354a714518';

        this.setState({ isLoading: true });

        axios
            .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`)
            .then((response) => {
                this.setState((prevState) => ({
                    images: [...prevState.images, ...response.data.hits],
                    isLoading: false,
                }))
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
                this.setState({ isLoading: false });
            })
    };

    handleLoadMore = () => {
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }), () => this.fetchImages())
    };

    render() {
        const { images, isLoading } = this.state;

        if (images.length === 0 && !isLoading) {
            return;
        }

        return (
            <div>
                <ul className="ImageGallery">
                    {images.map((image) => (
                        <ImageGalleryItem key={image.id} image={image} />
                    ))}
                </ul>
                {isLoading && <Loader />}
                {images.length >0 && !isLoading && <Button onLoadMore={this.handleLoadMore}/>}
            </div>
        )
    }
    
}

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
};

export default ImageGallery;
