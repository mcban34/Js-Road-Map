! Promptlar

//* Promt kullanıcıdan girdi almak için kullanılan bir yöntemdir. Bu fonksiyon bir pencere açar ve kullanıcıdan bir metin girmesini isteyerek girilen metni geri döndürür. */

let Name =prompt("Adınızı Girin");
console.log("Merhaba," + Name + "!")

let age = prompt("yaşınızı giriniz");
console.log("Yaşım," + age + "!")




//? İnputdan gelen değeri number çevirme
x = prompt("bir sayı giriniz")
x = +(x)
console.log(typeof(x))

let number = prompt("Bir sayı giriniz")
number = parseInt(number); // Asıl kullanım şekli "+", parseInt ise girdiyi sayıya çevirir.
let karesi= number * number; // Girilen sayının karesi
console.log("Girilen sayının karesi: " + karesi) 

/* Ornekler*/

//? Dışardan girilen ad soyad ve doğum tarihini console yazdır.

isim = prompt("adınızı giriniz : ");
soyisim = prompt("soyadınızı giriniz : ");
dogumTarihi = prompt("Doğum tarihinizi giriniz : ");
comsole.log (isim,soyisim,dogumTarihi)

//? Kullanıcın girdiği sayının 3 katını yazdıran kod

sayi = prompt("bir sayı giriniz")
sonuc = +(sayi) * 3
console.log (sonuc)


//? Dışarıdan girilen sayıları topla ve çarp console yazdır

let num1 = +prompt('Birinci Sayıyı Giriniz')
let num2 = +prompt('İkinci Sayıyı Giriniz')

let toplama = num1 + num2;

console.log("Girilen sayıların çarpımı: " + toplama)

let carp = num1 * num2;

console.log("Girilen sayıların çarpımı: " + carp)


//? kullanıcının girdiği sayının karesini alan program

girilenSayi = +prompt("Bir sayi giriniz :")
girilenSayi  = girilenSayi ** 2;

console.log(girilenSayi)

//? girilen 3 sınavın ortalamasını alan uygulamayı yazınız

sın1 = +prompt("1. Sınavı Giriniz : ")
sın2 = +prompt("2. Sınavı Giriniz : ")
sın3 = +prompt("3. Sınavı Giriniz : ")
ort = (sın1 + sın2 + sın3) / 3
console.log("Ortalamanız : " + ort)


//?kenar uzunluğu ve yüksekliği girilen üçgenin alanını hesaplayan programı yazınız ((k*h) / 2)

kenarUzunlugu = +prompt("Kenar uzunluğunu giriniz : ")
yukseklik = +prompt("Yüksekliği Giriniz : ")
alan = (kenarUzunlugu * yukseklik) / 2
console.log("Üçgenin Alanı : " + alan)



//? vizenin %40 finalin %60 alınarak ortalamayı ekrana yazdıran program
vize = +prompt("Vize notunuzu giriniz : ")
final = +prompt("Final notunuzu giriniz : ")
ortlama = +((vize*0.4) + (final*0.6))
console.log("Ortalamanız : " + ortlama)

//?Bir işyerinde ki çalışan kişilerin yüzdelik olarak toplam gelirden kazancı.
let calisansay = +prompt("İşyerinde ki çalişan sayisini giriniz.")
let toplamgelir = +prompt("toplam gelirin yüzde kaçinin çalişanlara kalacağini giriniz.")
yüzdelikmaas = toplamgelir/calisansay
console.log(`Kişi başina yüzdelik olarak düşen pay:  %${yüzdelikmaas}`);


//?Klavyeden girilen iki sayının aritmetik olarak dört işlem sonucunu 
//?hesaplayan ve sonucu ekranda gösteren javascript kodunu yazınız.
let s1, s2, toplam, fark, bol, carp2;
s1=Number(prompt("Birinci sayıyı giriniz:"));
s2=Number(prompt("İkinci sayıyı giriniz:"));
toplam=s1+s2;
fark=s1-s2;
bol=s1/s2;
carp2=s1*s2;
alert(`
Sayıların toplamı:${toplam},
Sayıların farkı:${fark},
Sayılar Bölümü:${bol},
Sayılar Çarpımı:${carp}`);