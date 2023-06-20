// Random

//* Math.random()  fonksiyonu kullanarak rastgele sayılar üretebilirsiniz. Bu fonksiyon, 0 ile 1 arasında (0 dahil, 1 hariç) 
//*rasgele bir ondalık sayı döndürür.

let randomSayi = Math.random();
console.log(randomSayi); // Örneğin: 0.764532187421

console.log(Math.random())


//* Math.floor() fonksiyonu ile yuvarlanır. Sonuç, min ve max değişkenlerine bağlı olarak belirtilen aralıkta bir rastgele tam sayı döndürür.

let min = 1;
let max = 10;
let rastgeleSayi = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rastgeleSayi); // Örneğin: 7

let dizi = ['elma', 'armut', 'muz', 'çilek'];
let rasgeleIndeks = Math.floor(Math.random() * dizi.length);
let rasgeleOge = dizi[rasgeleIndeks];
console.log(rasgeleOge); // Örneğin: 'muz'

//* Math.round() fonksiyonu, bir ondalık sayıyı en yakın tam sayıya yuvarlar. 

console.log(Math.round(2.3)); // Sonuç: 2

console.log(Math.round(4.8)); // Sonuç: 5

console.log(Math.round(7.5)); // Sonuç: 8

console.log(Math.round(1.1)); // Sonuç: 1


//* Math.ceil() fonksiyonu, verilen sayıyı yukarıya doğru en yakın tam sayıya yuvarlar.

console.log(Math.ceil(4.2)); // Sonuç: 5

console.log(Math.ceil(9.8)); // Sonuç: 10

console.log(Math.ceil(0.75)); // Sonuç: 1

/* Örnekler*/ 

// 0 ile 100 arasında rastgele bir puan elde edelim
const puan = Math.floor(Math.random() * 101);

// Puanı ekrana yazdıralım
console.log("Puanınız: " + puan);

// Puan aralığına göre notu belirleyelim
let not;
if (puan >= 90) {
  not = "AA";
} else if (puan >= 80) {
  not = "BA";
} else if (puan >= 70) {
  not = "BB";
} else if (puan >= 60) {
  not = "CB";
} else if (puan >= 50) {
  not = "CC";
} else {
  not = "FF";
}
console.log("Notunuz: " + not);



//! Zat atan kodu yazalım.

const zarAtmaSonucu = Math.floor(Math.random() * 6) + 1;

console.log("Zar Atma Sonucu: " + zarAtmaSonucu);

//! Katılımcı listesi oluşturulsun ve oluşturulan listeden rastgele biri seçilsin. Eğer katılımcı yok ise "Çekilişe katılan kimse yok!" mesajı ekrana yazdırılır.
//! Eğer geçerli bir katılımcı sayısı varsa bir kura çekilsin ve çekilişi rastgele kazanan bir katılımcı olsun. Çekiliş sonucunu ekrana yazdıran kodu yazdıralım.

// Katılımcılar listesi
let katilimcilar = ["Ahmet", "Ayşe", "Mehmet", "Fatma", "Ali", "Aylin"];

// Katılımcı sayısını alalım
let katilimciSayisi = katilimcilar.length;

// Geçerli katılımcı sayısını kontrol edelim
if (katilimciSayisi === 0) {
  console.log("Çekilişe katılan kimse yok!");
} else {
  // Rastgele bir kazanan seçelim
  let randomIndex = Math.floor(Math.random() * katilimciSayisi);
  let kazanan = katilimcilar[randomIndex];
  
  // Sonucu ekrana yazdıralım
  console.log("Çekilişin kazananı: " + kazanan);
}



//*! kazanan kullanıcı tekrar kazanamaz
//*! kazanan kullanıcı yedek olamaz
//*! yedek olan kullanıcı tekrar yedek olamaz

let users = ["mert", "mehmet", "beliz", "eylül", "berke"]
let randomKazanan = Math.floor(Math.random() * users.length)
let kazananUser = users[randomKazanan]
users.splice(randomKazanan, 1)
console.log(users)
let randomYedek = Math.floor(Math.random() * users.length)
let yedekUser = users[randomYedek]
users.splice(randomYedek, 1)
console.log(users)
console.log(`Kazanan Kullanıcı : ${kazananUser}\nYedek Kullanıcı : ${yedekUser}`)

//! Sayı tahmin oyunu

//Bilgisayar 1-100 arasında bir sayı üretecek, bizim tahminde bulunmamızı isteyecek,  üretilen sayıdan küçük girilirse "Küçük sayı girdiniz", büyük sayı girilirse "Büyük sayı girdiniz" yazacak, kullanıcı doğru tahmin ederse "Tebrikler" yazacak.   

uretilen= Math.floor(Math.random()*100)+1;

while(1)
{
  sayi= prompt('Bir sayı giriniz:');
   if (sayi>uretilen)
   alert('Büyük sayı girdiniz');

   else if (sayi<uretilen)
   alert('Küçük sayı girdiniz');

   else if (sayi==uretilen){
  alert('Tebrikler bildiniz'); break;
}

}