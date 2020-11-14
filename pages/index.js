import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import SearchBar from "../components/SearchBar/SearchBar"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            isFilled: false,
        }
    }

    onChangeSearchBar(e) {
        const val = e.target.value
        this.setState({ query: val, isFilled: true })
    }

    render() {
        const { isFilled } = this.state;

        return (
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <SearchBar className={`${isFilled ? styles.searchBarTop : styles.searchBar}`}
                               onChange={e => this.onChangeSearchBar(e)} />
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
