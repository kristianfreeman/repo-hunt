const headers = { 'Content-Type': 'text/html' }
const template = require('../templates/index.js')
const uuid = require('uuid/v4')

const Day = require('../store/day')

const handler = async request => {
  try {
    let repos = await Day.getRepos()
    return new Response(template(repos, request), { headers })
  } catch (err) {
    return new Response(`Error! ${err} for ${JSON.stringify(repos)}`)
  }
}

module.exports = handler
