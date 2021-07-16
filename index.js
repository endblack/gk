const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   ChatModification,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const fetch = require('node-fetch')
const FormData = require('form-data')
const crypto = require('crypto')
const request = require('request')
const speed = require('performance-now')
const axios = require('axios')
const { uploadimg } = require('./lib/uploadimg')
const { webp2gifFile } = require("./lib/gif.js")
const { addLimit, getLimit } = require('./lib/limit.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, } = require('./lib/register.js')
const { gettime } = require('./lib/gg.js')
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, mail2, getGroupAdmins, mail, getRandom, banner, start, info, success, close } = require('./lib/functions')
const brainly = require('brainly-scraper')
const ms = require('parse-ms')
const toMs = require('ms')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { ind } = require('./language')
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
  console.log("bot online");
  response.sendStatus(200).json({
  status: 'tudo ok por aqui'
  })
});

app.get('/info', (req, res) => {
  res.json({
    status: 'rodando normalmente'
  })
})

app.listen(PORT, () => {
console.log('okok '+PORT)
})


const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:My dono🥰\n' 
            + 'ORG: ❲████▒▒❳ 90% MaxWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=559184035474:+55 91 8403-5474\n' 
            + 'END:VCARD' 
prefix = '!'
blocked = []   
limitawal = 10
memberlimit = 1
namo = 'Otakinhos_sticker'
ator = 'megah_gostosa'
apiz = `vrMSPgXFfqY87hnTJ87arA9N2LN`
apix = `a15d96cb18d0c28d`
cc = `Temporáriamente off`

/******* max gostoso**********/
const ownerNumber = ["559184035474@s.whatsapp.net"] 
/************************************/
/*********** DATABASE LEVEL********/
ahb = 3 
ahc = 5 				
const packID = 'com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2'
const playstore = 'https://play.google.com/store/apps/details?id=com.snowcorp.stickerly.android'
const itunes = 'https://itunes.apple.com/app/sticker-maker-studio/id1443326857'

/*********** DATABASE LEVEL********/
       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const sotoy = JSON.parse(fs.readFileSync('./data/sotoy.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))
const porno = JSON.parse(fs.readFileSync('./database/bot/porno.json'))
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const adulto = JSON.parse(fs.readFileSync('./database/bot/adulto.json'))
const { BarBarApi, ZeksApi, TechApi, TobzApi, ItsApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const gprem = JSON.parse(fs.readFileSync('./database/group/premg.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json')) 
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const antisticker = JSON.parse(fs.readFileSync('./database/json/antisticker.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./database/json/antilinkyt.json'))
const antilinkex = JSON.parse(fs.readFileSync('./database/json/antilinkex.json'))

/*********** END LOAD ***********/
const infos = JSON.parse(fs.readFileSync('./data/settings.json'))
const { cdd, ammOff, crfig, crlv, crtt, crh } = infos


const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

/********** FUNCTION ***************/


const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}

if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const checkprem = (sender) => {
            let status = false
            Object.keys(prem).forEach((i) => {
                if (prem[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
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
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas, ${pad(minutes)} Minutos e ${pad(seconds)} Segundos`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');
	let name = `${packname}_${author}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		    'sticker-pack-id': packID,
            'sticker-pack-name': packname,
            'sticker-pack-publisher': author,
            'android-app-store-link': playstore,
            'ios-app-store-link': itunes
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

}
/********** FUNCTION ***************/

async function connectToWhatsApp() {
	const client = new WAConnection()
	client.version = [2, 2119, 6];
	client.autoReconnect = ReconnectMode.onConnectionLost
	client.logger.level = 'warn'
	client.connectOptions.maxRetries = 10
	client.on('qr', () => {
		console.log(color('[','white'),color('∆','red'),color(']','white'),color('Leia o qr code','white'),color('AGORA','red'),color('E um recado:','white'),color('Max é foda','yellow'))
	})
	client.on('connecting', () => {
		console.log(color('Conectando...','cyan'))
	}) 
	
	
	client.on('open', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(color('Sessão web aberta','yellow'))
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();
console.log(color('você está conectado!','yellow'))
     
     client.on('close', () => {
     rc = 'A conexão caiu...'
     console.log(color(rc,'red'))
     })

client.on('group-participants-update', async (anu) => {
  const mdata1 = await client.groupMetadata(anu.jid)
  console.log(anu)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata1.id, 'Corra numero fake safado seu ban esta próximo, em 5 segundos!', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata1.id, [num])
					}, 5000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Olá🥰 @${num.split('@')[0]}\ bem vindo/a ao grupo *${mdata.subject}* por favor não seja um ghost 😳`
				let buff = await getBuffer(ppimg)
				buffer = fs.readFileSync('./som/bv.mp3')
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(mdata.id, buffer, MessageType.audio, {ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				gh = ['tchau sua gostosa','nossa puta saiu 😔','abriu uma vaga no grupo graças ao','O da pa nois saiu 😔','tchau']
				af = gh[Math.floor(Math.random() * gh.length)]
				teks = ``+af +` @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				buffer = fs.readFileSync('./som/tchau.mp3')
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		        client.sendMessage(mdata.id, buffer, MessageType.audio, {ptt:true})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	client.on('CB:action,,battery', json => {
        const batteryLevelStr = json[2][0][1].value
        const batterylevel = parseInt(batteryLevelStr)
        console.log(color('battery level: ' + batterylevel,'cyan'))
        })
    
    client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })
    
	client.on("CB:action,,call", async json => {
    const callerId = json[2][0][1].from;
    console.log(json);
    //if (setting.responder.call.status){
    client.sendMessage(
      callerId,
      "Sistema de cancelamento de ligação e bloqueio automático. Você será bloqueado em 5 segundos!",
      MessageType.text
    );
    setTimeout(async function () {
     client.blockUser(callerId, "add")
     }, 5000);// Block user
    //}
  });
  

	client.on('chat-update', async (mek) => {
		try {
		    if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
                        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			client.updatePresence(from, Presence.availabe)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			stt = await client.getStatus(sender)
			const rece = `${stt.status}`
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const totalchat = await client.chats.all()
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAdulto = isGroup ? adulto.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isPorno = porno.includes(from)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isAntiSticker = isGroup ? antisticker.includes(from) : false
			const isAntiLinkyt = isGroup ? antilinkyt.includes(from) : false
			const isAntiLinkex = isGroup ? antilinkex.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isGprem = isGroup ? gprem.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = checkprem(sender) || isOwner || isGprem
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
						
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    
		    const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		


myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
myDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'];
var dati = new Date();
var dia = dati.getDate();
var dia2 = String(dati.getDate()).padStart(2, '0');
var mes = dati.getMonth();
var tday = dati.getDay(),
tday = myDays[tday];
var ano = dati.getFullYear()
dataAtual = tday + ', ' + dia2 + ' de ' + myMonths[mes] + ' de ' + ano;
var fdata = `${dataAtual}`;

		    
	        /*****************END SCURITY FEATURE ********/
	        
	        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			}
			 
	        //function rank
	        const levelRole = getLevelingLevel(sender, _level)
   	     var role = 'Estagiário'
   	     if (levelRole <= 3) {
   	         role = 'Ouro I'
   	     } else if (levelRole <= 5) {
   	         role = 'Ouro II'
   	     } else if (levelRole <= 7) {
   	         role = 'Platina I'
   	     } else if (levelRole <= 8) {
   	         role = 'Platina II'
   	     } else if (levelRole <= 9) {
   	         role = 'Diamante I'
   	     } else if (levelRole <= 10) {
   	         role = 'Diamante II'
   	     } else if (levelRole <= 11) {
   	         role = 'Diamante III'
   	     } else if (levelRole <= 12) {
   	         role = '1st classe I'
   	     } else if (levelRole <= 13) {
   	         role = '1st classe II'
   	     } else if (levelRole <= 14) {
   	         role = '1st classe III'
   	     } else if (levelRole <= 14) {
   	         role = '1st classe IV'
   	     } else if (levelRole <= 15) {
   	         role = 'Mestre I'
   	     } else if (levelRole <= 16) {
   	         role = 'Mestre II'
   	     } else if (levelRole <= 17) {
   	         role = 'Mestre III'
   	     } else if (levelRole <= 18) {
   	         role = 'Mestre IV'
   	     } else if (levelRole <= 19) {
   	         role = 'Mestre V'
   	     } else if (levelRole <= 20) {
   	         role = '2nd classe I'
   	     } else if (levelRole <= 21) {
   	         role = '2nd classe II'
   	     } else if (levelRole <= 22) {
   	         role = '2nd classe III'
   	     } else if (levelRole <= 23) {
   	         role = '2nd classe IV'
   	     } else if (levelRole > 100) {
   	         role = 'deus da destruição '
   	     }
   	     
   	     var premi = '❌'
   	     
			if (isPrem) {
				premi = '✅'
			} 
			
			if (isOwner) {
				premi = '*Dono™*'
			}
			
					
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
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
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Desculpe ${pushname} seu limite acabou\n\n_Nota : limite pode ser obtido por meio de ${prefix}buylimit ou subido de nivel_`, text,{ quoted: mek})
                            const lev1 = ind.lev(limitCounts)
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                        console.log(ind.lev(limitCounts))
                    }
                    const lev2 = ind.lev(limitCounts)
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
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
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}

        
            if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`Desculpe o grupo não tem o mínimo ${memberlimit} membros,então eu estou saindo em 5 segundos`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1segundos")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2segundos")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3segundos")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4segundos")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5segundos")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 
        
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
							
			switch(command) {
		        case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expira*: ${checkExp.days} dia(s) ${checkExp.hours} hora(s) ${checkExp.minutes} minuto(s)\n\n`
	                }
	                await reply(listPremi)
	            break
            case 'checkprem':
				const cekExp = ms(getPremiumExpired(sender) - Date.now())
				reply(`*「 PREMIUM EXPIRED 」*\n\n➸ *ID*: ${sender.split('@')[0]}\n➸ *Premium termina em*: ${cekExp.days} dia(s) ${cekExp.hours} hora(s) ${cekExp.minutes} minuto(s)`)
				break
            case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				if (args.length < 1 ) return reply('@tag membro')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				case 'rp': 
				if (!isPrem) return reply('vc não é premium')
				reply('Vc é premium 😳')
				break
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var i = 0; i < prem.length; i++){ 
 		       if ( prem[i] === mente) { 
    		      	  prem.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
            case 'slot':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 5490
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : 🍌') ||(somtoy == '🍒 : 🍒 : 🍒') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                     

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
addLevelingXp(sender, ppg)
reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
client.sendMessage(from, slott, text, {quoted: mek})
break

    case 'slot2':  //case by rimuru/nayla 
			slot = `╔════════════════════\n`
		    slot += `║╭───────────[ *SLOT* ]───\n`
			slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `║│➻ GAME : SLOT [ *NOVO* ]\n`
			slot += `║╰───────────────────\n`
			slot += `╚════════════════════\n`
			client.sendMessage(from, slot, text, {quoted: mek})
		    break

case "ppt":
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (args.length < 1) return reply(ind.pttr())
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 3490
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é da megah"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
reply(`Megah jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
reply(pph)
addLevelingXp(sender, ppg)
}
break

case 'cassino':
			   if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
			    reply(ind.wait)
			    const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
			    client.sendMessage(from, `[  🎰 | CASSINO ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy2}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nINFO : Se você obtiver 3 da mesma fruta, significa que você ganhou\n\nexemplo : 🍌 : 🍌 : 🍌<=====`, text, {quoted: mek})
			    await limitAdd(sender)
			    break
            case 'transfer':
				case 'enviar':
				case 'envia':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('559184035474@s.whatsapp.net', fee)
                reply(`*「 SUCESSO 」*\n\ntranferencia de pontos bem sucedida\nde : +${sender.split("@")[0]}\npara : +${tujuan}\nquandidade de pontos : ${jumblah}\nimpostos : ${fee}`)
                break
                case 'ler':
                var chats = await client.chats.all()
                chats.map( async ({ jid }) => {
                await client.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await client.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
		case 'noticias':
		case 'noticia':
		case 'notícias':
		data = await fetchJson('https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=372558f90ee2420c8bc96ba7d71e48d1')
		n = JSON.parse(JSON.stringify(data.articles));
	    nimek =  n[Math.floor(Math.random() * n.length)];
		d = nimek
		img = d.urlToImage
		buffer = await getBuffer(img)
		console.log(d)
		leg = `*ATENÇAO, OS RESULTADOS SÃO ALEATORIOS, ENTÃO PODEM REPETIR ALGUMAS VEZES*\n\nMatérias encontradas: ${data.totalResults}\n\nTitulo: ${d.title}\n\nDescrição: ${d.description}\n\nTrecho da Matéria: ${d.content}\n\nMatéria completa: ${d.url}\n\ndata de publicação: ${d.publishedAt}\n\nFonte de pesquisa: ${d.source.name}`
		client.sendMessage(from, buffer, image, { quoted: mek, caption: leg})
		break
		case 'infome':
		case 'informe':
case 'perfil':
const namaUser2 = getRegisterName(sender)
const umurUser2 = getRegisterAge(sender)
const serialUser2 = getRegisterSerial(sender)
const uangku3 = checkATMuser(sender)
const userXp3 = getLevelingXp(sender)
rgdate = getRegisterTime(sender)
const reqXp3  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
console.log(stt.status)
var jarg = '❌'
if (isRegistered) {
jarg = '✅'
}
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const pf = 
`
  ‣ Número: @${sender.split("@")[0]}
  ‣ Nick: ${pushname}
  ‣ Registrado: ${jarg}
  ‣ Premium: ${premi}
  ‣ Idade: ${umurUser2}
  ‣ Nome de registro: ${namaUser2}  
  ‣ Level: ${getLevelingLevel(sender)}
  ‣ XP: ${userXp3}
  ‣ Pontos: ${uangku3}
  ‣ Patente: ${role}
  ‣ Data de registro: ${rgdate}
  ‣ link: wa.me/${sender.split("@")[0]}
  ‣ Código: ${serialUser2}
  ‣ Recado:\n${stt.status}
`
its = await getBuffer (ppimg)
client.sendMessage(from, its, image, {quoted: mek, caption: pf, contextInfo: {mentionedJid: [sender]}})
break
                case 'instaimg':
                client.updatePresence(from, Presence.composing) 
				    cs = body.slice(10)
					data = await fetchJson(`https://api.zeks.xyz/api/ig?url=${cs}&apikey=${apiz}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.result[0].url}`
					buffer = await getBuffer(vd)
					fim = buffer
					client.sendMessage(from, fim, image, { quoted: mek, caption: `@${data.owner}\n\nDescrição: ${data.caption}`})
					console.log(data.result[0].url)
					console.log("Divid")
					console.log(fim)
					break 
				    case 'instavd':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(10)
					data = await fetchJson(`https://api.zeks.xyz/api/ig?url=${cs}&apikey=${apiz}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.result[0].url}`
					n = JSON.parse(JSON.stringify(vd));
					pok = n
					buffer = await getBuffer(pok)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek, caption: `@${data.owner}\n\ndescrição: ${data.caption}`})
					console.log(data.result[0].url)
					break
					case 'linkimg':
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    var emBase64 = new Buffer(media).toString('base64')
				    var form = new FormData()
    form.append('image', emBase64)
     
    const upload =  await fetch('https://api.imgbb.com/1/upload?expiration=3600&key=9160c6f659aba43c808df28f130d67cc&name=megah-chan', {
        method: 'POST',
        body: form
        }).then((response) => response.json())
        .then((result) => {
        console.log(result)
        reply(`${result.data.display_url}`)
        })
        break 
					case 'wasted': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    var emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    var gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    reply(`${gat.data.image.url}`)
				    ft = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=ea1c735e809aedcb3b42793a&img=${lk}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log(e)
                    }
                    break
                    case 'trash': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    var emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    var gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    reply(`${gat.data.image.url}`)
				    ft = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trash?apikey=ea1c735e809aedcb3b42793a&img=${lk}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log(e)
                    }
                    break
                    case 'rip': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    var emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    var gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    reply(`${gat.data.image.url}`)
				    ft = await getBuffer(`https://api.lolhuman.xyz/api/creator1/rip?apikey=ea1c735e809aedcb3b42793a&img=${lk}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log(e)
                    }
                    break
                    case 'calen': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    var emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    var gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    reply(`${gat.data.image.url}`)
				    ft = await getBuffer(`https://api.zeks.xyz/api/calender?apikey=vrMSPgXFfqY87hnTJ87arA9N2LN&image=${lk}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log(e)
                    }
                    break
                    case 'db':
                    db = `${args}`
                    var deBase64 = new Buffer(db, 'base64').toString('ascii')
                    console.log(deBase64) // Saída: DevPlenobreak
                    reply(`${deBase64}`)
break
    case 'base64':
    var string = `${args}`
var emBase64 = new Buffer(string).toString('base64')
console.log(emBase64) // Saída: RGV2UGxlbm8=
reply(`${emBase64}`)
var deBase64 = new Buffer(emBase64, 'base64').toString('ascii')
console.log(deBase64) // Saída: DevPlenobreak
break
				 case 'spam':
				   if (!isPrem) return reply(ind.pp())
            if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)	    				    					     	
                    if (args.length < 1) return reply(`Use assim:  exemplo : ${prefix}spam 556181496039 corno`)
                    if (args[0].startsWith('08')) return reply('coloque o número do país exemplo : 55')
                    if (args[0].startsWith(`${ownerNumber}`)) return reply(`Eu não posso enviar spam para meu criador ${namaowner} 😞`)
                    mansed = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    const kontul = body.slice(8)
                    if (kontul.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                    var nomor = mek.participant
                    const busah = `*[  ⚠️SPAM⚠️  ]*\nNúmero : @${nomor.split('@s.whatsapp.net')[0]}\nSpam: ${kontul}`
                    var options = {
                    text: busah,
                    contextInfo: {mentionedJid: [nomor]},
                    }
                    client.sendMessage(`${mansed}`, options, text, {quoted: mek})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    .then(() => { client.sendMessage(`${mansed}`, options, text, {quoted: mek})})
                    reply('Spam enviado com sucesso')
                    break
					case 'tiktok':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(8)
					data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok3?apikey=ea1c735e809aedcb3b42793a&url=${cs}`, {method: 'get'})
					reply(ind.wait())
					vd = `${data.result}`
					buffer = await getBuffer(vd)
					gah = buffer
					client.sendMessage(from, gah, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek })
					await limitAdd(sender)
					console.log(data.resulr)
					break
                           case 'entra':
                           case 'entrar':
                             if (isPrem) return reply(ind.pp())
                           if (args.length < 1) return reply('cadê o link senpai?')
                           if(!isUrl(args[0]) && !args[0].includes('chat.whatsapp')) return reply('link inválido; senpai seu burro!')
setTimeout( () => {
client.query({json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]})
suksez = `Pronto! Entrei no seu grupo, mas caso naum tenha falado com meu dono irei sair a qualquer hora...`
client.sendMessage(from, suksez, text,{quoted : mek, contextInfo: { forwardingScore: 100, isForwarded: true}})
}, 20000) // 1000 = 1s,
setTimeout( () => {
reply('Espere um pouco ai senpai 💞~')
}, 0) // 1000 = 1s,
break
					case 'facevd':
				client.updatePresence(from, Presence.composing) 
				    cs = body.slice(8)
					anu = await fetchJson(`https://api.zeks.xyz/api/fbdl?apikey=${apiz}&url=${cs}`, {method: 'get'})
					reply(ind.wait())
					vd = `${anu.data.links.hd}`
					pok = vd
					buffer = await getBuffer(pok)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `megah-chan.mp4`, quoted: mek, caption: `${anu.data.title}`})
					console.log(vd)
					console.log("perai", color(red))
					console.log(buffer)
					break		
					case 'darlimit': 				
					  if (isRegistered) return reply(ind.noregis(pushname))
		        const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`Precisa dar no minímo 1 limit`)
                if (isNaN(jmla)) return reply(`[❗] USE ASSIM\n ${prefix}darlimit @556181496039 5`)
                if (!nomerr) return reply(`[❗] USE ASSIM\n ${prefix}darlimit @556181496039 5`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `[❗] SUCESSO AO ADICIONAR LIMIT NO ID : ${createSerial(8)}\nhorário ${moment().format('DD/MM/YY HH:mm:ss')}\n
*「 🎁DOAÇÃO BEM SUCEDIDA🎁 」*

• Usúario : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`[❗] Desculpe ${pushname},  este  ${nomerr} número não está registrado no bot...`)
                        }
                break	    
				case 'pontos':
				if (!isRegistered) return reply(ind.noregis(pushname))
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (args.length < 1) return reply('digite um valor')
				if (!isRegistered) return reply(ind.noregis(pushname))
				payout = body.slice(10)
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`delculpe, seus pontos não são suficientes`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 COMPRA FEITA」*\n\n*remetente* : Admin\n*receptor* : ${pushname}\n*valor nominal* : ${payout} \n*preço limite* : ${koinPerlimit}/limit\n*o resto de sues pontos* : ${checkATMuser(sender)}\n\nseu código de pagamento\n${createSerial(15)}`)
				} 
				break
				case 'lg':
				  if (isPrem) return reply(ind.pp())
				if (!isRegistered) return reply(ind.noregis(pushname))
				setTimeout( () => {
				payout = 15
				bayarLimit(sender, payout)
				reply('pronto, vc ganhou 15 limites')
				}, 1000)
				break
			case 'ttt':
				if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(ind.groupo())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else if (limitrl !== undefined && cdd - (Date.now() - limitrl) > 0) {
reply('Opa, deixe seus amigos jogarem também, tente novamente em 8 minutos.')
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
if (!isGroup) return reply(ind.groupo())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord':
if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)
tttset.playertest = sender
if (!isGroup) {
reply(ind.groupo())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 2005) + 2005
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 7005) + 7005
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 20000) + 20000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 100000) + 100000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 705) + 705)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 2005) + 2005)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO MEGAH-CHAN 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO MEGAH-CHAN 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen	

                                case 'antilinkgrupo':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Mas já ativaram isso? 🤔')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link de grupos está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Anti-link de grupos foi desativado!')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
			case 'antilinkyt':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLinkyt) return reply('Mas já ativaram isso aqui!🤔')
						antilinkyt.push(from)
						fs.writeFileSync('./database/json/antilinkyt.json', JSON.stringify(antilinkyt))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link do you tube está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkyt) return reply('Anti-link do you tube foi desativado!')
						var ini = antilinkyt.indexOf(from)
						antilinkyt.splice(ini, 1)
						fs.writeFileSync('./database/json/antilinkyt.json', JSON.stringify(antilinkyt))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
			case 'antilinkex':

                                	
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLinkex) return reply('Mas já ativaram isso aqui!🤔')
						antilinkex.push(from)
						fs.writeFileSync('./database/json/antilinkex.json', JSON.stringify(antilinkex))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link extremo está ativo, Caso você enviar um link no grupo, vc será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLinkex) return reply('Anti-link do you tube foi desativado!')
						var ini = antilinkex.indexOf(from)
						antilinkex.splice(ini, 1)
						fs.writeFileSync('./database/json/antilinkex.json', JSON.stringify(antilinkex))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
            case 'encurta':
				if (!isRegistered) return reply(ind.noregis(pushname))
				cs = args[0]
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.zeks.xyz/api/sid-shortener?apikey=${apiz}&url=${cs}`)
                hasil = `*Aqui está seu link encurtado:* ${data.short}`
                reply(hasil) 
                break
                case 'arquiva':
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                client.modifyChat(from, ChatModification.archive)
                break
                case 'togif': // by lindow
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(ind.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Aqui está ✅'})
fs.unlinkSync(mediaaa)
}
break
                case 'attp':
                  if (isRegistered) return reply(ind.noregis(pushname))
                try {
				if (args.length < 1) return reply('digite o texto')
                reply(ind.wait())
                url = encodeURI(`https://api.xteam.xyz/attp?file&text=${args}`)
                dapuhy = await getBuffer(url)
                client.sendMessage(from, dapuhy, sticker, {quoted: mek})
                await limitAdd(sender)
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('erro')
				}
                break
					case 'stag':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                                        if (!isQuotedSticker) return reply('marque o stiker')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await client.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await client.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(6)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        client.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					case 'dado':
		if (!isRegistered) return reply(ind.noregis())
		    		if (isLimit(sender)) return reply(ind.limitend(pusname))
			     	await limitAdd(sender)			
                if (!isGroup) return reply(ind.groupo())

const dadus = ["1","2","3","4","5","6"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
rt = fs.readFileSync(`./database/dados/`+dadu+`.webp`)
client.sendMessage(from, rt, sticker, {quoted: mek})
break
					case 'imgtag':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`marque uma img`)
                    }
                    break
                   
                //function porno
   	case 'rankcaco':
   	  if (isRegistered) return reply(ind.noregis(pushname))
try{
if(!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(mess.only.admin)
d = []
teks = '🐒 Rank dos camacos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgay':
try{
if(!isGroup) return reply(ind.groupo())
d = []
teks = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
try{
if(!isGroup) return (ind.groupo())
d = []
teks = '🤩Rank dos mais lindos \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazista':
try{
if(!isGroup) return reply(ind.groupo())
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgostoso':
try{
if(!isGroup) return (ind.groupo())
d = []
teks = '😏Rank dos mais gostosos\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😏❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankgado':
try{
if(!isGroup) return (ind.groupo())
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
try{
if(!isGroup) return (ind.groupo())
d = []
teks = '"🤓Rank dos mais feios \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤓❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
case 'bateria':
  const charg = ["carregando "," carregando "," carregando "," carregando "," carregando "," desconectado "]
chargo = charg[Math.floor(Math.random() * charg.length)]
let batans = global.batrei[global.batrei.length - 1]
  batter =`
  •🔋 : ${batans}%
  • 🔌 : ${chargo}`
  client.sendMessage(from, batter, text, {quoted: mek})
  break
case 'cassino2':
		 sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
            somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
            reply(yow)
	            break
case 'pombinhos':
case 'casal':
					if (!isGroup) return reply(ind.groupo())
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'gostosas':
      if (!isGroup) return reply(ind.groupo())
                        member = []
                        const p1 = groupMembers
                        const p2 = groupMembers
                        const p3 = groupMembers
                        const p4 = groupMembers
                        const p5 = groupMembers
                        const o1 = p1[Math.floor(Math.random() * p1.length)]
                        const o2 = p2[Math.floor(Math.random() * p2.length)]
                        const o3 = p3[Math.floor(Math.random() * p3.length)]
                        const o4 = p4[Math.floor(Math.random() * p4.length)]
                        const o5 = p5[Math.floor(Math.random() * p5.length)]
                        teks = `
                  Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
                        member.push(o1.jid)
                        member.push(o2.jid)
                        member.push(o3.jid)
                        member.push(o4.jid)
                        member.push(o5.jid)
                        mentions(teks, member, true)
                                        break
					case 'buceta':
					case 'bct':  
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isGroup) return reply(ind.porgc(pushname))
				if (!isPorno)return reply(ind.pornoff(pushname, prefix))
					rate = body.slice(1)
					const ii =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-JhOANDNrujfW1KezJ4nvXzTtwmEqKGfaA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxidZ--GjsstJaX7Rf6ps9g743cLvgbJMW0A&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_rw-cyYMg7_Ac-4FVxgbO1ydBmy2wCVNIQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLu4MJZscQLiiTNrpKRxzZhGM9MFlF1dc8-w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0m8gvBmbfCbahcwQzpN-f8w8anZBxQd6AIA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR450z-N2bPXS92e-ymd9HTTHkHbntwuqLMyQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAUUReFxZ98I7Oi2JW60spI8Dxe2wO59ceQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEfyrNsjZIgR0P53B6AfZ3IqDS2ihflBJ9iQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7CcgwXA_-muWAMeK2ue852T4y_irRheaww&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQvuQxDk7l-D1odxx_1nmiGNfuencKbqViwg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2x5i7OoAhF55WI9vmUkCGiit-UbKe0llvQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfKBXuX1W2pwdf_cuS_PvwnNLLh22wmSlXQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmelSQkQAWwOCzQoK9mkWyb3SGtFt8jyrlw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXQk5SlknMkQaBKuUO9Js9pzzpsA7znIMog&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CRa65CQoDOicM8koSJmQIoqA837mVe0O9w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdpILUox-eBa8TeJcq7Gv8pWuUzEeDEFQJA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSBALTATDizOEC5ysNXgCse-bFFs3BLx0pg&usqp=CAU']
					const iu = ii[Math.floor(Math.random() * ii.length)] 
					buffer = await getBuffer(``+iu +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'👀'}) 
					
					break
					case 'peito':
					  case 'peitos':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isGroup) return reply(ind.porgc(pushname))
				if (!isPorno)return reply(ind.pornoff(pushname, prefix))
					rate = body.slice(1)
					const pp =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngFVtYpNk-lKnkiveoEoHIR83Oi02kKUpIg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQa3P1Zy36AZXsIS-0ZBuWIJVuvBbcl4Emw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqiLOVs-ej9r62D148JABUHwWDURKelnVDyw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8txLmS-OVZNGnCzUsfXWXQMI2BNNDaVeEQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna0oTQVaLhzF7N3JHiRaNiRngUX6NYbZUbg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_fm4leol0wPYOK8JQwYUEadMTRZQf17ndw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHpOeGyCF4srsSJF0Sni8L-bfrbnN8q-7Rg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7U4cGDrDcx2TEasKChXn5J5Karbxt_eh6mg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0I03Immbd8n2nVcpTSHdsGFtNi4bt2l4bTQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_XOD3nFmtAXsl6DCX61x6notS7OWjsBwSg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGFRbvAz3Qsq3TEQN7ASmG1Y9JRMl5ruucA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9u18GAi3uRd92jY5yiMQlPyixAIhkQ65m2Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdQWD5VNNKOcvfrXnVL8h0pRBNTtBlJw4GA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG8-M-_sPZSvIl5auk3GVNRFAIEE5Pnj8og&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDN3C_Wu8h-hOHLd31UU-NX6ZBsKHU4085YA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAirN-58GaY2xZiu6Ss8QPTI1Zt-TcdQRHWg&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZtI3nJtMZcgd74peXH23CCT17fG2IRBg5w&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRXxYDRnNDAVLwT7fk4DfgwQ7kHsHkkFQcw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjBupNRlsdimU8BzHcOgkiIDdKNvOHTITOA&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDn9bwnJCvuMzW13W-JbaHvfDwPr2u7poqg&usqp=CAU']
					const ll = pp[Math.floor(Math.random() * pp.length)] 
					buffer = await getBuffer(``+ll +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'.....'}) 
					
					break
                      case 'qrcode':
				if (!isRegistered) return reply(ind.noregis(pushname))
				
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'qual o texto para transforma em qrcode?', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek, caption: `aqui está seu qr code ${pushname}`})
					
					break
					case 'chat':
					client.updatePresence(from, Presence.composing)
					client.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted: mek})
					break
					case 'modo':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('ja está ativo!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('modo de interação ativo, se prepare senpai...️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('modo de interação desativado :(️️')
					} else {
						reply(ind.satukos())
					}
                      case 'antifake':
					try {
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
                case 'gprem':
					try {
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isGprem) return reply('Ja esta ativo')
						gprem.push(from)
						fs.writeFileSync('./database/user/premg.json', JSON.stringify(gprem))
						reply('Grupo premium 😳️')
					} else if (Number(args[0]) === 0) {
						gprem.splice(from, 1)
						fs.writeFileSync('./database/user/premg.json', JSON.stringify(gprem))
						reply('O grupo não é mas premium :(️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
                case 'plogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
					case 'bug':
					case 'report':
                     const pesan = body.slice(5)
                      if (pesan.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 letras', text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORTADO]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\n  ‣ link: wa.me/${sender.split("@")[0]}\nmotivo : ${pesan}`

                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('559184035474@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Dados enviados, muito obrigado!')
                    break
                    case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
client.sendMessage(from, ccg, text, {quoted:mek})
break
                    case 'men':
                     client.updatePresence(from, Presence.composing)
                      if (!q.includes('/')) return client.sendMessage(from, 'coloque uma / entre o id e a mensagem!', text, {quoted: mek})
                      const rec = body.slice(5)
                      cec = rec.split("/")[0];
                      cec1 = rec.split("/")[1];
                      if (rec.length > 300) return client.sendMessage(from, 'Desculpe, o texto é muito longo, máximo de 300 letras', text, {quoted: mek})
                      if (rec.length < 1) return client.sendMessage(from, 'cade o id do grupo?', text, {quoted: mek})
                       ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			           buffer = await getBuffer(ppUrl)
			           rec2 = `${cec}`
                        var nomor = mek.participant
                       const fds1 = `*Grupo que enviou*:\n${groupName}\n\n*membro que enviou:* @${nomor.split("@s.whatsapp.net")[0]}\n\n*Mensagem:* ${cec1}`

                      var options = {
                         text: fds1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage(rec2, options, text, {quoted: mek})
                    reply('Mensagem enviada')
                    break
                    case 'tiktokstalk':
					if (args.length < 1) return client.sendMessage(from, 'Cadê o nome do User?', text, {quoted: mek})
					reply(ind.wait)
					data = await fetchJson(`https://api-gdr2.herokuapp.com/api/tiktokstalk?username=${args}`, {method: 'get'})
					if (data.result.message) return reply('User inválido')
					buffer = await getBuffer(data.result.avatarLarger)
					if (data.result.verificado == true) {
					veri = '✅'
					tes = `Id: ${data.result.id}\nNome: ${data.result.nickname}\nSeguindo: ${data.result.seguindo}\nVideos: ${data.result.videos}\nConta verificada: ${veri}\nCurtidas: ${data.result.curtidas}\nDescrição: ${data.result.descricao}`
					console.log(data.result.verificado)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tes})
					} else if (data.result.verificado == false) {
					veri = '❌'
					tes = `Id: ${data.result.id}\nNome: ${data.result.nickname}\nSeguindo: ${data.result.seguindo}\nVideos: ${data.result.videos}\nConta verificada: ${veri}\nCurtidas: ${data.result.curtidas}\nDescrição: ${data.result.descricao}`
					console.log(data.result.verificado)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tes})
					}
					break
                  case 'grupoinfo':
                  case 'infogp':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ind.groupo())
                    try {
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
                    } catch {
                    ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME*: ${groupName}\n*MEMBROS*: ${groupMembers.length}\n*ADMINS*: ${groupAdmins.length}\n*DESCRIÇÃO*:\n${groupDesc}`})
                    break
                      case 'wlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_052617.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=6%25&text.0.position.y=55%25&text.0.size=30&text.0.color=ff0000&text.0.font.family=Signika%20Negative&text.0.font.weight=700&text.0.background.opacity=11&text.0.outline.blur=98&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
					//Se for kibar deixa is creditos
					case 'closetime': //Feito por Lord Resta
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                    client.updatePresence(from, Presence.composing) 
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("Use assim:\ns: segundos\nm: minutos\nh: horas\nex: !closetime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Fechando grupo* a pedido do adm @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				    }, timer)
				    break
				case 'opentime': //Feito por Lord Resta
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("*Use assim:\ns: segundos\nm: minutos\nh: horas\nex: !opentime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Abrindo grupo* a pedido do adm @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				    }, timer)
				    break
               case 'glogo':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
			    case 'frase':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break
			    case 'amor':
			    love = `${body.slice(7)}`
			    lo = love.split("/")[0];
			    ve = love.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://assets.imgix.net/examples/couple.jpg?txt64=VEUgQU1PIOKdpO-4jw&txt-font=bold&txt-align=middle%20center&txt-size=${lo}&blur=${ve}&txt-color=FF0000`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
			    case 'aguia2':
			    agia = `${body.slice(7)}`
			    ag = agia.split("/")[0];
			    ia = agia.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${ia}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=24&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${ag}&text.1.position.gravity=north&text.1.size=24&text.1.color=0040f2&text.1.font.family=Noticia%20Text&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
                case 'black':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T225108.251.jpeg?text.0.text=${teks}&text.0.color=ffffff&text.0.font.family=Tangerine&text.0.font.weight=800&text.0.background.opacity=18&text.0.outline.blur=82`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'clogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_230542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=2%25&text.0.size=23&text.0.color=000000&text.0.opacity=58&text.0.font.weight=600&text.0.font.style=italic&text.0.outline.opacity=24`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break	
                case 'letxt':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break		
                case 'text3d':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break			
                case 'milogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T014719.920.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=15&text.0.color=000000&text.0.font.family=Ek%20Mukta&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=29`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'aguia':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Philosopher&text.0.font.style=italic&text.0.background.color=ffffff`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'randlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://darkkkw.herokuapp.com/`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'monkey':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_030251.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=39%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Source%20Sans%20Pro&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dlg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://mhankbarbar.tech/api/ephoto?text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnulis':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 200) return reply('O texto é longo, até 200 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'tlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_164542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=40%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Lobster%20Two&text.0.font.weight=800&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'nlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_165159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=38%25&text.0.size=24&text.0.color=ff0000&text.0.font.family=Signika&text.0.font.weight=600&text.0.background.opacity=34&text.0.outline.opacity=16`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dmeme':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_050527.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=18&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnobg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'imgur':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('ate 15 carácteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://m.imgur.com/t/${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                  case 'wp':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					anu = await fetchJson(`https://br.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${body.slice(9)}`)
					reply(ind.wait)
				    translate = `pesquisa: *${teks}*\n\nResultado: *${anu.text}*`
				    client.sendMessage(from, teks, text, {quoted:mek})
				   await limitAdd(sender)
				   break
                      case 'neko':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const bb =['https://tlgur.com/d/GEz9Dp0g', 'https://tlgur.com/d/GOOepVMG', 'https://tlgur.com/d/GZDA0ld4', 'https://tlgur.com/d/gvqDZxzG', 'https://tlgur.com/d/GXMlveeg', 'https://tlgur.com/d/g057Eb94', 'https://tlgur.com/d/4k7X3Bx4', 'https://tlgur.com/d/g50wEMNG', 'https://tlgur.com/d/8BrMdY98', 'https://tlgur.com/d/8ekOPmNg']
					const ka = bb[Math.floor(Math.random() * bb.length)] 
					buffer = await getBuffer(``+ka +``)
					const gd =['neko neko', '😳', 'mano, que linda', 'aqui safado']
					const dg = gd[Math.floor(Math.random() * gd.length)]
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+dg +``}) 
					
					break
                case 'person':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'humm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
					case 'cep':
				 if (args.length < 1) return reply('cadê o cep?')
					try { 
					lxrd = body.slice(5)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})
                    console.log(data)
                    if (data.erro) return reply('cep não encontrado')
                    kiny = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${data.cep} \n\n ➸ *ENDEREÇO:* ${data.logradouro}\n\n ➸ *COMPLEMENTO:* ${data.complemento} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *LOCALIDADE:* ${data.localidade} \n\n ➸ *UF:* ${data.uf}\n\n ➸ *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    } catch {
                    return reply('deu erro, cep invalido')
                    }
                    
                    await limitAdd(sender)
                    break
                    case 'covid':
                    if (args.length < 1) return reply('Digite a sigla do estado')
                    if (!isRegistered) return reply(ind.noregis(pushname))
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
                    cs = body.slice(7)
                    if (cs.length > 2) return reply('A sigla dos estados so tem duas letras')
                    data = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Sigla do estado não encontrada')
                    kiny = `Estado: ${data.state}
Casos: ${data.cases}
Mortes: ${data.deaths}
possiveis casos: ${data.suspects}
casos recusados: ${data.refuses}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    }
                    catch (err) {
                    console.log(err, color('red'))
                    reply('deu erro')
                    }
                    await limitAdd(sender)
                    break
                    case 'tr':
                      tr1 = body.slice(4)
                      data = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tr1}&from=id&to=pt`)
                      kiny = `tradução: ${data.translated_text}`
                      client.sendMessage(from, kiny, text, {quoted: mek})
                    await limitAdd(sender)
                    break
                    case 'clima':
                    if (args.length < 1) return reply('Digite o nome da cidade sem acentos')
                    try {
                    cs = body.slice(7)
                    data = await fetchJson(`http://api.weatherapi.com/v1/current.json?key=d7f33929455b4e1e986173946210804&lang=pt&q=${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Cidade não encontrada')
                    kiny = `Cidade: ${data.location.name}
Região: ${data.location.region}
País: ${data.location.country}
id1_local: ${data.location.tz_id}
Latitude: ${data.location.lat}
Temperetura: ${data.current.temp_c}c⁰
raios uv: ${data.current.uv}
pressão: ${data.current.pressure_in}
umidade: ${data.current.humidity}%
Precipitação: ${data.current.precip_mm}%
descrição: ${data.current.condition.text}
data: ${data.location.localtime}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    } catch (err) {
                    console.log(err);
                    return reply('Deu erro, tente mandar sem acentos dessa vez')
                    }                  
                    await limitAdd(sender)
                    break
                case 'ranime':
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					gatauda = body.slice(8)
					reply(ind.wait())
					anu = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=ea1c735e809aedcb3b42793a`, {method: 'get'})
					client.sendMessage(from, anu, image, {quoted: mek, caption: '....'})
					await limitAdd(sender)
					break
                case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis(pushname)) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp4`, quoted: mek}) 
					await limitAdd(sender)
					break
					case 'listonline':
					  if (!isRegistered) return reply(ind.noregis(pushname))
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
                         case 'play0':   
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
                play = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${apiz}`);
               if (anu.error) return reply(anu.error) 
               console.log(anu)
               client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
                 infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
                buffer = await getBuffer(anu.result.thumbnail) 
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('aguarde')
                lagu = await getBuffer(anu.result.url_audio) 
                reply('pronto')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
					break
					case 'play':   
			  if (!isPrem) return reply(ind.pp())
              if (args.length < 1) return reply('Digite o nome da música')
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
              try{
                play = body.slice(6)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nFonte: ${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.result.link)
                reply('terminei, to enviando a música✔')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch {
                return reply('Deu erro :(')
                }
                await limitAdd(sender)
                break
                case 'play2':   
        	  if (args.length < 1) return reply('Digite o nome da música')
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
              try{
                play = body.slice(6)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nFonte: ${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.result.link)
                reply('terminei, to enviando a música✔')
                await client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch {
                return reply('Deu erro :(')
                }
                await limitAdd(sender)
                break
                case 'video':   
              if (!isPrem) return reply(ind.pp())
	          if (!isRegistered) return reply(ind.noregis(pushname))
              if (isLimit(sender)) return reply(ind.limitend(pusname))  
                play = body.slice(7)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=${apiz}&q=${play}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                reply(ind.wait)
                buffer = await getBuffer(anu.result.thumb)
                infomp3 = `Título: ${anu.result.title}\nDuração: ${anu.result.duration}\nTamanho: ${anu.result.size}\nQualidade: ${anu.result.quality}\n${anu.result.source}`
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da video, aguarde...')
                lagu = await getBuffer(anu.result.link)
                end = lagu
                reply('terminei, to enviando o vídeo')
                await client.sendMessage(from, lagu, document, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
                await limitAdd(sender)
                break
                
				case 'ytmp4':
			    if (!isPrem) return reply(ind.pp())
				if (!isRegistered) return reply(ind.noregis(pushname)) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break
					 case 'nivel':
                case 'level': 
                case 'nível': 
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `╭──╼≽ *LEVEL* ──╼\n╼≽ *Nome* : ${pushname}\n╼≽ Número : wa.me/${sender.split("@")[0]}\n╼≽ XP :  ${userXp}/${requiredXp}\n╼≽ Level : ${userLevel}\n╼≽ Patente : ${role}\n\n${per}\n\n╰──────────╼`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'limit':
				case 'limite':
				   if (!isRegistered) return reply(ind.noregis(pushname))
				   checkLimit(sender)
					break
	             	case 'teste':
					num = `${sender.split("@")[0]}@s.whatsapp.net`
					me2 = client.user.jid
			mm = `❏ *ABOUT BOT*
› Name : ${client.user.name}
› Browser : ${client.browserDescription[1]}
› Server : ${client.browserDescription[0]}
› Version : ${client.browserDescription[2]}
› Handphone : ${client.user.phone.device_manufacturer} ${client.user.phone.device_model}
› Versi Whatsapp : ${client.user.phone.wa_version}
› User Register : ${_registered.length}
> tag: @${num.split('@')[0]}
> numero: @${me2.split('@')[0]}`
try {
pp_user = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pp_user = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
}
pp_riu = await getBuffer(pp_user)
console.log(client)
                    client.sendMessage(from, pp_riu, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [num, me2]}, displayname: mem, caption: mm})
					break
              case 'ppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie uma imagem com a legenda *${prefix}ppbot*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obg pelo novo perfil 😗')
					break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ Respostas:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: true})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc6':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
					case 'pinterest':  
					if (!isRegistered) return reply(ind.noregis(pushname)) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))			
					if (args[0] == 'hentai') return reply('naum pode')
					try {
					client.updatePresence(from, Presence.composing) 
					cs = `${args}`
					reply(ind.wait())
					anu = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${apiz}&q=${cs}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(anu.data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					d = nimek
					console.log(d)
					console.log(color(d, 'cyan'))
					pok = await getBuffer(d)
					print(pok)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`})
					} catch {
					return reply('Erro, não encontrei nada')
					}
					await limitAdd(sender)
					break
case 'pinterest':
case 'imagem':
if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
client.updatePresence(from, Presence.composing)
reply(ind.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${args}`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
d = nimek
pok = await getBuffer(d)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso`})
} catch {
reply(`Não econtrei nada.`)
}
break				//_EFEITO NIGHTCORE PARA AUDIO         

										case 'hentai':
										if (!isRegistered) return reply(ind.noregis(pushname))
					                    if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=auau`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`})
					await limitAdd(sender)
					break 
					case 'loli2':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const gp = ['https://tlgur.com/d/8BrxeP08', 'https://tlgur.com;/d/g50RWvPG', 'https://tlgur.com/d/4k75vyZ4', 'https://tlgur.com/d/g50RWRPG', 'https://tlgur.com/d/8Brxex08', 'https://tlgur.com/d/8ekZB2eg', 'https://tlgur.com/d/g2ZnomAg', 'https://tlgur.com/d/GdBm5e34', 'https://tlgur.com/d/G7o9P0kG', 'https://tlgur.com/d/8Dm5dwlG', 'https://tlgur.com/d/GPMzaJOg', 'https://tlgur.com/d/4yB3LMb8', 'https://tlgur.com/d/gwkzDnMg', 'https://tlgur.com/d/4rZOeK64', 'https://tlgur.com/d/8no2xzeG', 'https://tlgur.com/d/GJaVwKd8', 'https://tlgur.com/d/GMAy9OvG', 'https://tlgur.com/d/4Ra3ZREg', 'https://tlgur.com/d/89wNMkKg', 'https://tlgur.com/d/GYwnB604', 'https://tlgur.com/d/4NkwYra8', 'https://tlgur.com/d/4qYVBjk4', 'https://tlgur.com/d/8QeAQMj8', 'https://tlgur.com/d/gvql1rnG', 'https://tlgur.com/d/GXMr5Q0g', 'https://tlgur.com/d/g05arQa4', 'https://tlgur.com/d/4k75vyZ4', 'https://tlgur.com/d/g50RWvPG', 'https://tlgur.com/d/8BrxeP08']
					reply(ind.wait())
					const fe = ['lolicon 😏', 'safado', 'aqui estar', ' me leve para seu porão onni-chan..', 'yamete kudassai', 'lolizinha hihi', 'onni-chan']
                    af = fe[Math.floor(Math.random() * fe.length)]
					const le = gp[Math.floor(Math.random() * gp.length)] 
					buffer = await getBuffer(``+le +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+af +``}) 
					break
					case 'loli':
					client.updatePresence(from, Presence.composing)
reply(ind.wait())
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=loli`, {method: 'get'})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
d = nimek
pok = await getBuffer(d)
client.sendMessage(from, pok, image, {quoted: mek, caption: `Achei isso`})
} catch {
reply(`Não econtrei nada.`)
}
break
					case 'igstalk':
					cs = body.slice(9)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/igstalk?apikey=${apiz}&username=${cs}`, {method: 'get'})
					reply(ind.wait())
					if (data.message) return reply('Não encontrado')
					n = JSON.parse(JSON.stringify(data.profile_pic));
					pok = await getBuffer(n)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `Nome: ${data.fullname}\n\nSeguidores: ${data.follower}\n\nSeguindo: ${data.following}\n\nBio: ${data.bio}\n\nfonte: ${data.source}`})
					await limitAdd(sender)
					console.log(data.profile_pic)
					break
					case 'foto1':
					if (isGroup) return reply('comandos de porno so são permitidos no privado')  
					if (!isPorno) return reply(ind.pornoff(pushname, prefix))  
		buffer = await getBuffer(`https://tlgur.com/d/4k7XN0w4`)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: `${per}\n${tanggal}`})
		break
		case 'kk':
		buffer = await getBuffer(`https://tlgur.com/d/GOOpRYKG`)
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
		break
	               case 'Banall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setmarc':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Marcaçao altarada para: ${cr}`)
					await limitAdd(sender)
					break 
					case 'grouplist':
					if (!isRegistered) return reply(ind.noregis(pushname))
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`total de  XPTN BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grupos : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'rg': 
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('/')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('/') - 0)
                const umurUser = q.substring(q.lastIndexOf('/') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('A idade precisa ser um número!!')
                if (namaUser.length >= 30) return reply(`Pq seu nick é tão grande, isso seria um nick ou um trem? 🚆`)
                if (umurUser > 40) return reply(`Precisa ter no maximo 40 anos`)
                if (umurUser < 12) return reply(`Precisa ter no mínimo 12 anos`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, date, serialUser, time)
                    await reply(ind.registered(namaUser, umurUser, date, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, date, serialUser, time)
                    await reply(ind.registered(namaUser, umurUser, date, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'minera':
            	case 'minerar':
                      if (!isRegistered) return reply(ind.noregis(pushname))
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`desculpe ${pushname} o evento de mineração não foi ativado pelo meu dono!`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`tome mestre ${one} Xp`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`${pushname} tome *${mining} de Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'caracoroa':
				if (!isRegistered) return reply(ind.noregis(pushname))
				
					rate = body.slice(1)
					const ra =['Cara 👨🏽‍🦲 ✨', 'Coroa 👴🏽 ✨' ]
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, '*Resultado:* '+ te+``, text, { quoted: mek })
					await limitAdd(sender) 	
					break
				case 'ping':
					  const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Carregando Messagens...\`\`\`
                
\`\`\` - [ Chats aberto ]  ${totalchat.length}\`\`\`
\`\`\` - [ smartphone ] ${client.user.phone.device_manufacturer} ${client.user.phone.device_model}\`\`\`
\`\`\` - [ WA versão ] ${client.user.phone.wa_version}\`\`\`
\`\`\` - [ Servidor ] ${client.browserDescription[0]}\`\`\`
\`\`\` - [ Navegador ] ${client.browserDescription[1]}\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2095 ] RAM\`\`\`

\`\`\`Velocidade: ${latensi.toFixed(4)} Segundos\`\`\``
                client.sendMessage(from, p0, text, { quoted: mek})
                    break
				case 'gay':
				if (!isRegistered) return reply(ind.noregis(pushname))  
			      	const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%', '5%', '1%', '3%', '0%']
	                const be = ab[Math.floor(Math.random() * ab.length)]
					buffer = await getBuffer('https://tlgur.com/d/gj5azv0G')
					ft = `*🏳‍🌈 | Máquina de gay*\n_${pushname} você é `+be +` gay._`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ft})
					break
					case 'gay2':		
	            	if (args.length < 1) return reply('marque seus amigos!')
					rate = body.slice(5)
			    	 ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const km = ti[Math.floor(Math.random() * ti.length)]
					dale = `como vc é gay ${rate}\n\n sua porcentagem é `+km +`%`
					client.sendMessage(from, dale, text, { quoted: mek })
					break
					case 'pp':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					buffer = fs.readFileSync('./som/oni.mp3');
					client.sendMessage(from, buffer, audio, { quoted: mek, ptt:true}) 
					break
					case 'tt':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const la =['https://tlgur.com/d/4qYePX34', 'https://tlgur.com/d/8QedV378', 'https://tlgur.com/d/g6YlLzPG', 'https://tlgur.com/d/gm5xdp9g', 'https://tlgur.com/d/GWNwzvb8', 'https://tlgur.com/d/81eOLDW8', 'https://tlgur.com/d/GEz9ZePg', 'https://tlgur.com/d/GLrkByE4']
					const ca = la[Math.floor(Math.random() * la.length)] 
					buffer = await getBuffer(``+ca +``)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'gay'}) 
					
					break
					case 'gato':
					if (!isRegistered) return reply(ind.noregis(pushname))  
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTlbh_esNLFhQJwhTtk1KxURqH0vA5xy0oQ&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Fof 🤗'})
					break
					case 'auau':
					case 'cachorro':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const au = ['https://tlgur.com/d/GVwyjDjg', 'https://tlgur.com/d/8Dmo0ZPG', 'https://tlgur.com/d/GPM2yDYg', 'https://tlgur.com/d/4yBwW238', 'https://tlgur.com/d/gwkPWBng', 'https://tlgur.com/d/4zZlWdE4', 'https://tlgur.com/d/4AYJZlv4', 'https://tlgur.com/d/g3vPK6XG', 'https://tlgur.com/d/gj5vWZYG']
					const ua = au[Math.floor(Math.random() * au.length)]
					buffer = await getBuffer(``+ua +``)
					const ba = ['auau', 'fof', 'que fofo', 'lindex🥺']
					const fa = ba[Math.floor(Math.random() * ba.length)]
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ``+fa +``})
					break
					case 'corno':
					  case 'gado':
					if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const ac =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%', '5%', '0%']
					const bi = ac[Math.floor(Math.random() * ac.length)] 
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8wf93jMQ3f1CVM7GFz7XlDAfMR6NgORLWw&usqp=CAU`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳 🐃| Máquina de corno*\n_${pushname} você é `+bi +` corno._`})
				case 'resp':
				if (!isRegistered) return reply(ind.noregis(pushname))
					rate = body.slice(1)
					const ge =['Não', 'Sim', 'Provavelmente', 'Talvez', 'Minhas fontes dizem que sim', 'Provavelmente não', 'Provavelmente sim', 'Minha resposta é sim', 'Minha resposta é não', 'Quem sabe', 'Também queria saber', 'Não sei']
					const ha = ge[Math.floor(Math.random() * ge.length)] 
					tesk = ha
					client.sendMessage(from, tesk, text, { quoted: mek})
					
					
					
					break
					case 'prem':
					  case 'premium':
					  reply('Quer virar premium?, fale com meu dono\ndigite: !dono')
					  break
					case 'fala':
					case 'falar':  
				if (!isRegistered) return reply(ind.noregis(pushname)) 
					rate = body.slice(1)
					const kl =['A tua mãe aquela gostosa', 'mas que gado kkkk', 'nossa mano', 'a vaca polonesa', 'mano, nem fudendo', 'e la vamos nos', 'não sei kkk', 'Ok']
					const ah = kl[Math.floor(Math.random() * kl.length)] 
					tesk = ah
					client.sendMessage(from, tesk, text, { quoted: mek})
					
					
					
					break
               case 'help': 
				case 'menu':
				if (!isRegistered) return reply(ind.noregis(pushname))
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    buffer = fs.readFileSync('bot_mega.jpg');
					const xiu = ind.menu(pushname, prefix, fdata, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, time, role, premi);
					reply(xiu)
					break
					case 'menu2':
					if (!isRegistered) return reply(ind.noregis(pushname))
					const reqPx  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				  const pont = checkATMuser(sender)
				  buffer = fs.readFileSync('bot_mega.jpg');
				  const xiu2 = ind.menu2(pushname, prefix, fdata, getLevelingLevel, getLevelingXp, sender, reqPx, _registered, pont, time, role, premi);
				  reply(xiu2)
				  break
				case 'donasi6':
				case 'donate6':
				if (!isRegistered) return reply(ind.noregis(pushname))
					client.sendMessage(from, donasi(), text)
					break
					case 'leaderboard':
				case 'lb':
				case 'rank':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *TOP LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *TOP PONTOS* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Pontos*: _Rp${uang[i].uang}_\n┗⊱ *Limite*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`mínimo de ${len} usuário para poder acessar o banco de dados`)
                }
				break
				case 'info':
					me = client.user
					me2 = client.user.jid
					uptime = process.uptime()
					ppUrl = await client.getProfilePicture()
					teks = `➽Nome do bot: ${client.user.name}\n➽Número: @${me2.split('@')[0]}\n➽Total Block: ${blocked.length}\n➽Tempo ativo:\n${kyun(uptime)}`
					buffer = await getBuffer(ppUrl)
					client.sendMessage(from, buffer, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [me2]}, caption: teks})
					break
					case 'info2':
					me = client.user
					ow = "559184035474@s.whatsapp.net"
					uptime = process.uptime()
					teks = `➽ *Name Bot* : wa.me/559184035474\n➽ *Owner* : @${ow.split('@')[0]}\n➽ *Prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Bot Aktif* : ${kyun(uptime)}\n➽\n➽ *ɢʀᴜᴘ* : coming soon\n➽ *ꜱᴘᴇᴄɪᴀʟ ᴛʜᴀɴᴋꜱ ᴛᴏ* :\n➽ Allah ꜱᴡᴛ\n➽ Fxc7\n➽ MhankBarBars\n➽ Ampibi\n➽ Ramlan\n➽ Dennis\n➽  Anker`
					const daca = fs.readFileSync('bot_mega.jpg');
				    client.sendMessage(from, daca, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [ow]}, caption: teks})
					break
				case 'blocklist':
					teks = 'Esta é a lista de números bloqueados:\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					case 'pack1':
					buffer = fs.readFileSync('./docu/hentai.zip');
					client.sendMessage(from, buffer, document, {mimetype: 'zip', filename: `hentai.zip`, quoted: mek})
					  break
                case 'here':
                case 'id':  
                if (!isRegistered) return reply(ind.noregis(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                    case 'ssweb':
                case 'print':
                if (!isRegistered) return reply(ind.noregis(pushname)) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					cpq = body.slice(7)
				
					client.updatePresence(from, Presence.composing) 
					cs = body.slice(7)
					data = await (`https://nurutomo.herokuapp.com/api/ssweb?url=${cs}&full=false&type=png`)
					reply(ind.wait())
					console.log(data)
					fad = data
					pok = await getBuffer(fad)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*achei isso*`, detectLinks: true})
					await limitAdd(sender)	
					console.log(fad)				
					break
                case 'pokemonm':
                if (!isRegistered) return reply(ind.noregis(pushname))
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon;;`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: 'pokemon go'})
			     	break
			   case 'map':
			if (!isRegistered) return reply(ind.noregis(pushname))
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break
               case 'kpop':
				if (!isRegistered) return reply(ind.noregis(pushname))  
					rate = body.slice(1)
					const kp =['https://tlgur.com/d/8DmoV3DG', 'https://tlgur.com/d/GPM2b9Lg', 'https://tlgur.com/d/4yBw0Z58', 'https://tlgur.com/d/gwkPvlEg', 'https://tlgur.com/d/8lo0j5K4', 'https://tlgur.com/d/4zZlxvN4', 'https://tlgur.com/d/4AYJ2364', 'https://tlgur.com/d/gj5vAxQG', 'https://tlgur.com/d/8KoxAn58', 'https://tlgur.com/d/gpzBada8', 'https://tlgur.com/d/Gbkn7OPg']
					const pk = kp[Math.floor(Math.random() * kp.length)] 
					buffer = await getBuffer(``+pk +``)
					const vv =['gays pops', 'kpop 🤣', 'humm', 'que gay', 'kkkk', 'seres insignificantes', '....']
					const vc = vv[Math.floor(Math.random() * vv.length)]
					client.sendMessage(from, buffer, image, { quoted: mek, caption:``+vc +``}) 
					break
					case 'ocr': 
				if (!isRegistered) return reply(ind.noregis(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break 
				case 'link':
				    if (!isGroup) return reply(ind.groupo()) 
				    	if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode(from)
				    yeh = `_Bora dilvulgar o grupo? 🍻😏_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        break
			        case 'rv':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.revokeInvite(from)
				    mg = 'Link atualizado'
				    client.sendMessage(from, mg, text, {quoted: mek})
			        break	
              case 'delete':
					    case 'del':
					    case 'apagar':
					    case 'apaga':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'marca':
				case 'marcar': 
				  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `¡ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'clearall':
				case 'limpa':
				case 'limpar':  
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.modifyChat(_.jid, ChatModification.delete)
					}
					reply(ind.clears())
					break
					case 'bot':
		if (args.length < 1) return reply ('o que é mano, não estar vendo que estou ocupado?😶')
		break
			       case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser(`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `bloqueando ${body.slice(8)}`, text)
					break
                    case 'desblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser(`${body.slice(11)}@c.us`, "remove")
					client.sendMessage(from, `desbloqueando ${body.slice(11)}`, text)
					break
				case 'exit':
				case 'sair':
				case 'bay':  
				if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin()) 
					console.log(from) 
					reply('aaah, vou sair em 5 segundos entaum, tchau 😔')
					setTimeout(async function () {
				  client.groupLeave(from)
				  }, 5000)
					break
					case 'idgrupo':
					if (!isGroup) return reply(ind.groupo())
					console.log(from)
					reply(from)
					break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「BOT_MEGAH」*\n\n${body.slice(4)}`)
						}
						reply('transmitido ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('🤝')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer add?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Número privado, não foi possível add!')
					}
					break
					case 'gp':
					case 'grupo7':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					//group feature 
				case 'hidetag':
				case 'tag':
                if (!isRegistered) return reply(ind.noregis(pushname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(5)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break      
            case 'criador':
            case 'dono':
                 client.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'Não recebe vcard? Sem problemas, aqui está o link:\nWa.me/559184035474',MessageType.text, { quoted: mek} )
					break    
					case 'loc':
					client.sendMessage(from, {degreesLatitude: -23.53, degreesLongitude: -46.62}, MessageType.liveLocation, { quoted: mek, caption: '...'})
					break
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
           case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use !demitir @tagadministrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} seus dias de glória acabaram 😭😭👌`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break 
					case 'cadr':
					case 'escre': 
				
					if (args.length < 1) return reply(ind.wrongf)
					var gold51 = body.slice(6)
                                        var gold291 = gold51.split("|")[0];
					reply(ind.wait)
					nullis = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${gold291}&apikey=${apiz}`)
					client.sendMessage(from, nullis, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'promover':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} parabéns por se torna um de nós 🥳🥳`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					case 'gay3':
					if (!isGroup) return reply(ind.groupo())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
					gh =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%', '5%', '1%', '3%', '0%']
	                hg = gh[Math.floor(Math.random() * gh.length)]
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`como você é gay @${mentioned[0].split('@')[0]}\nSua porcentagem é `+hg +``, mentioned, true)
					}
					break	
			     	case 'ban':
			     	case 'kick':  
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use !ban @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`adeus👋 @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}} catch (e){ 
					console.log(e)
					}
					break
				case 'admin':
					if (!isGroup) return reply(ind.groupo())
					teks = `⭐ *admin acorda (๑•﹏•)* \n\n `
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks +=`\n! @${admon.split('@')[0]}`
					}
					mentions(teks, groupAdmins, true)
					break

		            case 'simi':
                    client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply('o que vc quer conversa?')
					teks = body.slice(6)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
					case 'email':
                    client.updatePresence(from, Presence.composing)
                    if (!isRegistered) return reply(ind.noregis(pushname))
                    if (!q.includes('/')) return  reply('está errado, faz assim:\n\n!email gostosa.ofc@gmail.com/eae gostosa :3')
					if (args.length < 1) return reply('qual o texto?')
					agia = `${body.slice(7)}`
			        eml = agia.split("/")[0];
			        teks = agia.split("/")[1];
					anu = await mail(teks, eml)
					reply(`Pronto, enviei sua msg.`)
					break
					case 'uban':
                    client.updatePresence(from, Presence.composing)
                     if (!isRegistered) return reply(ind.noregis(pushname))
                    if (args.length < 1) return reply('cadê o número que vc deseja desbanir?')
					teks = body.slice(6)
					anu = await mail2(teks)
					reply('pronto enviei o seu número para o whatsapp, em até uma hora seu número vai está desbanido...')
					break
				case 'porno':
					if (isGroup) return reply('Comando de porno so são permitidos no privado')
					if (args.length < 1) return reply('1 para ativar e 0 para destivar')
					if (Number(args[0]) === 1) {
						if (isPorno) return reply(' *Ja está ativo* !!')
						porno.push(from)
						fs.writeFileSync('./database/bot/porno.json', JSON.stringify(porno))
						reply('conteúdo porno ativado!')
					} else if (Number(args[0]) === 0) {
						porno.splice(from, 1)
						fs.writeFileSync('./database/bot/porno.json', JSON.stringify(porno))
						reply('conteúdo porno desativado!')
					} else {
						reply(ind.satukos())
					}
					break
                case 'atnivel':
                case 'farmlevel':
                case 'atlevel':  
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('Já está ativado!')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === '0') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Já está ativado* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😳 Welcome foi ativado neste grupo!*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😰 Welcome foi desativado neste grupo!*')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Ja está ativ* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento de mineração ativado!️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*Evento de mineração desativado!*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *Marque uma pessoa que terá sua foto do perfil clonada:* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('q')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`obg pela foto de perfil 😳 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender) 
					break
					case 'vsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
					case 'stickerlist':
				case 'figus':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de Stickers :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Marque o sticker!')
					svst = body.slice(12)
					if (!svst) return reply('Defina um nome para o sticker!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sucesso! para ver seu sticker digite !vsticker (nome)`, MessageType.text, { quoted: mek })
					break
					case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('Reply vnnya blokk!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa su?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addfoto':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Marque uma foto!')
					svst = body.slice(9)
					if (!svst) return reply('defina um nome para a foto!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sucesso! digite !vfoto (nome) para ver a foto`, MessageType.text, { quoted: mek })
					break
				case 'vfoto':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Encontrado no banco de dados:\n ${namastc}.jpeg` })
					break
				case 'fotolist':
				case 'listfoto':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de fotos:*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Marque o vídeo!')
					svst = body.slice(10)
					if (!svst) return reply('Defina um nome para o vídeo!!')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sucesso!`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Lista de Videos:*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break
				case 'wait':
				case 'que':
				case 'qanime':  
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
				default:
				if (budy.includes("://chat.whatsapp.com/")){

		if (!isGroup) return

		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link de grupo!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERRO:* ${e}`)})
		}, 2000)
	}
        
	if (budy.includes("https://youtu.be/")){

		if (!isGroup) return

		if (!isAntiLinkyt) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = link do you tube!*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}if (budy.includes("https")){

		if (!isGroup) return

		if (!isAntiLinkex) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*Banido, motivo = sem permissão de enviar link*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
			
		if (messagesC.includes("boa")){
		client.updatePresence(from, Presence.recording)
		  
		buffer = fs.readFileSync('./som/n.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("loli")){
	client.updatePresence(from, Presence.recording)
		ga = ['./som/oni2.mp3','./som/sfoni.mp3','./som/baka.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("animel")){
		  
		buffer = fs.readFileSync('./som/ari.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}

	if (messagesC.includes("!say")){
	  const teks = text.replace(/!say /, "")
	  client.sendMessage(from, teks, text, { quoted: mek})
	}
	if (messagesC.includes("oi")){
	client.updatePresence(from, Presence.recording)
	    ga = ['./som/oi2.mp3','./som/oig.mp3','./som/bot.mp3','./som/oil.mp3','./som/eq.mp3','./som/igu.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("tbm")){
					buffer = fs.readFileSync('./som/tbm.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
    }
					if (budy.includes("para")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/baka.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("bot")){
		    client.updatePresence(from, Presence.recording)
		    ga = ['./som/oi2.mp3','./som/oig.mp3','./som/bot.mp3','./som/oil.mp3','./som/eq.mp3','./som/igu.mp3'] 
	    	af = ga[Math.floor(Math.random() * ga.length)]
		   buffer = fs.readFileSync(``+af +``);
           client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("davi")){
					  
				  buffer = fs.readFileSync('./som/praga.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("joabe")){
					  
				  buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("rebeca")){
					  
				  buffer = fs.readFileSync('./som/rebeca.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("mano")){
					result = fs.readFileSync(`./strg/sticker/ta.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					}
				               
                  if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(color(budy,'yellow'))
						muehe = await simih(budy)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'Comando nao registrado by', color(sender.split('@')[0]))
					}
                  
                  if (!isCmd && budy != undefined) {
                  if (isGroup) return console.log(color('Nao permitido em grupo','white'))
                  client.updatePresence(from, Presence.composing)
						console.log(color(budy,'yellow'))
						muehe = await simih(budy)
						reply(muehe)
						console.log(color(muehe,'cyan'))
					}

					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) )