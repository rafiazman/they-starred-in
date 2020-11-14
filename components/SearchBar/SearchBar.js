import React from 'react'

import { Input } from "@chakra-ui/react"

import styles from './SearchBar.module.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onChange, className } = this.props

        const cssStyles = {
            verticalAlign: 'top',
        }

        const searchInput = <Input size="lg"
                                   width={380}
                                   variant="outline"
                                   placeholder="Tom Hanks"
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