import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝗖𝗿𝗲𝗮𝗱𝗼 𝗽𝗼𝗿 𝙈𝙤𝙣𝙤𝙎𝙚𝙭𝙤', body: '𝙈𝙤𝙣𝙤𝙎𝙚𝙭𝙤', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
