//Timing Events

//* JavaScript Timing Events, belirli bir zaman aralığında veya belli bir zaman sonra gerçekleşmesi gereken işlemleri yönetmek için kullanılmaktadır.

//* JavaScript'te sunulan üç temel Timing Event fonksiyonu şunlardır:

//* 1- setTimeout() Belirli bir süre sonra bir işlevin veya kod bloğunun çalışmasını sağlar.

//* 2- setInterval() Belirli bir süre aralığında bir işlevin veya kod bloğunun sürekli olarak çalışmasını sağlar.

//* 3- clearTimeout() ve clearInterval(): setTimeout() ve setInterval() tarafından oluşturulan zamanlayıcıları temizlemek ve durdurmak için kullanılır.


      /* Örnek-1 */


function mesajiGoster() {
    console.log("Merhaba, zamanlayıcı ile çalışıyorum!");
}

  // 3 saniye sonra mesajiGoster fonksiyonunu çağıralım
  setTimeout(mesajiGoster, 3000); // 3000 milisaniye === 3sn


      /* Örnek-2 */


function mesajiGoster() {
    console.log("Her 2 saniyede bir mesajı görüntülüyorum!");
}

  // Her 2 saniyede bir mesajiGoster fonksiyonunu çağıralım
  setInterval(mesajiGoster, 2000);

  /* Örnek-3 */


  let sayac = 0;

  function arttir() {
    sayac++;
    console.log("Sayac değeri: " + sayac);
  
    if (sayac === 5) {
      clearInterval(zamanlayici); //clearInterval ile zamanlayıcı 5 e geldiğinde durduruldu.
      console.log("Zamanlayıcı durduruldu!");
    }
}

  // Her 1 saniyede bir arttir fonksiyonunu çağıralım
  let zamanlayici = setInterval(arttir, 1000);



  /* Örnek-4 */

  let countdown = 10;

function countDown() {
  console.log("Geri sayım: " + countdown);

  if (countdown === 0) {
    clearInterval(timer);
    console.log("Geri sayım tamamlandı!");
  }

  countdown--;
}

const timer = setInterval(countDown, 1000); // Her 1 saniyede bir countDown fonksiyonunu çağırır

