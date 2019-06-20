const layout = require('./layout')

const template = () =>
  layout(`
  <div>
    <h1>Post a new repo</h1>
    <form action="/repo" method="post">
      <div class="field">
        <label class="label" for="name">Name</label>
        <input class="input" id="name" name="name" type="text" placeholder="Name" required></input>
      </div>
      <div class="field">
        <label class="label" for="description">Description</label>
        <input class="input" id="description" name="description" type="text" placeholder="Description"></input>
      </div>
      <div class="field">
        <label class="label" for="url">URL</label>
        <input class="input" id="url" name="url" type="text" placeholder="URL" required></input>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
`)

module.exports = template
