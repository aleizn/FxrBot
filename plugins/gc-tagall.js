let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*@𝐮𝐬𝐞𝐫_𝐟𝐱𝐱𝐫:* ${pesan}`
let teks = `*𝐀𝐫𝐫𝐢𝐛𝐚 𝐧𝐞𝐠𝐫𝐱𝐬 𝐜𝐭𝐦𝐫*\n\n🫶🏻 ${oi}\n\n🫶🏻 *➢𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣🫧 @${mem.id.split('@')[0]}\n`}
teks += `└𝐅𝐱𝐫 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler