const Repo = require('./repo')

const today = () => new Date().toLocaleDateString()

module.exports = {
  clear: function() {
    const date = today()
    REPO_HUNT.put(date, JSON.stringify([]))
  },

  getRepos: async function() {
    const date = today()
    const persisted = await REPO_HUNT.get(date)
    const ids = persisted ? JSON.parse(persisted) : []
    return ids.length ? Repo.findMany(ids) : []
  },

  add: async function(id) {
    const date = today()
    const persisted = await REPO_HUNT.get(date)
    let ids = persisted ? JSON.parse(persisted) : []
    ids = ids.concat(id)
    return REPO_HUNT.put(date, JSON.stringify(ids))
  },
}
