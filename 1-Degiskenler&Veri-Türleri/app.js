//!DEĞİŞKENLER
//?Değişkenler bizler için veri tutmamıza yarar
//?Değişkenler içerisine veriler atanır (=)
//?üç farklı değişken oluşturma yöntemi bulunmaktadır (let,const,var => ilerleyen derslerde göz atılacak)
let isim = "mehmet"
console.log(isim) //*"mehmet" //console.log() ekrana veri yazmadırmamıza yarar

let yas = 23
console.log(yas) //*23

let soyisim = "coban"
console.log(soyisim)

let numara = 1234
console.log(numara)


//!CONSOLE.LOG()
//*developer geliştirme ekranı diyebiliriz 
//*burada genellikle yazdığımzı kodlar test edilir
console.log("hello world")

let mesajVer = "burada mesaj yazıyıor"
console.log(mesajVer)

//!VERİ TÜRLERİ
//?string (metinsel veri türleri, tırnak içerisinde olan bütün değişkenler metinsel veri türleridir)
let memleket = "kars"
let urun = "çikolata"
let il = "İstanbul"
console.log(memleket,urun,il)

//?number (sayısal veri türleri)
let dogumYili = 1999
let id = 5
let havaDerece = 23
console.log(dogumYili,id,havaDerece)

//?array (Listeler anlamınada gelmektedir,toplu veri tutar)
let renkler = ["sarı","beyaz","siyah","yeşil","kırmızı"]
console.log(renkler)

//*Dizi içerisinde veri çekmek (dizi içerisinde elemanlar index numarasına göre verilir)
console.log(renkler[0]) //sarı
console.log(renkler[3]) //yeşil

//*length dizi uzunluğunu bize verir (eleman sayısı diyebiliriz)
let renklerLenght = renkler.length
console.log(renkler)

//*dizideki son elemanı almak için (dizi uzunluğundan -1 çıkartılır)
console.log(renkler[renkler.length-1])

//?obejeler (key-value değerine göre veriler alır (veri tabanı yapısında diyebiliriz))
let kullanici = {
    isim:"mehmet",
    soyisim:"coban",
    yas:23
}
console.log(kullanici)

//*kullanıcı içerisinde keye ulaşmak
console.log(kullanici.isim)
console.log(kullanici.soyisim)

//?obje ve dizilerle toplu veriler oluşturmak
let urunler = [
    {
        title:"urun1",
        content:"urun1 içeriği yazılır",
        price:25
    },
    {
        title:"urun2",
        content:"urun2 içeriği yazılır",
        price:50
    },
    {
        title:"urun3",
        content:"urun3 içeriği yazılır",
        price:75
    },
]

console.log(urunler) //*[{},{},{}] => dizi içerisindeki toplu objeler tutulur

//*veriye ulaşmak (0. indexdeki content verisini çeker)
console.log(urunler[0].content) 

//?boolean
//*boolean bizlere true-false  döndürür
let veriDurum = true
let veriDurum2 = false
console.log(veriDurum,veriDurum2)

//?undefined
//*undefined tanımsız bir değer anlamına gelir (değişken çekilirken tanımsız bir ifade değerine denk gelirse undefined döndürür)
let tanimSizDeger = undefined
console.log(tanimSizDeger)

//?null
//*null boş bir değer anlamına gelir (çekilen değişkenin içerisinde veri yoksa null değeri verilir)
let bosDeger = null
console.log(bosDeger)