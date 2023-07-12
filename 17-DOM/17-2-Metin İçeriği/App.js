
//!js'de dom içeriğinde metin içeriklerine ulaşmak

//?innerHTML
//*öncelikle seçmek istediğimiz metinini seçmeliyiz mesela elimizde bir adet p etiketi olsun

let paragraf = document.querySelector(".paragraf")
console.log(paragraf) //<p class="paragraf">Benim Paragrafım</p>

//*bildiğiniz gibi doğrudan elemente ulaşmak elementi bizlere verir
//*elementin içeriğindeki yazıyı almak için innerHTML kullanalım

console.log(paragraf.innerHTML)

//?innerText
let paragraf2 = document.querySelector(".paragraf2")
console.log(paragraf2.innerText) //Benim Paragrafım2

//*innerHTML & innerText mantıksal olarak aynı işlemi yapmaktadır
//*peki bu yardımcı elementlerim aynı işlemi yapıyorsa farklı nelerdir?

//*mesela bir öğeye ulaşıp içeriğini değiştirmeye çalışalım

let paragraf3 = document.querySelector(".paragraf3")
paragraf3.innerHTML="bu yazı değiştirildi!"

//* paragrafım önceki hali "Benim Paragrafım3" iken 
//* ben js'de innerrHTMLden faydalanarak içeriği değiştiriyoruz
//* ve paragrafımın yeni hali "bu yazı değiştirildi!" olarak değişti

//*yeni bir örnekte ise innerHTML kullarak paragrafın içeriğini değiştirirken
//*paragrafın içerisine html bir elementiyle birlikte yükleyelim

let paragraf4 = document.querySelector(".paragraf4")
paragraf4.innerHTML="<b>Paragrafımı kalın yazılı yaptım!</b>"

//*görüldüğü üzere innerHTML içerisinde <b></b> taglarını kullanıp
//*bu tagları paragrafım içerisinde sağlıklı bir şekilde kullanabiliriyorum

//*ancak innerTextde aynı durum söz konusu değildir!

let paragraf5 = document.querySelector(".paragraf5")
paragraf5.innerText="<b>deneme yazısı</b>" //<b>deneme yazısı</b>

//*innerText html bir elementi algılayamaz ve girilen bütün değerleri text değerleri olarak algılar