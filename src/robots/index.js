import request from 'request'
// import qs from 'querystring'
// import fs from 'fs'

// import credentials from '../credentials/google-search.json'

// const BASE_URL = 'https://customsearch.googleapis.com/customsearch/v1?'

// function handlerQueryParams (params) {
//   const query = Object.values(params)
//   console.log(query)
//   let q = 'site:instagram.com'

//   for (var i = 0; i < query.length; i++) {
//     q += ` AND ${query[i]}`
//   }
//   return {
//     key: credentials.apiKey,
//     cx: credentials.searchEngineId,
//     q,
//     c2coff: '1',
//     filter: 1,
//     gl: 'br',
//     safe: 'active'
//   }
// }

async function getGoogleSearchData (params) {
  // const queryParams = handlerQueryParams(params)

  // const url = `${BASE_URL}${qs.stringify(queryParams)}`

  // request(url).pipe(fs.createWriteStream('./data.json'))

  const jsonData = require('../data.json')

  // request(jsonData.items[0].link).pipe(fs.createWriteStream('../instagramData.json'))
  request(jsonData.items[0].link, (err, resp, body) => {
    console.log(err)
    console.log(body)
  })

  // const instagramData = require('../intagramData.json')
  // console.log(instagramData)
}

export default getGoogleSearchData
