import getUserInputs from './user-inputs'

import getGoogleSearchData from './robots'

function start () {
  const content = getUserInputs()
  console.log(getGoogleSearchData(content))
}
start()
