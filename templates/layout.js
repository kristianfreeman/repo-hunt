const layout = body => `
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Repo Hunt</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
  </head>
  <body>
    <div class="container">
      <div class="navbar">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">Repo Hunt</a>
          <span class="is-italic navbar-item">Find cool open-source projects daily</span>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <a class="navbar-item button is-primary" href="/post">Post a repository</a>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        ${body}
      </div>
    </div>
  </body>
</html>
`
module.exports = layout
