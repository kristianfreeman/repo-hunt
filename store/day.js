const Repo = require('./repo')

const today = () => new Date().toLocaleDateString()

const todayData = async () => {
  const date = today()
  const persisted = await REPO_HUNT.get(date)
  return persisted ? JSON.parse(persisted) : []
}

module.exports = {
  getRepos: async function() {
    const ids = await todayData()
    return ids.length ? Repo.findMany(ids) : []
  },

  add: async function(id) {
    const date = today()
    let ids = await todayData()
    ids = ids.concat(id)
    return REPO_HUNT.put(date, JSON.stringify(ids))
  },
}
