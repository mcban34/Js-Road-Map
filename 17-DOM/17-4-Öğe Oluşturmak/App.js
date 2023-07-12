//* JavaScript DOM (Document Object Model) kullanarak, HTML sayfasında yeni öğeler oluşturabilir ve bu öğelere içerik, stil ve diğer özellikler ekleyebilirsiniz. 
//* İşte öğe oluşturma işlemini adım adım açıklayan bir örnek:


//! createElement()
//* İlk olarak, yeni bir öğe oluşturmak için document.createElement() yöntemini kullanmalısınız. 
//* Bu yöntem, belirtilen etikete sahip boş bir öğe döndürür. Örneğin, bir div öğesi oluşturmak için:

let div = document.createElement('div');

//* Burada oluşturulan öğeye içerik eklemek isterseniz, innerHTML özelliği kullanabilirsin.
//* innerHTML özelliğine atanan değer, öğenin içeriğini temsil eden bir HTML dizesi olmalıdır.

div.innerHTML = "Merhaba, Dünya!";


//! appenChild
//* Oluşturulan öğeyi sayfaya eklemek için, 
//* öğenin ekleneceği konumu belirlemek ve ardından appendChild() yöntemini kullanmak gerekir. 
//* Örneğin, bir body öğesine yeni bir div öğesi eklemek için:

document.body.appendChild(div);

//* Oluşturulan öğeye stil eklemek veya diğer özellikleri ayarlamak isterseniz, 
//* ilgili özellikleri kullanabilirsiniz. Örneğin, bir stil sınıfı atamak için className özelliğini kullanabilirsiniz:

div.className = "my-class";

//? Özet:

// Yeni bir div öğesi oluştur
let div = document.createElement('div');

// İçeriğini ayarla
div.innerHTML = "Merhaba, Dünya!";

// Stil sınıfı ekle
div.className = "my-class";

// Oluşturulan öğeyi sayfaya ekle
document.body.appendChild(div);


//! remove

//* DOM ağacında belirli bir öğeyi kaldırmak için kullanılır.

let innerDiv = document.getElementById("innerDiv");

//* Öğeyi DOM ağacından kaldırıyoruz
innerDiv.remove();

//* Kaldırdığımız öğeyi yeniden DOM ağacına ekliyoruz
let container = document.getElementById("container");
container.appendChild(innerDiv);




let divElement = document.getElementById("myDiv");

let paragraf1 = document.createElement("p");
paragraf1.textContent = "Bu birinci paragraf.";

let paragraf2 = document.createElement("p");
paragraf2.textContent = "Bu ikinci paragraf.";

divElement.append(paragraf1, paragraf2); // iki paragrafı da div öğesine ekliyoruz

/* Örnek */

let x =document.getElementById("eski");
x.innerHTML = "<h1>Bu yeni içeriğim,hayırlı olsun</h1><p>Bu yeni paragraftır.</p>";

let yeniParagraf= document.getElementById("myİD") // yeni bir p elemanı oluşturduk.
yeniParagraf.textContent="Bu yeni bir paragraftır." // yeni elemente içerik yazıldı.
let myİD =document.getElementById("myİD");
yeniParagraf.appendChild(myİD);