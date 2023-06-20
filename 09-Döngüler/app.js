
//!LOOPS (DÖNGÜLER)
//?döngüler belirli başlı tekrar eden kod bloklarını çalıştırmak için kullanılır
//?tekrar eden kodları otomatikleştirmek ve kodu daha verimli hale getirmek için kullanılır

//*for döngüsü kullanımı

// for(baslangicDegeri;kosul;artisDegeri){
   //?işlecek kodlar 
// }

for(let i=0;i<10;i++){
    console.log(i)
}

for(let i=0;i<5;i++){
    console.log("Javascript öğreniyorum")
}

//?bir dizi içerisindeli verileri tek tek gezinmek
//*dizideki elemanları index numarasına göre seçer ve verileri getirir
let renkler = ["kırmızı","mavi","sarı","beyaz"]
for(let i=0;i<renkler.length;i++){
    console.log(renkler[i])
}

//?dizi içerisinde objelerden oluşan toplu veriler arasında geiznmek

let kullanicilar = [
    {
        ad:"mehmet",
        soyad:"coban"
    },
    {
        ad:"semra",
        soyad:"erdogan"
    },
    {
        ad:"bayram",
        soyad:"unlü"
    },
]
//*doğrudan objelere ulaşır
for(let i=0;i<kullanicilar.length;i++){
    console.log(kullanicilar[i])
}

//*obje içerisindeki verilere ulaşmak için;
for(let i=0;i<kullanicilar.length;i++){
    console.log(kullanicilar[i].ad)
}

//?break (döngüyü kırmak) => döngü break ifadesini gördüğü anda artık çalışmayı bırakır
for(let i=0;i<10;i++){
    if(i==4){
        break
    }
    console.log(i) //0,1,2,3
}

//*console.log() yer değiştirmesine göre çıktı değişebilir
for(let i=0;i<10;i++){
    console.log(i) //0,1,2,3,4
    if(i==4){
        break
    }
}

//?continue () => döngüde geride kalan kısımları atlayarak bir sonraki iterasona geçmenizi sağlar
for(let i=0;i<8;i++){
    if(i==5){
        continue
    }
    console.log(i) //0,1,2,3,4,6,7
}

//?basit algoritmik örnekler
for(let i=0;i<10;i++){
    if (i==2 || i==3){
        console.log(i)
    }
    if(i==5){
        break
    }
    //çıktıya göre i sadece 2 ve 3e eşit oludğunda consola yazdıracatır => 2,3 
    //i 5'e eşit olduğunda ise döngü kıralacaktır
}


for(let i=0;i<10;i++){
    if(i==3 && i==8){
        if(i==3){
            console.log(i)
        }
        break
    }
    if (i==0){
        console.log(i)
    }
    //kodun akışına göre bakıldığında ilk if de i hem 3 hemde 8 e eşit olamaz bu yüzden ilk if çalışmaz
    //ikinci ifde ise i sıfıra eşit olucağı için ekrana sadece sıfır yazdırır => 0 
}

//? 0 ile 100 sayılarının arasında 25 in katı 
//? olan sayıların toplamını hesaplayıp ekrana yazdıran Javascript kodunu yazınız.

toplam=0;
for(let i=0; i<100; i=i+25)
{
    if(i>=100)
    {
        toplam=toplam+i;
        
    }
}
console.log(toplam);

//?iç içe for kullanımı
//*for yapısının iç içe kullanım amacı daha karmaşık yapılarda yapıyı kolay hale getirmek için kullanılır
//*iç içe çalışan döngülerde dışardaki döngü bir kere çalıştıktan sonra içerideki döngüye geçilir
//*içerdeki döngü tamamen görevini bitirdikten sonra duşardaki döngü bir arttırılır ve yeniden içerdeki döngü çalışır

for(let i=0;i<=5;i++){
    for(let j=0;j<2;j++){
        console.log(i)
    }
    //0,0,1,1,2,2,3,3,4,4,5,5,
}

// * İç iç döngülerde ters yönde çalışacak şekilde değiştirebilirsiniz. 
// * Bunun için j değerini i'den başlayarak azaltabilirsiniz.

for(let i=0; i<=5; i++){
    for(let j=i; j>=0; j--){
        console.log(j);
    }
} // 0,1,0,2,1,0,3,2,1,0,4,3,2,1,0,5,4,3,2,1,0

//*0'dan 3'a kadar olan sayıları 3 kere yazdırın
for(let i=1;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i)
    }
    //1,1,1,2,2,2
}

//* Çarpım tablosunu consol'a hesaplayarak yazdıran iç içe for örneği
console.log("Çarpım Tablosu\n--------------");
for(let i=1; i<=10; i++) {
    for(let j=1; j<=10; j++) {
        console.log(i + " x " + j + " = " + i*j);
    }
    console.log("\n");
}


//!FOREACH
//*forEach bir döngü çeşididir ve dizi üzerinde her bir eleman için tekrarlayan bir işlem yapmanıza olanak sağlar. 
//*forEach yöntemi, her bir elemana uygulanan bir geri çağırma fonksiyonunu çalıştırır.


// array.forEach(element => {
    //*hazır yapıda kullanıldığında array alanına varolan dizinizi döndürmenize yarar
// });


let diller = ["js","php","c#","c","c++","python"]
.forEach(element => {
    console.log(element)
});

// * paramatreli foreach kullanımı örneği;
let diller2 = ["js","php","c#","c","c++","python"];
diller2.forEach((element, index) => {
    console.log(`Dil: ${element}, Index: ${index}`);
}); 
// Dil: js, Index: 0 \n Dil: php, Index: 1 \n Dil: c#, Index: 2 \n Dil: c, Index: 3 \n Dil: python, Index: 5 \n Dil: c++, Index: 4

//*basit bir örnekle dizide var olan sayıların toplamını bir değişkende toplayalım

let fiyatlar= [20,40,50,15,76]
let toplamFiyat = 0
fiyatlar.forEach(element => {
    toplamFiyat+=element
});
console.log(toplamFiyat);

//?toplu dizi obje mantığındada foreach kolay bir sistem sağlıyabilir
let newKullanicilar = [
    {
        id:1,
        kadi:"mehmet",
        sifre:123
    },
    {
        id:2,
        kadi:"semra",
        sifre:456
    },
    {
        id:3,
        kadi:"rojin",
        sifre:789
    },
]

newKullanicilar.forEach(element => {
    console.log(element) //doğrudan objeleri diziden ayrıştırarak getirir {},{},{}
});

newKullanicilar.forEach(element => {
    console.log(element.kadi) //mehmet,semra,rojin => toplu olarak duran kullanıcıların sadece kullanıcı isimlerini getirir
});


//*dizi içerisinde küçük harflerle oluşturulan isimleri büyük harflerle bir dizide toplamak
let names = ["ahmet","mehmet","meryem","rojin","semra"]
names.forEach((element,index) => {
    names[index] = element.toUpperCase() //topUpperCase küçük harfleri büyük harfe dönüştürür
});
console.log(names)

//*dizi içerisinden pozitif sayıları bulunuz
let numbers = [-1,-3,4,2,1,-5]
let pozitifSayilar = []
numbers.forEach(element => {
    if(element>0){
        pozitifSayilar.push(element) //push dizi içerisine yeni elemanlar ekler
    }
});
console.log(pozitifSayilar)

//!for of
//*JavaScript'te bir dizi, dize veya iterable (yineleyici) nesne üzerinde dolaşmak için kullanılan bir döngüdür. 
//*Bu döngü, her bir elemanı teker teker almanızı sağlar.

let elements = ["a","b","c","d","e"]
for (const iterator of elements) {
    console.log(iterator); //a,b,c,d,e
}

// *dizideki elemanları for of döngüsü ile tersten yazdırma;

let elements2 = ["a","b","c","d","e"];
elements2.reverse();
for (const iterator of elements2) {
    console.log(iterator); //e,d,c,b,a
}

//!for in 
//*for of ile aynı çalışır fakat elimize index numarası olarak veriyi gönderir
for (const key in elements) {
    console.log(key)
}

const rehber = [
    {
        "isim":"mehmet",
        "numara":"2345678"
    },
    {
        "isim":"meryem",
        "numara":"2345678"
    },
    {
        "isim":"rojin",
        "numara":"2345678"
    }
]

for (const iterator in rehber) {
    console.log(iterator) //0,1,2
}

for (const iterator in rehber) {
    console.log(rehber[iterator].isim) //mehmet,meryem,rojin
}

for (const iterator in rehber) {
    console.log(`İsim: ${rehber[iterator].isim}, Numara: ${rehber[iterator].numara}`);
} // İsim: mehmet, Numara: 2345678 \n İsim: meryem, Numara: 2345678 \n İsim: rojin, Numara: 2345678


//!while
//While döngüsü, içerisinde tanımlanan koşul sağlandığı sürece belirli komut ifadesi grubunun çalıştırılmasını sağlar. 
//Şart ifadesinin doğruluğu her döngünün başında kontrol edilir, buna göre döngünün içerisindeki komut ifadeleri çalıştırılmaya devam eder ya da döngü sona erer.
// Eğer şart sağlanmıyorsa while hiç çalıştırılmaz.

let i=0;
while (i<20){
   console.log(i)
   i++
}

//* Genellikle sonsuz döngüler için kullanılır.
 let j=0
 while(true) {
    j++
   console.log(j)
   if(j==100) {  
       break
   }
}

//!do-while
//do-while döngüsü, while döngüsüne benzer, ancak farklı olarak koşul değerlendirmesi döngünün sonunda gerçekleştirilir.
//Bu da demektir ki, do bloğu en az bir kez çalıştırılır ve ardından koşul kontrol edilir. Eğer koşul doğru ise döngü devam eder, 
//aksi halde döngü sonlanır.

//*yapısı
// let i = 0
// do{
//     yapılacak işler
//     i++
// }while(//şart sağlandığı sürece)

let doWhileSayi=0
do{
    console.log(`Do While Çıktısı : ${doWhileSayi}`)
    doWhileSayi++
}
while(doWhileSayi<10)

