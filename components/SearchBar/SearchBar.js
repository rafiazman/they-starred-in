import React from 'react'

import {Input, Heading, Box} from "@chakra-ui/react"

import styles from './SearchBar.module.scss'
import randomActors from './random-actors.json'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    const {value} = props

    this.state = {
      randomActorId: 0,
      moveUp: Boolean(value),
      animations: !Boolean(value),
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

    this.setState({ animations: true, moveUp: Boolean(value) })

    const {onChange} = this.props
    onChange(e)
  }

  handleOnKeyPress(e) {
    const { key } = e
    if (key === 'Enter') e.target.blur()
  }

  getTopCssClassName() {
    const {moveUp, animations} = this.state

    if (!moveUp) return styles.centre;

    if (animations) return styles.topAnimated;
    else return styles.top;
  }

  render() {
    const {className, value} = this.props
    const {randomActorId} = this.state

    const randomActor = randomActors[randomActorId % randomActors.length]

    const searchInput = <Input size="lg"
                               variant="outline"
                               className={styles.searchBox}
                               placeholder={randomActor}
                               value={value ? value : ""}
                               onChange={e => this.handleOnChange(e)}
                               onKeyPress={e => this.handleOnKeyPress(e)}
                               textAlign="center"/>

    return (
      <h2 className={`${this.getTopCssClassName()} ${className ? className : ""} ${styles.heading}`}>
        Which movie did {searchInput} star in?
      </h2>
    )
  }
}

export default SearchBar
