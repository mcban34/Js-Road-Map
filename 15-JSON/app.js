
//* JSON (JavaScript Object Notation), verileri depolamak, iletmek ve alışveriş yapmak için yaygın olarak kullanılan bir veri biçimidir. JSON, basit ve okunabilir bir metin formatıdır.


//* JSON veri biçimi key:value kullanmaktadır.


let veri =[
    {
        "ad": "John",
        "soyad": "Doe",
        "yaş": 30,
        "evli": false,
        "hobiler": ["yürüyüş", "yüzme", "müzik dinleme"],
        "adres": {
          "şehir": "New York",
          "posta kodu": "10001"
        }
      }
]

//* JavaScript'te JSON verisini işlemek için JSON adlı bir global nesne kullanılır. JSON nesnesi, parse() ve stringify() gibi methodlar içerir.
//* Bu methodlarılocalStorage konusunda işlenmiştir. Detay için localStorage konusuna bakabilirsiniz.

//! JSON.parse(): JSON metnini JavaScript nesnesine dönüştürmek için kullanılır.
//! JSON.stringify(): JavaScript nesnesini JSON metnine dönüştürmek için kullanılır. 

/* Örnek-1  */

//? Aşağıdaki örnekte JSON verisi javaScript nesnesine dönüştürülmüştür.

let jsonMetin = '{"ad":"Emre","soyad":"Sarıgül","yaş":28,"evli":true}';
let kullanici = JSON.parse(jsonMetin);

console.log(kullanici.ad); // Emre
console.log(kullanici.soyad); // Sarıgül
console.log(kullanici.yaş); // 28
console.log(kullanici.evli); // true

/* Örnek-2 Aşağıdaki örnekte JavaScript verisi JSON metnine dönüştürülmüştür. */

let users = {
  ad: "Emre",
  soyad: "Sarıgül",
  yaş: 28,
  evli: true
};

const jsonVeri = JSON.stringify(users);
console.log(jsonVeri);
// {"ad":"Emre","soyad":"Sarıgül","yaş":28,"evli":true}

//* JSON, web uygulamalarında veri alışverişi yaparken yaygın olarak kullanılır. 
//* JavaScript'in JSON desteği sayesinde, verileri kolayca alabilir, gönderebilir ve işleyebilirsiniz.