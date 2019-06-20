const layout = require('./layout')
const uuid = require('uuid/v3')
const orderRepos = (a, b) => b.votes_count - a.votes_count

const dateFormat = submitted_at =>
  new Date(submitted_at).toLocaleDateString('en-us')

const repoTemplate = (
  { description, id, name, submitted_at, url, voters, votes_count },
  request
) =>
  `<div class="section" data-repo-id="${id}">
     <div>
       ${
         voters.find(voter => voter === request.headers.get('CF-Connecting-IP'))
           ? `<span></span>`
           : `<span class="cursor-pointer upvote">▲</span>`
       }
       <a href="${url}">${name}</a>
     </div>
     <div>
       ${description}
     </div>
     <div>
       <span class="is-size-7">
         ${votes_count} votes ·
         Submitted ${dateFormat(submitted_at)}</span>
     </div>
   </div>
`

const upvoteScript = `
  <script>
    const upvote = id => {
      fetch("/upvote", {
        method: 'POST',
        body: JSON.stringify({ id })
      })
    }

    document.querySelectorAll(".upvote").forEach(el => {
      const repoEl = el.closest(".repo")
      const repoId = repoEl.dataset.repoId
      repoEl.addEventListener('click', evt => {
        upvote(repoId)
        el.innerText = ""
      })
    })
  </script>
`

const template = (repos, request) => {
  const renderedRepos = repos
    .sort(orderRepos)
    .map(repo => repoTemplate(repo, request))

  return layout(`
  <div>
    ${
      repos.length
        ? renderedRepos.join('')
        : `<p>No repos have been submitted yet!</p>`
    }
    ${upvoteScript}
  </div>
`)
}

module.exports = template
