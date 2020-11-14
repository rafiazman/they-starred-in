import React from 'react'
import Image from 'next/image'

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movie, className } = this.props
        const { poster_path } = movie
        const posterImage = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
            <div className={className}>
                { poster_path && <Image src={posterImage} width={500} height={750}></Image> }
            </div>
        )
    }
}

export default MovieCard;