import React from 'react'
import Head from 'next/head'

import Delayer from "../components/Delayer/Delayer"
import SearchBar from "../components/SearchBar/SearchBar"
import { CircularProgress } from "@chakra-ui/react"

import styles from '../styles/Home.module.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            isFilled: false,
            loading: false,
        }
    }

    onChangeSearchBar(e) {
        const val = e.target.value
        this.setState({
            query: val,
            isFilled: true,
            isLoading: true,
        })
    }

    render() {
        const { isFilled, isLoading } = this.state;
        const circularProgressCss = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        };

        return (
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <SearchBar className={`${isFilled ? styles.searchBarTop : styles.searchBar}`}
                               onChange={e => this.onChangeSearchBar(e)}></SearchBar>

                    { isLoading && <Delayer delay={1000}>
                        <CircularProgress isIndeterminate color="green.300" css={circularProgressCss} />
                    </Delayer> }


                </main>

                <footer className={styles.footer}>
                    <a href="https://github.com/rafiazman"
                        target="_blank"
                        rel="noopener noreferrer">
                        Developed by Rafi Azman
                    </a>
                </footer>
            </div>
        )
    }
}

export default Home
