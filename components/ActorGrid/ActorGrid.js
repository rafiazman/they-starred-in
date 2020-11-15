import React from 'react'

import ActorCard from "./ActorCard/ActorCard";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading
} from "@chakra-ui/react"

import styles from './ActorGrid.module.scss'

class ActorGrid extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {actors} = this.props

    if (!actors || actors.length == 0) {
      return (
        <Heading className={styles.centre} size="md">No results for this person</Heading>
      )
    }

    const cssProps = {
      width: '100%',
      padding: '60px 100px',
    }

    return (
      <Accordion allowToggle defaultIndex={0} css={cssProps}>
        {actors.map(actor => <ActorCard key={actor.id} actor={actor}/>)}
      </Accordion>
    )
  }
}

export default ActorGrid
