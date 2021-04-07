const { Telegraf } = require('telegraf')
const comandos = require('./functions/comandos')
const comandosEspeciales = require('./functions/especiales')
const funciones = require('./functions/funciones')
const keys = require('./database/keys')

const bot = new Telegraf(keys.tg.apiKey)

bot.command("denuncia",(ctx)=>{
  ctx.replyWithHTML(`<strong>Proceso para realizar una denuncia</strong>

<strong>En grupo</strong> - Cuando se ofrezcan diferentes servicios en el chat grupal
1. Utilizar el comando @Admin, un administrador del grupo verificará el mensaje señalado y se tratará de resolver rápidamente el problema

<strong>Privado</strong> - Cuando se escriba de forma privada
1. <strong>Reenviar</strong> el mensaje de la persona involucrada a uno de los administradores, se puede utilizar el comando /staff para poder identificar a los administradores

2. Opcional, adjuntar capturas de mensajes, aunque esto tiene validez, se tomará en cuenta los mensajes reenviados debido a que telegram indica la persona que envió el mensaje

<i>Agradecemos el interés expresado al realizar denuncias para mantener un grupo y una comunidad limpia</i>`)
})

module.exports = bot