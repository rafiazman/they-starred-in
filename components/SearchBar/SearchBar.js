import React from 'react'

import { Input } from "@chakra-ui/react"

import styles from './SearchBar.module.scss'
import randomActors from './random-actors.json'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            currentPlaceholderId: 0,
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => {
            this.setState(st => ({ randomActorId: st.currentPlaceholderId++ }))
        }, 1500)
    }

    componentDidUnmount() {
        clearInterval(this.timeout)
    }


    render() {
        const { onChange, className } = this.props
        const { randomActorId } = this.state;

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
                                   onChange={onChange}
                                   ml={2}
                                   mr={2}
                                   textAlign="center" />

        return (
            <h1 className={`${styles.title} ${className}`}>
                Which movie did {searchInput} star in?
            </h1>
        )
    }
}

export default SearchBar