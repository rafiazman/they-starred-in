import React from 'react'

import ActorCard from "./ActorCard/ActorCard";
import { SimpleGrid } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"

class ActorGrid extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { actors } = this.props

        if (!actors) return null

        const cssProps = {
            marginTop: '50px',
            marginBottom: '50px',
            width: '100%',
            paddingLeft: '30px',
            paddingRight: '30px',
        }

        return (
            <Accordion allowToggle defaultIndex={0} css={{ width: '100%', padding: '60px 100px' }}>
                { actors.map(actor => <ActorCard key={actor.id} actor={actor} />) }
            </Accordion>
        )
    }
}

export default ActorGrid