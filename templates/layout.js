const layout = body => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Repo Hunt</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
    <div class='bg-blue-800 mb-2 py-2'></div>
    <div class='mb-2 p-4 text-blue-800 flex items-center'>
      <div class="flex-1">
        <a class="font-bold uppercase tracking-wide text-lg" href="/">Repo Hunt</a>
        <span class="px-4 italic">Find cool open-source projects daily</span>
      </div>
      <div class="px-4">
        <a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="/post">Post a repository</a>
      </div>
    </div>
    <div class="px-4 py-2">
      ${body}
    </div>
    <footer class="fixed w-full bottom-0 p-2 text-center text-gray-700 text-sm">
      <p>Find the source for this project on <a class="text-blue-800" href="https://github.com/signalnerve/repo-hunt">GitHub</a></p>
      <p><a class="text-orange-800" href="https://workers.cloudflare.com">Built with Cloudflare Workers ☁️👷‍♀️</a></p>
    </footer>
  </body>
</html>
`
module.exports = layout
