import React, { useState } from 'react';
import PhotoSearchButton from '../components/PhotoSearchButton';
import DishResultsList from '../components/DishResultsList';

const PhotoSearchPage = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handlePhotoUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setLoading(true);

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await fetch('/api/photo-search', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.error || 'Failed to search for the dish.');
                setLoading(false);
                return;
            }

            const data = await response.json();
            setResults(data.results);
        } catch (error) {
            alert('An error occurred while searching for the dish.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Photo Search</h1>
            <PhotoSearchButton onClick={() => document.getElementById('photo-upload').click()} />
            <input
                type="file"
                id="photo-upload"
                accept="image/*"
                onChange={handlePhotoUpload}
                style={{ display: 'none' }}
            />
            {loading && <p>Loading...</p>}
            {results.length > 0 && <DishResultsList results={results} />}
        </div>
    );
};

export default PhotoSearchPage;
