
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Tebak Kota 」/i.test(m.quoted.text)) return !0
  conn.tebakkota = conn.tebakkota ? conn.tebakkota : {}
  if (!(id in conn.tebakkota)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == conn.tebakkota[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.tebakkota[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (' '+m.text.toUpperCase() == json.result.jawaban.toUpperCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.tebakkota[id][2]
      m.reply(`*Benar!*\n+Rp${conn.tebakkota[id][2]}`)
      clearTimeout(conn.tebakkota[id][3])
      delete conn.tebakkota[id]
    } else if (m.text.toUpperCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler
