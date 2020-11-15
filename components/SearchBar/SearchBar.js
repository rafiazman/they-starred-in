import React from 'react'

import {Input} from "@chakra-ui/react"

import styles from './SearchBar.module.scss'
import randomActors from './random-actors.json'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      randomActorId: 0,
      moveUp: false,
    }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState(st => ({randomActorId: st.randomActorId + 1}))
    }, 1500)
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  handleOnChange(e) {
    const { target: { value } } = e

    this.setState({ moveUp: Boolean(value) })

    const {onChange} = this.props
    onChange(e)
  }

  render() {
    const {className} = this.props
    const {randomActorId, moveUp} = this.state

    const randomActor = randomActors[randomActorId % randomActors.length] ?? "Ronny Chieng"

    const cssStyles = {
      verticalAlign: 'top',
    }

    const searchInput = <Input size="lg"
                               width={380}
                               variant="outline"
                               placeholder={randomActor}
                               css={cssStyles}
                               fontWeight="bold"
                               minHeight="80px"
                               fontSize="0.5em"
                               onChange={e => this.handleOnChange(e)}
                               ml={2}
                               mr={2}
                               textAlign="center"/>

    return (
      <h1 className={`${styles.title} ${moveUp ? styles.top : styles.centre} ${className ? className : ""}`}>
        Which movie did {searchInput} star in?
      </h1>
    )
  }
}

export default SearchBar
