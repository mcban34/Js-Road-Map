//! locaStorage
//* yerel depolama alanında veri saklamak için kullanılır.
//* tarayıcıyı kapattığınızda veya sayfayı yenilediğinizde bile verilerin korunmasını sağlar.

//* 'localStorage' kullanarak Veri Saklama, Veri Erişimi yönetimi ve farklı Veri türlerini saklamak için aşağıda ki örneklere göz atabilirsiniz.

//* Veri ekleme
localStorage.setItem("username", "Emre"); // 'setItem' ile verileri ekleyebilirsiniz.
localStorage.setItem("age", "28");

//* Veri alma
var username = localStorage.getItem("username"); // 'getItem' yöntemiyle veriyi çekebilirsiniz.
var age = localStorage.getItem("age");

//* Veri silme
localStorage.removeItem("age"); // 'removeItem 'ile veri silinebilir 'clear' ile tüm veriler temizlenebilir.

let user = {
  name: "Emre",
  age: 28,
};
localStorage.setItem("user", JSON.stringify(user));

let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // John
console.log(storedUser.age); // 25

//! JSON.parse() ve JSON.stringify()

//* JSON.parse() JSON formatındaki bir string'i JavaScript nesnesine dönüştürmek için kullanılır.

//* JSON.stringify() JavaScript nesnesini JSON formatına dönüştürür. Bu yöntem ile JSON verilerini farklı şekillerde işlemek ve veri tabanında tutmak için kullanılabilir.

//* Özetle, JSON.parse() JSON formatındaki veriyi alır ve onu JavaScript nesnesine çevirir. JSON.stringify() yöntemi ise JavaScript kodunu JSON dosyasına dönüştürür


/* Örnek */

//? Aşağıda ki örnek üzerinden JavaScript nesnesini JSON.stringify() yöntemiyle 'localStorage' a kayıt edilebilecek JSON formatına dönüştürüyoruz.

let yetenek = [
    {   
        title: "HTML",
        level: 6,
    },
    {
        title: "CSS",
        level: 9,
    },
    {
        title: "JS",
        level: 10,
    },
    {
        title: "React",
        level: 3,
    },
    {
        title: "Redux",
        level: 4,
    },
    { 
        title: "Node", 
        level: 2 
    },
    { 
        title: "MongoDB", 
        level: 8 
    },
];

let yetenekJSON = JSON.stringify(yetenek)    // JavaScript kodlarını JSON verisine dönüştürüyoruz.
localStorage.setItem('yetenek', yetenekJSON) // 'yetenek' anahtarını kullanarak localStora'a kaydediyoruz.

//? JSON olarak kaydedilen verileri JavaScript nesnesine çevirmek için aşağıda örnek kodlar yer almaktadır.


let storedYetenek = localStorage.getItem('yetenek'); // 'yetenek' anahtarıyla kaydedilen JSON verisini localStorage'dan çekiyoruz
let parsedYetenek = JSON.parse(storedYetenek); // '' JSON verisini javaScript  kodlarına çeviriyoruz.

console.log(parsedYetenek[0].title); // "HTML"   
console.log(parsedYetenek[0].level); // 6



/* Örnek */

let users = [
    {
      id: 1,
      name: "Emre Sarıgül",
      age: 28,
      email: "neos.emre.sarigul@gmail.com"
    },
    {
      id: 2,
      name: "Mehmet Çoban",
      age: 24,
      email: "neos.mehmet.coban@gmail.com"
    },
  ];
  
  try {

    // localStorage'a kaydetme
    localStorage.setItem("users", JSON.stringify (users));
    console.log("Veri localStorage'a kaydedildi.");
  
    // localStorage'dan alınan veriyi JavaScript kodlarına dönüştürme
    let storedUsers = JSON.parse(localStorage.getItem("users"));
  
    // JSON verisini objeye dönüştürme
    console.log(storedUsers);
    console.log(storedUsers[0].name); // Emre Sarıgül

  } catch (error) {
    console.log("Bir hata oluştu:", error);
  }