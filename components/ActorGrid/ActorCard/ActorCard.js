import React from 'react'
import axios from 'axios'

import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import MovieCard from "./MovieCard/MovieCard"

class ActorCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        const { actor } = this.props
        axios.get(`/api/actor/${actor.id}`)
            .then(({ data }) => this.setState({ movies: data }))
    }

    render() {
        const { actor } = this.props
        const { movies } = this.state

        if (movies.length === 0) return null

        return (
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading>{ actor.name }</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel mb={4}>
                    <SimpleGrid columns={[3, 4, 5]} spacing={4} css={{ marginTop: '20px'}}>
                        { movies.map(movie => <MovieCard key={movie.id} movie={movie} />) }
                    </SimpleGrid>
                </AccordionPanel>
            </AccordionItem>
        );
    }
}

export default ActorCard
