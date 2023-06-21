
//! HATALAR VE İSTİSNALAR 

//! Örnek 1: Syntax Error (Sözdizimi Hatası)
//* Geçersiz bir sözdizimi kullanılırsa, JavaScript hata verir.
//* Hata mesajı, hatanın konumunu ve açıklamasını içerir.

console.log("Merhaba, Dünya!"); //? Doğru

// console.log("Merhaba, Dünya!"); //? Yanlış - Yorum satırı kaldırıldığında syntax hatası alınır.

//! Örnek 2: ReferenceError (Referans Hatası)
//* Tanımlanmamış bir değişken veya fonksiyon kullanıldığında, ReferenceError alınır.

console.log(a); //? Tanımlanmamış değişken - ReferenceError

//! Örnek 3: TypeError (Tür Hatası)
//* Bir değer yanlış bir şekilde kullanıldığında veya bir tür hatası oluştuğunda TypeError alınır.
//* Örneğin, bir fonksiyon bir nesne üzerinde çalışması gereken bir özelliği kullanmaya çalışırsa TypeError alınır.

var num = 42;
console.log(num.toUpperCase()); //? TypeError: num.toUpperCase is not a function

//! Örnek 4: RangeError (Aralık Hatası)
//* Bir sayının geçerli bir aralıkta olması gerektiğinde, ancak belirtilen aralığın dışında 
//* bir değerle kullanıldığında RangeError alınır.

function factorial(n) {
    if (n < 0) {
        throw new RangeError("Negatif sayılar için faktöriyel hesaplanamaz.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(-1)); //? RangeError: Negatif sayılar için faktöriyel hesaplanamaz.

//! Örnek 5: try-catch Bloğu
//* Hataları ele almak için try-catch blokları kullanılır.

try {
    // Potansiyel olarak hata üretebilecek kod buraya yazılır
    console.log("try bloğu başladı.");
    throw new Error("Hata oluştu!");
    console.log("Bu satır çalışmayacak.");
} catch (error) {
    // Hatalar ele alınır ve işlenir
    console.log("Hata yakalandı!");
    console.log("Hata mesajı:", error.message);
} finally {
    // Her durumda çalıştırılması gereken kod buraya yazılır
    console.log("try-catch bloğu tamamlandı.");
}

//! Örnek 6: Özel Hata Sınıfları
//* Özel hata sınıfları oluşturarak, farklı türde hataları temsil edebiliriz.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Özel hata!");
} catch (error) {
    if (error instanceof CustomError) {
        console.log("Özel hata yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 7: EvalError
//* Tanımsız bir fonksiyonu çağırmak evalError'a neden olur.

try {
    eval("console.log('Hello World!')");
    eval("foo();"); 
} catch (error) {
    if (error instanceof EvalError) {
        console.log("EvalError yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 8: URIError
//* Geçersiz bir URI kodu çözümlenmeye çalışıldığında URIError alınır.

try {
    decodeURI('%'); 
} catch (error) {
    if (error instanceof URIError) {
        console.log("URIError yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 9: DOMException
//* Bulunamayan bir öğeye erişmek DOMException'a neden olur.

try {
    document.querySelector("#myElement").innerHTML = "<h1>Merhaba, Dünya!</h1>"; 
} catch (error) {
    if (error instanceof DOMException) {
        console.log("DOMException yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 10: TypeError
//* Bir değer bir fonksiyon olarak kullanılmaya çalışılırsa TypeError alınır.

try {
    let num = 42;
    num(); 
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 11: NetworkError
//* Ulaşılamayan bir URL'ye yapılan bir istekte NetworkError alınır.

try {
    fetch("https://example.com/api/data"); 
} catch (error) {
    if (error instanceof NetworkError) {
        console.log("NetworkError yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}

//! Örnek 12: SecurityError
//* Çerezler tarayıcıda işlem yapma yetkisine sahip değilse SecurityError alınır.

try {
    document.cookie = "username=John Doe"; 
} catch (error) {
    if (error instanceof SecurityError) {
        console.log("SecurityError yakalandı!");
        console.log("Hata mesajı:", error.message);
    } else {
        console.log("Beklenmeyen bir hata oluştu:", error);
    }
}