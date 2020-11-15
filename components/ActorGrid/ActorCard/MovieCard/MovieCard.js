import React from 'react'
import Image from 'next/image'

import {Heading} from "@chakra-ui/react"

import styles from './MovieCard.module.scss'

class MovieCard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {movie, className} = this.props
    const {poster_path, release_date, original_title} = movie

    const posterImage = `https://image.tmdb.org/t/p/w300${poster_path}`
    const name = original_title
    const year = release_date ? `(${release_date.substring(0, 4)})` : ''

    return (
      <a href={`https://www.themoviedb.org/movie/${movie.id}`} className={`${styles.card} ${className}`}>
        <Image src={poster_path ? posterImage : "/missing-poster.png"}
               width={300}
               height={450} />
        <Heading size="md" className={styles.title}>{name} {year}</Heading>
      </a>
    )
  }
}

export default MovieCard;
