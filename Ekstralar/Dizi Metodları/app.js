//Dizi elamanlarını tam tersine sıralar.(REVERSE)

let dizi=[1,2,3,4]
console.log(dizi.reverse()); // Çıktısı: [4,3,2,1]

//*Birleştirme(CONCAT)

let dizi1=[1,2,3]
let dizi2=[4,5,6]
let sonuc1=dizi1.concat(dizi2)
console.log(sonuc1); // Çıktısı:[1,2,3,4,5,6]

//*Filtreleme(FİLTER)

let dizi3=[5,35,52,6,10,20,1,2,90]
let sonuc2=dizi3.filter(value=>value>=10 && value<=99)
console.log(`Çift Basamaklı Sayılar: ${sonuc2}`); // Çıktısı: [35,52,10,20,90]

//Diziyi belirttiğimiz özellikle modifiye eder yeni dizi oluşturur.(MAP)

let dizi4=[1,2,3,4,5]
console.log(dizi4.map(value=>value*2)); // Çıktısı: [2,4,6,8,10]

//*Dizi içindeki elemanlara işlem yaptırmak için.(FOREACH)

let dizi5=["mavi","sarı","kırmızı","pembe","turuncu","yeşil"]
dizi5.forEach(value => {
    console.log(value); // buraya dizi ile alakalı istediğin işlemi yaptırabilirisin
}) // Çıktısı: bütün dizi elemanlarını alt alta yazdırır

//Elemanın indexini bulma(İNDEXOF)
//*ilk görüldüğü yeri söyler

let dizi6=[2,3,4,8,4]
console.log(dizi6.indexOf(4)); // Çıktısı: 2

//Elemanın en son görüldüğü yeri bulma(LASTİNDEXOF)

let dizi7=[2,3,4,8,4]
console.log(dizi7.lastIndexOf(4));// Çıktısı: 4

//Dizi elemanlarının arasına karakter ekleme(JOİN)

let dizi8=[127,0,0,1]
console.log(dizi8.join(".")); // Çıktısı: 127.0.0.1

let dizi9=["","usr","bin","local"]
console.log(dizi9.join("/")); // Çıktısı: /usr/bin/local

//Metnin arasına belirlediğimiz karaktere parçalayıp diziye çevirir(SPLİT)

let dizi10="Merhaba Selçuk nasılsın ?"
console.log(dizi10.split(" ")); // Çıktısı: ["Merhaba","Selçuk","nasılsın","?"]

//Dizi içindeki toplam eleman sayısını bulur(LENGTH)

let dizi11=[1,2,3,4]
console.log(dizi11.length); // Çıktısı: 4
