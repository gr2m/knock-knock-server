var Hapi = require('hapi')
var getJoke = require('randmon-knock-knock')
var server = new Hapi.Server()
server.connection({ port: process.env.PORT || 3000 })
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var joke = getJoke().split('\n')
    reply(`<p>${joke[0]}</p><p>${joke[1]}</p><p>${joke[2]}</p><p>${joke[3]}</p><p>${joke[4]}</p><style>html{background:#FDE52A}body{max-width:800px;margin:0 auto;font: 24px Arial Black}p{margin: 1em 25% 0 0; padding: 1em; border: 7px solid #000; border-radius: 9em 9em 9em 0;}p:nth-child(even){margin: 1em 0 0 25%; background: #000; color: #FDE52A; text-align:right; border-radius: 9em 9em 0 9em;}`)
  }
})
server.start(function (error) {
  if (error) throw error
  console.log('Server running at:', server.info.uri)
})
