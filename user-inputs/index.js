const readline = require('readline-sync')

function getUserInputs () {
  const content = {}

  content.searchTerm = askAndReturnSearcTerm()
  content.prefix = askAndReturnPrefix()

  function askAndReturnSearcTerm () {
    return readline.question('Type a Wikipedia search Term: ')
  }

  function askAndReturnPrefix () {
    const prefixes = ['Who is', 'What is', 'The History OF']
    const selectedPrefixIndex = readline.keyInSelect(prefixes)
    const selectedPRefixText = prefixes[selectedPrefixIndex]

    return selectedPRefixText
  }
  return content
}

export default getUserInputs
