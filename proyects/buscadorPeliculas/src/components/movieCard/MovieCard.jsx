import React from 'react';

const MovieCard = ({ id, title, year, imagen }) => {
    return (
        <article key={id}>
            <img src={imagen} alt="" />
            <h2>{title}</h2>
            <p>{year}</p>
        </article>
    )
};

export default MovieCard;