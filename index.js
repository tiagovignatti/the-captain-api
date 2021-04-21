const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/v1/adjectives', (req, res) => res.send(showAdjectives()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

showAdjectives = () => {
  let result = 'ignóbil';
  return result;
}