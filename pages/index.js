import React from 'react'
import Head from 'next/head'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import axios from 'axios'

import Delayer from "../components/Delayer/Delayer"
import SearchBar from "../components/SearchBar/SearchBar"

import {CircularProgress, Container} from "@chakra-ui/react"
import styles from '../styles/index.module.scss'
import ActorGrid from "../components/ActorGrid/ActorGrid";

const searchActor = name => axios.get(`/api/search/${name}`)
const searchActorDebounced = AwesomeDebouncePromise(searchActor, 700)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      queryResponse: null,

      isFilled: false,
      isLoading: false,
    }
  }

  async onChangeSearchBar(e) {
    const val = e.target.value
    this.setState({
      query: val,
      isFilled: Boolean(val)
    })

    if (val) {
      this.setState({isLoading: true})
      const queryResponse = (await searchActorDebounced(val)).data
      this.setState({queryResponse, isLoading: false})
    }
  }

  render() {
    const {isFilled, isLoading, queryResponse, query} = this.state;

    const circularProgressCss = {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };

    return (
      <div className={styles.container}>
        <Head>
          <title>{query ? query : "They"} Starred In</title>
        </Head>

        <main className={styles.main}>
          <SearchBar onChange={e => this.onChangeSearchBar(e)}/>

          {isLoading && <Delayer delay={1000}>
            <CircularProgress isIndeterminate color="green.300" css={circularProgressCss}/>
          </Delayer>}

          {!isLoading && <ActorGrid actors={queryResponse && isFilled ? queryResponse.results : null}/>}
        </main>

        <footer className={styles.footer}>
          <a href="https://github.com/rafiazman/they-starred-in"
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
