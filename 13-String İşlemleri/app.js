// * 1. STRING OLUŞTURMA

// ? String oluşturmak için tek tırnak (''), çift tırnak ("") veya şablon dizgileri (``) kullanılabilir.

let str1 = 'Merhaba';
let str2 = "Dünya";
let str3 = `Bu bir şablon dizgisidir.`;

// * 2. METİN BİRLEŞTİRME

// ? İki veya daha fazla string ifadeyi birleştirmek için + veya concat() metodunu kullanabilirsiniz.

let fullName = 'John' + ' ' + 'Doe'; // "John Doe"

let firstName = 'John';
let lastName = 'Doe';
let fullName2 = firstName.concat(' ', lastName); // "John Doe"

// * 3. METİN UZUNLUĞU

// ? Stringin karakter sayısını bulmak için length özelliğini kullanabilirsiniz.

let message = 'Merhaba, dünya!';
let length = message.length; // 17

// * 4. METİN İNDEKSLEME

// ? Stringin belirli bir karakterine erişmek için indeks numarasını kullanabilirsiniz.
// ? İndeks numaraları 0'dan başlar.

let text = 'JavaScript';
let char = text[0]; // "J"

// * 5. METİN KARAKTERLERİNİ KÜÇÜK / BÜYÜK HARFE DÖNÜŞTÜRME

// ? Metin karakterlerini küçük veya büyük harfe dönüştürmek için toLowerCase() ve toUpperCase() metodlarını kullanabilirsiniz.

let name = 'John Doe';
let lowerCaseName = name.toLowerCase(); // "john doe"
let upperCaseName = name.toUpperCase(); // "JOHN DOE"

// * 6. METİN KESME VE ALMA

// ? Stringin belirli bir kısmını kesmek veya almak için slice() veya substring() metodlarını kullanabilirsiniz.

let text2 = 'Bu bir örnek cümledir.';
let slicedText = text2.slice(3, 10); // "bir örn"
let subText = text2.substring(0, 2); // "Bu"

// * 7. METİNDEKİ KARAKTERLERİ DEĞİŞTİRME

// ? String içindeki belirli karakterleri değiştirmek veya yeniden düzenlemek için replace() metodu kullanılabilir.

let text3 = 'Bu bir örnek metindir.';
let newText = text3.replace('örnek', 'harika'); // "Bu bir harika metindir."

// * 8. METİNDEKİ KARAKTERLERİ ARA

// ? String içinde belirli bir karakter veya karakter dizgisini aramak için indexOf() veya includes() metotlarını kullanabilirsiniz.

let text4 = 'Bu bir örnek cümledir.';
let index = text4.indexOf('örnek'); // 7
let includes = text4.includes('cümle'); // true

// * 9. METİN BÖLÜMLEME

// ? Stringi belirli bir ayırıcıya göre bölerek, parçalara ayırmak için split() metodu kullanılabilir.

let sentence = 'Bu bir örnek cümledir.';
let words = sentence.split(' '); // ["Bu", "bir", "örnek", "cümledir."

// !  FAYDALI İPUÇLARI                                 
                                                                                    
// ? - Stringlerdeki karakterlere indeks numaralarıyla erişebilirsiniz. İndeks numaraları
// ?   0'dan başlar ve stringin son karakterinin indeksi stringin uzunluğu - 1'dir.     
// ? - Birden çok string ifadeyi birleştirmek için + operatörünü veya concat() metotunu 
// ?   kullanabilirsiniz.                                                               
// ? - Stringlerde toLowerCase() ve toUpperCase() metotlarıyla karakterleri küçük veya  
// ?   büyük harfe dönüştürebilirsiniz.                                                                                                                                 
// ? - Stringin belirli bir bölümünü kesmek veya almak için slice() veya substring()    
// ?   metotlarını kullanabilirsiniz.                                                                                                                                       
// ? - replace() metoduyla string içindeki belirli karakterleri değiştirebilirsiniz.    
                                                                                    
