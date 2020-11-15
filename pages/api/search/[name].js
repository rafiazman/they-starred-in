import axios from 'axios'
import {API_HOSTNAME_SEARCH_PERSON} from "../../../constants";

async function handler(req, res) {
  const {
    query: {name},
  } = req

  const {API_KEY} = process.env
  const url = `${API_HOSTNAME_SEARCH_PERSON}?api_key=${API_KEY}&query=${encodeURIComponent(name)}`

  const {data} = await axios.get(url)

  res.json(data)
}

export default handler
