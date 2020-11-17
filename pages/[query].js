import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import axios from 'axios'

import Delayer from "../components/Delayer/Delayer"
import SearchBar from "../components/SearchBar/SearchBar"

import {CircularProgress, Container} from "@chakra-ui/react"
import styles from './[query].module.scss'
import ActorGrid from "../components/ActorGrid/ActorGrid";
import {API_HOSTNAME_SEARCH_PERSON} from "../constants";

const searchActor = name => axios.get(`/api/search/${name}`)
const searchActorDebounced = AwesomeDebouncePromise(searchActor, 700)

export async function getServerSideProps(context) {
  const { query } = context.query
  const { API_KEY } = process.env
  const { data } = await axios.get(`${API_HOSTNAME_SEARCH_PERSON}?api_key=${API_KEY}&query=${query}`)

  return {
    props: {
      query,
      queryResponse: data,
    },
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props)

    const { query, queryResponse } = props

    this.state = {
      query: query ? query : "",
      queryResponse: queryResponse ? queryResponse : null,

      isFilled: Boolean(query),
      isLoading: false,
    }
  }

  async onChangeSearchBar(e) {
    const val = e.target.value

    const { router } = this.props

    this.setState({
      query: val,
      isFilled: Boolean(val)
    })

    if (val) {
      router.push(`/${val}`, undefined, { shallow: true })

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
          <SearchBar onChange={e => this.onChangeSearchBar(e)} value={query ? query : ""} />

          {isLoading && <Delayer delay={1000}>
            <CircularProgress isIndeterminate color="green.300" css={circularProgressCss}/>
          </Delayer>}

          {!isLoading && isFilled && <ActorGrid actors={queryResponse ? queryResponse.results : null}/>}
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

export default withRouter(Home)
