
// ! İŞARETÇİLER

//* İşaretçiler, JavaScript'te referanslar olarak kullanılan özel veri türleridir.
//* Bellekteki bir nesnenin konumunu temsil eder.

// ! İşaretçi oluşturma ve atama
let pointer = null; //? İlk başta bir işaretçiye null değeri atanabilir
let obj = { name: "Tuğçe" }; //? Bir nesne oluşturuldu
pointer = obj; //? İşaretçi, nesnenin konumunu gösterir

// ! İşaretçi kullanarak nesneye erişim
console.log(pointer.name); // Tuğçe

// ! İşaretçi ile nesne özelliklerini güncelleme
pointer.name = "Jale";
console.log(obj.name); //   Jale

// ! İşaretçi kullanarak yeni özellikler eklemek
pointer.age = 34;
console.log(obj.age); //   34

// ! İşaretçi kullanarak nesneyi silmek
delete pointer.name;
console.log(obj.name); //   undefined

// ! İşaretçi ile dizi erişimi
let array = [1, 2, 3];
let arrayPointer = array;
console.log(arrayPointer[0]); //   1

// ! İşaretçi ile diziye yeni eleman ekleme
arrayPointer.push(4);
console.log(array); //   [1, 2, 3, 4]

// ! İşaretçi kullanarak fonksiyonlara erişim
let greet = function () {
  console.log("Merhaba!");
};
let greetPointer = greet;
greetPointer(); //   Merhaba!

// ! İşaretçi kullanarak fonksiyonları değiştirme
greet = function () {
  console.log("Selamlar!");
};
greetPointer(); //   Selamlar!




//! REFERANS TÜRLERİ


// * Referans türleri, JavaScript'te verinin referanslarının kopyalandığı türlerdir.
// * Bu türler, bir değişkenin bellekteki orijinal veriyi işaret etmesini sağlar.

// ! Referans türü: Diziler
let array1 = [1, 2, 3];
let array2 = array1; // ? array2, array1'in referansını alır

array2.push(4);
console.log(array1); //   [1, 2, 3, 4]

// ! Referans türü: Nesneler
let obj1 = { name: "Tuğçe" };
let obj2 = obj1; // ? obj2, obj1'in referansını alır

obj2.name = "Jale";
console.log(obj1.name); //   Jane

// ! Referans türü: Fonksiyonlar
let greet1 = function () {
  console.log("Merhaba!");
};
let greet2 = greet1; // ? greet2, greet1'in referansını alır

greet2(); //   Merhaba!

// ! Fonksiyonun referansını değiştirme
greet1 = function () {
  console.log("Selamlar!");
};
greet2(); //   Merhaba!

// ! Referans türü: Nesne kopyalama (shallow copy)
let original = { name: "Tuğçe", age: 34, hobbies: ["reading", "coding"] };
let copy = Object.assign({}, original); // ? original nesnesinin kopyası oluşturulur

copy.name = "Jale";
copy.hobbies.push("swimming");

console.log(original.name); //   Tuğçe
console.log(original.hobbies); //   ["reading", "coding", "swimming"]

// ! Referans türü: Nesne kopyalama (deep copy)
let original2 = { name: "Tuğçe", age: 30, hobbies: ["reading", "coding"] };
let copy = JSON.parse(JSON.stringify(original2)); // ? original2 nesnesinin kopyası oluşturulur

copy.name = "Jale";
copy.hobbies.push("swimming");

console.log(original.name); //   Tuğçe
console.log(original.hobbies); //   ["reading", "coding"]

