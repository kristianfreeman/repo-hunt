const layout = require('./layout')
const uuid = require('uuid/v3')

const dateFormat = submitted_at =>
  new Date(submitted_at).toLocaleDateString('en-us')

const repoTemplate = ({ description, name, submitted_at, url }) =>
  `<div class="media">
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

const template = repos => {
  const renderedRepos = repos.map(repoTemplate)

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
