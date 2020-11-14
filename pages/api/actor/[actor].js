import axios from 'axios'
import { API_HOSTNAME_PEOPLE } from "../../../constants";

async function handler(req, res) {
    const {
        query: { actor },
    } = req

    const { API_KEY } = process.env
    const results = await axios.get(`${API_HOSTNAME_PEOPLE}/${actor}/movie_credits?api_key=${API_KEY}`)

    res.json(results.data.cast)
}

export default handler