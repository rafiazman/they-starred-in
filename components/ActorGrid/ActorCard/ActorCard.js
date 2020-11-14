import React from 'react'

import { Box } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"
import MovieCard from "./MovieCard/MovieCard"

class ActorCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actor } = this.props
        const movies = actor.known_for

        if (movies.length === 0) return null

        return (
            <AccordionItem>
                <AccordionButton>
                    <Box flex="1" textAlign="left">
                        <Heading>{ actor.name }</Heading>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                    <HStack spacing={4} justify="space-between" css={{ marginTop: '20px'}}>
                        { movies.map(movie => <MovieCard key={movie.id} movie={movie} />) }
                    </HStack>
                </AccordionPanel>
            </AccordionItem>
        );
    }
}

export default ActorCard