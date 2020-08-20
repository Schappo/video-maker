import getUserInputs from './user-inputs'

import getGoogleSearchData from './robots'

async function start () {
  const content = getUserInputs()
  await getGoogleSearchData(content)
  // const jsonData = require('./data.json')
  // console.log(jsonData.items[0].link)
}

start()
