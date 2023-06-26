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