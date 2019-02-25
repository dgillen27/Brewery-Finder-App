import axios from 'axios'
const BASE_URL = "https://api.openbrewerydb.org/breweries"


const fetchBrewery = async () => {
  const resp = await axios(BASE_URL)
  return resp.data;
}

export default fetchBrewery;
