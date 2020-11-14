import React from 'react'

import styles from './SearchBar.module.scss'
import {Input} from "@chakra-ui/react"

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onChange, onFocus, onBlur, className } = this.props

        const cssStyles = {
            verticalAlign: 'top',
        }

        return (
            <h1 className={`${styles.title} ${className}`}>
                Which movie did <Input size="lg"
                                      width={380}
                                      variant="outline"
                                      placeholder="Tom Hanks"
                                      css={cssStyles}
                                      fontWeight="bold"
                                      minHeight="80px"
                                      fontSize="0.5em"
                                      ml={2}
                                      mr={2}
                                      onFocus={onFocus}
                                      onBlur={onBlur}
                                      onChange={onChange}
                                      textAlign="center" /> star in?
            </h1>
        )
    }
}

export default SearchBar