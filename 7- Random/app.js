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



/* Örnekler*/ 




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

