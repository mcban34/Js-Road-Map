
// ! SINIFLAR

// * 1- Bildirimsel (Declaration) Sınıflar: 

// * Class anahtar kelimesiyle tanımlanan ve değişkenlere atanmayan sınıflardır.
// * Bu tür sınıflar, genellikle bir dosyanın veya bir kod bloğunun içinde tanımlanır ve diğer kod bölümlerinden erişilebilirler.

// ? Örnek 1
class Hayvan {
  constructor(ad, tur) {
    this.ad = ad;
    this.tur = tur;
  }

  sesCikar() {
    console.log("Hayvan ses çıkarıyor...");
  }

  tanit() {
    console.log(`Ben bir ${this.tur} hayvanıyım ve adım ${this.ad}.`);
  }
}

const kopek = new Hayvan("Karabaş", "köpek");
kopek.sesCikar(); // Hayvan ses çıkarıyor...
kopek.tanit(); // Ben bir köpek hayvanıyım ve adım Karabaş.

// ? Örnek 2

class Ogrenci {
  constructor(ad, soyad, numara) {
    this.ad = ad;
    this.soyad = soyad;
    this.numara = numara;
  }

  ogrenciBilgileriniGetir() {
    console.log(`Öğrenci Bilgileri: ${this.ad} ${this.soyad}, Numara: ${this.numara}`);
  }
}

const ogrenci1 = new Ogrenci("Ahmet", "Yılmaz", 12345);
ogrenci1.ogrenciBilgileriniGetir(); // Öğrenci Bilgileri: Ahmet Yılmaz, Numara: 12345

// * 2- İfadeli (Expression) Sınıflar: 

// * Class anahtar kelimesiyle tanımlanan ve bir değişkene atanabilen sınıflardır. 
// * Bu tür sınıflar, genellikle fonksiyon ifadeleriyle benzer bir şekilde kullanılır ve 
// * genellikle bir ifade içinde oluşturulur veya fonksiyonlara parametre olarak geçirilir.

// ? Örnek 1

const HesapMakinesi = class {
  constructor() {
    this.sonuc = 0;
  }

  topla(sayi) {
    this.sonuc += sayi;
  }

  cikar(sayi) {
    this.sonuc -= sayi;
  }

  getSonuc() {
    return this.sonuc;
  }
};

const hesapMakinesi = new HesapMakinesi();
hesapMakinesi.topla(5);
hesapMakinesi.cikar(3);
console.log(hesapMakinesi.getSonuc()); // 2

// * 3- Fonksiyon tabanlı sınıflar:

// * Fonksiyon tabanlı sınıflar, JavaScript'te eski bir sınıf yapısıdır ve 
// * ES6'dan önce sınıfların tanımlanmasında yaygın olarak kullanılırdı.
// * Fonksiyon tabanlı sınıflar, bir fonksiyonun bir sınıf olarak davranmasını sağlayan ve 
// * new anahtar kelimesiyle örneklerin oluşturulmasını sağlayan bir yapıdır.

function Sinif(ad) {
  this.ad = ad;

  this.tanit = function() {
    console.log(`Benim adım ${this.ad}.`);
  };
}

const nesne = new Sinif("Tuğçe");
nesne.tanit(); // Benim adım Tuğçe.


// ! PROTOTİPLER

// * 1. Prototipler, JavaScript'teki nesnelerin temel yapı taşlarıdır.
// *    Nesneler, prototip tabanlı olarak oluşturulur ve prototiplerden özellik ve davranışları miras alır.

// * 2. Prototip tabanlı programlamada, her nesnenin bir prototipi vardır.
// *    Bir nesne üzerinde bir özellik veya metot arandığında, önce nesnenin kendisinde bulunup bulunmadığı kontrol edilir,
// *    sonra nesnenin prototipi üzerinde kontrol edilir ve bu işlem prototip zinciri boyunca devam eder.

// * 3. JavaScript'te prototipler, farklı şekillerde oluşturulabilir.
// *    İki yaygın prototip türü: Constructor fonksiyonlar ve obje örnekleri üzerinden oluşturulan prototiplerdir.

// * 4. Constructor fonksiyonları kullanarak prototipler oluşturabiliriz.
// *    Bir constructor fonksiyonu, new anahtar kelimesi ile çağrıldığında yeni bir nesne oluşturur.
// *    Constructor fonksiyonunun prototipi, yeni nesnenin prototipi olarak atanır.


// ? Örnek 1: Constructor Fonksiyonlarıyla Prototipler

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
// Constructor fonksiyonunun prototipine yeni bir metot eklenir
Person.prototype.introduce = function() {
  console.log("Merhaba, ben " + this.name + " ve " + this.age + " yaşındayım.");
};

// Bir Person nesnesi oluşturulur
var person1 = new Person("Tuğçe", 34);

// Prototipin metodu çağrılır
person1.introduce(); // Merhaba, ben Tuğçe ve 34 yaşındayım.

// ? Örnek 2: Objeler Üzerinden Oluşturulan Prototipler

var animal = {
  type: "Köpek",
  sound: "Hav hav!",
  makeSound: function() {
    console.log(this.sound);
  }
};

// Yeni bir nesne oluşturulur ve prototipi animal objesi olarak atanır
var dog = Object.create(animal);

// Yeni nesnenin özellikleri üzerinde işlem yapılır
dog.type = "Bulldog";

// Prototipin metodu çağrılır
dog.makeSound(); //  Hav hav!

// * 5. Prototipler, nesneler arasında veri ve davranış paylaşımını kolaylaştırır.
// *    Birden çok nesne, aynı prototipi kullanarak aynı özelliklere ve metotlara erişebilir.

// * 6. Prototip zinciri, bir nesnenin prototipini bulmak için izlenen bir zincir yapısıdır.
// *    Eğer bir nesnede aranan bir özellik veya metot bulunamazsa, JavaScript otomatik olarak prototip zincirini kontrol eder.

// * 7. Prototip zinciri, Object.prototype'e kadar devam eder.
// *    Object.prototype, JavaScript'teki tüm nesnelerin en üstündeki prototipi temsil eder.

// * 8. Object.prototype, temel metotları ve özellikleri içerir.
// *    Tüm nesneler, Object.prototype'teki metotlara ve özelliklere erişebilir.



// ? Örnek 3: Prototip Zinciri

function Vehicle() {
  this.engine = "Benzin";
}

// Constructor fonksiyonunun prototipine yeni bir metot eklenir
Vehicle.prototype.start = function() {
  console.log("Araç çalıştı.");
};

// Yeni bir nesne oluşturulur ve prototipi Vehicle constructor fonksiyonunun prototipi olarak atanır
var car = new Vehicle();

// Prototip zinciri kullanılarak metot çağrılır
car.start(); // Araç çalıştı.

// * 9. Prototipler, nesnelerin özelliklerini ve metotlarını paylaşarak bellek kullanımını optimize eder.
// *   Bir nesne üzerindeki özellikler, prototip üzerinden paylaşılır ve her bir nesne ayrı bir kopya tutmaz.

// * 10. Prototipleri kullanırken dikkat edilmesi gereken, prototip üzerinde yapılan değişikliklerin
// *   prototipi miras alan tüm nesneleri etkileyeceğidir. Bu yüzden dikkatli olmak önemlidir.

// * Bu örnekler, prototipler ve prototip türleri hakkında daha fazla bilgi sağlamak için kullanılabilir.
// * Prototipler, JavaScript'teki nesne tabanlı programlamanın temel bir parçasıdır ve güçlü bir özellik mirası mekanizması sunar.
