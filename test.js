process.env.PORT = 8888

var request = require('request')

require('./server')

request('http://localhost:8888', function (error, response, body) {
  if (error) {
    console.log(error)
    process.exit(1)
  }

  if (/Knock, knock/.test(body)) {
    console.log('✓ "Knock, knock" found')
    process.exit(0)
  } else {
    console.log('✗ "Knock, knock" not found')
    process.exit(1)
  }
})
