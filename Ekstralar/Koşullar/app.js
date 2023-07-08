//*Mantıksal Karar Vericiler => Doğru ile yanlış (true/false) kavramlarını ayırt edebilen yapılardır.

//?Örnek:

// Soru                          Mantıksal cevap
// İnsanlar Uçabilir mi?         Yanlış(false)
// 5, 2'den büyük mü?            Doğru(true)   

//*Karşılaştırma Operatörleri => Değerlerin kıyaslamalarını yapan mantıksal karar vericilerdir.

//*Eşit Değilse (!=)
console.log(4!=1); //true

//*Eşitse(==)
console.log(1==2); //false 

//*Büyükse(>)
console.log(10>5); //true

//*Küçükse(<)
console.log(10<5); //false

//*Büyük veya eşitse(>=)
console.log(4>=4); //true

//*Küçük veya eşitse(<=)
console.log(4<=8); //false

//*Ve(&&)
console.log(5==5 && 1<9); //true

//Veya(||)
console.log(5==4 || 9<1); //false

//* IF,ElSE(Yukarıdaki Konu başlıklarında (06.dosya if-else) detaylı bir şekilde anlatılmıştır.) =>
//*Bir şartın doğru veya yanlış olmasına göre belli bir kod bloğunun çalışmasını veya atlaması için kullanılır.
//*if(eğer) anlamında else(yoksa) anlamına geliyor.

// if(şart){
//     işlenecek kod burada barındırılır
// }
// else{
// }

// let yas = 16
// if(yas>18){
//     console.log("Hoşgeldiniz");
// }
// else{
//     console.log("Yaşınız tutmuyor!");
// }

//*Not:if koşulunun içine tekrar bir if koşulu açabiliceğiniz gibi else koşulunun içinede if koşulu açabilirsiniz.

//ELSE-IF => if koşulunun olmadığı durumlar için alternatif üretir ve zincirleme olarak çalışır.

//?Örnek:
//?Dışarıdan hangi ayda olduğunuzu tanımlayın
//?Hangi mevsimde olduğumuzu bulunuz.

let ay = "haziran"
if(ay=="haziran"){

    console.log("yaz mevsimindesiniz");
}
else if(ay=="ocak"){
    console.log("Kış mevsimindesiniz");
}
else if (ay=="eylül"){
    console.log("Sonbahar mevsimindesiniz");
}
else{
    console.log("hatalı giriş");
} //Yaz Mevsimindesiniz

//*SWITCH-CASE => Çalışma mantığı if-else ve else-if koşul zinciri ile aynıdır fakat bunu yapmanın daha kısa yolu switch-casedir.
//*Kontrol edilmesi gereken değeri switche girip değerin oluşturması ve alabilceği değerleride case'in içine giriyoruz.

// switch (kontrol edilecek deger) {
//     case kontrol edilen deger:
//       // kontrol edilen degerin durumu için yapılacak işlemler
//       break; //case durumu işlenirse kod bloğundan çıkılması gerektiğini belirtir.
//     case kontrol edilen deger:
//       // kontrol edilen degerin durumu için yapılacak işlemler
//       break;
//     default:
//       // Hiçbir durum eşleşmezse default değer işleme girecek
//       break;
//   }

//?Örnek: => yukarıdaki ay örnegini birde switch-case ile yapalım.
//?Dışarıdan bir değişkene hangi ayda olduğunuzu tanımlayın.
//?Hangi mevsimde olduğumuzu bulunuz.

let ay1="eylül"

switch(ay1){
    case "haziran":
        console.log("Yaz Mevsimindesiniz");
        break;
    case "ocak":
        console.log("Kış Mevsimindesiniz");   
        break;
    case "eylül":
        console.log("Sonbahar Mevsimindesiniz");
        break;
    default:
        console.log("Geçersiz Mevsim");
        break;
} //Sonbahar Mevsimindesiniz

//* ?:(TERNARY)Koşul Operatörü => Kısaca if-else'in kısa hali diye açıklayabiliriz.

//*NOT:Ternary operatörü çalışma hızı olarak if-else'ten daha yavaştır.

//? koşul ? doğruysa : yanlışsa;

//?Örnek: Aynı örneği if-else ve ternary koşuluyla yapalım.

let sayi=5
if(sayi>0){
    console.log("Sayı Pozitiftir");
}
else{
    console.log("Sayı Negatiftir");
} //Sayı Pozitiftir

let sayi1=-5
let sonuc=sayi1>0 ? "Sayı Pozitiftir":"Sayı Negatiftir"
console.log(sonuc); //Sayı Negatiftir

//* && - || İle Koşullamak (Ternary)

// &&(ve) ile koşullamak =>

let sayi2=35
let sonuc1=sayi2 >= 10 && sayi1 <= 99 ? "Çift basamaklı" : "Tek Basamaklı"
console.log(sonuc1);