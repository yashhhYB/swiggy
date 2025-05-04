import React from 'react';

const DishResultsList = ({ results }) => {
    return (
        <div>
            {results.map((result, index) => (
                <div key={index} className="border p-4 my-2 rounded shadow">
                    <h3 className="text-xl font-bold">{result.dishName}</h3>
                    <p>Served at: {result.restaurantName}</p>
                </div>
            ))}
        </div>
    );
};

export default DishResultsList;
