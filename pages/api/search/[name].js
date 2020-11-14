import axios from 'axios'
import { API_HOSTNAME_SEARCH_PERSON } from "../../../constants";

async function handler(req, res) {
    const {
        query: {name},
    } = req

    const { API_KEY } = process.env
    const results = await axios.get(`${API_HOSTNAME_SEARCH_PERSON}?api_key=${API_KEY}&query=${encodeURIComponent(name)}`)

    res.json(results.data)
}

export default handler