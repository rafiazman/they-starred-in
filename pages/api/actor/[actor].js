import axios from 'axios'
import {API_HOSTNAME_PEOPLE} from "../../../constants";

async function handler(req, res) {
  const {
    query: {actor},
  } = req

  const {API_KEY} = process.env
  const url = `${API_HOSTNAME_PEOPLE}/${actor}/movie_credits?api_key=${API_KEY}`
  const {data} = await axios.get(url)

  const sortedData = data.cast.sort( (movieA, movieB) => {
    const releaseDateA = movieA.release_date
    const releaseDateB = movieB.release_date

    const releaseYearA = releaseDateA ? Number(releaseDateA.substring(0, 4)) : -1
    const releaseYearB = releaseDateB ? Number(releaseDateB.substring(0, 4)) : -1

    return releaseYearB - releaseYearA
  })

  res.json(sortedData)
}

export default handler
