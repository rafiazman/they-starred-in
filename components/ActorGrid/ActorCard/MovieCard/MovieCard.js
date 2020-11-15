import React from 'react'
import Image from 'next/image'

import { Heading } from "@chakra-ui/react"

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movie, className } = this.props
        const { poster_path, release_date, original_title } = movie

        const posterImage = `https://image.tmdb.org/t/p/w300${poster_path}`
        const name = original_title
        const year = release_date ? `(${release_date.substring(0, 4)})` : ''

        const headingCss = {
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        }

        return (
            <div className={className} style={{ width: '300px' }}>
                { poster_path ? <Image src={posterImage} width={300} height={450}></Image> : <Image src="/missing-poster.png" width={300} height={450}></Image> }

                <Heading size="md" css={headingCss}>{name} {year}</Heading>
            </div>
        )
    }
}

export default MovieCard;
