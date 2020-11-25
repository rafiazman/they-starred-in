import React from 'react'
import { withRouter } from 'next/router'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import formatDuration from 'date-fns/formatDuration'

import { Heading, Tag } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

import styles from './[id].module.scss'

import axios from 'axios'
import {API_HOSTNAME_MOVIES_GET_DETAILS} from "../../constants";

export async function getServerSideProps(context) {
  const { id } = context.query
  const { API_KEY } = process.env
  const { data } = await axios.get(`${API_HOSTNAME_MOVIES_GET_DETAILS}/${id}?append_to_response=release_dates&api_key=${API_KEY}`)

  return {
    props: {
      data
    },
  }
}

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  getFilmRating(results) {
    const release = results.find( ({ iso_3166_1 }) => {
        switch (iso_3166_1) {
          case "NZ":
            return true
          case "US":
            return true
        }
        return false
      })

    const { release_dates } = release

    return release_dates[0].certification
  }

  render() {
    const { getFilmRating } = this
    const { router, data } = this.props
    const { title, overview, genres, poster_path, release_date, release_dates: { results }, runtime } = data

    const runtime_formatted = { hours: Math.floor(runtime / 60), minutes: runtime % 60 }
    const release_date_formatted = parse(release_date, "yyyy-mm-dd", new Date())

    const film_rating = getFilmRating(results)

    return (
      <div>
        <CloseIcon onClick={() => router.back()}
                   w={6}
                   h={6}
                   className={styles.closeButton} />

        <main>
          <Grid gap={6}
                className={`${styles.grid}`}
                templateRows="repeat(2, 0.1fr)"
                templateColumns="repeat(2, 2fr)">

            <GridItem rowSpan={2}>
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
                   alt={title}
                   className={`${styles.posterImage}`} />
            </GridItem>

            <GridItem className={`${styles.movieInformation}`}>
              <Heading size="2xl" className={styles.heading}>{ title } ({ release_date_formatted.getFullYear() })</Heading>

              <div className={styles.metadata}>
                { film_rating && <Tag className={`${styles.rating}`}>{ film_rating }</Tag> }
                <span className={`${styles.releaseDate}`}>{ format(release_date_formatted, 'dd/mm/yyyy') }</span>
                <span className={`${styles.genres}`}>{ genres.map(x => x.name).join(', ') }</span>
                <span className={`${styles.runtime}`}>
                  { runtime_formatted.hours }h { runtime_formatted.minutes }m
                </span>
              </div>
            </GridItem>

            <GridItem colStart={2} className={`${styles.movieInformation}`}>
              <div className={styles.overview}>
                <Heading size="xl">Overview</Heading>
                <p>{ overview }</p>
              </div>
            </GridItem>

          </Grid>
        </main>
      </div>
    )
  }
}

export default withRouter(MovieDetail)
