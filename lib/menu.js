exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ./barnacleboy26!✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Command / Perintah :
   
 ꧁ *./barnacleboy26 WHATSAP BOT* ꧂
╿
┷┯ ☾ Group Commands ☽
   ╽
   ┠༺ *$sticker*
   ┠༺ *$nulis @tagmember*
   ┠༺ *$pantun @tagmember*
   ┠༺ *$yt @tagadmin*
   ┠༺ *$quotes*
   ┠༺ *$ptl cewek/cowo*
   ┠༺ *$nulis @tagmember*
   ┠༺ *$pantun @tagmember*
   ┠༺ *$yt @tagadmin*
   ┠༺ *$quotes*
   ┠༺ *$randomanime*
   ┠༺ *$ttsid @tagmember*
   ┠༺ *$quran @tagmember*
   ┠༺ *$info @tagadmin*
   ┠༺ *$say*
   ┠༺ *$ytmp3*
   ┠༺ *$ig [link] @tagmember*
   ┠༺ *$fb [link] @tagmember*
   ┠༺ *$twt [link] @tagadmin*
   ┠༺ *$wiki [query]*
   ┠༺ *$donate*
   ╿
   ╰╼❥SELAMAT MENCOBA

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK $donate

📺 *Iklan* :

✅ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

✳️ Official Grub [1] : ${grupch1}

✳️ Official Grub [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
