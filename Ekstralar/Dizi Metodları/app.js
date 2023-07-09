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
