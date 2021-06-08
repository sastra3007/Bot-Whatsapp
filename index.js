/*
  **** INFO SCRIPT ****
  ** Author : Nayla
  ** Recode : zeeone
  ** Don't delete the author's name and my name
  ** For new updates please visit my YouTube Channel ZEEONE OFC
  **
  **** THANKS TO ****
  ** NAYLA CHAN
  ** RYNZ
  ** ARI
  ** ARA•ARA
  ** REST API PROVIDER IN MY BOT  
*/
const {
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const request = require('request')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')  
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require("child_process")  
const ffmpeg = require('fluent-ffmpeg') 
const { nyz } = require('./private')
const imgbb = require('imgbb-uploader')  
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const nayz = JSON.parse(fs.readFileSync('./lib/tes.json'))
const { 
	bayarLimit, 
	limitAdd
} = require('./lib/limitatm.js') 
const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')

thumb = setting.thumb
yt = setting.yt
grub= setting.grub
apikey = nayz.apikey
auth0r = nayz.auth0r
prefix = setting.prefix
limitawal = 25
blocked = []
botname = setting.botname
apixteam = setting.apixteam
cr = setting.cr
ownerrf = setting.ownerrf
ownerrz = setting.ownerrz 
numberbot = setting.numberbot
apivhtear = setting.apivhtear
fake1 = setting.fake1
fake2 = setting.fake2
author = setting.author
naylachan = setting.naylachan
namebot = setting.namebot
ownername = setting.ownername
l0lhuman = setting.l0lhuman
 
/*
]=============> JSON <=============[
*/

const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./src/video.json'))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./src/image.json')) 
const antilink = JSON.parse(fs.readFileSync('./nayla/antilink.json'))
const event = JSON.parse(fs.readFileSync('./nayla/event.json'))
const antiwibu = JSON.parse(fs.readFileSync('./nayla/antiwibu.json'))
const antijawa = JSON.parse(fs.readFileSync('./nayla/antijawa.json'))
const prem = JSON.parse(fs.readFileSync('./nayla/prem.json'))
const welkom = JSON.parse(fs.readFileSync('./nayla/welkom.json'))
const user = JSON.parse(fs.readFileSync('./nayla/user.json')) 
const antigay = JSON.parse(fs.readFileSync('./nayla/antigay.json'))
const antibocil = JSON.parse(fs.readFileSync('./nayla/antibocil.json'))
const _limit = JSON.parse(fs.readFileSync('./nayla/limit.json'))
const botx = JSON.parse(fs.readFileSync('./nayla/botx.json')) 
const nayXi = JSON.parse(fs.readFileSync('./nayla/nayXi.json')) 
const _leveling = JSON.parse(fs.readFileSync('./nayla/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./nayla/level.json'))
const nayXix = JSON.parse(fs.readFileSync('./nayla/nayXix.json')) 
 
/*
]=============> TIME <=============[
*/
            function kyun(seconds){
            function pad(s){
            return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);
            return `${pad(hours)}J ${pad(minutes)}M ${pad(seconds)}D`
            }

/*
]=============> CONNECTING <=============[
*/                	 
            async function starts() {
        	const nayla = new WAConnection()
	        nayla.logger.level = 'warn'
	        console.log(banner.string)
        	nayla.on('qr', () => {
     		console.log(color('[','white'), color('!','red'), color(']','white'), color("Don't Forget To Subscribe My YouTube Channel ZEEONE OFC"))
	        })
	        fs.existsSync('./self-bot.json') && nayla.loadAuthInfo('./self-bot.json')
	        nayla.on('connecting', () => {
		    start('2', 'Connecting...')		   
        	})
	        nayla.on('open', () => {
	    	success('2', 'Connected')    		    	     	
         	})
            nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, `Successfully connected with your WhatsApp, don't forget to subscribe ${yt} for more update`, MessageType.text)
        	await nayla.connect({timeoutMs: 30*1000})
            fs.writeFileSync('./self-bot.json', JSON.stringify(nayla.base64EncodedAuthInfo(), null, '\t'))
	        nayla.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	        for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))     	
	        }
        	})
            var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Minggu'; break;
                case 1: hari = 'Senin'; break;
                case 2: hari = 'Selasa'; break;
                case 3: hari = 'Rabu'; break;
                case 4: hari = 'Kamis'; break;
                case 5: hari = 'Jum`at'; break;
                case 6: hari = 'Sabtu'; break;
            }
            switch(bulan1) {
                case 0: bulan1 = 'Januari'; break;
                case 1: bulan1 = 'Februari'; break;
                case 2: bulan1 = 'Maret'; break;
                case 3: bulan1 = 'April'; break;
                case 4: bulan1 = 'Mei'; break;
                case 5: bulan1 = 'Juni'; break;
                case 6: bulan1 = 'Juli'; break;
                case 7: bulan1 = 'Agustus'; break;
                case 8: bulan1 = 'September'; break;
                case 9: bulan1 = 'Oktober'; break;
                case 10: bulan1 = 'November'; break;
                case 11: bulan1 = 'Desember'; break;
            }
            var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
            var tampilJam = '' + 'Jam : ' + jam + ':' + menit + ':' + detik + ' Wib';
/*
]=============> WELCOME & LEAVE <=============[
*/
            nayla.on('group-participants-update', async (anu) => {
	    	if (!welkom.includes(anu.jid)) return
		    try {
			const mdata = await nayla.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
		    num = anu.participants[0]
		    try {
			ppimg = await nayla.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
		    } catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		    }
			teks = `╔════════════════════\n`
			teks += `║╭───────────────────\n`
			teks += `║│➻ *HALO @${num.split('@')[0]}*\n`
			teks += `║│➻ *SELAMAT DATANG DIGRUB*\n`
			teks += `║│➻ *${mdata.subject}*\n`			
			teks += `║╰───────────────────\n`
			teks += `╠══[ *WELCOME [•] NEW* ]════\n`
			teks += `║╭───────[ *INTRO* ]──────\n`
			teks += `║│➻ *NAMA* :\n`
			teks += `║│➻ *UMUR* :\n`
			teks += `║│➻ *GENDER* :\n`
			teks += `║│➻ *ASKOT* :\n`
			teks += `║│➻ *AGAMA* :\n`
			teks += `║│➻ *ALASAN BERGABUNG* :\n`
			teks += `║╰───────────────────\n`
			teks += `╚════════════════════\n`
			let buff = await getBuffer(ppimg)
		    nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
			ppimg = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			teks = `akhirnya beban group berkurang 𝟭,bye bye🥳 @${num.split('@')[0]} jasamu akan di kubur dalam²`
			let buff = await getBuffer(ppimg)
			nayla.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	        
                     
	        nayla.on('chat-update', async (nay) => {
      		try {
            if (!nay.hasNewMessage) return
            nay = nay.messages.all()[0]
			if (!nay.message) return
			if (nay.key && nay.key.remoteJid == 'status@broadcast') return
			if (nay.key.fromMe) return
			global.prefix
			global.blocked				 
			const content = JSON.stringify(nay.message)
			const from = nay.key.remoteJid
	        const type = Object.keys(nay.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			body = (type === 'conversation' && nay.message.conversation.startsWith(prefix)) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption.startsWith(prefix) ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption.startsWith(prefix) ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text.startsWith(prefix) ? nay.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && nay.message.conversation) ? nay.message.conversation : (type == 'imageMessage') && nay.message.imageMessage.caption ? nay.message.imageMessage.caption : (type == 'videoMessage') && nay.message.videoMessage.caption ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') && nay.message.extendedTextMessage.text ? nay.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const q = args.join(' ')
			runtime = process.uptime()   
        	const fake3 = `${namebot}` 
            const nay1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': fake3, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`image/${thumb}.jpg`)} } }	
        	const isCmd = body.startsWith(prefix)
            nayla.chatRead(from)

			         
            const tescuk = ["0@s.whatsapp.net"]
			const botNumber = nayla.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const totalchat = await nayla.chats.all()
			const sender = isGroup ? nay.participant : nay.key.remoteJid
			const groupMetadata = isGroup ? await nayla.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isEventon = isGroup ? event.includes(from) : false
			const isAntigay = isGroup ? antigay.includes(from) : false
			const isAntibocil = isGroup ? antibocil.includes(from) : false
			const isAntiwibu = isGroup ? antiwibu.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false			 
			const isAntijawa = isGroup ? antijawa.includes(from) : false
			const isNayXi = isGroup ? nayXi.includes(from) : false			     
			const isNayXix = isGroup ? nayXix.includes(from) : false			 		 
			const isPrem = prem.includes(sender) || isOwner				
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			pushname = nayla.contacts[sender] != undefined ? nayla.contacts[sender].vname || nayla.contacts[sender].notify : undefined
			const isBotx = isGroup ? botx.includes(from) : false
			
			mess = {
				wait: '```Wait a minutes...```',
				success: '```Success```',
				error: {
				 bug: '```An Error Occurred Try Contacting Owner To Report Error```',
				stick: '```Failed, an error occurred while converting the image to a sticker, try again```',
				Iv: '```Invalid link```'
				},
			only: {
				group: '```Sorry, this command can only be used in groups```',
				benned: '```Sorry, your number has been banned, contact the bot owner to open your ban```',
				ownerG: '```Sorry, this command can only be used by the group owner```',
				ownerB: '```Sorry, this command can only be used by the bot owner```',
				premium: '```Sorry, this feature is only for premium users```',
				userB: `Hai ${pushname} You are not registered in the database, please type ${prefix}verify`,
				admin: '```Sorry, this command can only be used by group admins```',
				Badmin: '```Sorry this command can only be used when the bot is admin```',
				}
			}    
		    const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nayla.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : nayla.sendMessage(from, teks.trim(), extendedText, { quoted: nay, contextInfo: { "mentionedJid": memberr } })
			}
		    const nay2 = {
		    key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `MAAF FITUR ${prefix}${command} TIDAK TERDAFTAR DIDALAM MENU`} } }
		    const nay3 = {
            key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SIMI-SIMI CHAT\nCHAT OTOMATIS`} } }            			
		    const costum = (pesan, tipe, target, target2) => {
			nayla.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}				
			const reply = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: nay1})
			}
			const nayz = (teks) => {
				nayla.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ERROR FITUR. LAPORKAN SEGERA!!!!` }}})
			}			
			const sendMess = (hehe, teks) => {
				nayla.sendMessage(hehe, teks, text)
			}
			const createSerial = (size) => {
        	return crypto.randomBytes(size).toString('hex').slice(0, size)
            }            
            const addUser = (userid, sender, time, serials) => {
	        const obj = { id: userid, name: sender, time: time, serial: serials }
	        user.push(obj)
          	fs.writeFileSync('./nayla/user.json', JSON.stringify(user))
            }	
            const checkUser = (sender) => {
	        let status = false
	        Object.keys(user).forEach((i) => {
		    if (user[i].id === sender) {
			status = true
		    }
	        })
	        return status
            }       
            const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit -= amount
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
        	       
            const nayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
            const bulan = nayBulan[moment().format('MM') - 1]
			const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
            const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','😗','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const nayla1 = ['1','2','3','4','5','6','7','8','9']
            const nayla2 = ['1','2','3','4','5','6','7','8','9'] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const nayla3 = nayla1[Math.floor(Math.random() * (nayla1.length))]
            const nayla4 = nayla2[Math.floor(Math.random() * (nayla2.length))] 
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]	                       
            const kapan2 = ['Hari ini','Mungkin besok','1 Minggu lagi','Masih lama','3 Bulan lagi','7 Bulan lagi','3 Tahun lagi','4 Bulan lagi','2 Bulan lagi','1 Tahun lagi','1 Bulan lagi','Coba ulangi']
            const tomxic = ["ajg","asu","Ajg","Asu","anjg","Anjg","olol","antek","elaso","Babi","babi","ontol","kntl","kintil","emek","entod"]
            const apa = ['Ya','Mungkin','Tidak','Coba Ulangi']
            var _0x9324=["\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x33\x31\x33\x36\x35\x30\x35\x35\x39\x31\x2D\x31\x36\x31\x34\x39\x35\x33\x33\x33\x37\x40\x67\x2E\x75\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x6D\x67\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74\x2F\x64\x2F\x66\x2F\x41\x74\x30\x78\x37\x5A\x64\x49\x76\x75\x69\x63\x66\x6A\x6C\x66\x39\x6F\x57\x53\x36\x41\x33\x41\x52\x39\x58\x50\x68\x30\x50\x2D\x68\x5A\x49\x56\x50\x4C\x73\x49\x37\x30\x6E\x4D\x2E\x65\x6E\x63","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","","\x2B\x49\x61\x2B\x44\x77\x69\x62\x37\x30\x59\x31\x43\x57\x52\x4D\x41\x50\x39\x51\x4C\x4A\x4B\x6A\x49\x4A\x74\x35\x34\x66\x4B\x79\x63\x4F\x66\x42\x32\x4F\x45\x5A\x62\x54\x55\x3D","\x32\x38\x37\x37\x37","\x76\x58\x6D\x52\x52\x37\x5A\x55\x65\x44\x57\x6A\x58\x79\x35\x69\x51\x6B\x31\x37\x54\x72\x6F\x77\x42\x7A\x75\x77\x52\x79\x61\x30\x65\x72\x72\x41\x46\x6E\x58\x78\x62\x47\x63\x3D","\x73\x52\x39\x44\x32\x52\x53\x35\x4A\x53\x69\x66\x77\x34\x39\x48\x65\x42\x41\x44\x67\x75\x49\x32\x33\x66\x57\x44\x7A\x31\x61\x5A\x75\x34\x66\x61\x57\x47\x2F\x43\x79\x52\x59\x3D","\x2F\x76\x2F\x74\x36\x32\x2E\x37\x31\x31\x38\x2D\x32\x34\x2F\x32\x31\x34\x32\x37\x36\x34\x32\x5F\x38\x34\x30\x39\x35\x32\x36\x38\x36\x34\x37\x34\x35\x38\x31\x5F\x35\x37\x32\x37\x38\x38\x30\x37\x36\x33\x33\x32\x37\x36\x31\x34\x33\x30\x5F\x6E\x2E\x65\x6E\x63\x3F\x6F\x68\x3D\x33\x66\x35\x37\x63\x31\x62\x61\x32\x66\x63\x61\x62\x39\x35\x66\x32\x63\x30\x62\x62\x34\x37\x35\x64\x37\x32\x37\x32\x30\x62\x61\x26\x6F\x65\x3D\x36\x30\x32\x46\x33\x44\x36\x39","\x31\x36\x31\x30\x39\x39\x33\x34\x38\x36","\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6F\x61\x64\x63\x61\x73\x74","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x42\x45\x47\x49\x4E\x3A\x56\x43\x41\x52\x44\x5C\x6E\x56\x45\x52\x53\x49\x4F\x4E\x3A\x33\x2E\x30\x5C\x6E\x4E\x3A\x58\x4C\x3B","\x2C\x3B\x3B\x3B\x5C\x6E\x46\x4E\x3A","\x2C\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x54\x45\x4C\x3B\x77\x61\x69\x64\x3D","\x40","\x73\x70\x6C\x69\x74","\x3A","\x5C\x6E\x69\x74\x65\x6D\x31\x2E\x58\x2D\x41\x42\x4C\x61\x62\x65\x6C\x3A\x50\x6F\x6E\x73\x65\x6C\x5C\x6E\x45\x4E\x44\x3A\x56\x43\x41\x52\x44","\x7A\x65\x65\x6F\x6E\x65\x6F\x66\x63"];const ffoto={key:{fromMe:false,participant:`${_0x9324[0]}`,...(from?{remoteJid:_0x9324[1]}:{})},message:{'\x69\x6D\x61\x67\x65\x4D\x65\x73\x73\x61\x67\x65':{'\x75\x72\x6C':_0x9324[2],'\x6D\x69\x6D\x65\x74\x79\x70\x65':_0x9324[3],'\x63\x61\x70\x74\x69\x6F\x6E':`${_0x9324[4]}${namebot}${_0x9324[4]}`,'\x66\x69\x6C\x65\x53\x68\x61\x32\x35\x36':_0x9324[5],'\x66\x69\x6C\x65\x4C\x65\x6E\x67\x74\x68':_0x9324[6],'\x68\x65\x69\x67\x68\x74':1080,'\x77\x69\x64\x74\x68':1079,'\x6D\x65\x64\x69\x61\x4B\x65\x79':_0x9324[7],'\x66\x69\x6C\x65\x45\x6E\x63\x53\x68\x61\x32\x35\x36':_0x9324[8],'\x64\x69\x72\x65\x63\x74\x50\x61\x74\x68':_0x9324[9],'\x6D\x65\x64\x69\x61\x4B\x65\x79\x54\x69\x6D\x65\x73\x74\x61\x6D\x70':_0x9324[10],'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x9324[13]](`${_0x9324[11]}${thumb}${_0x9324[12]}`)}}};const ftoko={key:{fromMe:false,participant:`${_0x9324[0]}`,...(from?{remoteJid:_0x9324[14]}:{})},message:{'\x70\x72\x6F\x64\x75\x63\x74\x4D\x65\x73\x73\x61\x67\x65':{'\x70\x72\x6F\x64\x75\x63\x74':{'\x70\x72\x6F\x64\x75\x63\x74\x49\x6D\x61\x67\x65':{'\x6D\x69\x6D\x65\x74\x79\x70\x65':_0x9324[15],'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x9324[13]](`${_0x9324[11]}${thumb}${_0x9324[12]}`)},'\x74\x69\x74\x6C\x65':`${_0x9324[4]}${botname}${_0x9324[4]}`,'\x70\x72\x6F\x64\x75\x63\x74\x49\x6D\x61\x67\x65\x43\x6F\x75\x6E\x74':10},'\x62\x75\x73\x69\x6E\x65\x73\x73\x4F\x77\x6E\x65\x72\x4A\x69\x64':`${_0x9324[0]}`}},contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}};const fkontak={key:{fromMe:false,participant:`${_0x9324[0]}`,...(from?{remoteJid:`${_0x9324[1]}`}:{})},message:{'\x63\x6F\x6E\x74\x61\x63\x74\x4D\x65\x73\x73\x61\x67\x65':{'\x64\x69\x73\x70\x6C\x61\x79\x4E\x61\x6D\x65':`${_0x9324[4]}${cr}${_0x9324[4]}`,'\x76\x63\x61\x72\x64':`${_0x9324[16]}${cr}${_0x9324[17]}${cr}${_0x9324[18]}${sender[_0x9324[20]](_0x9324[19])[0]}${_0x9324[21]}${sender[_0x9324[20]](_0x9324[19])[0]}${_0x9324[22]}`,'\x6A\x70\x65\x67\x54\x68\x75\x6D\x62\x6E\x61\x69\x6C':fs[_0x9324[13]](`${_0x9324[11]}${thumb}${_0x9324[12]}`),thumbnail:fs[_0x9324[13]](`${_0x9324[11]}${thumb}${_0x9324[12]}`),sendEphemeral:true}}};const ftroli={"\x6B\x65\x79":{"\x66\x72\x6F\x6D\x4D\x65":false,"\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6E\x74":_0x9324[0],"\x72\x65\x6D\x6F\x74\x65\x4A\x69\x64":_0x9324[1]},"\x6D\x65\x73\x73\x61\x67\x65":{orderMessage:{itemCount:10,status:200,thumbnail:fs[_0x9324[13]](`${_0x9324[11]}${thumb}${_0x9324[12]}`),surface:200,message:`${_0x9324[4]}${botname}${_0x9324[4]}`,orderTitle:_0x9324[23],sellerJid:_0x9324[0]}}}
			var chat1 = `0@s.whatsapp.net`
		    var split = `ALL CHAT BOTZ`
		    var chat2 =         {
			contextInfo:   {
			participant: chat1,
			quotedMessage: {
			extendedTextMessage: {
	    	text: split,
	     	}
     		}
	    	}
		 	}
   	        tchat = `Total : ${totalchat.length}`   	            	                   
            const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:Nayla\n` 
            + `ORG: Pengembang bot;\n`
            + `TEL;type=CELL;type=VOICE;waid=${ownerrf}:${ownerrz}\n`
            + 'END:VCARD' /*
            ____________________________
            INI BUAT AUTHOR JADI JGN
            DI UBAHH YAAAA OKEYY            
            */const vnayla = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ZEEONE OFC\n` 
            + `ORG: SUBSCRIBE;\n`
            + `TEL;type=CELL;type=VOICE;waid=62887435047326:+62887435047326\n`
            + 'END:VCARD' 
            colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
			if (isCmd && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m➻\x1b[1;37m]', color('NAMA', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('➻', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))			 
            const limitAdd = (sender) => {
            let position = false
            Object.keys(_limit).forEach((i) => {
            if (_limit[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _limit[position].limit += 1
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            }
            }
            const checkLimit = (sender) => {
          	let found = false
            for (let lmt of _limit) {
            if (lmt.id === sender) {
            let limitCounts = limitawal - lmt.limit
            if (limitCounts <= 0) return itsmeiky.sendMessage(from,`BATAS PENGGUNAN ANDA (LIMIT) TELAH HABIS`, text,{ quoted: nay})
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            found = true
            }
            }
            if (found === false) {
            let obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json', JSON.stringify(_limit))
            nayla.sendMessage(from, `SISA LIMIT ANDA : *${limitCounts}*`, text, { quoted : nay})
            }
         	}         	          
            const isLimit = (sender) =>{ 
	        let position = false
            for (let i of _limit) {
            if (i.id === sender) {
          	let limits = i.limit
            if (limits >= limitawal ) {
         	position = true
            nayla.sendMessage(from, `MAAF *${pushname}* BATAS PENGGUNAAN (LIMIT) HARI INI TELAH HABIS. (LIMIT) BISA DI GET DENGAN CARA KETIK *#claim*`, text, {quoted: nay})
            return true
            } else {
          	_limit
            position = true
            return false
            }
            }
            }
            if (position === false) {
           	const obj = { id: sender, limit: 0 }
            _limit.push(obj)
            fs.writeFileSync('./nayla/limit.json',JSON.stringify(_limit))
            return false
            }
            }    
            if (isGroup && isUser && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
            addLevelingLevel(sender, 1)
            bayarLimit(sender, 3)
            await reply(nyz.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
            }
            } catch (err) {
            console.error(err)
            }
            }     
             
            switch (command) {
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
	   case 'join':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length < 1) return reply(`contoh ${prefix}join https://chat.whatsapp.com/CAPUjeauAafAskp3o5LDNj`)
                    const bug11 = body.slice(5)
                    if (bug11.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug22 = `*[UNDANGAN JOIN]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug11}`
                    var optionsp = {
                    text: bug22,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `SUBSCRIBE YT ZEEONE OFC`} } } })                    
                    reply('BOT AKAN SEGERA MASUK. SUBSCRIBE MY YT ZEEONE OFC')                     
					break  
		case 'claim':
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isBotx) return reply(`MODE BOTX TIDAK AKTIF\nSILAHKAN KETIK ${prefix}botx`)
					reply(`SELAMAT ANDA MENDAPATKAN *${nayla3}*`)
					addLevelingLevel(sender, 1)
                    bayarLimit(sender, nayla3) 
                    break
        case 'info':
			        inf1 = `➻ *NAMABOT* : ${botname}\n`
			        inf1 += `➻ *OWNERNAME* : ${ownername}\n`
			        inf1 += `➻ *AUTHOR* : NAYLACHAN\n`
			        inf1 += `➻ *NUMBERBOT* : ${numberbot}\n`
			        inf1 += `SUBSCRIBE ${yt}`
			        reply(inf1)
			        break
		case 'daftar':
		case 'verify':
					nayla.updatePresence(from, Presence.composing)
					if (isUser) return reply('kamu sudah Menjadi Temen ')
					user.push(sender)
					fs.writeFileSync('./nayla/user.json', JSON.stringify(user))
					try {
					ppimg = await nayla.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					const noSeri = createSerial(15)
					captionnya = `╭─「 *SUCCESS VERIFICATION* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${noSeri}\`\`\`\n│\n│\`\`\`Pada ${date} ${wib}\`\`\`\n│\`\`\`[Nama]: ${pushname}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${user.length} Orang\`\`\`\n╰─────────────────────────`
					daftarimg = await getBuffer(ppimg)
					nayla.sendMessage(from, daftarimg, image, {quoted: nay, caption: captionnya})
					break						       	 			            			         
        case 'menu':
        case 'help':
                    if (!isUser) return reply(mess.only.userB)
	                uptime = process.uptime()
					teks = `${kyun(uptime)}`
					numbernye  ='0'
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${cr}`
					wew = fs.readFileSync(`image/${thumb}.jpg`)
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const bruhhhh = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
	    	alphay = `━━ ❲ *BOT WHATSAPP* ❳ ━━

\`\`\`▢ OWNER : ${ownername} 
▢ AUTHOR : ${auth0r} 
▢ MONTH : ${bulan} 
▢ CHAT : ${tchat}\`\`\`

✆ WhatsApp
 \`\`\` bit.ly/wazeeoneofc\`\`\`  
⛾ Donate
 \`\`\` bit.ly/dtzeeoneofc\`\`\`  
⎉ Instagram
 \`\`\` bit.ly/igzeeoneofc\`\`\`  
⊜ Github
 \`\`\` bit.ly/gtzeeoneofc\`\`\`  
✇ Group Whatsapp
 \`\`\` bit.ly/gczeeoneofc\`\`\` 
⊛ YouTube
 \`\`\` bit.ly/ytzeeoneofc\`\`\`
 
 
*LIST MENU* 
\`\`\`▢ ${prefix}allmenu
▢ ${prefix}ownermenu 
▢ ${prefix}grupmenu  
▢ ${prefix}promenu 
▢ ${prefix}downloadmenu 
▢ ${prefix}soundmenu 
▢ ${prefix}pornmenu 
▢ ${prefix}storagemenu 
▢ ${prefix}cekmenu 
▢ ${prefix}spesialmenu 
▢ ${prefix}tagmenu 
▢ ${prefix}gamemenu 
▢ ${prefix}randomtext 
▢ ${prefix}fastmenu 
▢ ${prefix}sertifikat 
▢ ${prefix}makermenu 
▢ ${prefix}stickmenu 
▢ ${prefix}newsmenu\`\`\` 

*THANKS TO*
\`\`\`▢ ALL CREATOR BOT 
▢ NAYLACHAN 
▢ RYNZ 
▢ LOLI KILLERS 
▢ ARA-ARA 
▢ ZEEONE\`\`\`

━━ ❲ *BOT WHATSAPP* ❳ ━━
`
	                var _0x6c96=["\x30\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x39\x35\x32\x33\x32\x35\x38\x36\x34\x39\x2D\x31\x36\x30\x34\x35\x39\x35\x35\x39\x38\x40\x67\x2E\x75\x73","\x31\x37\x34\x32\x33\x38\x36\x31\x34\x35\x36\x39\x34\x38\x31","\x69\x6D\x61\x67\x65\x2F","\x2E\x6A\x70\x67","\x72\x65\x61\x64\x46\x69\x6C\x65\x53\x79\x6E\x63","\x49\x4E\x51\x55\x49\x52\x59","\x43\x41\x54\x41\x4C\x4F\x47","\x59\x54\x20\x3A\x20\x5A\x45\x45\x4F\x4E\x45\x20\x4F\x46\x43","\x41\x52\x36\x78\x42\x4B\x62\x58\x5A\x6E\x30\x58\x77\x6D\x75\x37\x36\x4B\x73\x79\x64\x37\x72\x6E\x78\x49\x2B\x52\x78\x38\x37\x48\x66\x69\x6E\x56\x6C\x57\x34\x6C\x77\x58\x61\x36\x4A\x41\x3D\x3D","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];nayla[_0x6c96[10]](from,wew,image,{quoted:{key:{fromMe:false,participant:`${_0x6c96[0]}`,...(from?{remoteJid:_0x6c96[1]}:{})},message:{"\x6F\x72\x64\x65\x72\x4D\x65\x73\x73\x61\x67\x65":{"\x6F\x72\x64\x65\x72\x49\x64":_0x6c96[2],"\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C":fs[_0x6c96[5]](`${_0x6c96[3]}${thumb}${_0x6c96[4]}`),"\x69\x74\x65\x6D\x43\x6F\x75\x6E\x74":10,"\x73\x74\x61\x74\x75\x73":_0x6c96[6],"\x73\x75\x72\x66\x61\x63\x65":_0x6c96[7],"\x6D\x65\x73\x73\x61\x67\x65":_0x6c96[8],"\x74\x6F\x6B\x65\x6E":_0x6c96[9]}}},caption:alphay,contextInfo:{"\x66\x6F\x72\x77\x61\x72\x64\x69\x6E\x67\x53\x63\x6F\x72\x65":999,"\x69\x73\x46\x6F\x72\x77\x61\x72\x64\x65\x64":true}})
                    
	                break
        case 'fastmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.fastmenu(prefix), text, {quoted: ftoko})                                                   
                    break     
       case 'allmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from,nyz.allmenu(auth0r, bulan, tchat, prefix),text,{quoted: ftoko} )                                                   
                    break                    
        case 'makermenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.makermenu(prefix), text, {quoted: ftoko}) 
                    break                                                                                           
        case 'ownermenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.ownermenu(prefix), text, {quoted: ftoko})                                   
                    break
        case 'spesialmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.spesialmenu(prefix), text, {quoted: ftoko}) 
                    break                    
        case 'sertifikat':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.sertifikat(prefix), text, {quoted: ftoko})  
                    break   
        case 'stickmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.stickmenu(prefix), text, {quoted: ftoko}) 
                    break                                           
        case 'randomtext':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, nyz.randomtext(prefix), text, {quoted: ftoko})   
                    break                                  
        case 'gamemenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    nayla.sendMessage(from, nyz.gamemenu(prefix), text, {quoted: ftoko})   
                    break 
        case 'tagmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                 
                    nayla.sendMessage(from, nyz.tagmenu(prefix), text, {quoted: ftoko})  
                    break
        case 'cekmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                   
                    nayla.sendMessage(from, nyz.cekmenu(prefix), text, {quoted: ftoko})  
                    break
         case 'newsmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                   
                    nayla.sendMessage(from, nyz.newsmenu(prefix), text, {quoted: ftoko})  
                    break
        case 'storagemenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.storagemenu(prefix), text, {quoted: ftoko})  
                    break 
        case 'pornmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.pornmenu(prefix), text, {quoted: ftoko})   
                    break
        case 'soundmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.soundmenu(prefix), text, {quoted: ftoko})   
                    break
        case 'downloadmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                  
                    nayla.sendMessage(from, nyz.downloadmenu(prefix), text, {quoted: ftoko}) 
                    break
        case 'promenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                                                        	
                    nayla.sendMessage(from, nyz.promenu(prefix), text, {quoted: ftoko})   
                    break    
        case 'grupmenu':                      
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                              
                    nayla.sendMessage(from, nyz.grupmenu(prefix), text, {quoted: ftoko}) 
                    break
		 case 'play':  
		            if (!isPrem) return reply(mess.only.premium)                    	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (args.length < 1) return reply(`Contoh : ${prefix}play DJ 30 detik`)	
					reply(naylachan) 				 
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `*LAGU TELAH DITEMUKAN*\n`
                    anu1 += `➸ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➸ *SIZE* : ${anu.size}\n`
                    anu1 += `➸ *SOURCE* : ${anu.source}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
				    nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
		case 'ytmp3':   
				    if (!isPrem) return reply(mess.only.premium)                   	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)					 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					reply(naylachan) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 TELAH DITEMUKAN\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					nayla.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: nay1 })
					break
		case 'ytmp4':  
				    if (!isPrem) return reply(mess.only.premium)                    	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)				 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${args[0]}&APIKEY=${apixteam}`)
					reply(naylachan) 
					anu1 = `YTMP4 TELAH DITERMUKAN\n`
                    anu1 += `➻ *JUDUL* : ${anu.judul}\n`
                    anu1 += `➻ *SIZE* : ${anu.size}\n`                    
					anu2 = await getBuffer(anu.thumbnail)
					nayla.sendMessage(from, anu2, image, { quoted: nay, caption: anu1 })
					anu3 = await getBuffer(anu.url)
					nayla.sendMessage(from, anu3, video, { mimetype: 'video/mp4', quoted: nay1 })
					break                    
        case 'stalktwit':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Usernames?```') 
					reply(naylachan) 
                    anu = await fetchJson(`https://videfikri.com/api/stalktwit/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile)
                    anu2 = `➻ *NAMA* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *TWEETS* : ${anu.result.tweets}\n`
                    anu2 += `➻ *PUBLIC* : ${anu.result.verified}\n`
                    anu2 += `➻ *LIST* : ${anu.result.listed_count}\n`
                    anu2 += `➻ *FAVOURIT* : ${anu.result.favourites}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
        case 'stalkgithub':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Username?```') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/github/?username=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.profile_pic)                           
                    anu2 = `➻ *NAMA* : ${anu.result.username}\n`
                    anu2 += `➻ *ID* : ${anu.result.id}\n`
                    anu2 += `➻ *USER* : ${anu.result.fullname}\n`
                    anu2 += `➻ *COMPANY* : ${anu.result.company}\n`
                    anu2 += `➻ *BLOG* : ${anu.result.blog}\n`
                    anu2 += `➻ *LOCATION* : ${anu.result.location}\n`
                    anu2 += `➻ *EMAIL* : ${anu.result.email}\n`
                    anu2 += `➻ *HIRABLE* : ${anu.result.hireable}\n`
                    anu2 += `➻ *BIOGRAFI* : ${anu.result.biografi}\n`
                    anu2 += `➻ *PUBLIC1* : ${anu.result.public_repository}\n`
                    anu2 += `➻ *PUBLIC2* : ${anu.result.public_gists}\n`
                    anu2 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu2 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu2 += `➻ *JOIN* : ${anu.result.joined_on}\n`
                    anu2 += `➻ *UPDATE* : ${anu.result.last_updated}\n`
                    anu2 += `➻ *URL* : ${anu.result.profile_url}\n`
                    nayla.sendMessage(from, anu1, image,{caption: anu2, quoted: nay1})
                    break
         case 'steam':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('```Enter Title```') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/steam/?username=${args[0]}`, {method: 'get'})
                    anu1 = `➻ *NAMA* : ${anu.result.name}\n`
                    anu1 += `➻ *USER* : ${anu.result.username}\n`
                    anu1 += `➻ *COUNTRY* : ${anu.result.country}\n`
                    anu1 += `➻ *IMG* : ${anu.result.image}\n`
                    anu1 += `➻ *LEVEL* : ${anu.result.level}\n`
                    anu1 += `➻ *FACEIT* : ${anu.result.faceit}\n`
                    anu1 += `➻ *BADGES* : ${anu.result.badges}\n`
                    anu1 += `➻ *MENTS* : ${anu.result.achievements}\n`
                    anu1 += `➻ *ON* : ${anu.result.onkah}\n`
                    nayla.sendMessage(from, anu1, text,{quoted: nay1})
                    break 
         case 'fb':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.url)
                    anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    nayla.sendMessage(from, anu1, video, {caption: anu2, mimetype: 'video/mp4', quoted: nay1})
                    break 
      case 'igfoto':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] FOTO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.image_text)
                    nayla.sendMessage(from, anu3, image, {quoted: nay1})
                    break
       case 'igvideo':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/igdl/?url=${args[0]}`, {method: 'get'})
                    anu1 = await getBuffer(anu.result.thumb)                     
                    anu2 = `➻ *NAME* : ${anu.result.full_name}\n`
                    anu2 += `➻ *USER* : ${anu.result.username}\n`
                    anu2 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu2 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu2 += `➻ *DURASI* : ${anu.result.duration}\n`
                    anu2 += `➻ *CAPTION* : ${anu.result.caption}\n` 
                    anu2 += `➻ *[❗] VIDEO SEDANG DIKIRIM*\n`
                    nayla.sendMessage(from, anu2, text, {quoted: nay1})
                    anu3 = await getBuffer(anu.result.video)
                    nayla.sendMessage(from, anu3, video, {mimetype: 'video/mp4', quoted: nay1})
                    break                          
      case 'ytsearch':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Facebook Link') 
					reply(naylachan)
                    anu = await fetchJson(`https://videfikri.com/api/ytsearch/?query=${args[0]}`, {method: 'get'})
                    anu1 = getBuffer(anu.result.data.thumbnail)
                    anu2 = `➻ *NAME* : ${anu.result.data.judul}\n`
                    anu2 += `➻ *ID* : ${anu.result.data.id}\n`                    
                    anu2 += `➻ *DURASI* : ${anu.result.data.duration}\n`
                    anu2 += `➻ *CHANEL* : ${anu.result.data.id}\n`
                    anu2 += `➻ *PUBLIC.AT* : ${anu.result.data.published_at}\n`
                    anu2 += `➻ *VIEWS* : ${anu.result.data.views}\n`
                    anu2 += `➻ *DESK* : ${anu.result.data.description}\n`  
                    nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                    break    
                         
/* =======================================================[ FUN-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                        
      case 'hurufkebalik':                     	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter Text') 
                    anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${body.slice(14)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break    
      case 'jumlah':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter text') 
                    anu = await fetchJson(`https://videfikri.com/api/jumlahhuruf/?query=${body.slice(8)}`)
                    anu1 = `${anu.result.jumlah}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break       
       case 'hilih':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Enter Text') 
                    anu = await fetchJson(`https://videfikri.com/api/hilih/?query=${body.slice(7)}`)
                    anu1 = `${anu.result.kata}`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ RANDOM CEK ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
      case 'gantengcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                      	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${nayla3}${nayla4}%* 😘`
                    reply(N)
                    break                   
 
/* ======================================================[ SPAM-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                                             
       case 'spamemail':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Enter Email & Number & Message') 
					costum('SUKSES', text, tescuk, cr)
                    subjek = args[0]
                    pesan = args[1]
                    email = args[2] 
                    anu = await fetchJson(`https://videfikri.com/api/spamemail?email=${email}&subjek${subjek}=&pesan=${pesan}`)          
                    break            
       case 'spamcall':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Entar Number') 
					costum('SUKSES', text, tescuk, cr)
                    nomer = args[0]                    
                    anu = await fetchJson(`https://videfikri.com/api/call?nohp=${nomer}`)          
                    break        
       case 'quotes':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/randomquotes/`)
                    anu1 = `➻ *AUTHOR* : ${anu.result.author}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
       case 'fakta':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    anu = await fetchJson(`https://videfikri.com/api/fakta/`)
                    anu1 = `➻ *FAKTA* : ${anu.result.fakta}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                  
       case 'gcard':                      	  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    anu1 = `➻ *NEGARA* : ${anu.result.card.network}\n`
                    anu1 += `➻ *NOMER* : ${anu.result.card.number}\n`   
                    anu1 += `➻ *CVV* : ${anu.result.card.cvv}\n`    
                    anu1 += `➻ *PIN* : ${anu.result.card.pin}\n`     
                    anu1 += `➻ *BALANCE* : ${anu.result.card.balance}\n`      
                    anu1 += `➻ *PERMINGGU* : ${anu.result.card.expiration_month}\n`
                    anu1 += `➻ *PERHARI* : ${anu.result.card.expiration_year}\n` 
                    anu1 += `➻ *NAMA* : ${anu.result.customer.name}\n`       
                    anu1 += `➻ *RESS* : ${anu.result.customer.address}\n`           
                    anu1 += `➻ *COUNTRY* : ${anu.result.customer.country}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break                                                                                                                                                                                                                                                                                        
       case 'tebakgambar':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/tebakgambar/`)
                    anu1 = await getBuffer(anu.result.soal_gbr)
                    anu2 = `➻ *JAWABAN* : ${anu.result.jawaban}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, image,{caption: 'Answer Bro... Time 60 Seconds', quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break                                                                                                                                           

/* ======================================================[ ANIME-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
                    
       case 'quotesnime':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://videfikri.com/api/anime/randomquoteanime`)
                    anu1 = `➻ *ANIME* : ${anu.result.anime}\n`
                    anu1 += `➻ *KARAKTER* : ${anu.result.character}\n`
                    anu1 += `➻ *QUOTES* : ${anu.result.quotes}\n`
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    break
                    
/* ======================================================[ ANJAY-API ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                                         
      case 'lazimedia':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Product Name')
                   anu = await fetchJson(`https://videfikri.com/api/lazymed/?query=${body.slice(11)}`)   
                   anu1 = `${anu.result.data}`
                   reply(anu1)
                   break
      case 'covid':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/rsrujukan/`)
                   anu1 = 'COVID INDONESIA :\n'
                   for (var x of anu.result.data) {
                   anu1 = `➻ *RUMAH SAKIT* : ${x.rumah_sakit}\n`
                   anu1 += `➻ *KOTA* : ${x.region}\n`
                   anu1 += `➻ *PROVINSI* : ${x.provinsi}\n`
                   anu1 += `➻ *ALAMAT* : ${x.address}\n`
                   anu1 += `➻ *PHONE* : ${x.phone}\n`
                   }
                   reply(anu1)
                   break
      case 'wikiid':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query') 
                   anu = await fetchJson(`https://videfikri.com/api/wiki/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL ID :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.judul}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.isi_konten}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break  
       case 'wikien':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query') 
                   anu = await fetchJson(`https://videfikri.com/api/wikieng/?query=${body.slice(8)}`)   
                   anu1 = 'WIKI SOAL EN :\n'
                   for (var x of anu.result) {
                   anu1 = `➻ *JUDUL* : ${x.title}\n`
                   anu1 += `➻ *PAGEID* : ${x.pageid}\n`
                   anu1 += `➻ *ULASAN* : ${x.desc}\n`
                   }
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break   
      case 'covidid':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/covidindo/`)
                   anu1 = `➻ *NEGARA* : ${anu.result.country}\n`
                   anu1 += `➻ *POSITIF* : ${anu.result.positif}\n`
                   anu1 += `➻ *SEMBUH* : ${anu.result.sembuh}\n`
                   anu1 += `➻ *MENINGGAL* : ${anu.result.meninggal}\n`
                   anu1 += `➻ *RAWAT* : ${anu.result.dalam_perawatan}\n`
                   reply(anu1)
                   break
      case 'kbbi':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply('Enter Query')
                   anu2 = await fetchJson(`https://videfikri.com/api/kbbi/?query=${body.slice(6)}`)                      
                   anu1 = `➻ *HASIL* : ${anu2.result.hasil}\n`                   
                   reply(anu1)
                   break
      case 'infogempa':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	                    
                   anu = await fetchJson(`https://videfikri.com/api/infogempa/`)
                   anu1 = `➻ *WILAYAH* : ${anu.result.wilayah}\n`
                   anu1 += `➻ *BUJUR* : ${anu.result.bujur}\n`
                   anu1 += `➻ *LINTANG* : ${anu.result.lintang}\n`
                   anu1 += `➻ *WAKTU* : ${anu.result.waktu}\n` 
                   anu1 += `➻ *MAGNITUDO* : ${anu.result.magnitudo}\n` 
                   anu1 += `➻ *KEDALAMAN* : ${anu.result.kedalaman}\n` 
                   anu1 += `➻ *MAP* : ${anu.result.map}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break
      case 'randomquran':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://videfikri.com/api/randquran/`)
                   anu1 = `➻ *NOMER* : ${anu.result.nomor}\n`
                   anu1 += `➻ *NAMA* : ${anu.result.nama}\n`
                   anu1 += `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NAME* : ${anu.result.name}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.tipe}\n`
                   anu1 += `➻ *NO URUT* : ${anu.result.no_urut}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   nayla.sendMessage(from, anu1, text,{quoted: nay1})
                   break                    
/* ====================================================[ MAKER-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       case '8bit':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} kamu&aku*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `Success`, quoted: nay1})
                   break
       case 'google':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} kamu & aku & dia*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]
                   var F3 = F.split("&")[2] 
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${F1}&text2=${F2}&text3=${F3}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
       case 'fire':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/crossfirelogo/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
       case 'burn':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
      case 'battle':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
      case 'mug':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(5)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
      case 'love':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                   break 
      case 'mug1':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/mugflower?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                   break 
      case 'naruto':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                   break 
      case 'glass':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                   break 
      case 'romance':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(9)				    
                   anu = await getBuffer(`hthttps://videfikri.com/api/textmaker/romancetext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                   break 
      case 'shadow':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
      case 'tiktok':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'coffe':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break  
       case 'coffe1':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup2?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'neon':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(6)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break  
       case 'pubg':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/pubgmlogo?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'water':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/underwater?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
      case 'silk':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot & whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(6)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/silk?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'potter':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/hpotter?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'candy':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                     
       case 'block':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://videfikri.com/api/textmaker/woodblock?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
                    
                   
  
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API VIDEFIKRI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
        case 'artinama':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN NAMA')
                    F = body.slice(10)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.arti}\n`
                    anu1 += `➻ *ULASAN* : ${anu.result.desk}\n`
                    reply(anu1)
                    break
       case 'artimimpi':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN MIMPI MU')
                    F = body.slice(11)
                    anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${F}`)
                    anu1 = `➻ *ARTI* : ${anu.result.artimimpi}\n`
                    reply(anu1)
                    break
        case 'artijadian':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN tanggal&bulan&tahun')
                    var F = body.slice(12)
				    var F1 = F.split("&")[0];
				    var F2 = F.split("&")[1];
				    var F3 = F.split("&")[2]	
                    anu = await fetchJson(`https://videfikri.com/api/primbon/tgljadian/?tgl=${F1}&bln=${F2}&thn=${F3}`)
                    anu1 = `➻ *ARTI* : ${anu.result.hasil}\n`
                    reply(anu1)
                    break
        case 'chord':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/chord/?query=${F}`)
                    anu1 = `➻ *CHORD* : ${anu.result.chord}\n`
                    reply(anu1)
                    break
        case 'lirik':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('MASUKKAN JUDUL LAGU')  
                    F = body.slice(7)
                    anu = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${F}`)
                    anu1 = `➻ *ARTIS* : ${anu.result.artist}\n`
                    anu1 += `➻ *LIRIK* : ${anu.result.lirik}\n` 
                    reply(anu1)
                    break
   
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*=====================================================[ API   ............... ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                
/* ==================================================[ GK TAU v: -MENU ]==============================================================*/    
/*====================================================[ API?? JOJO API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
       case 'kusonime':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan) 
                   F = body.slice(10)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/kuso?q=${F}`)
                   anu1 = `➻ *INFO* : ${anu.sinopsis}\n`
                   reply(anu1)
                   break
      case 'renungan':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   reply(naylachan) 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/renungan`)
                   anu1 = `➻ *JUDUL* : ${anu.judul}\n`
                   anu1 += `➻ *PESAN* : ${anu.pesan}\n`
                   anu1 += `➻ *DESC* : ${anu.Isi}\n`
                   reply(anu1)
                   break
       case 'samehadaku':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender) 	
                   reply(naylachan)
                   F = body.slice(12)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/samehadaku?q=${F}`)
                   anu2 = await getBuffer(anu.thumb)
                   anu1 = `➻ *JUDUL* : ${anu.title}\n`
                   anu1 += `➻ *LINK* : ${anu.link}\n`
                   anu1 += `➻ *DESK* : ${anu.desc}\n`
                   nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay })
                   break
      case 'neon1':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(7)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break  
       case 'text3d':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                   
       case 'galaxy':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/galaxywp?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'gaming':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'colors':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   F = body.slice(8)				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/watercolor?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'kling':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                   reply(naylachan)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1];    				    
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/sparkling?text1=${F1}&text2=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'infonomer':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${F}`)
                   anu1 = `➻ *NOMER* : ${anu.nomor}\n`
                   anu1 += `➻ *JUDUL* : ${anu.op}\n`
                   anu1 += `➻ *JUDUL* : ${anu.international}\n`
                   reply(anu1)
                   break
       case 'jadwaltv':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`)
                   anu1 = `➻ *JAM* : ${anu.result.jam}\n`
                   anu1 += `➻ *JADWAL* : ${anu.result.jadwalTV}\n`
                   reply(anu1)
                   break
       case 'tvjadwal':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} gtv*`)
                   F = body.slice(10)
                   anu1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${F}`)
                   anu1 = `➻ *JAM* : ${anu.result}`
                   reply(anu1)
                   break
       case 'fml':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fml`)
                   anu1 = `➻ *FML* : ${anu.result.fml}`
                   reply(anu1)
                   break
       case 'cinta':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`)
                   anu1 = `➻ *KATA CINTA* : ${anu.result}`
                   reply(anu1)
                   break                                                                            
      case 'twich':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/twichquote`)
                   anu1 = `➻ *THWICH* : ${anu.result}`
                   reply(anu1)
                   break                   
      case 'fake':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		            if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                   anu1 = `➻ *NAMA* : ${anu.name}\n`
                   anu1 += `➻ *GENDER* : ${anu.gender}\n` 
                   anu1 += `➻ *AGE* : ${anu.age}\n`
                   anu1 += `➻ *BIRTDAY* : ${anu.birtday}\n`
                   anu1 += `➻ *BACHELOR* : ${anu.Bachelor}\n`
                   anu1 += `➻ *ADDRESA* : ${anu.address}\n`
                   anu1 += `➻ *CODE* : ${anu.zip_code}\n`
                   anu1 += `➻ *STATE* : ${anu.state}\n`
                   anu1 += `➻ *COUNTRY* : ${anu.country}\n`
                   anu1 += `➻ *EMAIL* : ${anu.email}\n`
                   anu1 += `➻ *PASS* : ${anu.password}\n` 
                   anu1 += `➻ *PHONE* : ${anu.phone}\n` 
                   anu1 += `➻ *CARD* : ${anu.card}\n`
                   anu1 += `➻ *CODE* : ${anu.code}\n`
                   anu1 += `➻ *DATE* : ${anu.date}\n`
                   anu1 += `➻ *PIN* : ${anu.pin_code}\n`
                   anu1 += `➻ *WEIGHT* : ${anu.weight}\n` 
                   anu1 += `➻ *HEIGHT* : ${anu.height}\n` 
                   anu1 += `➻ *TYPE* : ${anu.blood_type}\n`
                   anu1 += `➻ *STATUS* : ${anu.status}\n`
                   reply(anu1)
                   break
       case 'pin':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://link*`)
                   reply(naylachan)
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/pinterest?url=${F}`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'qrcode':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(8)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/qrcode?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'resepmasakan':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bakso*`)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/resep?q=${F}`)
                   anu1 = await getBuffer(anu.img)
                   anu2 = `➻ *NAMA* : ${anu.title}\n`
                   anu2 += `➻ *STATUS* : ${anu.langkah}\n`
                   anu2 += `➻ *BAHAN* : ${anu.bahan}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'barcode':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} halo sayang*`)  
                   reply(naylachan)
                   F = body.slice(9)
                   anu = await getBuffer(`https://docs-jojo.herokuapp.com/api/barcode_maker?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
     case 'cersex':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)                   
                   anu2 = `➻ *JUDUL* : ${anu.result.judul}\n`
                   anu2 += `➻ *NAMA* : ${anu.result.cersex}\n`
                   reply(anu2)
                   break
      case 'cerpen':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)                   
                   anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
                   anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
                   anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
                   anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
                   reply(anu1)
                   break                   
      case 'tongue':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
                   anu1 = `➻ *NIHH* : ${anu.result}`
                   reply(anu1)
                   break
      case 'jadwalsholat':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(14)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${F}`)                   
                   anu1 = `➻ *IMSYAK* : ${anu.Imsyak}\n`
                   anu1 += `➻ *SUBUH* : ${anu.Subuh}\n`
                   anu1 += `➻ *DHUHA* : ${anu.Dhuha}\n`
                   anu1 += `➻ *DZUHUR* : ${anu.Dzuhur}\n`
                   anu1 += `➻ *ASHAR* : ${anu.Ashar}\n`
                   anu1 += `➻ *MAGRHRIB* : ${anu.Maghrib}\n`
                   anu1 += `➻ *ISYA* : ${anu.Isya}\n` 
                   reply(anu1)
                   break
       case 'pantun':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
                   anu1 = `➻ *PANTUN* : ${anu.result}\n` 
                   reply(anu1)
                   break 
       case 'cuaca':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	 
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} makassar*`)  
                   reply(naylachan)
                   F = body.slice(7)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cuaca?q=${F}`)
                   anu1 = `➻ *TEMPAT* : ${anu.result.tempat}\n`
                   anu1 += `➻ *CUAXA* : ${anu.result.cuaca}\n`
                   anu1 += `➻ *DESK* : ${anu.result.desk}\n` 
                   anu1 += `➻ *SUHU* : ${anu.result.suhu}\n`
                   anu1 += `➻ *KELEBAPAN* : ${anu.result.kelembapan}\n` 
                   anu1 += `➻ *UDARA* : ${anu.result.udara}\n`
                   anu1 += `➻ *ANGIN* : ${anu.result.angin}\n` 
                   reply(anu1)
                   break 
       case 'namaninja':  
                   if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)  
                   F = body.slice(11)
                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
                   anu1 = `➻ *NAMA* : ${anu.your_name}\n`
                   anu1 += `➻ *NINJA* : ${anu.result}\n`
                   reply(anu1)
                   break 
                   
                                                                                               
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*======================================================[ API?? ZEKS ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          

                                                                                                                                                                                                                 
      case 'stalkig':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} jokowi*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${F}&apikey=apivinz`)
                   anu1 = await getBuffer(anu.profile_pic)
                   anu2 = `➻ *NAMA* : ${anu.username}\n`
                   anu2 += `➻ *FULLNAME* : ${anu.fullname}\n`
                   anu2 += `➻ *FOLLOWERS* : ${anu.follower}\n`
                   anu2 += `➻ *FOLLOWING* : ${anu.following}\n`
                   anu2 += `➻ *VERIFY* : ${anu.is_verified}\n`
                   anu2 += `➻ *BISNIS* : ${anu.is_bussiness}\n`
                   anu2 += `➻ *PRIVATE* : ${anu.is_private}\n`
                   anu2 += `➻ *BIO* : ${anu.bio}\n`
                   anu2 += `➻ *SOURCE* : ${anu.source}\n`
                   nayla.sendMessage(from, anu1, image, {caption: anu2, quoted: nay1})
                   break
      case 'quran':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`)
                   anu1 = `➻ *ASMA* : ${anu.result.asma}\n`
                   anu1 += `➻ *ARTI* : ${anu.result.arti}\n`
                   anu1 += `➻ *AYAT* : ${anu.result.ayat}\n`
                   anu1 += `➻ *NOMOR* : ${anu.result.nomor}\n`
                   anu1 += `➻ *RUKUK* : ${anu.result.rukuk}\n`
                   anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                   anu1 += `➻ *URUT* : ${anu.result.urut}\n`                                                                            
                   anu1 += `➻ *KETERANGAN* : ${anu.result.keterangan}\n`
                   reply(anu1)
                   break
      case 'estetikpic':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'memeindo':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'darkjokes':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://api.zeks.xyz/api/darkjokes?apikey=apivinz`)
                   anu1 = await getBuffer(anu.result)
                   nayla.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'nickff':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   anu = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`)
                   anu1 = `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   anu1 += `➻ *NIHH* : ${anu.result}\n`
                   reply(anu1)
                   break
       case 'tahta':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'neon2':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                    
       case 'wall':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break   
       case 'wolf':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(6)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=zeeoneofc&text2=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
       case 'tfire':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${F}&apikey=apivinz`)                   
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                
       case 'ytgold':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(8)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'ytsilver':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(10)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/splaybutton?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 't3d':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(5)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'logoa':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(7)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/logoaveng?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'pornhub':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(9)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'marvel':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(8)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/marvellogo?text1=${F1}&text2=${F2}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'leavest':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                    
       case 'phcoment':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla&chan*`)
                   var F = body.slice(10)
				   var F1 = F.split("&")[0];
				   var F2 = F.split("&")[1]; 
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'nulis':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=apivinz`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
       case 'shortener':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(11)
                   reply(naylachan)                   
                   anu = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SHORT* : ${anu.short}\n`
                   anu1 += `➻ *LONG* : ${anu.long}\n`
                   anu1 += `➻ *DATE* : ${anu.created_at.date}\n`
                   anu1 += `➻ *TYPE* : ${anu.created_at.timezone_type}\n`
                   anu1 += `➻ *ZONA* : ${anu.created_at.timezone}\n`
                   reply(anu1)
                   break 
       case 'urlshort':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command}https://link*`)
                   F = body.slice(10)
                   reply(naylachan)                                      
                   anu = await fetchJson(`https://api.zeks.xyz/api/urlshort-all?apikey=apivinz&url=${F}`)
                   anu1 = `➻ *SATU* : ${anu.result_1}\n`
                   anu1 += `➻ *DUA* : ${anu.result_2}\n`
                   anu1 += `➻ *TIGA* : ${anu.result_3}\n`
                   reply(anu1)
                   break
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*===================================================[ API?? RANDOM API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
       case 'fox':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'dog':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'cat':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'panda':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'panda1':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'bird':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
      case 'koala':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: nay1})
                   break
       case 'meme':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)	
                   reply(naylachan)
                   anu = await fetchJson(`https://some-random-api.ml/meme`)
                   anu1 = await getBuffer(anu.image)
                   nayla.sendMessage(from, anu1, image, {caption: `nih kak`, quoted: nay1})
                   break
                   
              
/* =====================================================[ INDO-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                              
   case 'indo1':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
	case 'indo2':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
	case 'indo3':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
	case 'indo4':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
	case 'indo5':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
 case 'indo6':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
 case 'indo7':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
  case 'indo8':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
  case 'indo9':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
  case 'indo10':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
  case 'indo11':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
  case 'indo12':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
   case 'indo13':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
	case 'indo14':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
   case 'indo15':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					    
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
   case 'indo16':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
	case 'indo17':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
    case 'indo18':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
	case 'indo19':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
	case 'indo20':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
	case 'indo21':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
	case 'indo22':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
	case 'indo23':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
	case 'indo24':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
	case 'indo25':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)					 
				   qute = fs.readFileSync('menu/undef1.png') 
				   nayla.sendMessage(from, qute, image, { quoted: nay, caption: '*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 
/* ==================================================[ TERRRRRR-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                  
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
	 case 'jadian':
				   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A11 = groupMembers
  		 		   const B11 = groupMembers
 				   const C11 = A11[Math.floor(Math.random() * A11.length)] 				   
 				   const C22 = B11[Math.floor(Math.random() * B11.length)]
				   D11 = `Cieee @${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\nSELAMAT MENEMPUH KEHIDUPAN BARU!!`                  
				   jds.push(C11.jid)
				   jds.push(C22.jid)
				   mentions(D11, jds, true)
				   break
	 case 'kapankah':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const kapan1 = body.slice(1)					 
				   const kpnkh = kapan2[Math.floor(Math.random() * (kapan2.length))]
				   const jawab1 = `Pertanyaan : *${kapan1}*\n\nJawaban: ${kpnkh}`
      			   nayla.sendMessage(from, jawab1, text, {quoted: nay})
				   break
	  case 'apakah':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   const tanya = body.slice(1)				    
				   const apkh = apa[Math.floor(Math.random() * (apa.length))]
				   const jawab = `Pertanyaan : *${tanya}*\n\nJawaban: ${apkh}`
				   nayla.sendMessage(from, jawab, text, {quoted: nay})
				   break
	case 'slot':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)    				    				    
				   slot = `===================\n` 
				   slot += `${slot11} | ${slot22} | ${slot33}\n`
				   slot += `${slot44} | ${slot55} | ${slot66} <====\n`
				   slot += `${slot77} | ${slot88} | ${slot99}	\n`				   
				   slot += `===================\n`
				   nayla.sendMessage(from, slot, text, {quoted: nay})
				   break				  
                                                                                                                                                                                                                                                       
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                   
       case 'ssweb':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
		           if (!isPrem) return reply(mess.only.premium)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(naylachan)
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${body.slice(7)}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break
      case 'smoke':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(7)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/smoke?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break 
       case 'rainbow':  
                   if (!isUser) return reply(mess.only.userB)
			       if (isLimit(sender)) return
			       await limitAdd(sender)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nayla*`)
                   F = body.slice(9)
                   reply(naylachan)
                   anu = await getBuffer(`https://api-rull.herokuapp.com/api/Photooxy/rainbowshine?text=${F}`)
                   nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1})
                   break                                      
                                        				                                                                                                                                                                              
/* ==================================================[ TAMBAHAN-MENU ]==============================================================*/    
/*====================================================[ API?? NOT API ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	                                          
                    
                    
                    
        case 'toimg':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					reply(naylachan)
					encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media) 
					buffer = fs.readFileSync(ran)
			        nayla.sendMessage(from, buffer, image, {quoted: nay, caption: 'OK it`s done'})
				    fs.unlinkSync(ran)
					})					
			    	break 
        case 'readmore':  
    	case 'more':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!q.includes('|')) return  reply(`GUNAKAN | UNTUK PEMBATAS`)
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
        case 'chatlist':  
    	case 'cekchat':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		  	    	nayla.updatePresence(from, Presence.composing)
			    	var itsme = `0@s.whatsapp.net`
			    	var split = `ALL CHAT BOTZ`
		     		var selepbot =         {
					contextInfo:   {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
	     			}
     				}
	    			}
			      	}
			     	teks = `Total : ${totalchat.length}`
			    	nayla.sendMessage(from, teks, MessageType.text, selepbot)
		    		break
	    case 'addsticker':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)          
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			     	svst = body.slice(12)
			    	if (!svst) return reply('Nama sticker nya apa?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			     	delb = await nayla.downloadMediaMessage(boij)
			       	setiker.push(`${svst}`)
			    	fs.writeFileSync(`./src/sticker/${svst}.webp`, delb)
			     	fs.writeFileSync('./src/stik.json', JSON.stringify(setiker))
			    	nayla.sendMessage(from, `Sukses Menambahkan Sticker kedalam database\nSilahkan Cek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: nay1})
      				break
		case 'addvn':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedAudio) return reply('Reply vnnya blokk!')
			    	svst = body.slice(7)
		    		if (!svst) return reply('Nama audionya apa su?')
			    	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	audionye.push(`${svst}`)
			     	fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
			     	fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
			     	nayla.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: nay1}) 
			      	break
         case 'getvn':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
			     	namastc = body.slice(7)
				    buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
			    	nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: nay1})
			     	break
        case 'getsticker':  
    	case 'gets':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		        	if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')
		      		namastc = body.slice(12)
			     	result = fs.readFileSync(`./src/sticker/${namastc}.webp`)
			    	nayla.sendMessage(from, result, sticker)
			     	break
        case 'liststicker':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*Sticker List :*\n\n'
	    			for (let awokwkwk of setiker) {
			 		teks += `- ${awokwkwk}\n`
    				}
		      		teks += `\n*Total : ${setiker.length}*`
		      		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		      		break
    	case 'listvn':  
 	   case 'vnlist':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		teks = '*List Vn:*\n\n'
		     		for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${audionye.length}*`
		    		nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
		    		break
		case 'addimage':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		     		if (!isQuotedImage) return reply('Reply imagenya blokk!')
			    	svst = body.slice(10)
			    	if (!svst) return reply('Nama imagenya apa su?')
		     		boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	 	     		delb = await nayla.downloadMediaMessage(boij)
		     		imagenye.push(`${svst}`)
			    	fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)
			    	fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))
		      		nayla.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: nay1})		     	 
		     		break
    	case 'getimage':  
        case 'getimg':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			        if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')
	      			namastc = body.slice(10)
	      			buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)
    				nayla.sendMessage(from, buffer, image, {  quoted: nay1})
	      			break
		case 'imagelist':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    		teks = '*List Image :*\n\n'
		    		for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
			      	}
			    	teks += `\n*Total : ${imagenye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			    	break
		case 'addvideo':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			    	if (!isQuotedVideo) return reply('Reply videonya blokk!')
			    	svst = body.slice(10)
			     	if (!svst) return reply('Nama videonya apa su?')
			     	boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delb = await nayla.downloadMediaMessage(boij)
			    	videonye.push(`${svst}`)
			    	fs.writeFileSync(`./src/video/${svst}.mp4`, delb)
			     	fs.writeFileSync('./src/video.json', JSON.stringify(videonye))
			      	nayla.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: nay1}) 
	     			break
		case 'getvideo':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		    	    if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')
			    	namastc = body.slice(10)
			    	buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)
			    	nayla.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: nay1})
			       	break
   	case 'listvideo':  
   	case 'videolist':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    			teks = '*List Video :*\n\n'
	    			for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
		    		}
			    	teks += `\n*Total : ${videonye.length}*`
			    	nayla.sendMessage(from, teks.trim(), extendedText, {  quoted: nay1})
			      	break				                         
        case 'setprefix':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)					 
					break 
		case 'setreply':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    naylachan = body.slice(10)
                    reply(`Change reply To ${naylachan} SUCCESS!`)					 
					break 
		case 'setpp':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef2.png', delb)
		            reply('Sukses')
			        break 
		case 'setthum':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner?`) 
	    	        boij = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			        delb = await nayla.downloadMediaMessage(boij)
			        fs.writeFileSync('./menu/undef1.png', delb)
		            reply('Sukses')
			        break 
		case 'setwelcome':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome1 = body.slice(12)
                    reply(`Change welcome To ${welcome1} SUCCESS!`)					 
					break
		case 'setout':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return
			        if (!isOwner) return reply(`lu owner?`)
                    welcome2 = body.slice(8)
                    reply(`Change out To ${welcome2} SUCCESS!`)					 
					break  
		 					 
        case 'admin':  
        case 'owner':  
        case 'creator':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vnayla}, MessageType.contact, { quoted: fkontak})
                    nayla.sendMessage(from, 'TUHH NOMER OWNER KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )				
					break  
	   case 'other':  
       case 'author':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)         	       
                    nayla.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: fkontak})
                    nayla.sendMessage(from, 'TUHH NOMER AUTHOR KU [(>_<)] JANGAN KASARIN YAA',MessageType.text, { quoted: nay} )				
					break    
        case 'sticker':  
	    case 'stiker':  
	    case 'stickergif':  
	    case 'stikergif':  
	    case 'sgif':  
	    case 's':  	
				    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)		 
					if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					await ffmpeg(`./${media}`)
					.input(media)
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply(naylachan)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
				    fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                    min'(320,ih)':  
                    force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				    .toFormat('webp')
					.save(ran)
					} else if ((isMedia && nay.message.videoMessage.seconds < 11 || isQuotedVideo && nay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : nay
					const media = await nayla.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.webp')
					reply(naylachan)
					await ffmpeg(`./${media}`)
					.inputFormat(media.split('.')[1])
					.on('start', function (cmd) {					 
					})
					.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					tipe = media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
					})
					.on('end', function () {
					console.log('SELESAI JANGAN LUPA SUBSCRIBE YT ZEEONE OFC')
					nayla.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: nay1})
					fs.unlinkSync(media)
					fs.unlinkSync(ran)
					})
					.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':  
                   	min'(320,ih)':  
                   	force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					} else {
					reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
					}
					break
        case 'bc':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return
					if (args.length < 1) return reply('.......')
					anu = await nayla.chats.all()
					if (isMedia && !nay.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : nay
					buff = await nayla.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					nayla.sendMessage(_.jid, buff, image, {caption: `[ *${namebot} BROADCAST* \n\n${body.slice(4)}`})
					}
					reply('*SUCCESS BROADCAST* ')
					} else {
					for (let _ of anu) {
					sendMess(_.jid, `[ *${namebot} BROADCAST* ]\n\n${body.slice(4)}`)
					}
					reply('*SUCCESS BROADCAST* ')
					}
					break
		case 'clearall':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`lu owner??`)
					anu = await nayla.chats.all()
					nayla.setMaxListeners(25)
					for (let _ of anu) {
						nayla.deleteChat(_.jid)
					}
					reply(`sukses`)
					break						 	 
        case 'linkgc':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await nayla.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    nayla.sendMessage(from, yeh, text, {quoted: nay1})			       
					break
		case 'tagall':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroupAdmins) return
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `➪ @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
	    case 'delete':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
	    case 'del':  
		case 'd':  	
				    nayla.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
		case 'kick':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag yg ingin di kick!')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupRemove(from, mentioned)
					} else {
					mentions(`OTW KICK @${mentioned[0].split('@')[0]} ??`, mentioned, true)
					nayla.groupRemove(from, mentioned)
					}					
					break 
		case 'hidetag':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(9)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					break
		case 'add':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					nayla.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}  
					break 
				     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

                     
		case 'bug':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`contoh ${prefix}bug antilink`)
                    const bug1 = body.slice(5)
                    if (bug1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*MY BOTZ NEW*`} } }})
                    var nomor = nay.participant
                    const bug2 = `*[LAPOR ERROR FITUR]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug1}`
                    var optionsp = {
                    text: bug2,
                    contextInfo: {mentionedJid: [nomor]},
                    }                     
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*TERIMAKASIH TELAT REPORT BUG*`} } } })                    
                    reply('REPORT BUG TELAH TERSAMPAIKAN. TERIMAKASIH TELAH MELAPORKAN FITUR')                     
					break   
		case 'request':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`mau request apa kak??\n${prefix}request *nama fitur*`)
                    const cet1 = body.slice(9)
                    if (cet1.length > 300) return nayla.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": cr} } } })
                    var nomor = nay.participant
                    const cet2 = `*[ REQUEST FITUR ]*\nDARI ${pushname} \nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cet1}`
                    var optionsp = {
                    text: cet2,
                    contextInfo: {mentionedJid: [nomor]},
                    } 
                    nayla.sendMessage(`${setting.ownerNumber}@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })
                    nayla.sendMessage(`62812874133914@s.whatsapp.net`, optionsp, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `*NIHHH WOIII REQUEST*`} } } })                                    
                    reply(`TERIMAKASIH REQ ANDA AKAN KAMI PROSES`)
                    break
       case 'asupan':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/lasegar?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 = `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay}).catch(e => {
	                reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
                    console.log(e)
	                })
                    break
       case 'asupan1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/ptl?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
        case 'asupan2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    anu = await fetchJson(`https://api.xteam.xyz/asupan/wibu?APIKEY=${apixteam}`)
                    anu1 = `➻ *NAMA* : ${anu.result.username}\n`                                                     
                    anu1 += `➻ *USERNAME* : ${anu.result.full_name}\n`
                    anu1 += `➻ *ID* : ${anu.result.profile_id}\n`
                    anu1 += `➻ *BIO* : ${anu.result.biography}\n`
                    anu1 += `➻ *FOLLOWERS* : ${anu.result.followers}\n`
                    anu1 += `➻ *FOLLOWING* : ${anu.result.following}\n`
                    anu1 += `➻ *URL* : ${anu.result.external_url}\n`
                    anu1 += `➻ *PRIVATE* : ${anu.result.is_private}\n`
                    anu1 += `➻ *VERIFY* : ${anu.result.is_verified}\n`
                    anu1 += `➻ *TYPE* : ${anu.result.type}\n`
                    anu1 += `➻ *COMENT* : ${anu.result.comment}\n`
                    anu1 += `➻ *LIKE* : ${anu.result.like}\n`
                    anu1 += `➻ *CAPTION* : ${anu.result.caption}\n`
                    anu1 += `➻ *LINK* : ${anu.result.link}\n`
                    anu2 = await getBuffer(anu.result.profile_pic_url_hd)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
       case 'ngakak':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
        case 'nulis1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nama & kelas & nulis*`)
                    var F = body.slice(8)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
                    reply(naylachan)
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?nama=${F1}&kelas=${F2}&text=${F3}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `nih kak`, quoted: nay})
                    break
       case 'nulis2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                    break 
        case 'nulis3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                    break 
       case 'nulis4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                    break 
                    case 'nulis5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                    break 
        case 'nulis6':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay1}) 
                    break                     
        case 'video1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/poly?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break
        case 'video2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/bold?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break
        case 'video3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/glowing?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break
         case 'video4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/colorful?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break
        case 'video5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/army?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break
        case 'video6':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(naylachan) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/videomaker/retro?text=${F}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, video, {caption: `OK it's done`, quoted: nay1}) 
                    break                     
                    
  /* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=======================================================[ API XTEAM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
         case 'naruto': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
         case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
         case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
         case 'gon': case 'killua': case 'sagiri': case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=karakter anime ${command} hd`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
        case 'foto': case 'pinterest':              
				    nayla.updatePresence(from, Presence.composing) 
				    data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args[0]}`, {method: 'get'})
				    reply(naylachan)
				    n = JSON.parse(JSON.stringify(data));
				    nimek =  n[Math.floor(Math.random() * n.length)];
				    pok = await getBuffer(nimek)
				    nayla.sendMessage(from, pok, image, { quoted: nay})
				    break
        case 'ramalnomer':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 08123456789*`)
                    F = body.slice(12)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/nomorhoki?no=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *RAMAL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'ramalcinta':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 			 	    
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalancinta?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
                    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`
                    anu1 += `➻ *TANGGAL2* : ${anu.result.positif}\n`
                    anu1 += `➻ *NEGATIF* : ${anu.result.negatif}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
                    anu2 = await getBuffer(anu.result.img)
                    nayla.sendMessage(from, anu2, image, {caption: anu1, quoted: nay})
                    break
        case 'ramaljodoh':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodoh?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'jodohbali':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
                    var F = body.slice(11)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalanjodohbali?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
                    anu1 += `➻ *NAMA1* : ${anu.result.nama1}\n`
                    anu1 += `➻ *TANGGAL1* : ${anu.result.tgl1}\n`
                    anu1 += `➻ *NAMA2* : ${anu.result.nama2}\n`                     
                    anu1 += `➻ *KALKULASI* : ${anu.result.kalkulasi}\n`
                    anu1 += `➻ *POSITIF* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
		case 'ramalnikah':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
			 	    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 1&1&2001&nama&1&2&2003&nama2`)
			 	    var F = body.slice(12)
			        var F1 = F.split("&")[0];
			 	    var F2 = F.split("&")[1]; 
			 	    var F3 = F.split("&")[2]; 
			 	    var F4 = F.split("&")[3];
			 	    var F5 = F.split("&")[4]; 
			 	    var F6 = F.split("&")[5]; 
			 	    var F7 = F.split("&")[6];
			 	    var F8 = F.split("&")[7]; 		
			 	    anu = await fetchJson(`https://api.xteam.xyz/primbon/ramalansuamiistri?tgl1=${F1}&bln1=${F2}&thn1=${F3}&nama1=${F4}&tgl2=${F5}&bln2=${F6}&thn2=${F7}&nama2=${F8}&APIKEY=${apixteam}`)
			 	    anu1 = `➻ *JUDUL* : ${anu.result.judul}\n`
			 	    anu1 += `➻ *SUAMI* : ${anu.result.suami}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_suami}\n`
			 	    anu1 += `➻ *ISTRY* : ${anu.result.istri}\n`
			 	    anu1 += `➻ *TANGGAL* : ${anu.result.tgl_istri}\n`
			 	    anu1 += `➻ *TABEL* : ${anu.result.tabel}\n`
			 	    anu1 += `➻ *INFO* : ${anu.result.info}\n`
			 	    reply(anu1)
			 	    break
        case 'taksirmimpi':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} di gigit ular`)
                    F = body.slice(9)
                    anu = await fetchJson(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *HASIL* : ${anu.result}`
                    reply(anu1)
                    break
        case 'suit':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakangka':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${apixteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakbendera':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${apixteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban} SELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break     
        case 'kata':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} anjayy cok hayukkkk&by nama kamu`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${apixteam}`)
                    nayla.sendMessage(from, anu, image, {quoted: nay})
                    break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ TEXT PRO XIXIXI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
         case 'sound1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound2 = fs.readFileSync('sound/sound2.mp3')
                    nayla.sendMessage(from, sound2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, seconds: 9999999, quoted: nay1})
                    break 
        case 'sound3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound3 = fs.readFileSync('sound/sound3.mp3')
                    nayla.sendMessage(from, sound3, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break 
        case 'sound4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound4 = fs.readFileSync('sound/sound4.mp3')
                    nayla.sendMessage(from, sound4, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break      
        case 'sound5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound5 = fs.readFileSync('sound/sound5.mp3')
                    nayla.sendMessage(from, sound5, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break           
        case 'sound6':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound6 = fs.readFileSync('sound/sound6.mp3')
                    nayla.sendMessage(from, sound6, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound7':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound7 = fs.readFileSync('sound/sound7.mp3')
                    nayla.sendMessage(from, sound7, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound8':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound8 = fs.readFileSync('sound/sound8.mp3')
                    nayla.sendMessage(from, sound8, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound9':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound9 = fs.readFileSync('sound/sound9.mp3')
                    nayla.sendMessage(from, sound9, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound10':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound10 = fs.readFileSync('sound/sound10.mp3')
                    nayla.sendMessage(from, sound10, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound11':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound11 = fs.readFileSync('sound/sound11.mp3')
                    nayla.sendMessage(from, sound11, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
         case 'soundtes':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound12 = fs.readFileSync('sound/sound12.mp3')
                    nayla.sendMessage(from, sound12, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound13':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound13 = fs.readFileSync('sound/sound13.mp3')
                    nayla.sendMessage(from, sound13, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound14':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound14 = fs.readFileSync('sound/sound14.mp3')
                    nayla.sendMessage(from, sound14, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound15':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound15 = fs.readFileSync('sound/sound15.mp3')
                    nayla.sendMessage(from, sound15, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
       case 'sound16':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound16 = fs.readFileSync('sound/sound16.mp3')
                    nayla.sendMessage(from, sound16, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound17':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound17 = fs.readFileSync('sound/sound17.mp3')
                    nayla.sendMessage(from, sound17, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound18':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound18 = fs.readFileSync('sound/sound18.mp3')
                    nayla.sendMessage(from, sound18, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound19':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound19 = fs.readFileSync('sound/sound19.mp3')
                    nayla.sendMessage(from, sound19, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound20':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound20 = fs.readFileSync('sound/sound20.mp3')
                    nayla.sendMessage(from, sound20, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound21':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound21 = fs.readFileSync('sound/sound21.mp3')
                    nayla.sendMessage(from, sound21, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound22':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound22 = fs.readFileSync('assets/sound22.mp3')
                    nayla.sendMessage(from, sound22, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                
        case 'sound23':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound23 = fs.readFileSync('sound/sound23.mp3')
                    nayla.sendMessage(from, sound23, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break              
        case 'sound24':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound24 = fs.readFileSync('sound/sound24.mp3')
                    nayla.sendMessage(from, sound24, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                    break                                                        
        case 'sound25':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    const sound25 = fs.readFileSync('sound/sound25.mp3')
                    nayla.sendMessage(from, sound25, MessageType.audio, {mimetype: 'audio/mp4', ptt:true})
                    break                  
                     
     
                      
                    
                                                                                                                           
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*====================================================[ API?? LINDOWAPI ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                     
                      
          case 'attp':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply('Kasih teks lah omm')
                     ini = body.slice(6)
                     atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
                     nayla.sendMessage(from, atetepe, sticker, {quoted: nay})
                     break                     
         case 'katailham':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`)
                     anu1 = `➻ *KATA ILHAM* : ${anu.result}`
                     reply(anu1)
                     break
         case 'citacita':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/citacita?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, MessageType.audio, {quoted: nay, mimetype: 'audio/mp4', ptt:true})
                     break
         case 'blackpink':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/blackpink?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay})
                     break
         case 'exo':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/exo?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay})
                     break
          case 'bts':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     reply(naylachan)
                     anu = await getBuffer(`https://lindow-api.herokuapp.com/api/bts?apikey=LindowApi`)
                     nayla.sendMessage(from, anu, image, {caption: `OK it's done`, quoted: nay})
                     break
          case 'simi':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} hai sayang`)
                     anu = await fetchJson(`https://lindow-api.herokuapp.com/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
         case 'textfont':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'kapital':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break                      
         case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':  
                     if (!isUser) return reply(mess.only.userB)
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone`)
                     F = body.slice(7)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/${command}?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'boomtext':  
                     if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} zeeone&50`)
                     var F = body.slice(10)
			         var F1 = F.split("&")[0];
			 	     var F2 = F.split("&")[1]; 
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/repeater?teks=${F1}&jumlah=${F2}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
                     
                     
                                                                                                                          
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ CASE ANTIII ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 

         case 'welcome':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('*SUDAH AKTIF* !!!')
					welkom.push(from)
					fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
					reply('[❗] SUKSES AKTIF WELCOME')
					} else if (Number(args[0]) === 0) {
					welkom.splice(from, 1)
				    fs.writeFileSync('./nayla/welkom.json', JSON.stringify(welkom))
				    reply('[❗] SUKSES NONAKTIF WELCOME')
					} else {
					reply(`......`)
					}
					break  
        case 'antilink':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antilink.push(from)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antilink.json', JSON.stringify(antilink))
					reply('*[❗] DEACTIVATED ANTILINK*')
					} else {
					reply(`PILIH 1/0`)
					}
					break					 
		case 'botx':  
                    if (!isUser) return reply(mess.only.userB)
		            if (!isOwner) return reply(`LU OWNER?`)
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					botx.push(from)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] ACTIVATED BOTX*')
					} else if (Number(args[0]) === 0) {
					botx.splice(from, 1)
					fs.writeFileSync('./nayla/botx.json', JSON.stringify(botx))
					reply('*[❗] DEACTIVATED BOTX*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antigay':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antigay.push(from)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] ACTIVATED ANTIGAY*')
					} else if (Number(args[0]) === 0) {
					antilink.splice(from, 1)
					fs.writeFileSync('./nayla/antigay.json', JSON.stringify(antigay))
					reply('*[❗] DEACTIVATED ANTIGAY*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antibocil':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antibocil.push(from)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] ACTIVATED ANTIBOCIL*')
					} else if (Number(args[0]) === 0) {
					antibocil.splice(from, 1)
					fs.writeFileSync('./nayla/antibocil.json', JSON.stringify(antibocil))
					reply('*[❗] DEACTIVATED ANTIBOCIL*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antiwibu':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isGroup) return reply(`GROUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antiwibu.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] ACTIVATED ANTIWIBU*')
					} else if (Number(args[0]) === 0) {
					antiwibu.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antiwibu))
					reply('*[❗] DEACTIVATED ANTIWIBU*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antikasar':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXi.push(from)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] ACTIVATED ANTI KASAR*')
					} else if (Number(args[0]) === 0) {
					nayXi.splice(from, 1)
					fs.writeFileSync('./nayla/nayXi.json', JSON.stringify(nayXi))
					reply('*[❗] DEACTIVATED ANTI KASAR*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antitag':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					nayXix.push(from)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] ACTIVATED ANTI TAG*')
					} else if (Number(args[0]) === 0) {
					nayXix.splice(from, 1)
					fs.writeFileSync('./nayla/nayXix.json', JSON.stringify(nayXix))
					reply('*[❗] DEACTIVATED ANTI TAG*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
		case 'antijawa':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GROUP ONLY`) 
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					if (args.length < 1) return reply('PILIH 1/0')
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*SUDAH AKTIF* !!!')
					antijawa.push(from)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] ACTIVATED ANTIJAWA*')
					} else if (Number(args[0]) === 0) {
					antijawa.splice(from, 1)
					fs.writeFileSync('./nayla/antiwibu.json', JSON.stringify(antijawa))
					reply('*[❗] DEACTIVATED ANTIJAWA*')
					} else {
					reply(`PILIH 1/0`)
					}
					break
					 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ REST API FRE ]==============================================================*/                  	    
/*====================================================[ CASE LOLTEAM ]==============================================================*/                    	 
        					
		case 'tebak':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`http://dt-04.herokuapp.com/api/tebak`)
                    anu1 = `➻ *SOAL* : ${anu.pertanyaan}`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban_full}`
                    setTimeout( () => {
                    nayla.sendMessage(from, anu1, text, {quoted: nay1})
                    }, 1)
                    setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    nayla.sendMessage(from, anu2, text,{quoted: nay1})                   
                    }, 60000)                                                                          
                    break 
         case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info3* ]`)
                    }, 20000)
                    break
        case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}info2* ]`)
                    }, 20000)
                    break
        case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW ANDA MENDAPATKAN* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}info1* ]`)
                    }, 20000)
                    break
        case 'ttp1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'ttp2':  
        case 'ttp3':  
        case 'ttp4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)                     
                    if (args.length < 1) return reply('Kasih teks lah omm')
                    F = body.slice(6)
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/${command}?apikey=${l0lhuman}&text=${F}`)
                    nayla.sendMessage(from, anu1, sticker, {quoted: nay1})
                    break
        case 'info1':
                    reply(nyz.info1())
                    break
        case 'info2':
                    reply(nyz.info2())
                    break
        case 'info3':
                    reply(nyz.info3())
                    break
        case 'character':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `Id : ${anu.id}\n`
                    anu2 += `Name : ${anu.name.full}\n`
                    anu2 += `Native : ${anu.name.native}\n`
                    anu2 += `Favorites : ${anu.favourites}\n`
                    anu2 += `Media : \n`
                    ini_media = anu.media.nodes
                    for (var x of ini_media) {
                        anu2 += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    anu2 += `\nDescription : \n${anu.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(anu.image.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break
        case 'manga1':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    anu1 = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${l0lhuman}&query=${query}`)
                    anu = anu1.result
                    anu2 = `➻ Id : ${anu.id}\n`
                    anu2 += `➻ Id MAL : ${anu.idMal}\n`
                    anu2 += `➻ Title : ${anu.title.romaji}\n`
                    anu2 += `➻ English : ${anu.title.english}\n`
                    anu2 += `➻ Native : ${anu.title.native}\n`
                    anu2 += `➻ Format : ${anu.format}\n`
                    anu2 += `➻ Chapters : ${anu.chapters}\n`
                    anu2 += `➻ Volume : ${anu.volumes}\n`
                    anu2 += `➻ Status : ${anu.status}\n`
                    anu2 += `➻ Source : ${anu.source}\n`
                    anu2 += `➻ Start Date : ${anu.startDate.day} - ${anu.startDate.month} - ${anu.startDate.year}\n`
                    anu2 += `➻ end Date : ${anu.endDate.day} - ${anu.endDate.month} - ${anu.endDate.year}\n`
                    anu2 += `➻ Genre : ${anu.genres.join(", ")}\n`
                    anu2 += `➻ Synonyms : ${anu.synonyms.join(", ")}\n`
                    anu2 += `➻ Score : ${anu.averageScore}%\n`
                    anu2 += `➻ Characters : \n`
                    ini_character = anu.characters.nodes
                    for (var x of ini_character) {
                        anu2 += `- ${x.name.full} (${x.name.native})\n`
                    }
                    anu2 += `\nDescription : ${anu.description}`
                    thumbnail = await getBuffer(anu.coverImage.large)
                    nayla.sendMessage(from, thumbnail, image, { quoted: nay, caption: anu2 })
                    break                     
        case 'tiktoknowm':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium)
                    reply(naylachan)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${l0lhuman}&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    ini_buffer = await getBuffer(get_result.result.link)
                    nayla.sendMessage(from, ini_buffer, video, { quoted: nay1})
                    break
        case 'tiktokmusic':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium) 
                    reply(naylachan) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
                    ini_link = args[0]
                    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${l0lhuman}&url=${ini_link}`)
                    nayla.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: nay1})
                    break
       case 'telesticker':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${l0lhuman}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    nayla.sendMessage(from, ini_buffer, sticker)
                    }
                    break
        case 'nhentai':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
		            if (!isPrem) return reply(mess.only.premium) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12345`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${l0lhuman}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    nayla.sendMessage(from, ini_buffer, document, { quoted: nay, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    break
        case 'semoji':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, ini_buffer, sticker, { quoted: nay1})
                    break                    
        case 'phkomen':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
		            if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human api.lolhuman.xyz`)
	   	            username = args[0]
		            comment = args[2]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/phcomment?apikey=${l0lhuman}&img=https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg&text=${comment}&username=${username}`)
                    nayla.sendMessage(from, buffer, image, { quoted: nay1})
                    break                     
        case 'katajago':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} cantik`)
                    anu = await fetchJson(`https://pecundang.herokuapp.com/api/jagokata?kata=${args[0]}`)
                    anu1 = `➻ *KATA* : ${anu.result}`
                    reply(anu1)
                    break                     
        case 'test':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    reply(`oke`)
                    break
        case 'addprem':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isOwner) return reply(`LU OWNER?`)
					adprem = `${args[0].replace('@','')}@s.whatsapp.net`
					prem.push(adprem)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`BERHASIL MENAMBAHKAN USER PREMIUM`)
					break				
		case 'dellprem':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					if (!isOwner) return reply(`LU OWNER?`)
					delp = body.slice(10)
					prem.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./nayla/prem.json', JSON.stringify(prem))
					reply(`Berhasil Menghapus wa.me/${delp} Dari Daftar Premium`)
					break
		case 'group':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`BOT BUKAN ADMIN`)
					if (!isBotGroupAdmins) return reply(`LU ADMIN?`)
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP`)
						nayla.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}				 
					break  
		case 'hidetag10':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(10)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					nayla.sendMessage(from, options, text)					 
					break    
 
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API VHTEAR ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    					
		case 'ffserti':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'ffserti5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break			
		case 'mlserti':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(9)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'mlserti5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(10)
					zhain = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(11)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti2':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti3':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan)					 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti4':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 					
					if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
					reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'NIH KACK', quoted: nay1})
					break
		case 'pubgserti5':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
				    reply(naylachan) 
					ct = body.slice(12)
					zhain = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
					nayla.sendMessage(from, zhain, image, {caption: 'OK it`s done', quoted: nay1})
					break
		case 'tololserti':
					if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 										 				 
				    if (args.length < 1) return reply(`[❗] Example :\n${prefix}${command} whatsapp`)
				    F = body.slice(12)
				    reply(naylachan)
				    to = await getBuffer(`https://evilblackteam.nasiwebhost.com/serti1/img.php?nama=${F}`)
				    nayla.sendMessage(from, to, image, {caption: 'OK it`s done', quoted:nay1})
				    break
					
		case 'ingfo':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await nayla.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: nay
					}
					nayla.sendMessage(from, options, text, {quoted: nay1})					 
					break
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
					
		case 'wanted':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
                  	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan) 
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                tels = body.slice(7)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	               	} else {
	           	    reply(`KIRIM FOTO DENGAN CAPTION ${command}`)
	              	}
	               	break
	    case 'deteksiwajah':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	               	var imgbb = require('imgbb-uploader')
	               	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	             	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	              	reply(naylachan)
		            owgi = await nayla.downloadAndSaveMediaMessage(ted)
		            anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	             	hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	nayla.sendMessage(from, hehe, image, {quoted:nay1})
		            } else {
		            reply(`Send Photo With Caption ${command}`)
	              	}
	                break
	     case 'removebg':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                    var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	                hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${l0lhuman}&img=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
	                reply(`Send Photo With Caption ${command}`)
                	}
	                break	 
	    case 'deteksiumur':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
	                ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
	                owgi = await nayla.downloadAndSaveMediaMessage(ted)
	                anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${l0lhuman}&img=${anu.display_url}`)
                  	gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	                nayla.sendMessage(from, gender, text, {quoted:nay1})
                 	} else {
                  	reply(`Send Photo With Caption${command}`)
                	}
	                break
     	case 'gtav':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
	                }
	                break
        case 'facebookpage':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
	                break
	    case 'costumwp':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
	                } else {
                  	reply(`Send Photo With Caption ${command}`)
	                }
                	break
         case 'pantaimalam':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                 	var imgbb = require('imgbb-uploader')
                	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted: nay1})
                 	} else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
                	break
	     case 'pensil':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
	                var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(14)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                 	} else {
                  	reply(`Send Photo With Caption ${command}`)
                 	}
                 	break 
	     case 'bakar':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                 	var imgbb = require('imgbb-uploader')
                 	if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
                 	 reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                    nayla.sendMessage(from, hehe, image, {quoted:nay1})
                  	} else {
                  	reply(`Send Photo With Caption ${command}`)
                 	}
                	break
         case 'crossgun':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	 
                	var imgbb = require('imgbb-uploader')
	                if ((isMedia && !nay.message.videoMessage || isQuotedImage) && args.length == 0) {
                  	ted = isQuotedImage ? JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: nay
	                reply(naylachan)
                  	owgi = await nayla.downloadAndSaveMediaMessage(ted)
                  	tels = body.slice(7)
                  	anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
                  	hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
	                nayla.sendMessage(from, hehe, image, {quoted:nay1})
                	} else {
                  	reply(`Send Photo With Caption ${command}`)
                  	}
                	break
	 
		case 'demote':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('LU ADMIN??')
					if (!isBotGroupAdmins) return reply('BOT BUKAN ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `*jabatan kamu di copot*🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					} else {
					mentions(`yahhh @${mentioned[0].split('@')[0]} lu bukan admin lagi bro :(`, mentioned, true)
					nayla.groupDemoteAdmin(from, mentioned)
					}					 
					break
		case 'promote':  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
					if (!isGroupAdmins) return reply('ONLY ADMIN')
					if (!isBotGroupAdmins) return reply('BOT NOT ADMIN')
					if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag member')
					mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
					teks = ''
					for (let _ of mentioned) {
					teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂?? (+_+) :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
			 	    } else {
					mentions(`??𝗲𝗹𝗮𝗺𝗮𝘁🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* (+_+)`, mentioned, true)
					nayla.groupMakeAdmin(from, mentioned)
					}					 
					break	                     
         case 'oxo':                    
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
                    break
         case 'tts': 
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
				    if (args.length < 1) return nayla.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: nay})					 
					if (args.length < 2) return nayla.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: nay})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan cayank!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return reply('ERROR')
					nayla.sendMessage(from, buffer, audio, {ptt:true, quoted:nay1})
					fs.unlinkSync(rano)
					})
					})
					break
		case 'pesan':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					reply('PESAN SUDAH TERKIRIM')
					break
		case 'tebakkimia': 
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/unsurkimia?apikey=${l0lhuman}`, {method: 'get'})
					kimia = `SOAL TEBAK KIMIA : *${anu.result.nama}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.lambang}`, text, {quoted: nay1}) 
					}, 60000) 
					setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, kimia, text, {quoted: nay })
					}, 60000) 
					break 
	            	case 'tebaklirik': 
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/lirik?apikey=${l0lhuman}`, {method: 'get'})
					lirik = `SOAL TEBAK LIRIK : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, lirik, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'tebakin1': 
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/jenaka?apikey=${l0lhuman}`, {method: 'get'})
					te1 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te1, text, {quoted: nay1 }) 
					}, 1) 
					break 
				    case 'tebakin2': 
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/siapaaku?apikey=${l0lhuman}`, {method: 'get'})
					te2 = `SOAL TEBAKIN : *${anu.result.question}*`
					setTimeout( () => {
					nayla.sendMessage(from, `➻ *JAWABAN* : ${anu.result.answer}`, text, {quoted: nay1})
					}, 60000) 
					setTimeout( () => {
                    costum('50 DETIK LAGI', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 DETIK LAGI', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 DETIK LAGI', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 DETIK LAGI', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 DETIK LAGI', text, tescuk, cr)
                    }, 50000)                                       
					setTimeout( () => {
					nayla.sendMessage(from, te2, text, {quoted: nay1 }) 
					}, 1) 
					break 
					case 'randomwibu': 
					if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
					wibuC = ['wibu1','wibu2','wibu3','wibu4','wibu5','wibu6','wibu7','wibu8','wibu8','wibu10','wibu11','wibu12']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`wibu/${wibuF}.webp`)					
                    nayla.sendMessage(from, wibuz, sticker, {quoted: nay1})
                    break
                    case 'randompatrick':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'dadu':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/dadu?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'umongus':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/amongus?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'gawrgura':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/gawrgura?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickanjing':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'stickbucin':
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/bucinstick?apikey=${l0lhuman}`)
                    nayla.sendMessage(from, anu, sticker, {quoted:nay1})
                    break
                    case 'limit':                     
                    if (!isUser) return reply(mess.only.userB)
				    checkLimit(sender)
					break 
			     	case 'leveling':
                    if (!isGroup) return reply('GRUP ONLY')
                    if (!isGroupAdmins) return reply('LU ADMIN??')
                    if (args.length < 1) return reply('PILIH enable/disable')
                    if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
           	        reply('SUKSES AKTIVE LEVELING')
                    } else if (args[0] === 'disable') {
                	_leveling.splice(from, 1)
                    fs.writeFileSync('./nayla/leveling.json', JSON.stringify(_leveling))
                    reply('SUKSES NON ANTIVE LEVELING')
                    } else {
           	        reply('PILIH enable/disable')
                  	}
				    break 
				    case 'level':
                    if (!isLevelingOn) return reply('LEVELING TIDAK AKTIF')
                    if (!isGroup) return reply('GRUB ONLY')
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(nyz.lvlnul())
                    const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                    resul = `╭──❲ *YOUR LEVEL* ❳\n│▢ *Name* : ${pushname}\n│▢ *Number* : wa.me/${sender.split("@")[0]}\n│▢ *User XP* :  ${userXp}/${requiredXp}\n│▢ *User Level* : ${userLevel}\n╰──❲ ALPHA BOTZ ❳`
                    reply(resul)
			    	break     
			    	case 'grubwa':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	if (!isPrem) return reply(mess.only.premium)        
			    	anu = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${l0lhuman}&query=${body.slice(8)}`)
			    	anu2 = 'GRUB WHATSAPP :\n'
                    for (var x of anu.result) {
			    	anu2 = `➻ *NAMA* : ${x.name}\n`
			    	anu2 += `➻ *GENRE* : ${x.genre}\n`
			    	anu2 += `➻ *LINK* : ${x.link}`	
			    	}		    	 
			    	reply(anu2)
			    	break
			    	case 'brainly':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/brainly?soal=${body.slice(9)}&APIKEY=${apixteam}`)
			    	anu1 = `➻ *JAWABAN* : ${anu.jawaban}`
			    	reply(anu1)
			    	break
			    	case 'newsdetik':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newskompas':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/kompas?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newsliputan6':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/liputan6?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
			    	case 'newstribun':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/tribun?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break
	                case 'jalantikus':
	                if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
			    	anu = await fetchJson(`https://xteam.xyz/news/jalantikus?APIKEY=${apixteam}`)
			    	anu1 = `➻ *JUDUL* : ${anu.judul}\n`
			    	anu1 += `➻ *TANGGAL* : ${anu.tanggal}\n`
			    	anu1 += `➻ *URL* : ${anu.url}\n`
			    	anu1 += `➻ *ARTIKEL* : ${anu.artikel}\n`
			    	anu2 = await getBuffer(anu.thumb)
			    	nayla.sendMessage(from, anu2, image, {caption: anu1, quoted:nay1})
			    	break			    	
			    	case 'tomp3':
			    	if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
				    nayla.updatePresence(from, Presence.composing)
			     	if (!isQuotedVideo) return reply('itu video bruh?:V')
				    reply(naylachan)
			      	encmedia = JSON.parse(JSON.stringify(nay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				    media = await nayla.downloadAndSaveMediaMessage(encmedia)
				    ran = getRandom('.mp4')
			 	    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Yahh emrror bruh:(')
					buffer = fs.readFileSync(ran)
					nayla.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: nay, caption: `NIHH KAK ${pushname}`})
					fs.unlinkSync(ran)
			     	})
					break 
					case 'spam':
					if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					var FG = body.slice(7)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})
					nayla.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:nay1})					
					reply('BERHASIL SPAM🔥')
					break
					case 'fitnah':
					if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)  
					if (args.length < 1) return reply(`Gini kak : ${prefix}fitnah [@tag&pesan&balasanbot]\n\nContoh : ${prefix}fitnah @tagmember&hai&hai juga`)
				    var gh = body.slice(8)
			      	mentioned = nay.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					nayla.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender) 
					break
					 
                                                               
                                                                                                                                                                             
                    
                     
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ ANTI RANDOM ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 
                    
                    default:            
                    if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    
				   
                    if (budy.includes("syg")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				     
				    if (budy.includes("ayan")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("love")){
					if (!isGroup) return
					if (!isAntigay) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge gayyyy yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Gayy Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ayuk")){
					if (!isGroup) return
					if (!isAntibocil) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge bocilz yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`bocil Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("chan")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => { 
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("yamete")){
					if (!isGroup) return
					if (!isAntiwibu) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`wibu Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("ambe")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("tempek")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("matamu")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("jancok")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }
				    if (budy.includes("aing")){
					if (!isGroup) return
					if (!isAntijawa) return
					if (isGroupAdmins) return reply('alahhh siaa :v admin grub mahh bebas nge wibu yakan 😎 EZzz')
					nayla.updatePresence(from, Presence.composing)
					if (messagesC.includes("@62812874133914")) return reply("izin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`jawa Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
					setTimeout( () => {
					nayla.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("1detik")
					}, 4000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("2detik")
					}, 3000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("3detik")
					}, 2000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("4detik")
					}, 1000)
					setTimeout( () => {
					nayla.updatePresence(from, Presence.composing)
					reply("5detik")
					}, 0)
				    }				    
				    if (budy.includes("cekprefix")){
				    reply(`BOT PREFIX ${prefix}`)
				    }
				    if (budy.includes("gak")){
				    const F2 = fs.readFileSync('sound/F2.mp3')
                    nayla.sendMessage(from, F2, MessageType.audio, {mimetype: 'audio/mp4', ptt:true, quoted: nay1})
                    }
                    if (budy.includes(`${numberbot}`)){
                    const F3 = fs.readFileSync('menu/tag.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
				    if (budy.includes(`${ownerrf}`)){
                    const F3 = fs.readFileSync('menu/tag2.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`njir`)){
                    const F3 = fs.readFileSync('menu/tag4.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ayla`)){
                    const F3 = fs.readFileSync('menu/tag3.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Ajg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Asu`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Anjg`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`olol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`antek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`elaso`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`Babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`babi`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`ontol`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kntl`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`kintil`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`emek`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }
                    if (budy.includes(`entod`)){  
                    if (!isNayXi) return
                    const F3 = fs.readFileSync('menu/tag5.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }     
                    if (budy.includes(`@`)){
                    if (!isNayXix) return  
                    const F3 = fs.readFileSync('menu/tag6.webp')
                    nayla.sendMessage(from, F3, sticker, {quoted: nay1})
                    }             
                    
/* ===================================================[ BOT WHATSAPP ]==============================================================*/    
/*=====================================================[ API FREEEEE ]==============================================================*/                  	    
/*====================================================[ CASE BY NAYLA ]==============================================================*/                    	 				    

                     
                    if (body.startsWith(`${prefix}${command}`)) {                    
                    anu1 = `Sorry *${pushname}* ${notc1} But Feature *${prefix}${command}* Cannot be found in *${prefix}menu*`
                    nayla.sendMessage(from, anu1, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumb}.jpg`), "mimetype": "application/octet-stream","title": `${prefix}${command} Not Found`, "fileLength": "36", "pageCount": 0, "fileName": `${prefix}${command} Not Found`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
                    }                                       	
              }   
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		   reply('Error Atau Unvalid Apikey')
		}
	})
}
starts() 