//!DOM NEDİR?
//*DOM (Document Object Model), JavaScript'in web sayfasıyla etkileşimde bulunmasını sağlayan bir API'dir. DOM, HTML veya XML belgesinin bir temsili olarak oluşturulan bir ağaç yapısını ifade eder. Bu ağaç yapısı, HTML öğelerini, özelliklerini ve metin içeriğini programatik olarak manipüle etmenize olanak sağlar.

//!ÖĞELERE ULAŞMAK
//?getElementById() => elementin idsine göre veriye ulaşır
let baslik = document.getElementById("Idbaslik")
console.log(baslik)//<h2 id="baslik">burada başlık yazıyor</h2>

//?getElementsByClassName => elementin classına göre veriye ulaşır
let baslik2 = document.getElementsByClassName("classBaslik")
console.log(baslik2) //HTMLCollection [h3.classBaslik]

//*getElementsByClassName bizlere classa ulaşırken bir HTMLCollection döner
//*bunun başlıca sebebi bir elementin birden fazla classa sahip olabilmesidir.
//*peki bize dönen HTMLCollection istediğimiz işlemleri nasıl gerçekleştireceğiz?
//*örnek olarak elimizde 4 adet aynı classa sahip buton olduğunu varsayalım

let mybutton = document.getElementsByClassName("myButton")
for (const i of mybutton) {
    console.log(i) //* elemanlara tek tek ulaşmak için collectionu döngü ile dönebiliriz
}

//?getElementsByTagName => elementin tag ismine göre veriye ulaşır
let tagTitle = document.getElementsByTagName("h5")
console.log("tag",tagTitle)

//*TagName ile ulaşılan elemanlarda bizlere HTMLCollection olarak döner

//?querySelector => elementin id,class,tag vb. göre veriye ulaşır
//*classa ulaşmak için seçinin başına "." koymak yeterlidir
//*idye göre ulaşmak için seçinin başına "#" koymak yeterlidir
let querySelClass = document.querySelector(".querySelClass")

let querySelId = document.querySelector("#querySelId")

let querySelTag = document.querySelector("span")

console.log(querySelClass,querySelId,querySelTag)

//*birşey fark ettiniz mi?
//*birden fazla classa sahip olan taglerde yada aynı şey birden fazla aynı taga sahip elementler için
//*toplu şekilde elemanları bana vermesi gerekirken ilk bulduğu elemanı bana dönüyor.

//*doğrudan ilk bulduğu classa işlem yaptıracaksak yada ilk bulduğu tage işlemler yaptıracaksak
//*yukarıdaki işlemlerin mantığı doğru fakat toplu verilere erişmek için doğrudan querySelector kullanılmaz
//*Peki bunun yerine ne kullanacağız ?


//?querySelectorAll
let queryAll = document.querySelectorAll("span")
console.log(queryAll) //NodeList(3) [span, span, span]

//*querySelectorAll toplu şekilde veriye ulaşır ve bizlere NodeList verir

// ?nodeList ve htmlCollection arasındaki fark nedir?
// *nodeList statik bir yapıdadır ve dizi içerisine yeni eleman eklendiğinde dizinin değerini değiştiremez
// *htmlCollection ise dinamik bir yapıdadır ve dizi elemanları içerisinde sürekli olarak güncelleme yapılabilir

let myList = document.getElementsByClassName("myList")
let myListElement = myList[0].getElementsByTagName("li")
console.log(myListElement.length) //htmlCollection verisi olarak 3 döner

let newLi = document.createElement("li")
newLi.innerHTML="react"
myList[0].appendChild(newLi) //yeni bir eleman oluşturup bu htmlCollectionun içerisinde yeni bir eleman eklenir

console.log(myListElement.length) //htmlCollection verisi artık dinamik olarak 4 döner

//*aynı işlemi querySelector ile yaparsak elemanı ekledikten sonraki length değeri değişmez
//*çünkü querySelector bizlere nodeList döner ve nodelist güncellenemez ve statik bir yapıdadır







