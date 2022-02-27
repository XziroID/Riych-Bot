exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🟡 Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar 📌`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`
Welcome semoga gak betah terus out yah !`
      }
exports.leave = () =>{
	return`
Beban group keluar, Bye cuih`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *List Menu*
│• ${prefix}menu
│• ${prefix}help
╰─⬣

╭─⬣ *Group*
│• ${prefix}antilink 1 / 0
│• ${prefix}hidetag [text]
│• ${prefix}linkgrup
│• ${prefix}tagall
│• ${prefix}kick @tag
│• ${prefix}setdesc [text] 
│• ${prefix}setname [text] 
│• ${prefix}getdeskgc
│• ${prefix}getpp @tag
╰─⬣

╭─⬣ *Absen & Voting*
│• hadir (reply)  ( comming soon )
│• sakit (reply)  ( comming soon )
│• ${prefix}mulaiabsen
│• ${prefix}cekabsen
│• ${prefix}delabsen  ( comming soon )
│• vote (reply)  ( comming soon )
│• devote (reply)  ( comming soon )
│• ${prefix}voting @tag|text|1 (1=1 menit)
│• ${prefix}delvote ( comming soon )
╰─⬣

╭─⬣ *Download*
│• ${prefix}play [query]
│• ${prefix}song [judul lagu]
│• ${prefix}pinterest [query]
│• ${prefix}ytmp3 [url]
│• ${prefix}ytmp4 [url]
│• ${prefix}tiktok [url]
│• ${prefix}tiktoknowm [url]
│• ${prefix}tiktokwm [url]
│• ${prefix}tiktokaudio [url]
│• ${prefix}soundcloud [url]
│• ${prefix}telesticker [url]
│• ${prefix}spotify [url]
│• ${prefix}spotifysearch [query]
│• ${prefix}nhentai [code]
│• ${prefix}nhentaipdf [code]
│• ${prefix}nhentaisearch [query]
╰─⬣

╭─⬣ *Converter*
│• ${prefix}stiker [video/image]
│• ${prefix}semoji ⚔️
│• ${prefix}smeme [text]
│• ${prefix}memegen [text|text2]
│• ${prefix}fast [video/vn]
│• ${prefix}tupai [video/vn]
│• ${prefix}vibra [video/vn]
│• ${prefix}robot [video/vn]
│• ${prefix}slow [video/vn]
│• ${prefix}bass [video/vn]
│• ${prefix}nightcore [video/vn]
╰─⬣

╭─⬣ *Education*
│• ${prefix}nuliskiri [text]
│• ${prefix}nuliskanan [text]
│• ${prefix}foliokiri [text]
│• ${prefix}foliokanan [text]
╰─⬣

╭─⬣ *Islamic*
│• ${prefix}listsurah
│• ${prefix}alquran
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi
│• ${prefix}alquranaudio
│• ${prefix}jadwalsholat
╰─⬣

╭─⬣ *Maker Ephoto360*
│• ${prefix}wetglass
│• ${prefix}multicolor3d
│• ${prefix}watercolor
│• ${prefix}luxurygold
│• ${prefix}galaxywallpaper
│• ${prefix}lighttext
│• ${prefix}beautifulflower
│• ${prefix}puppycute
│• ${prefix}royaltext
│• ${prefix}heartshaped
│• ${prefix}birthdaycake
│• ${prefix}galaxystyle
│• ${prefix}hologram3d
│• ${prefix}greenneon
│• ${prefix}glossychrome
│• ${prefix}greenbush
│• ${prefix}metallogo
│• ${prefix}noeltext
│• ${prefix}glittergold
│• ${prefix}textcake
│• ${prefix}starsnight
│• ${prefix}wooden3d
│• ${prefix}textbyname
│• ${prefix}writegalacy
│• ${prefix}galaxybat
│• ${prefix}snow3d
│• ${prefix}birthdayday
│• ${prefix}goldplaybutton
│• ${prefix}silverplaybutton
│• ${prefix}freefire
╰─⬣

╭─⬣ *Maker Textpro*
│• ${prefix}blackpink
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}advanceglow
│• ${prefix}futureneon
│• ${prefix}sandwriting
│• ${prefix}sandsummer
│• ${prefix}sandengraved
│• ${prefix}metaldark
│• ${prefix}neonlight
│• ${prefix}holographic
│• ${prefix}text1917
│• ${prefix}minion
│• ${prefix}deluxesilver
│• ${prefix}newyearcard
│• ${prefix}bloodfrosted
│• ${prefix}halloween
│• ${prefix}jokerlogo
│• ${prefix}fireworksparkle
│• ${prefix}natureleaves
│• ${prefix}bokeh
│• ${prefix}toxic
│• ${prefix}strawberry
│• ${prefix}box3d
│• ${prefix}roadwarning
│• ${prefix}breakwall
│• ${prefix}icecold
│• ${prefix}luxury
│• ${prefix}cloud
│• ${prefix}summersand
│• ${prefix}horrorblood
│• ${prefix}thunder
╰─⬣

╭─⬣ *Fun*
│• ${prefix}tolol
│• ${prefix}pinter
│• ${prefix}pintar
│• ${prefix}asu
│• ${prefix}bodoh
│• ${prefix}gay
│• ${prefix}lesby
│• ${prefix}bajingan
│• ${prefix}jancok
│• ${prefix}anjing
│• ${prefix}ngentod
│• ${prefix}ngentot
│• ${prefix}monyet
│• ${prefix}mastah
│• ${prefix}newbie
│• ${prefix}bangsat
│• ${prefix}bangke
│• ${prefix}sange
│• ${prefix}sangean
│• ${prefix}dakjal
│• ${prefix}horny
│• ${prefix}wibu
│• ${prefix}puki
│• ${prefix}pantex
│• ${prefix}pantek
│• ${prefix}cekbapak 
│• ${prefix}cekemak 
│• ${prefix}babi 
│• ${prefix}beban 
│• ${prefix}apakah 
│• ${prefix}bisakah
│• ${prefix}kapankah
│• ${prefix}cantik
│• ${prefix}ganteng
│• ${prefix}rate
│• ${prefix}hobby
│• ${prefix}jadian
│• ${prefix}gantengcek
│• ${prefix}cantikcek
│• ${prefix}cekwatak
╰─⬣

╭─⬣ *Sound*
│• ${prefix}sound1
│• ${prefix}sound2
│• ${prefix}sound3
│• ${prefix}sound4
│• ${prefix}sound5
│• ${prefix}sound6
│• ${prefix}sound7
│• ${prefix}sound8
│• ${prefix}sound9
│• ${prefix}sound10
│• ${prefix}sound11
│• ${prefix}sound12
│• ${prefix}sound13
│• ${prefix}sound14
│• ${prefix}sound15
│• ${prefix}sound16
│• ${prefix}sound17
│• ${prefix}sound18
│• ${prefix}sound19
│• ${prefix}sound20
│• ${prefix}sound21
│• ${prefix}sound22
│• ${prefix}sound23
│• ${prefix}sound24
│• ${prefix}sound25
│• ${prefix}sound26
│• ${prefix}sound27
│• ${prefix}sound28
│• ${prefix}sound29
│• ${prefix}sound30
│• ${prefix}sound31
│• ${prefix}sound32
│• ${prefix}sound33
│• ${prefix}sound34
│• ${prefix}sound35
│• ${prefix}sound36
│• ${prefix}sound37
│• ${prefix}sound38
│• ${prefix}sound39
│• ${prefix}sound40
│• ${prefix}sound41
│• ${prefix}sound42
│• ${prefix}sound43
│• ${prefix}sound44
│• ${prefix}sound45
│• ${prefix}sound46
│• ${prefix}sound47
│• ${prefix}sound48
│• ${prefix}sound49
│• ${prefix}sound50
│• ${prefix}sound51
│• ${prefix}sound52
│• ${prefix}sound53
│• ${prefix}sound54
│• ${prefix}sound56
│• ${prefix}sound57
│• ${prefix}sound58
│• ${prefix}sound59
│• ${prefix}sound60
│• ${prefix}sound61
│• ${prefix}sound62
│• ${prefix}sound63
│• ${prefix}sound64
│• ${prefix}sound65
│• ${prefix}sound66
│• ${prefix}sound67
│• ${prefix}sound68
│• ${prefix}sound69
│• ${prefix}sound70
│• ${prefix}sound71
│• ${prefix}sound72
│• ${prefix}sound73
│• ${prefix}sound74
│• ${prefix}sound75
╰─⬣

╭─⬣ *Cecan*
│• ${prefix}cecan
│• ${prefix}random
│• ${prefix}ukhty
│• ${prefix}santuy
│• ${prefix}hijaber
│• ${prefix}indonesia
│• ${prefix}malaysia
│• ${prefix}thailand
│• ${prefix}vietnam
│• ${prefix}china
│• ${prefix}korea
│• ${prefix}jepang
╰─⬣

╭─⬣ *Haram*
│• ${prefix}dosa1
│• ${prefix}dosa2
│• ${prefix}dosa3
│• ${prefix}dosa4
│• ${prefix}dosa5
│• ${prefix}dosa6
│• ${prefix}dosa7
│• ${prefix}dosa8
│• ${prefix}dosa9
│• ${prefix}dosa10
│• ${prefix}dosa11
│• ${prefix}dosa12
│• ${prefix}dosa13
│• ${prefix}dosa14
│• ${prefix}dosa15
│• ${prefix}dosa16
│• ${prefix}dosa17
│• ${prefix}dosa18
│• ${prefix}dosa19
│• ${prefix}dosa20
│• ${prefix}dosa21
│• ${prefix}dosa22
│• ${prefix}dosa23
│• ${prefix}dosa24
╰─⬣

╭─⬣ *Anime*
│• ${prefix}awoo
│• ${prefix}blowjob
│• ${prefix}hentai
│• ${prefix}megumin
│• ${prefix}neko
│• ${prefix}trapnime
│• ${prefix}loli
│• ${prefix}husbu
│• ${prefix}milf
│• ${prefix}cosplay
╰─⬣

╭─⬣ *Game*
│• ${prefix}tebakgambar 
╰─⬣

╭─⬣ *Info*
│• ${prefix}owner
│• ${prefix}daftar
│• ${prefix}sewabot
╰─⬣

╭─⬣ *Owner*
│• ${prefix}broadcast [text]
│• ${prefix}leave
│• >
│• $
│•  => 
╰─⬣

╭─⬣ *Tanks To*
│• Zeeoneofc
│• Yoga
│• Riy
│• Adhista
│• Helga
╰─⬣
`
}
exports.sewabot = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ Price List
│• Sewa 5k/minggu
│• Sewa 10k/bln
│• Sewa Permanen 25k
╰─⬣

╭─⬣ Price List
│• Jadi Bot 30k/bln
│• Jadi Bot + Owner 35k
│• Buat Beli Apikey!
╰─⬣

╭─⬣ Minat? Chat
│• Sering² Donasi
│• wa.me/6283830815715
│• Instagram : @Firaa
│• YouTube : Gakda🗿📌
╰─⬣
`
}
/*exports.download = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Download*
│• ${prefix}play [query]
│• ${prefix}song [judul lagu]
│• ${prefix}pinterest [query]
│• ${prefix}ytmp3 [url]
│• ${prefix}ytmp4 [url]
│• ${prefix}tiktok [url]
│• ${prefix}tiktoknowm [url]
│• ${prefix}tiktokwm [url]
│• ${prefix}tiktokaudio [url]
│• ${prefix}soundcloud [url]
│• ${prefix}telesticker [url]
│• ${prefix}spotify [url]
│• ${prefix}spotifysearch [query]
│• ${prefix}nhentai [code]
│• ${prefix}nhentaipdf [code]
│• ${prefix}nhentaisearch [query]
╰─⬣
`
}
exports.converter = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Converter*
│• ${prefix}stiker [video/image]
│• ${prefix}semoji 😎
│• ${prefix}smeme [text]
│• ${prefix}memegen [text|text2]
│• ${prefix}fast [video/vn]
│• ${prefix}tupai [video/vn]
│• ${prefix}vibra [video/vn]
│• ${prefix}robot [video/vn]
│• ${prefix}slow [video/vn]
│• ${prefix}bass [video/vn]
│• ${prefix}nightcore [video/vn]
╰─⬣
`
}
exports.education = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Education*
│• ${prefix}nuliskiri [text]
│• ${prefix}nuliskanan [text]
│• ${prefix}foliokiri [text]
│• ${prefix}foliokanan [text]
╰─⬣
`
}
exports.islamic = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Islamic*
│• ${prefix}listsurah
│• ${prefix}alquran
│• ${prefix}asmaulhusna
│• ${prefix}kisahnabi
│• ${prefix}alquranaudio
│• ${prefix}jadwalsholat
╰─⬣
`
}
exports.ephoto = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Maker Ephoto360*
│• ${prefix}wetglass
│• ${prefix}multicolor3d
│• ${prefix}watercolor
│• ${prefix}luxurygold
│• ${prefix}galaxywallpaper
│• ${prefix}lighttext
│• ${prefix}beautifulflower
│• ${prefix}puppycute
│• ${prefix}royaltext
│• ${prefix}heartshaped
│• ${prefix}birthdaycake
│• ${prefix}galaxystyle
│• ${prefix}hologram3d
│• ${prefix}greenneon
│• ${prefix}glossychrome
│• ${prefix}greenbush
│• ${prefix}metallogo
│• ${prefix}noeltext
│• ${prefix}glittergold
│• ${prefix}textcake
│• ${prefix}starsnight
│• ${prefix}wooden3d
│• ${prefix}textbyname
│• ${prefix}writegalacy
│• ${prefix}galaxybat
│• ${prefix}snow3d
│• ${prefix}birthdayday
│• ${prefix}goldplaybutton
│• ${prefix}silverplaybutton
│• ${prefix}freefire
╰─⬣
`
}
exports.textpro = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Maker Textpro*
│• ${prefix}blackpink
│• ${prefix}neon
│• ${prefix}greenneon
│• ${prefix}advanceglow
│• ${prefix}futureneon
│• ${prefix}sandwriting
│• ${prefix}sandsummer
│• ${prefix}sandengraved
│• ${prefix}metaldark
│• ${prefix}neonlight
│• ${prefix}holographic
│• ${prefix}text1917
│• ${prefix}minion
│• ${prefix}deluxesilver
│• ${prefix}newyearcard
│• ${prefix}bloodfrosted
│• ${prefix}halloween
│• ${prefix}jokerlogo
│• ${prefix}fireworksparkle
│• ${prefix}natureleaves
│• ${prefix}bokeh
│• ${prefix}toxic
│• ${prefix}strawberry
│• ${prefix}box3d
│• ${prefix}roadwarning
│• ${prefix}breakwall
│• ${prefix}icecold
│• ${prefix}luxury
│• ${prefix}cloud
│• ${prefix}summersand
│• ${prefix}horrorblood
│• ${prefix}thunder
╰─⬣
`
}
exports.fun = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Fun*
│• ${prefix}tolol
│• ${prefix}pinter
│• ${prefix}pintar
│• ${prefix}asu
│• ${prefix}bodoh
│• ${prefix}gay
│• ${prefix}lesby
│• ${prefix}bajingan
│• ${prefix}jancok
│• ${prefix}anjing
│• ${prefix}ngentod
│• ${prefix}ngentot
│• ${prefix}monyet
│• ${prefix}mastah
│• ${prefix}newbie
│• ${prefix}bangsat
│• ${prefix}bangke
│• ${prefix}sange
│• ${prefix}sangean
│• ${prefix}dakjal
│• ${prefix}horny
│• ${prefix}wibu
│• ${prefix}puki
│• ${prefix}pantex
│• ${prefix}pantek
│• ${prefix}cekbapak 
│• ${prefix}cekemak 
│• ${prefix}babi 
│• ${prefix}beban 
│• ${prefix}apakah 
│• ${prefix}bisakah
│• ${prefix}kapankah
│• ${prefix}cantik
│• ${prefix}ganteng
│• ${prefix}rate
│• ${prefix}hobby
│• ${prefix}jadian
│• ${prefix}gantengcek
│• ${prefix}cantikcek
│• ${prefix}cekwatak
╰─⬣
`
}
exports.game = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Game*
│• ${prefix}tebakgambar 
╰─⬣
`
}
exports.info = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Info*
│• ${prefix}owner
│• ${prefix}daftar
╰─⬣
`
}
exports.ownerr = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Owner*
│• ${prefix}broadcast [text]
│• ${prefix}leave
│• >
│• $
│•  => 
╰─⬣
`
}
exports.groupnya = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ *Group*
│• ${prefix}antilink 1 / 0
│• ${prefix}hidetag [text]
│• ${prefix}linkgrup
│• ${prefix}tagall
│• ${prefix}kick @tag
│• ${prefix}setdesc [text] 
│• ${prefix}setname [text] 
│• ${prefix}getdeskgc
│• ${prefix}getpp @tag
╰─⬣
`
}*/
