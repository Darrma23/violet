let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/xixi.webp'
conn.sendFile(m.chat, sticker, 'xixi.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
 // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /xixixi|xixixii/
handler.command = new RegExp
module.exports = handler
