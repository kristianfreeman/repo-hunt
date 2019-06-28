const headers = { 'Content-Type': 'text/html' }
const template = require('../templates/index')

const Day = require('../store/day')

const handler = async () => {
  try {
    let repos = await Day.getRepos()
    return new Response(template(repos), { headers })
  } catch (err) {
    return new Response(`Error! ${err} for ${JSON.stringify(repos)}`)
  }
}

module.exports = handler
