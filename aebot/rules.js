const rules = (name, uptime, tanggal, jam, prefix) => {
return `
           β  *REGULATION* ${name} β  
π *AKTIF* : ${kyun(uptime)}
β° *JAM* : ${jam} *WIB*
π *TANGGAL* : *${tanggal}*
π *VERSION* : *6.5.0 TERMUX*

π¨ β *SPAM*
π β *CALL & VC*
*Melanggar??* β *Banned* β 

π *Bugs??* π
 1. *creator*

               π *NOTE* ${name} π
π *KASIH BOT JEDA BIAR GA ERROR!!!!*
*Bot ini belum selesai sepenuhnya*
*Masih dalam proses pengerjaan*
*Jadi masih jarang aktif, dan*
*Maaf Jika Ada Menu Yang Error*
*Jika Lama Harap Ulangi Command*

π *Gunakan Command Tanpa [ ]*

π *Dan Jika Mengalami Error*
*Harap Lapor Owner Dengan Cara*
*${prefix}report* *apa pesan errornya*

π *Mau Invit Bot?? Donasi Gan,*

π *Kalian Bisa Mempublish Quotes Kalian*
*Jika Minat Hubungi Aja Owner Buat*
*Mempublish*
*Quotes Kalian,*
*Dan Makasih Buat Temen" Yg Mau Di Public Quotesnya:)*

π£ *Kenapa Saya Tambahkan Fitur Premium*
*Seperti Yang Kalian Tahu Karna Fitur Tersebut*
*Membutuhkan Kuota Banyak Untuk Mendownload*
*Dan Mengirimkan Audio/ Video Yang*
*Anda Minta Mohon Pengertiannyaπ*

`
}
exports.rules = rules
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}