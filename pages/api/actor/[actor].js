import axios from 'axios'
import {API_HOSTNAME_PEOPLE} from "../../../constants";

async function handler(req, res) {
  const {
    query: {actor},
  } = req

  const {API_KEY} = process.env
  const url = `${API_HOSTNAME_PEOPLE}/${actor}/movie_credits?api_key=${API_KEY}`
  const {data: { cast: movies }} = await axios.get(url)

  movies.sort( ({ release_date: releaseDateA }, { release_date: releaseDateB }) => {
    const releaseDateNumberA = releaseDateA ? Number(releaseDateA.replace(/-/g, "")) : -1
    const releaseDateNumberB = releaseDateB ? Number(releaseDateB.replace(/-/g, "")) : -1

    return releaseDateNumberB - releaseDateNumberA
  })

  res.json(movies)
}

export default handler
