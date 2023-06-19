//!ARİTMETİK OPERATÖRLER
//?toplama 
let say1 = 10
let say2 = 20
console.log(say1+say2)//30

//*string içerisinde toplama
let metin1 = "mehmet"
let metin2 = "coban"
console.log(metin1+metin2) //mehmetcoban


//*string ve number toplama
let metin3 = "mehmet"
let say3=23
console.log(metin3+say3) //mehmet23

//?çıkartma
let say4 = 20
let say5 = 10
console.log(say4-say5)//10

let metin4 = "isim"
let say6 = 20
console.log(metin4-say6) //NaN //*number bir ifade olmadığını belirtir

//?çarpma 
let say7 = 10
let say8 = 2
console.log(say7*say8) //20

//?bölme
let say9 = 10
let say10 = 2
console.log(say9/say10) //5

//?mod alma
//*mod almak bölünen sayının kalanını bizlere döndürür
console.log(10%2) //0
console.log(10%6) //4

//*örnek
let degisken = 20
let degisken2 = 10
let modAlSonuc = degisken%degisken2
console.log(modAlSonuc)

//?üssü alma
console.log(10**2) //100
console.log(5**2) //25

let say11 = 2
let say12 = 2
console.log(say11**say12) //4

//?arttırma (++)
//*++ ile sayıyı doğrudan 1 arttırabiliriz
let sayiArttirma=1
sayiArttirma++
console.log(sayiArttirma) //2

//?eksiltme (--)
//*-- ile sayıyı doğrudan 1 eksiltebiliriz
let sayiEksiltme = 10
sayiEksiltme--
console.log(sayiEksiltme) //9

//?sayı arttırıp eksiltmek için alternatifler 
let say13 = 10
say13+=1 //say13 = say13 + 1
console.log(say13) //11

let say14 = 10
say14-=1 //say14 = say14 - 1
console.log(say14)

//? eval() bir fonksiyon olsada , birden çok işlem yaptırmamız gereken projelerde kolaylık sağlar.string ifade kullanarak yapmak istediğimiz işlemi algılar ve sonucunu yazdırır. 
let value = eval('1+1');
alert(value); // 2

let x = 5;
eval("x = 10");
alert(x); // 10, değer değişti

 //?100 lük değerlendirme sisteminde dönem içinde
 //?55 puan üzerinden 50 puan toplayan bir öğrencinin 
 //?B+ harf notu alması için (86 puan) %45 I hesaplanacak final sınavında 100 üzerinden
 //?en az kaç puan alması gerektiğini ekrana yazan javascript kodunu yazınız.

 n=50;
 x=86-n;
 y=x*100/45;
 alert(`Geçmeniz için sınav puanınızz: ${y}`);






