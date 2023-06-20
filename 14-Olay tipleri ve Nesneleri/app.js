
// ! 1. OLAY DİNLEME

// ? Belirli bir olayı dinlemek için addEventListener() metodu kullanılır.
// ? İlgili HTML elementinin üzerine olay dinleyicisi ekleyebilirsiniz.

let button = document.querySelector('button');

button.addEventListener('click', function() {
  console.log('Butona tıklandı!');
});

// ! 2. OLAY İŞLEYİCİLERİ

// ? Olay işleyicileri, belirli bir olay gerçekleştiğinde çalıştırılan fonksiyonlardır.
// ? Olay dinleyicileri, HTML elementine eklenen olayın türüne göre çalışır.

function handleClick() {
  console.log('Butona tıklandı!');
}

button.addEventListener('click', handleClick);

// ! 3. OLAY NESNELERİ

// ? Olay nesneleri, olayın ayrıntılarını içeren özel nesnelerdir.
// ? Olay işleyicileri, olay nesnesini parametre olarak alabilir ve bu nesne üzerinden olay bilgilerine erişebilir.

function handleKeyPress(event) {
  console.log('Tuşa basıldı: ' + event.key);
}

document.addEventListener('keydown', handleKeyPress);

// ! 4. OLAY TİPLERİ

// ? JavaScript'te birçok olay türü vardır. İşte bazı yaygın olay türleri ve örnekleri:

// * 1- click: Bir elemente tıklandığında gerçekleşir.

let button2 = document.querySelector('button2');

button2.addEventListener('click', function() {
  console.log('Butona tıklandı!');
});

// * 2- mouseover: Bir elementin üzerine gelindiğinde gerçekleşir.

let element = document.querySelector('.element');

element.addEventListener('mouseover', function() {
  console.log('Elementin üzerine gelindi!');
});

// * 3- keydown: Bir tuşa basıldığında gerçekleşir.

document.addEventListener('keydown', function(event) {
    console.log('Tuşa basıldı: ' + event.key);
  });

// * 4- submit: Bir form gönderildiğinde gerçekleşir.

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Formun varsayılan davranışını engeller
  console.log('Form gönderildi!');
});

// * 5- load: Bir kaynak (örneğin resim veya sayfa) tamamen yüklendiğinde gerçekleşir.

window.addEventListener('load', function() {
    console.log('Sayfa tamamen yüklendi!');
  });

// * 6- resize: Tarayıcı penceresi yeniden boyutlandırıldığında gerçekleşir.

window.addEventListener('resize', function() {
    console.log('Pencere yeniden boyutlandırıldı!');
  });
  
// * 7- change: Bir form elemanının değeri değiştiğinde gerçekleşir.

let input = document.querySelector('input');

input.addEventListener('change', function() {
  console.log('Input değeri değişti: ' + input.value);
});

// * 8- focus: Bir form elemanı odaklandığında gerçekleşir.

let input2 = document.querySelector('input2');

input2.addEventListener('focus', function() {
  console.log('Inputa odaklandınız!');
});

// * 9- blur: Bir form elemanının odaktan çıktığında gerçekleşir.

let input3 = document.querySelector('input3');

input3.addEventListener('blur', function() {
  console.log('Inputtan odaktan çıktınız!');
});

// * 10- scroll: Bir element içeriği kaydırıldığında gerçekleşir.

let element2 = document.querySelector('.element2');

element2.addEventListener('scroll', function() {
  console.log('Element içeriği kaydırıldı!');
});

// * 11- contextmenu: Bir elemente sağ tıklandığında açılan bağlam menüsü (context menu) görüntülendiğinde gerçekleşir.

let element3 = document.querySelector('.element3');

element3.addEventListener('contextmenu', function(event) {
  event.preventDefault(); // Sağ tıklama menüsünü engeller
  console.log('Elemente sağ tıklandı!');
});

// * 12- dragstart: Bir sürükleme işlemi başlatıldığında gerçekleşir.

let draggableElement = document.querySelector('.draggable');

draggableElement.addEventListener('dragstart', function(event) {
  console.log('Element sürüklenebilir hale getirildi!');
});

// * 13- keyup: Bir tuşun serbest bırakıldığında gerçekleşir.

document.addEventListener('keyup', function(event) {
    console.log('Tuş serbest bırakıldı: ' + event.key);
  });

// * 14- keypress: Bir tuşa basılıp serbest bırakıldığında gerçekleşir (eski bir olaydır, keydown ve keyup tercih edilir).

document.addEventListener('keypress', function(event) {
    console.log('Tuşa basıldı ve serbest bırakıldı: ' + event.key);
  });

// * 15- mouseenter: Bir elemente fare imlecini getirdiğinizde gerçekleşir.

let element4 = document.querySelector('.element4');

element4.addEventListener('mouseenter', function() {
  console.log('Elemente fare imlecini getirdiniz!');
});

// * 16- mouseleave: Fare imleci bir elementten çıktığında gerçekleşir.

let element5 = document.querySelector('.element5');

element5.addEventListener('mouseleave', function() {
  console.log('Fare imleci elementten çıktı! ');
});

// * 17- mousemove: fare imlecinin konumunu takip etmek veya fare etkileşimli işlemler gerçekleştirmek için kullanılır.

let element6 = document.querySelector('.element6');

element6.addEventListener('mousemove', function(event) {
  let x = event.clientX; // Fare imlecinin X koordinatı
  let y = event.clientY; // Fare imlecinin Y koordinatı

  console.log('Fare imleci koordinatları: X=' + x + ', Y=' + y);
});

// ! ÖRNEKLER

// * Event (Olay): diğer tüm olay nesnelerinin atasıdır ve olaylarla ilgili bilgileri içerir.

const handleClick = (event) => {
    console.log('Olay Türü:', event.type);
    console.log('Hedef Element:', event.target);
  };
  
  button.addEventListener('click', handleClick);
  
// * MouseEvent (Fare Olayı): Fareyle ilişkili etkileşimleri temsil eden bir olay nesnesidir. 
// * Fare imleci konumu, tuş durumu ve fare hareketleri gibi bilgilere erişim sağlar.

const handleMouseMove = (event) => {
    console.log('X Konumu:', event.clientX);
    console.log('Y Konumu:', event.clientY);
  };
  
  box.addEventListener('mousemove', handleMouseMove);
  
// * KeyboardEvent (Klavye Olayı): Klavyeyle ilişkili etkileşimleri temsil eden bir olay nesnesidir. 
// * Basılan tuşun bilgisi, tuş kodu ve klavye durumu gibi bilgilere erişim sağlar.

const handleKeyDown = (event) => {
    console.log('Basılan Tuş:', event.key);
    console.log('Tuş Kodu:', event.keyCode);
  };
  
  input.addEventListener('keydown', handleKeyDown);
  
// * FocusEvent (Odaklama Olayı): Bir elementin odaklanma (focus) veya odaktan çıkma (blur) olaylarına ilişkin 
// * bilgileri içeren bir olay nesnesidir. Odaklanma ile ilgili ayrıntıları sağlar.

const handleFocus = (event) => {
    console.log('Odaklanma Olayı!');
  };
  
  const handleBlur = (event) => {
    console.log('Odaktan Çıkma Olayı!');
  };
  
  input.addEventListener('focus', handleFocus);
  input.addEventListener('blur', handleBlur);

// * UIEvent (Kullanıcı Arayüzü Olayı): Kullanıcı arayüzüyle ilişkili olayları temsil eden bir olay nesnesidir. 
// * Örneğin, yükseklik ve genişlik değişiklikleri, kaydırma olayları gibi bilgilere erişim sağlar.

const handleResize = (event) => {
    console.log('Yükseklik:', event.target.innerHeight);
    console.log('Genişlik:', event.target.innerWidth);
  };
  
  window.addEventListener('resize', handleResize);
  

// ! FAYDALI İPUÇLARI

// * - Olay dinleyicileri, bir elementin birden fazla olayını dinlemek için birden çok kez eklenilebilir.
// * - removeEventListener() metoduyla olay dinleyicileri kaldırılabilir.
// * - Olaylar, DOM elementleri, pencere (window) ve doküman (document) gibi farklı nesneler üzerinde gerçekleşebilir.
// * - Olay işleyicileri içinde "this" deyimi, olayı tetikleyen elementi temsil eder.

// ! ÖZET

// ? Olay Nesneleri (Event Objects):

// *Örneğin, bir fare tıklaması (click) olayı gerçekleştiğinde, bir MouseEvent nesnesi oluşturulur ve bu nesne, 
// *tıklamanın konumu, tuş bilgisi, hedef element vb. gibi bilgileri içerir.
// *Olay nesneleri, olay işleyicilerine geçirilir ve işleyici fonksiyonunun olaya erişmesini sağlar. 
// *İşleyici fonksiyon, olay nesnesine parametre olarak erişebilir ve olaya ilişkin bilgilere erişebilir.
// *Olay nesneleri, bir olay gerçekleştiğinde tarayıcı tarafından oluşturulan ve olay hakkında bilgiler içeren nesnelerdir.

// ? Olay İşleyicileri (Event Listeners):

// *Olay işleyicileri, belirli bir olay gerçekleştiğinde tetiklenen fonksiyonlardır.
// *Olay işleyicileri, bir olayın gerçekleştiği elemente veya global olarak belirli bir nesneye eklenir.
// *Bir olay gerçekleştiğinde, ilgili olay işleyicisi tetiklenir ve tanımlanan işlev çalıştırılır.
// *Olay işleyicileri, olaya tepki vermek veya olayı işlemek için kullanılır. 
// *İşleyici fonksiyonlar, olay nesnesine erişim sağlayarak, olayın detaylarına ve kaynaklarına erişebilir.