// ? True and False

// ? true:
// * Bir mantıksal değerdir ve "doğru"yu temsil eder.
// * Bir ifade doğru olduğunda veya bir koşul sağlandığında true değeri kullanılır.
// * Genellikle programlarda kontrol akışını yönlendirmek veya bir durumu doğrulamak için kullanılır.
// * 1 veya "doğru" olarak da temsil edilebilir.
// * Örneğin, 5'in 3'ten büyük olduğunu doğrulamak için 5 > 3 ifadesi kullanıldığında sonuç true olacaktır.

// ? false:

// * Bir mantıksal değerdir ve "yanlış"ı temsil eder.
// * Bir ifade yanlış olduğunda veya bir koşul sağlanmadığında false değeri kullanılır.
// * Genellikle programlarda kontrol akışını yönlendirmek veya bir durumu yanlış olduğunu belirtmek için kullanılır.
// * 0 veya "yanlış" olarak da temsil edilebilir.
// * Örneğin, 2'nin 7'den büyük olduğunu doğrulamak için 2 > 7 ifadesi kullanıldığında sonuç false olacaktır.

// ? IF,ELSE

// * Belirli bir koşulu kontrol etmek ve koşula göre farklı kod bloklarının çalışmasını sağlamak için kullanılan bir yapıdır.



// *koşul, bir değeri veya ifadeyi değerlendiren ve true veya false sonucunu döndüren bir şart ifadesidir.
// *Eğer koşul true ise, if bloğu içindeki kod çalışır. Eğer koşul false ise, else bloğu içindeki kod çalışır.

// ? Karşılaştırma Operatörleri

// *  karşılaştırma operatörü == (eşittir)

// console.log(5 == 5); // true
// console.log(12 == 5); // false

// //*  karşılaştırma operatörü < (küçüktür)

// console.log(10 < 5); // false
// console.log(5 < 8); // true

// //*  karşılaştırma operatörü > (büyüktür)
// console.log(10 > 5); //true
// console.log(5 > 8); // false

// //*  karşılaştırma operatörü <= (küçük eşittir)

// console.log(5 >= 10); // false

// //*  karşılaştırma operatörü >= (büyük eşittir)

// console.log(5 <= 10); // true
// //*  karşılaştırma operatörü != (eşit değil)

// console.log(5 != 5); //false

// console.log(5 != 10); //true

// //* Mantıksal Operatör && (ve - and)

// let yas = 25;
// let mezuniyetDurumu = true;

// if (yas > 18 && mezuniyetDurumu) {
//   console.log("Ehliyet alabilirsiniz."); // Her iki koşul da doğru olduğunda çalışır.
// } else {
//   console.log("Ehliyet alamazsınız.");
// }

// //* Mantıksal Öperatör || (veya - or)

// let age = 16;
// let ehliyetBelgesiVar = true;

// if (yas >= 18 || ehliyetBelgesiVar) {
//   console.log("Araç kullanabilirsiniz."); // En az bir koşul doğru olduğunda çalışır.
// } else {
//   console.log("Araç kullanamazsınız.");
// }

// /* Örnekler  */


//! Karşılaştırma Operatörleri

// == (Eşitse), iki değer eşitse doğrulaması yapmak için kullanılır.

let x = 5;
let y = 5;
if (x == y) {
  console.log('iki değer birbirine eşit..');
}

//? != (Eşit değilse), iki değer eşit değil ise doğrulaması yapmak için kullanılır.

let sayi1 = 5;
let sayi2 = 10;
if (say1 != sayi2) {
  console.log('iki değer birbirine eşit değildir..');
}

//? === (denkse), iki değer denk  ise doğrulamasını yapmak için kullanılır.
//? Eşitlik ile denklik arasındaki fark ise denklik kontrolünde veri türlerini kontrol etmesidir.

let sayi3 = 5; // x ='5' olsaydı denk olmazdı
let sayi4 = 5;
if (sayi3 === sayi4) {
  console.log('iki değer birbirine denkdir..');
}

//? !== (denk değilse), iki değer denk değil ise doğrulaması yapmak için kullanılır.

let sayi5 = 5;
let sayi6 = '5';
if (sayi5 !== sayi6) {
  console.log('iki değer birbirine denk değildir..');
}

//? < (küçükse), ilk değerin ikinci değerden küçük olma durumunu kontrol için kullanılır.

let sayi7 = 12;
let sayi8 = 7;
if (sayi8 < sayi7) {
  console.log('sayi8 değeri sayi7 den küçüktür.');
}

//? > (büyükse), ilk değerin ikinci değerden büyük olma durumunu kontrol için kullanılır.

let sayi9 = 12;
let sayi10 = 7;
if (sayi9 > sayi10) {
  console.log('sayi9 değeri sayi10 dan büyüktür.');
}

//? <= (küçük veya eşitse ), ilk değerin ikinci değerden küçük olma veya eşit olma durumunu kontrol için kullanılır.

let sayi11 = 12;
let sayi12 = 7;
if (sayi12 <= sayi11) {
  console.log('sayi12 değeri sayi11 dan küçük veya eşittir.')
}

//? >= (büyük veya eşitse ), ilk değerin ikinci değerden büyül olma veya eşit olma durumunu kontrol için kullanılır.

let sayi13 = 12;
let sayi14 = 7;
if (sayi13 >= sayi14) {
  console.log('sayi13 değeri sayi14 den büyük veya eşittir.')
}


// //! sayı eşitmi?

// if (44 == 44) {
//   console.log("sayılar eşittir");
// } else {
//   console.log("sayılar eşit değildir");
// }

// //! Yaşın 18'den büyük olduğunda "reşitsiniz" yazan program
// yas = 18;

// if (yas >= 18) {
//   console.log("Reşitsiniz!");
// } else {
//   console.log("reşit değilsiniz!");
// }

// //! Kullanıcı yaşını kendisi girdiğinde reşit olup olmadığını bulalım
// isim = prompt("Adınız : ");
// yas = +input("yaşınızı giriniz : ");
// if (yas >= 18) {
//   console.log("Selam adınız: " + isim + "reşitsiniz");
// } else {
//   console.log("Selam adınız: " + isim + "reşit değilsiniz");
// }

// //! Ortalamasını giren öğrencinin geçip geçmediği kontrol edilsin
// ortalama = +prompt("Ortalamanızı Giriniz : ");
// if (ortalama >= 50) {
//   console.log("Tebrikler Geçtiniz!");
// } else {
//   console.log("Maalsef Kaldınız!");
// }

// ! Kullanıcıdan yaptığı alışveriş fiyatını alınız.
// ! Alışveriş fiyatı 100 lira altındaysa 15 TL kargo ücreti fiyata dahil edilsin
// ! 100 lira üstündeyse kargo ücreti alınmasın

// alisverisFiyati = +prompt("Lütfen alışveriş fiyatınızı giriniz! : ")

// if (alisverisFiyati<100){

//     alisverisFiyati += 15;

//     console.log("Kargo Ücreti 15TL. Toplam Ödenecek Tutar : " + alisverisFiyati)
// }
// else{

//     console.log("Kargo Ücretsiz! Ücretiniz : "+ alisverisFiyati)
// }

// ! Kullanıcıya sinema ya da tiyatro tercihi sorulsun.
// ! Sinema izlemek için 50 TL,
// ! Tiyatro için 100 TL ödenmesi gerekmedir.
// ! Öğrencilere % 50 indirim yapıldığı düşünülerek
// ! Öğrenci ise indirim yapılan
// ! Öğrenci değilse indirimsiz tutarı
// ! Hesaplayarak ekrana yazdıran kodu yazınız.

// const tiyatro = 100;
// const sinema = 50;

// const secim = prompt("Sinema mı Tiyatro mu? Lütfen tercihinizi yapın: ");

// if (secim === "sinema") {
//   const ogrenci = prompt("Öğrenci misiniz? (e/h)");

//   if (ogrenci === "e") {
//     const sinemaIndirim = sinema * 0.5;
//     console.log("Öğrenci indirimi uygulandı! Ödenecek Tutar: " + sinemaIndirim + " TL");
//   } else {
//     console.log("Tam bilet fiyatı: " + sinema + " TL");
//   }
// } else if (secim === "tiyatro") {
//   const ogrenci = prompt("Öğrenci misiniz? (e/h)");

//   if (ogrenci === "e") {
//     const tiyatroIndirim = tiyatro * 0.5;
//     console.log("Öğrenci indirimi uygulandı! Ödenecek Tutar: " + tiyatroIndirim + " TL");
//   } else {
//     console.log("Tam bilet fiyatı: " + tiyatro + " TL");
//   }
// } else {
//   console.log("HATALI SEÇİM!");
// }

// ! Kullanıcının girdiği 3 sayının en büyük sayısını bulun

// say1 = +prompt("1. Sayıyı Giriniz")
// say2 = +prompt("1. Sayıyı Giriniz")
// say3 = +prompt("1. Sayıyı Giriniz")

// if (say1>say2 && say1>say3){

//     console.log(say1," En Büyüktür")
// }

// else if (say2>say1 && say2>say3){
//     console.log(say2," En Büyüktür")
// }

// else{
//     console.log(say3," En Büyüktür")
// }


// ! Kullanıcıdan bir şifre ve kullanıcı adı oluşturmasını isteyiniz
// ! Eğer kullanıcı adı veya şifre en az 8 karakterden oluşuyorsa
// ! "hatalı kullanım" yazdırınız değilse "kayıdınınız oluşturuldu" yazınız




// console.log("Kayıt Ekranına Hoşgeldiniz\n");
// const kadi = prompt("Lütfen Kullanıcı Adınızı Giriniz: ");
// const sifre = prompt("Lütfen Şifrenizi Giriniz: ") 
// const kadiLen = kadi.length;
// const sifreLen = sifre.length;

// if (kadiLen < 8 || sifreLen < 8) {
//     console.log("8 karakterden fazla bir kullanıcı adı veya şifre oluşturunuz");
// } else {
//     console.log("Kaydınız Başarı İle Oluşturuldu! " + kadi);
// }


// ! basit bir bankamatik uygulaması oluşturunuz
// ! kullanıcıdan bir şifre alınız şifre doğru olduğu taktirde işlemler alanlarına yöneltilsin
// ! para çekme ve para yatırma işlemleri yapılsın

// let sifre = 1234;
// let secim;
// let bakiye = 1000;
// let cekilecekTutar, yatirilacakTutar;
// let girilenSifre = Number(prompt("Hoşgeldiniz. Lütfen şifrenizi giriniz :"));
// if (sifre == girilenSifre) {
//     secim = prompt("Şifrenizi doğru girdiniz.\nLütfen para çekmek için 1'i, para yatırmak için 2'yi tuşlayınız :")
//     if (secim == 1) {
//         cekilecekTutar = prompt("Çekmek istediğiniz tutarı giriniz :")
//         if (cekilecekTutar <= bakiye) {
//             bakiye -= cekilecekTutar;
//             console.log(`Para çekme işleminiz tamamlanmıştır. Kalan bakiyeniz : ${bakiye}₺'dir.`)
//         }
//         else {
//             console.log(`Yetersiz bakiyeden dolayı para çekme işleminiz tamamlanamamıştır. Mevcut bakiyeniz : ${bakiye}₺'dir.`)
//         }
//     } else if (secim == 2) {
//         yatirilacakTutar = Number(prompt("Yatırmak istediğiniz tutarı giriniz :"))
//         bakiye += yatirilacakTutar;
//         console.log(`Para yatırma işleminiz tamamlanmıştır. Bakiyeniz : ${bakiye}₺'dir.`)
//     }
//     else {
//         console.log("Hatalı bir tuşlama yaptınız..!")
//     }
// } else {
//     console.log("Şifrenizi hatalı girdiniz. Lütfen tekrar deneyiniz..!")
// }


// ! Bir kişi mağazadan 100 TL ve üzeri alışveriş yaparsa %10 indirim, 200 TL ve üzeri alışveriş
// ! yaparsa %15 indirim, 300 TL ve üzeri alışveriş yaparsa %20
// ! indirim kazandığını ve ödeyeceği miktarı ekrana yazınız
// let alisverisTutari = 100;
// if (alisverisTutari >= 100 && alisverisTutari < 200) {
//     console.log(`100₺ ve üzeri alışverişinizden dolayı %10 indirim kazandınız. Ödeyeceğiniz toplam tutar : ${(alisverisTutari * 0.90)}₺'dir.`);
// }

// else if (alisverisTutari >= 200 && alisverisTutari < 300) {
//     console.log(`100₺ ve üzeri alışverişinizden dolayı %15 indirim kazandınız. Ödeyeceğiniz toplam tutar : ${alisverisTutari * 0.85}₺'dir.`);
// }
// else if (alisverisTutari >= 300) {
//     console.log(`100₺ ve üzeri alışverişinizden dolayı %20 indirim kazandınız. Ödeyeceğiniz toplam tutar : ${alisverisTutari * 0.80}₺'dir.`);
// }
// else {
//     console.log(`Ödeyeceğiniz toplam tutar : ${alisverisTutari}₺'dir.`);
// }


//Kullanıcının girdiği sayının karesi, küpü veya karekökünü buldurma uygulaması 
//Kullanıcıdan öncelikle hangi işlemi yapmak istenildiği sorulsun 
//Eğer cevap istediğimiz seçeneklerden birisi değilse yanlış seçim olduğunu sayıyı istemeden önce uyaralım 
//Daha sonra hangi sayı ile işlem yapılmak istendiği sorulsun //Sonuçta da seçimlerine göre console'a cevabı verelim 
//Burada karekökü için Math özelliğini kullanacağız. 
const islem = prompt("Yapmak istediğiniz işlemi lütfen seçiniz: \n Karesi için: 1 \n Küpü İçin: 2 \n Karekökü için: 3 \n")
let sonuc
if (islem == 1 || islem == 2 || islem == 3) {
  const sayim = +prompt("Lütfen işlem yapmak istediğiniz sayıyı giriniz:")
  if (islem == 1) {
    sonuc = sayim ** 2
    console.log(sayim + " sayısının karesi: " + sonuc)
  }
  else if (islem == 2) {
    sonuc = sayim ** 3
    console.log(sayim + " sayısının küpü: " + sonuc)
  }
  else {
    sonuc = Math.sqrt(sayim)
    console.log(sayim + " sayısının karekökü: " + sonuc)
  }
}
else { console.log("1, 2 veya 3 seçeneklerinden birini seçmelisiniz.") }