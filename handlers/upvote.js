const Repo = require('../store/repo')

const headers = { 'Content-Type': 'application/json' }

const handler = async request => {
  try {
    const ip = request.headers.get('CF-Connecting-IP')
    const body = await request.json()
    const repo = await Repo.find(body.id)
    if (!repo.voters.find(voter => voter === ip)) {
      repo.votes_count += 1
      repo.voters = repo.voters.concat(ip)
      repo.save()
    }
    return new Response(JSON.stringify({ repo }), { headers })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

module.exports = handler
