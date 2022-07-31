let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085624823115]
│ • Dana [089531704997]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281646829895
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
