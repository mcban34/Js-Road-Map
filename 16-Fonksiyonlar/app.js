
//? Standart Fonksiyon 
// En yaygın kullanılan fonksiyon türüdür. 
// Fonksiyon adı ve parametreler belirtilir, içerisinde işlemler yapılır ve bir değer döndürülür.

function toplama(a, b) {
    return a + b;
}
console.log(toplama(2, 3)); // 5


//? Anonim Fonksiyon
// Anonim fonksiyonlar, isim vermeden doğrudan bir değişkene atanabilen fonksiyonlardır. 
// Değişken üzerinden fonksiyonu çağırabilirsiniz.

let carpma = function (a, b) {
    return a * b;
};
console.log(carpma(4, 5)); // 20

let selamla = function (isim) {
    console.log("Merhaba, " + isim);
};

selamla("Berk"); // Merhaba, Berk




//? Arrow (Ok) Fonksiyonları
// Arrow fonksiyonları, daha kısa ve okunabilir bir sözdizimi sunar. 
// Fonksiyon gövdesi süslü parantezlerle veya kısa bir ifadeyle yazılabilir. 
// Arrow fonksiyonları, bağlamı otomatik olarak bağlar ve this davranışını değiştirir.

const kare = (x) => {
    return x * x;
};

console.log(kare(3)); // 9


const selamver = (isim) => {
    console.log("Merhaba, " + isim);
};

selamver("Berk"); // Merhaba, Berk


const ciftMi = (sayi) => sayi % 2 === 0;

console.log(ciftMi(4)); // true

//? IIFE (Immediately Invoked Function Expression)
// IIFE, tanımlandığı anda otomatik olarak çağrılan ve bir kez çalışan bir fonksiyondur. 
// Bu tür fonksiyonlar genellikle kapsam sızıntısını önlemek veya 
// modül benzeri yapılar oluşturmak için kullanılır.

(function () {
    console.log("Bu bir IIFE'dir.");
})();


(function (ad) {
    console.log("Merhaba, " + ad);
})("Berk");


(function () {
    var mesaj = "Bu bir IIFE içindeki yerel değişkendir.";
    console.log(mesaj);
})();


//? Generator Fonksiyonu
// Generator fonksiyonları, ara bellekte duraklatılabilen ve devam edilebilen özel fonksiyonlardır. 
// yield ifadesi, fonksiyonun duraklatılmasını sağlar ve sonraki next() çağrısıyla devam edilir.
function* sayilar() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = sayilar();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3


function* artanSayilar() {
    let sayi = 0;
    while (true) {
        yield sayi;
        sayi++;
    }
}

const iterator2 = artanSayilar();

console.log(iterator2.next().value); // 0
console.log(iterator2.next().value); // 1
console.log(iterator2.next().value); // 2


function* fibonacci() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const iterator3 = fibonacci();

console.log(iterator3.next().value); // 0
console.log(iterator3.next().value); // 1
console.log(iterator3.next().value); // 1

/* 
Iterator, JavaScript'te bir döngü veya dizi üzerinde gezinmek için kullanılan bir nesnedir. 
İteratörler, bir sonraki değeri döndürmek için next() metodunu 
kullanan bir protokole uyan nesnelerdir. Her next() çağrısı, iki öğeden oluşan bir 
nesne döndürür: value (değer) ve done (tamamlandı) özellikleri.

İteratörler, for...of döngüsü veya while döngüsü gibi yapılarla kullanılabilir ve 
veri koleksiyonları üzerinde gezinmek için yaygın olarak kullanılır. 
İteratör protokolü, bir veri yapısının nasıl üzerinde gezileceğini ve 
her adımda ne döndüreceğini tanımlar.
*/