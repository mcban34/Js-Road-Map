//!ASENKRON PROGRAMLAMA
/*
Asenkron programlama, bir programın işlemleri sıralı olarak değil, eş zamanlı olarak gerçekleştirebilmesini sağlayan bir programlama yaklaşımıdır. 
Bu yaklaşım, işlem sürelerinin uzun olduğu durumlarda, giriş/çıkış işlemlerinin (dosya okuma/yazma, ağ istekleri, veritabanı sorguları gibi) 
bekleme sürelerinde zaman kaybetmeyi önler ve programın daha etkin bir şekilde çalışmasını sağlar.
*/

//!setTimeout ve setInterval birer asenkron programlama örnekleridir!

setTimeout(() => {
    console.log("1. Fonksiyon Çalıştı");
}, 3000);


setTimeout(() => {
    console.log("2. Fonksiyon Çalıştı");
}, 2000);


setTimeout(() => {
    console.log("3. Fonksiyon Çalıştı");
}, 1000); //?kodu ilk okuduğunuzda aslında yukarıdan aşşağıya doğru sırayla okunacakmış gibi düşünebilirsiniz.
//?aslında doğru kod yukarıdan aşşağıya doğru okunur fakat işlemleri sıraya alır ve önce 3. Fonksiyon çalışır. Sırasıyla 2. fonksiyon ve son olarak 1. Fonksiyon çalışır


//!async await
//*JavaScript'in asenkron programlama modelini daha okunabilir ve senkron bir şekilde yazmamızı sağlayan bir yapıdır. 
//*async anahtar kelimesi bir fonksiyonun asenkron olduğunu belirtirken, await anahtar kelimesi bir asenkron işlemin tamamlanmasını beklememizi sağlar.
 const getuser = async () => {
 let getData = await fetch("https://dummyjson.com/users")
      let data = await getData.json()
      console.log(data)
 }
getuser()


/* Örnek  */

 const getÜrünler = async () => {
     try {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts');
       let data = await response.json();
       console.log('Ürünler:', data);
     } catch (error) {
       console.log('Hata:', error);
     }
   }
  
   getÜrünler();

  //? fetch fonksiyonuyla bir API'dan kitap verilerini alıyoruz. İşlem asenkron olarak gerçekleştirilir ve veri başarıyla alınırsa, 
  //? response.json() ile JSON formatına dönüştürülür ve ekrana yazdırılır. Hata durumunda, catch bloğu çalışır ve hatayı yakalar.

//! API


//* Uygulamalarının birbirleriyle iletişim kurmasını sağlayan bir arayüzdür.

//* API'lar, veri paylaşımı, işlevsellik sağlama veya hizmetlere erişim gibi amaçlarla kullanılır. Bir uygulama, bir API'yi kullanarak başka bir uygulamayla iletişim kurabilir ve bu şekilde veri alışverişi yapabilir veya belirli bir işlevi gerçekleştirebilir.




//! FETCH 

//* fetch() fonksiyonu, web tarayıcılarında bulunan bir API'dir ve HTTP isteklerini yapmak için kullanılır. fetch() fonksiyonu da asenkron bir işlem gerçekleştirir.

//* Genellikle fetch() fonksiyonu ile bir API'ye GET, POST, PUT, DELETE gibi HTTP istekleri yapabilir ve isteğe bağlı olarak veri alabilir veya gönderebilirsiniz.

//! Get Örneği

// fetch('https://api.example.com/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log('Hata:', error));

  //TODO Yukarda yer alan örnekte .then() yöntemi, gelecekte tamamlanacak bir değer başarıyla tamamlandığında çalışacak olan bir geriçağıran fonksiyonu tanımlamak için kullanılır.
  //TODO .catch() yöntemi, gelecekte tamamlanacak olan değer hata döndürdüyse içerisinde çalışacak olan kod bloğunu barındırır.


//! Post Örneği

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ title: 'Başlık', body: 'İçerik', userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('Hata:', error));

//TODO Yukarda yer alan örnekte method:'POST' HTTP isteğinin türünü belirtir. Genellikle GET, POST, PUT, DELETE gibi yaygın HTTP metodlarından biri kullanılır.
//TODO Headers (headers): HTTP isteğiyle gönderilecek olan başlıkları (header) belirtir. Başlıklar, isteğin içeriği hakkında bilgi veren anahtar-değer çiftleridir. Örnekteki 'Content-Type': 'application/json' başlığı, gönderilen verinin JSON formatında olduğunu belirtir. 
//TODO Body (body): HTTP isteğiyle gönderilecek olan veriyi belirtir. Bu veri, genellikle POST veya PUT isteklerinde kullanılır


//! Delete Örneği
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'DELETE'
})
  .then(response => {
    if (response.ok) {
      console.log('İstek başarıyla tamamlandı.');
    } else {
      throw new Error('İstek başarısız oldu.');
    }
  })
  .catch(error => console.log('Hata:', error));

//! JSON örneği

fetch('./product.json')
.then(res=>res.json())
.then(data =>console.log(data))


