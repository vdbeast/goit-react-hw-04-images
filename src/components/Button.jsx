import React from "react";
import PropTypes from 'prop-types';

const Button = ({onLoadMore}) => {

    return (
        <div>
            <button className="Button" type="button" onClick={onLoadMore}>Load More</button>
      </div>
    )
};

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}

export default Button;