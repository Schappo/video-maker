import request from 'request'
import qs from 'querystring'

import credentials from '../credentials/google-search.json'

const BASE_URL = 'https://customsearch.googleapis.com/customsearch/v1?'

function handlerQueryParams (params) {
  const query = Object.values(params)
  console.log(query)
  let q = 'site:instagram.com'

  for (var i = 0; i < query.length; i++) {
    q += ` AND ${query[i]}`
  }
  return {
    key: credentials.apiKey,
    cx: credentials.searchEngineId,
    q,
    c2coff: '1',
    filter: 1,
    gl: 'br',
    safe: 'active'
  }
}
const resp = []

async function getGoogleSearchData (params) {
  const queryParams = handlerQueryParams(params)
  const url = `${BASE_URL}${qs.stringify(queryParams)}`
  await request.get(url, (error, response, body) => {
    if (response.statusCode === 200) {
      resp.push(body)
      console.log(resp[0])
    } else {
      console.error(error)
    }
  })
}

export default getGoogleSearchData
