const layout = require('./layout')
const uuid = require('uuid/v3')
const orderRepos = (a, b) => a.votes_count < b.votes_count

const illustration = require('./illustration')

const dateFormat = submitted_at =>
  new Date(submitted_at).toLocaleDateString('en-us')

const repoTemplate = (
  { description, id, name, submitted_at, url, voters, votes_count },
  request
) =>
  `<div class="repo py-2" data-repo-id="${id}">
     <div class="pb-1">
       ${
         voters.find(voter => voter === request.headers.get('CF-Connecting-IP'))
           ? `<span></span>`
           : `<span class="cursor-pointer upvote">▲</span>`
       }
       <a class="text-lg" href="${url}">${name}</a>
     </div>
     <div class="pb-1 text-sm">
       ${description}
     </div>
     <div>
       <span class="text-sm">
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

  const illustrationContainer = `
    <div class="flex mt-8 items-center justify-center">
      ${illustration}
    </div>
  `

  return layout(`
  <div>
    ${repos.length ? renderedRepos.join('') : illustrationContainer}
    ${upvoteScript}
  </div>
`)
}

module.exports = template
