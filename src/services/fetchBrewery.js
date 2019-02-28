import axios from 'axios'
const BASE_URL = "https://api.openbrewerydb.org/breweries"


const fetchByCity = async (city) => {
  const resp = await axios(`${BASE_URL}?per_page=50&by_city=${city}`)
  console.log(resp);
  return resp.data;
}

const fetchByState = async (state) => {
  const resp = await axios(`${BASE_URL}?by_state=${state}`)
  console.log(resp);
  return resp.data;
}

const fetchByName = async (name) => {
  const resp = await axios(`${BASE_URL}?by_name=${name}`)
  console.log(resp);
  return resp.data;
}

export {
  fetchByCity,
  fetchByState,
  fetchByName
}
