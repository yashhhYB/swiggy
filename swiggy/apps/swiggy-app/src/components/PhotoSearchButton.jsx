import React from 'react';

const PhotoSearchButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Search by Photo
        </button>
    );
};

export default PhotoSearchButton;
