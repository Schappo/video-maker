const getUserInputs = require('./user-inputs')
const robots = {
  text: require('./robots/googleSearch.js')
}

async function start () {
  await robots.text(getUserInputs())
}

start()
