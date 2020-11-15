import React from 'react'

import {Input, Heading, Box} from "@chakra-ui/react"

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

    const searchInput = <Input size="lg"
                               variant="outline"
                               className={styles.searchBox}
                               placeholder={randomActor}
                               onChange={e => this.handleOnChange(e)}
                               textAlign="center"/>

    return (
      <h2 className={`${moveUp ? styles.top : styles.centre} ${className ? className : ""} ${styles.heading}`}>
        Which movie did {searchInput} star in?
      </h2>
    )
  }
}

export default SearchBar
