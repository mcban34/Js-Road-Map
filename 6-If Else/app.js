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