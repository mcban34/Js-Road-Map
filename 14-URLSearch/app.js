//! URLSearchParams

//* JavaScript nesnesi, bir URL'nin sorgu parametrelerini işlemek için kullanılmaktadır.
//* Bu nesne, URL sorgu dizisi parçalarını okumak, ekleme ve kaldırma yapmak, 
//* parametre değerlerini almak veya güncellemek gibi işlemleri gerçekleştirmenize olanak tanımaktadır.


//* URL'deki sorgu parametreleri
// let queryString = 'https://www.example.com/search&q=apple&category=fruits&page=1';

// *URLSearchParams nesnesi oluşturma
// let urlParams = new URLSearchParams(queryString);

//* Sorgu parametrelerine erişim için 'get' kullanıyoruz. 
// console.log(urlParams.get('q')); // "apple"
// console.log(urlParams.get('category')); // "fruits"
// console.log(urlParams.get('page')); // "1"



// let urlParams = new URLSearchParams();
//* set() yöntemi ile sorgu parametreleri ve değerleri eklenir.
// urlParams.set('q', 'apple');
// urlParams.set('category', 'fruits');
// urlParams.set('page', '1');
//* toString() yöntemi kullanılarak tüm sorgu parametrelerini içeren bir dize oluşturulur.
// console.log(urlParams.toString()); 

//* delete() yöntemi ile category sorgu parametresi kaldırılır. 
// urlParams.delete('category');

// console.log(urlParams.toString()); // "q=apple&page=1"
//* remove() yöntemi ile q sorgu parametresi kaldırılır.
// urlParams.remove('q');

// console.log(urlParams.toString()); // "page=1"



//? SORGU PARAMETRELERİNİ OLUŞTURMA VE URL'YE EKLEMEĞE ÖRNEĞİ

// let baseUrl = 'https://www.example.com/search';
// let searchQuery = 'apple';
// let category = 'fruits';
// let page = 1;

// let urlParams = new URLSearchParams();
// urlParams.set('q', searchQuery);
// urlParams.set('category', category);
// urlParams.set('page', page);

// let fullUrl = `${baseUrl}?${urlParams.toString()}`;

// console.log(fullUrl);
//* Çıktı: "https://www.example.com/search?q=apple&category=fruits&page=1"


//? SORGU PARAMETRELERİNE URL'DEN OKUMA ÖRNEĞİ

// let url = 'https://www.example.com/search?q=apple&category=fruits&page=1';
// let urlParams = new URLSearchParams(url.search);

// console.log(urlParams.get('q')); // "apple"
// console.log(urlParams.get('category')); // "fruits"
// console.log(urlParams.get('page')); // "1"

