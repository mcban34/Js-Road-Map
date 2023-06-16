// //!Javascript tarih ve saatleri temsil etmek için belirli nesneler kullanır
// //?yeni bir tarih objesi oluşturmak için new Date() ifadesini kullanılır

let simdikiTarih = new Date()
console.log(simdikiTarih) //Geçerli tarih ve saati yazdırır

let simdikiTarihiBelirle = new Date('1999-08-18')
console.log(simdikiTarihiBelirle) //istenilen tarihi belirtir

// //?new Date()'den gelen verileri istedğimiz şekilde parçalayabiliriz (sadece ay-sadece saat-sadece gün vb.)
let simdikiTarih2 = new Date()
console.log(simdikiTarih2.getFullYear()); //yılı verir => 2023
console.log(simdikiTarih2.getMonth()+1); //ayı verir fakat index numarasından saymaya başladığı için +1 atmak doğru sonucu doğurur => 6
console.log(simdikiTarih2.getDate())//ayın gününü verir => 16
console.log(simdikiTarih2.getHours())//günün saatini verir => 14
console.log(simdikiTarih2.getMinutes())//günün dakikasını verir => 36
console.log(simdikiTarih2.getSeconds())//günün saniyesini verir
console.log(simdikiTarih2.getMilliseconds())//günün milisaniyesini alır

//?tarih setleme
simdikiTarih.setFullYear(2022); // Yılı ayarlar.
simdikiTarih.setMonth(0); // Ayı ayarlar.
simdikiTarih.setDate(1); // Ayın gününü ayarlar.
simdikiTarih.setHours(12); // Saati ayarlar.
simdikiTarih.setMinutes(30); // Dakikayı ayarlar.
simdikiTarih.setSeconds(0); // Saniyeyi ayarlar.

//?toLocalString
//*zamanı yerel zamana göre ayarlar
let date = new Date()
console.log(date.toLocaleString()) //tarihi ve saati yerele dönüştürür
console.log(date.toLocaleDateString()) // sadece tarihi yerele dönüştürür
console.log(date.toLocaleTimeString()) // sadece zamanı yerele dönüştürür

//?örnek
//*kullanıcıdan prompt ile doğum tarihini alınız ve date obejesi ile şimdiki zamanı alıp yaşını hesaplayınız

let yasDate = new Date()
let yasSimdikiTarih = yasDate.getFullYear()

let girilenYas = +prompt("Lütfen Doğum Tarihinizi Giriniz")
let yas = yasSimdikiTarih - girilenYas
console.log(`Yaşınız : ${yas}`)