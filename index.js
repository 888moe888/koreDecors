const app = require('./src/app')
const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('Kore DecorsJSON listening on http://localhost:' + port)
});