let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/lag.webp'
conn.sendFile(m.chat, sticker, 'lag.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
// true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Lag|6289524339740/
handler.command = new RegExp
module.exports = handler
