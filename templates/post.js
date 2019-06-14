const layout = require('./layout')

const template = () =>
  layout(`
  <div>
    <h1 class="text-xl mb-4">Post a new repo</h1>
    <form action="/repo" method="post">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Name" required></input>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="description" type="text" placeholder="Description"></input>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="url">URL</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" name="url" type="text" placeholder="URL" required></input>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
  </div>
`)

module.exports = template
