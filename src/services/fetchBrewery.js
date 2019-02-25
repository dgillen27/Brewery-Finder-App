import axios from 'axios'
const BASE_URL = "https://api.openbrewerydb.org/breweries?"


const fetchByCity = async (city) => {
  const resp = await axios(`${BASE_URL}?by_city=${city}`)
  return resp.data;
}

export default fetchByCity;
