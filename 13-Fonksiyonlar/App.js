// //!fonksiyonlar
// //*JavaScript'te fonksiyonlar, belirli bir işlevi gerçekleştiren ve tekrar tekrar kullanılabilen kod bloklarıdır. Fonksiyonlar, programın düzenini sağlar, kodu daha okunabilir hale getirir ve işleri modüler bir şekilde yapmayı sağlar.

// function mesajVer (){
//     console.log("fonksiyon çalıştı")
// }
// mesajVer() //*yazılan fonksiyon istenilen yerde çağırılır ve işleve sokulur

// /******************************************* */

// myFunction2() //*foksiyon ilk etapta çağırılıp ardından tanımlanabilir
// function myFunction2(){
//     console.log("fonksiyon 2 çağırıldı!")
// }

// /****************************************** */
// function ortalamaHesapla(){
//     let sinav1 = +prompt("1. Sınavı Giriniz")
//     let sinav2 = +prompt("2. Sınavı Giriniz")
//     let ortlama = (sinav1 + sinav2) / 2
//     console.log(`Ortalamanız : ${ortlama}`)
// }

// let sifre = prompt("Sınav Ortalama Uygulamasına Hoşgeldiniz! Şifrenizi Giriniz")
// if(sifre=="123"){
//     ortalamaHesapla() //*bir şart içerisinde şarta bağlı olarak fonksiyon çağrılabilir
// }
// else{
//     console.log("Hatalı Şifre Girdiniz!");
// }

// /******************************** */

// //?Fonksiyon Parametreleri:
// //*Fonksiyonlara parametreler ekleyebilirsiniz. Parametreler, fonksiyonun içinde kullanılmak üzere girdi değerlerini alır. İşte bir parametreli fonksiyon örneği

// function selamla(isim){
//     console.log(`Hoşgeldin! ${isim}`)
// }
// let girilenIsim = prompt("Lütfen Adınızı Giriniz")
// selamla(girilenIsim)

// /********************************************** */

// function toplam(a,b){
//     return a + b //*return ise fonksiyon çalıştığında bize geri dönecek olan değeri temsil eder
// }
// console.log(toplam(10,40)) //*oluşturulan fonksiyon içerisinde birden fazla parametre barındırılabilir. Sıraya bağlı olarak parametrelere değerler gönderilir

// /***********************************************/

// //?örnekler
// //*kullanıcıdan virgüllerle ayırılarak en sevdiği renkleri sorunuz!
// //*ardından yazdığınız bir fonksiyon sayesinde parametre göndererek bu dizinin uzunluğunu bulunuz

// function uzunlukBul(uzunluk){
//     return uzunluk.length //? diziden gelen değerinin uzunluğunu bulup, değeri geri gönderiyoruz
// }

// let enSevilenRenkler = prompt("Lütfen Sevdiğiniz Renkleri Yazınız").split(",") //?split kullanıcının girdiği her değeri virgülden sonra parçalar ve bir dizi elemanı haline getirir
// let diziUzunlugu =  uzunlukBul(enSevilenRenkler) //?fonksiyondan gelen değeri bir değişkene aktarabiliriz
// console.log(`Dizinin Uzunluğu : ${diziUzunlugu}`)

// /*************************************** */

// //*bir metin ve bir sayıyı kullanıcıdan alınız,
// //*metini kullanıcın verdiği sayı kadar fonksiyon kullanarak tekrar tekrar yanyana bir değişkende birleştiriniz

// function tekrarla(metin, sayi) {
//   let tekrar = "";
//   for (let i = 0; i < sayi; i++) {
//     tekrar += metin;
//   }
//   return tekrar;
// }

// let girilenMetin = prompt("Lütfen Metin Giriniz");
// let girilenSayi = +prompt("kaç defa tekrarlasın ? ");

// let gelenVeri = tekrarla(girilenMetin, girilenSayi);
// console.log(`Tekrara Alınan Metin : ${gelenVeri}`);

// /**************************************** */

// //*bir dizinin içerisindeki verilerden çift olanları filreleyip bize geri dizi olarak döndürünüz
// let sayilar = [1, 4, 3, 10, 30, 50, 13, 17, 16, 20, 73, 47, 89];

// function ciftSayilar(sayi) {
//   const ciftData = sayi.filter((element) => element % 2 == 0);
//   return ciftData;
// }

// console.log(ciftSayilar(sayilar))

//*bir fonksiyon oluşturunuz bu fonksiyon alınan parametre değerine göre rastgele rakamsal şifre üretmiş olsun
//*rastgele üretilecek olan şifrenin uzunluğunu kullanıcı belirtsin!

// let rakamlar = ["0","1","2","3","4","5","6","7","8","9"]

// function createPass(gelenSifre){
//     let olusanSifre = ""
//     for(let i=0;i<gelenSifre;i++){
//         olusanSifre += rakamlar[Math.floor(Math.random() * rakamlar.length)]
//     }
//     return olusanSifre
// }

// let sifreUzunluk = +prompt("Lütfen Şifre Uzunluğunu Giriniz")
// let sifre = createPass(sifreUzunluk)

// console.log(`Oluşturulan Şifre : ${sifre}`)


//! Faktoriyel Hesaplama kodunu yazdıralım

function faktoriyel(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * faktoriyel(n - 1);
    }
  }
  
  let faktoriyelSonucu = faktoriyel(5);
  console.log(faktoriyelSonucu); // Çıktı: 120

//! Dizi elamanlarını toplayan function yazdıralım

function diziToplami(dizi) {
    let toplam = 0;
    for (let i = 0; i < dizi.length; i++) {
      toplam += dizi[i];
    }
    return toplam;
  }
  
  let sayilar = [2, 4, 6, 8, 10];
  let diziToplamSonucu = diziToplami(sayilar);
  console.log(diziToplamSonucu); // Çıktı: 30

//! Çift sayıyı bulan function yazdıralım

function ciftSayilariBul(n) {
    let ciftSayilar = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        ciftSayilar.push(i);
      }
    }
    return ciftSayilar;
  }
  
  let n = 10;
  let ciftSayilarSonucu = ciftSayilariBul(n);
  console.log(ciftSayilarSonucu); // Çıktı: [2, 4, 6, 8, 10]

//! Bölme işlemi yapılsın, bölme işleminde hatalı işlem var ise hata mesajı döndüren function yazdıralım

function bolmeIslemi(sayi1, sayi2) {
    try {
      if (sayi2 === 0) {
        throw new Error("Sıfıra bölme hatası!");
      }
  
      let sonuc = sayi1 / sayi2;
      return sonuc;
    } catch (error) {
      console.log("Hata yakalandı: " + error.message);
      return null;
    }
  }
  
  let sayi1 = 10;
  let sayi2 = 0;
  let bolmeSonucu = bolmeIslemi(sayi1, sayi2);
  console.log(bolmeSonucu); // Çıktı: null

  //!  Kişileri bulan function yazalım 

  function kisiBul(kisiler, ad) {
    return kisiler.find((kisi) => kisi.ad === ad);
  }
  
  const kisiler = [
    { ad: "Ahmet", yas: 25 },
    { ad: "Mehmet", yas: 30 },
    { ad: "Ayşe", yas: 28 }
  ];
  
  const arananKisi = kisiBul(kisiler, "Mehmet");
  console.log(arananKisi); // Çıktı: { ad: "Mehmet", yas: 30 }

//! Öğrenci notunun değerlendirildiği (AA-BB-CC-DD) function yazalım

function notuDegerlendir(not) {
    let durum = "";
    if (not >= 90) {
      durum = "AA";
    } else if (not >= 80) {
      durum = "BA";
    } else if (not >= 70) {
      durum = "BB";
    } else if (not >= 60) {
      durum = "CB";
    } else if (not >= 50) {
      durum = "CC";
    } else if (not >= 40) {
      durum = "DC";
    } else if (not >= 30) {
      durum = "DD";
    } else {
      durum = "FF";
    }
    return durum;
  }
  
  const notDurumu = notuDegerlendir(75);
  console.log(notDurumu); // Çıktı: "BB" 

  //! Bir alışveriş sepetindeki ürünlerin toplam tutarına göre 
  //! İndirim miktarını hesaplayan ve ödenecek tutarı belirleyen bir fonksiyon yazalım 

  function indirimDurumuHesapla(sepetToplami) {
    let indirimYuzdesi = 0;
    
    if (sepetToplami >= 1000) {
      indirimYuzdesi = 25;
    } else if (sepetToplami >= 300) {
      indirimYuzdesi = 15;
    }
    
    return indirimYuzdesi;
  }
  
  function sepetToplaminiHesapla(sepet) {
    let toplam = 0;
    for (let i = 0; i < sepet.length; i++) {
      toplam += sepet[i].fiyat;
    }
    return toplam;
  }
  
  const sepet = [
    { urunAdi: "Ürün 1", fiyat: 150 },
    { urunAdi: "Ürün 2", fiyat: 250 },
    { urunAdi: "Ürün 3", fiyat: 500 }
  ];
  
  const sepetToplami = sepetToplaminiHesapla(sepet);
  const indirimYuzdesi = indirimDurumuHesapla(sepetToplami);
  const indirimMiktari = (sepetToplami * indirimYuzdesi) / 100;
  const odenecekTutar = sepetToplami - indirimMiktari;
  
  console.log("Sepet Toplamı: " + sepetToplami + " TL");
  console.log("İndirim Yüzdesi: " + indirimYuzdesi + "%");
  console.log("İndirim Miktarı: " + indirimMiktari + " TL");
  console.log("Ödenecek Tutar: " + odenecekTutar + " TL");