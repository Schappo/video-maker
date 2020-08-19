const readline = require('readline-sync')

function getUserInputs () {
  const content = {
    loop: true
  }
  while (content.loop) {
    let param = readline.question('parametro de busca (Parametro 0 encerra a busca): ')
    if (param === '0') {
      content.loop = false
    }
    param.trim()
    param = param.toLowerCase()
    content[param] = param
  }

  delete content.loop
  delete content['0']
  return content
}

export default getUserInputs
