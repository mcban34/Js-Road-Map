//  ! JavaScript Matematik Yöntemleri

// * abs() Verilen sayının mutlak değerini döndürür.

let say1 = 10
let say2 = 20
console.log(Math.abs(say1-say2)) //10

// * cbrt() Verilen sayının küp kökünü döndürür.

let say3= 27
console.log(Math.cbrt(say3)) //3

// * ceil() Verilen sayıdan büyük veya ona eşit olan en küçük tamsayı değerini döndürür.

let say4 = 25.4
console.log(Math.ceil(say4)) //26

// * cos() Verilen sayının kosinüsünü döndürür.

let say5 = 100
console.log(Math.cos(say5)) //0.8623188722876839

// * hypot() Verilen sayıların karelerinin toplamının karekökünü döndürür.
// * Üçgenlerde kenar uzunluğu bulmak için kullanılır.

let say6 = 3
let say7 = 4
console.log(Math.hypot(say6,say7)) //5

// * log10() Verilen sayının 10 tabanında logaritmasını döndürür.

let say8 = 100
console.log(Math.log10(say8)) //2

// * max() Verilen sayıların büyük olanını döndürür.

let say9 = 10
let say10 = 20
console.log(Math.max(say9,say10)) //20

// * min() Verilen sayıların küçük değerini döndürür.

let say11 = 10
let say12 = 20
console.log(Math.min(say11,say12)) //10

// * sqrt() Verilen sayıların karekökünü döndürür.

let say13 = 100
console.log(Math.sqrt(say13)); //10

// * tan() Verilen sayının tanjantını döndürür.

let say14 = 10
console.log(Math.tan(say14)) //0.6483608274590866

// * trunc() Verilen sayının tam sayı kısmını döndürür.

let say15 = 15.212456
console.log(Math.trunc(say15)) //15

// * round() Verilen sayıya en yakın tam sayıyı döndürür.

let say16 = 15.212456
console.log(Math.round(say16)) //15

let say17 = 27.7845123
console.log(Math.round(say17)); //28

//* round() ile bir ondalık sayıyı en yakın büyük tam sayıya yuvarlama

let ondalikSayi1=1.1
console.log(Math.round(ondalikSayi1 + .5));

//* round() ile bir ondalık sayıyı en yakın küçük tam sayıya yuvarlama

let ondalikSayi2=1.7
console.log(Math.round(ondalikSayi2 + -.5));

// * atan2() İki argüman alan atan işlemini yapar ve sonucu radyan cinsinden döndürür.

let arg1 = 1;
let arg2 = 2;
console.log(Math.atan2(arg1, arg2)); // 0.4636476090008061

// * exp() Verilen sayının e tabanında üssünü döndürür.

let say18 = 2;
console.log(Math.exp(say18)); // 7.38905609893065

// * floor() Verilen sayıdan küçük veya ona eşit olan en büyük tamsayı değerini döndürür.

let say19 = 25.4;
console.log(Math.floor(say19)); // 25

//* floor() ile negatif bir tam sayiyi yuvarlama işlemi
let negatifSayi=-24.2
console.log(Math.floor(negatifSayi)); // -25

//*floor() ile ondalık sayıyı % cinsinden tam sayiya yuvarlamak
let ondalikSayi=0.255
console.log(`%${Math.floor(ondalikSayi*100)}`); // %25

// * pow() Verilen sayının üssünü döndürür.

let say20 = 2;
let us = 3;
console.log(Math.pow(say20, us)); // 8

// * random() 0 ile 1 arasında rastgele bir sayı döndürür.

console.log(Math.random());

//* random() 0 ile istediğimiz sayi aralığında sayi üretebilmek için üretmek istediğimiz sayi ile çarpabiliriz.

console.log(Math.random() * 11); // 0 ile 10 arasında rastgele ondalık bir sayi

//* random() ile diziden rastgele bir eleman seçme

let renkler=["kırmızı","siyah","mavi","sarı","beyaz","yeşil"]
console.log(renkler[Math.floor(Math.random()* renkler.length)]); // çıktısı rastgele bir dizi elemanı olacak

//*random() ile yazı tura simulasyonu

let yaziTura= Math.random() < 0.5 ? "Yazı" : "Tura" // üretilen sayi 0.5 ten küçükse "yazı" büyükse "tura" gelir.
console.log(yaziTura);

// * sign() Verilen sayının işaretini döndürür.

let say21 = -10;
console.log(Math.sign(say21)); // -1

let say22 = 5;
console.log(Math.sign(say22)); // 1

let say23 = 0;
console.log(Math.sign(say23)); // 0

// * sin() Verilen sayının sinüsünü döndürür.

let say24 = 45;
console.log(Math.sin(say24)); // 0.8509035245341184

// * tanh() Verilen sayının hiperbolik tanjantını döndürür.

let say25 = 2;
console.log(Math.tanh(say25)); // 0.9640275800758169

// * log() Verilen sayının doğal logaritmasını döndürür.

let say26 = 10;
console.log(Math.log(say26)); // 2.302585092994046

// * atan() Verilen sayının ters tanjantını döndürür.

let say27 = 1;
console.log(Math.atan(say27)); // 0.7853981633974483

// * sinh() Verilen sayının hiperbolik sinüsünü döndürür.

let say28 = 2;
console.log(Math.sinh(say28)); // 3.6268604078470186

// * log2() Verilen sayının logaritmasını 2 tabanında döndürür.

let say29 = 8;
console.log(Math.log2(say29)); // 3

// * log1p() Verilen sayının doğal logaritmasını 1 artırarak döndürür.

let say30 = 9;
console.log(Math.log1p(say30)); // 2.302585092994046

// * toPrecision() Verilen sayıyı belirtilen haneli bir şekilde yuvarlar.

let say31 = 12.3456;
console.log(say31.toPrecision(4)); // 12.35 (string ifade döner)

let say32 = 9876.54321;
console.log(say32.toPrecision(3)); // 9.88e+3 (string ifade döner)

// * acos() Verilen sayının arkkosinüsünü döndürür.

let say33 = 0.5;
console.log(Math.acos(say33)); // 1.0471975511965979

// * asin() Verilen sayının arksinüsünü döndürür.

let say34 = 0.5;
console.log(Math.asin(say34)); // 0.5235987755982989

// * expm1() Verilen sayının e üzeri x eksi bir işlemini döndürür.

let say35 = 1;
console.log(Math.expm1(say35)); // 1.718281828459045

// * imul() Verilen iki sayının 32 bitlik çarpım sonucunu döndürür.

let say36 = Math.imul(2, 3);
console.log(say36); // 6

// * fround() Verilen sayıyı yakınsak tekli hassasiyetli kayan nokta sayısına dönüştürür.

let say37 = 3.14159;
console.log(Math.fround(say37)); // 3.141590118408203
