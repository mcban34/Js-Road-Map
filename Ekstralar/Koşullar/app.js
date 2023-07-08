//*Mantıksal Karar Vericiler => Doğru ile yanlış (true/false) kavramlarını ayırt edebilen yapılardır.

//?Örnek:

// Soru                          Mantıksal cevap
// İnsanlar Uçabilir mi?         Yanlış(false)
// 5, 2'den büyük mü?            Doğru(true)   

//*Karşılaştırma Operatörleri => Değerlerin kıyaslamalarını yapan mantıksal karar vericilerdir.

//*Eşit Değilse (!=)
//?console.log(4!=1); //true

//*Eşitse(==)
// console.log(1==2); //false 

//*Büyükse(>)
// console.log(10>5); //true

//*Küçükse(<)
// console.log(10<5); //false

//*Büyük veya eşitse(>=)
// console.log(4>=4); //true

//*Küçük veya eşitse(<=)
// console.log(4<=8); //false

//*Ve(&&)
// console.log(5==5 && 1<9); //true

//Veya(||)
// console.log(5==4 || 9<1); //false

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

//?Dışarıdan hangi ayda olduğunuzu tanımlayın
//?Hangi ayda olduğumuzu bulunuz.

// let ay = "haziran"
// if(ay=="haziran"){

//     console.log("yaz mevsimindesiniz");
// }
// else if(ay=="ocak"){
//     console.log("Kış mevsimindesiniz");
// }
// else if (ay=="eylül"){
//     console.log("Sonbahar mevsimindesiniz");
// }
// else{
//     console.log("hatalı giriş");
// }

