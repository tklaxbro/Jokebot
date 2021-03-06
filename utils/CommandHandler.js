const requireDir = require('require-dir');
const config = require('../config.json')

class CommandClass {
  constructor(bot){
    this.bot = bot
    this.commands = requireDir('../Commands', {recurse : true , extensions: ['.js']})
  }

  handle(message){
    if(!message.content.startsWith(config.prefix)) return
    let content = message.content.split(' ')
    let commandString = content.shift().slice(config.prefix.length)
    let args = content.join(' ')
    console.log(commandString)
    let CommandClass = this.commands[commandString.toLowerCase()]
    if(!CommandClass) return
    let Command = new CommandClass(this.bot)
    Command.execute(message, args)
  }
}

module.exports = CommandClass
