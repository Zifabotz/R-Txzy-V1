//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
*Allo mypren bantu donasi yuk supaya bot aktif selalu👋,Donasi kalian sangat berharga bagi kami biar pun sedikit*
╔═══════════════════
║ _*DONASI UNTUK*_  ⳹ ❋ཻུ۪۪Zifabotz⳹ ❋ཻུ۪۪⸙
╠═══════════════════
║╭──❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉──────
║│➸ *DANA* : 085828764046
║│➸ *PULSA*: 085728764046
║│➸ *GOPAY*: 085828764046
║╰──────────────────
╰═══════════════════
⳹ ❋ཻུ۪۪⸙Zifabotz⳹ ❋ཻུ۪۪⸙
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
