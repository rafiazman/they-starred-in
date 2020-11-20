import React from 'react'
import { withRouter } from 'next/router'

import { Heading, Tag } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"
import { CloseIcon } from '@chakra-ui/icons'

import styles from './[id].module.scss'

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { router } = this.props

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
              <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kjMbDciooTbJPofVXgAoFjfX8Of.jpg"
                   alt="Poster"
                   className={`${styles.posterImage}`} />
            </GridItem>

            <GridItem className={`${styles.movieInformation}`}>
              <Heading size="2xl" className={styles.heading}>Greyhound (2020)</Heading>

              <div className={styles.metadata}>
                <Tag className={`${styles.rating}`}>PG-13</Tag>
                <span className={`${styles.releaseDate}`}>07/10/2020 (PT)</span>
                <span className={`${styles.genres}`}>War, Action, Drama</span>
                <span className={`${styles.runtime}`}>1h 31m</span>
              </div>
            </GridItem>

            <GridItem colStart={2} className={`${styles.movieInformation}`}>
              <div className={styles.overview}>
                <Heading size="xl">Overview</Heading>
                <p>A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.</p>
              </div>
            </GridItem>

          </Grid>
        </main>
      </div>
    )
  }
}

export default withRouter(MovieDetail)
