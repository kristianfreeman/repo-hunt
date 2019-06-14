const headers = { 'Content-Type': 'text/html' }
const template = require('../templates/post.js')

const handler = request => {
  try {
    return new Response(template(), { headers })
  } catch (err) {
    return new Response(err)
  }
}

module.exports = handler
