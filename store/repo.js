const uuid = require('uuid/v4')

class Repo {
  static findMany(ids) {
    return Promise.all(ids.map(Repo.find))
  }

  static async find(id) {
    const persisted = await REPO_HUNT.get(`repos:${id}`)
    const repo = JSON.parse(persisted)
    return persisted ? new Repo({ ...repo }) : null
  }

  constructor({
    id,
    description,
    name,
    submitted_at,
    url,
    voters,
    votes_count,
  }) {
    if (!name) {
      throw new Error(`Missing name in data`)
    }

    try {
      const urlObj = new URL(url)
      const whitelist = ['github.com', 'gitlab.com']

      if (!whitelist.some(valid => valid === urlObj.host)) {
        throw new Error('The URL provided is not a repository')
      }
    } catch (err) {
      throw new Error('The URL provided is not valid')
    }

    this.id = id || uuid()
    this.description = description
    this.name = name
    this.submitted_at = submitted_at || Number(new Date())
    this.voters = voters || []
    this.votes_count = votes_count || 0
    this.url = url
  }

  save() {
    return REPO_HUNT.put(`repos:${this.id}`, JSON.stringify(this))
  }
}

module.exports = Repo
