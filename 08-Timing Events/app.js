//Timing Events

//* JavaScript Timing Events, belirli bir zaman aralığında veya belli bir zaman sonra gerçekleşmesi gereken işlemleri yönetmek için kullanılmaktadır.

//* JavaScript'te sunulan üç temel Timing Event fonksiyonu şunlardır:

//* 1- setTimeout() Belirli bir süre sonra bir işlevin veya kod bloğunun çalışmasını sağlar.

//* 2- setInterval() Belirli bir süre aralığında bir işlevin veya kod bloğunun sürekli olarak çalışmasını sağlar.

//* 3- clearTimeout() ve clearInterval(): setTimeout() ve setInterval() tarafından oluşturulan zamanlayıcıları temizlemek ve durdurmak için kullanılır.



   /* Örnek-1 */


let mesajiGoster = () => {
  console.log("Merhaba, zamanlayıcı ile çalışıyorum!");
};

// 3 saniye sonra mesajiGoster fonksiyonunu çağıralım
setTimeout(mesajiGoster, 3000); // 3000 milisaniye === 3sn

/* Örnek-2 */
let intervalId; // setInterval tarafından döndürülen ID'yi tutmak için değişken oluşturuldu

let mesajGoster = () => {
  console.log("Her 2 saniyede bir mesajı görüntülüyorum!");
};

// Her 2 saniyede bir mesajiGoster fonksiyonunu çağıralım
intervalId = setInterval(mesajiGoster, 2000);

/* Örnek-3 */
let sayac = 0;
let zamanlayici;

let arttir = () => {
  sayac++;
  console.log("Sayac değeri: " + sayac);

  if (sayac === 5) {
    clearInterval(zamanlayici); // clearInterval ile zamanlayıcı 5 e geldiğinde durduruldu.
    console.log("Zamanlayıcı durduruldu!");
  }
}

// Her 1 saniyede bir arttir fonksiyonunu çağıralım
zamanlayici = setInterval(arttir, 1000);

/* Örnek-4 */
let countdown = 10;
let timer;

let countDown = () => {
  console.log("Geri sayım: " + countdown);

  if (countdown === 0) {
    clearInterval(timer);
    console.log("Geri sayım tamamlandı!");
  }

  countdown--;
}

timer = setInterval(countDown, 1000); // Her 1 saniyede bir countDown fonksiyonunu çağırır

// * Örnek-5

let changeBackgroundColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // Rastgele hexadecimal renk kodu oluşturuluyor
  document.body.style.backgroundColor = "#" + randomColor; // Arka plan rengi değiştiriliyor
};

setInterval(changeBackgroundColor, 2000); // Her 2 saniyede bir arka plan rengini değiştiren fonksiyonu çağırır
