const layout = require('./layout')
const uuid = require('uuid/v3')

const dateFormat = submitted_at =>
  new Date(submitted_at).toLocaleDateString('en-us')

const repoTemplate = ({ description, id, name, submitted_at, url }, request) =>
  `<div class="media" data-repo-id="${id}">
     <div class="media-content">
       <p>
         <strong><a href="${url}">${name}</a></strong>
       </p>
       <p>
         ${description}
       </p>
       <p>
         <span class="is-size-7">
           Submitted ${dateFormat(submitted_at)}</span>
       </p>
     </div>
   </div>
`

const template = (repos, request) => {
  const renderedRepos = repos.map(repo => repoTemplate(repo, request))

  return layout(`
  <div>
    ${
      repos.length
        ? renderedRepos.join('')
        : `<p>No repos have been submitted yet!</p>`
    }
  </div>
`)
}

module.exports = template
