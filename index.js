const Router = require('./router')

const index = require('./handlers/index')
const post = require('./handlers/post')
const create = require('./handlers/create')
const upvote = require('./handlers/upvote')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    const r = new Router()
    r.get('/', index)
    r.get('/post', post)
    r.post('/repo', create)
    r.post('/upvote', upvote)
    const resp = await r.route(request)
    return resp
  } catch (err) {
    return new Response(err)
  }
}
