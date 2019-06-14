const layout = body => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Repo Hunt</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  </head>
  <body>
    <div class='bg-blue-200 mb-2 px-4 py-2'>
      <a class="text-blue-900 font-bold text-lg" href="/">Repo Hunt</a>
      <a class="text-blue-900 ml-6" href="/post">Post a repo</a>
    </div>
    <div class="px-4 py-2">
      ${body}
    </div>
  </body>
</html>
`
module.exports = layout
