import { Hono } from "hono"

const app = new Hono()

app.get("*", (c) => {
  return c.html(`<!doctype html>
<html lang="js">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>/</title>
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/index.css">
  </head>
  <body class="min-h-screen font-medium font-mono antialiased dark overflow-x-hidden">
    <div id="app"></div>
  </body>
</html>`)
})

export default app
