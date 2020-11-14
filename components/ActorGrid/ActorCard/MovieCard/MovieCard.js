import React from 'react'
import Image from 'next/image'

import { Heading } from "@chakra-ui/react"

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movie, className } = this.props
        const { poster_path, media_type, release_date, first_air_date } = movie

        const posterImage = `https://image.tmdb.org/t/p/w300${poster_path}`

        const name = media_type === 'tv' ? movie.name : movie.title
        const year = media_type === 'tv' ? first_air_date.substring(0,4) : release_date.substring(0, 4)

        return (
            <div className={className}>
                { poster_path ? <Image src={posterImage} width={300} height={450}></Image> : <Image src="/missing-poster.png" width={300} height={450}></Image> }

                <Heading size="md">{name} {`(${year})`}</Heading>
            </div>
        )
    }
}

export default MovieCard;