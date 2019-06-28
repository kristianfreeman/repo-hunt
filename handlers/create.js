const qs = require('qs')

const Day = require('../store/day')
const Repo = require('../store/repo')

const handler = async request => {
  try {
    const body = await request.text()

    if (!body) {
      throw new Error('Incorrect data')
    }

    const data = qs.parse(body)

    const repo = new Repo(data)
    await repo.save()
    await Day.add(repo.id)

    return new Response('ok', { headers: { Location: '/' }, status: 301 })
  } catch (err) {
    return new Response(err, { status: 400 })
  }
}

module.exports = handler
