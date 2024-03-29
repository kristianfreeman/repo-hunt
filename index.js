const Router = require('./router')

const index = require('./handlers/index')
const post = require('./handlers/post')
const create = require('./handlers/create')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

function handleRequest(request) {
  try {
    const r = new Router()
    r.get('/', index)
    r.get('/post', post)
    r.post('/repo', create)
    return r.route(request)
  } catch (err) {
    return new Response(err)
  }
}
