// Try-Catch

//* JavaScript'te try-catch bloğu, 
//* bir kod parçasının hata üretebilecek bir bölümünü yakalamak ve bu hatayı yönetmek için kullanılan bir yapıdır.


try{
    //! Hata üretebilecek kodlar burada yer almaktadır.
} catch(error){
    //! Hata olması durumunda hata yönetimi ve işlemler burada 'catch' bloğunda yer almaktadır
}

//* Özet olarak 

//* Catch bloğu, try bloğunda oluşan hatayı yakalar ve bu hatayı yönetmek için gerekli işlemleri gerçekleştirir. Hata yakalandığında, catch bloğu çalıştırılır ve ardından program normal akışına devam eder.


//* try-catch'in önemi

//* try-catch blokları, hata yönetimi için önemli bir araçtır. Hataları yakalayarak programın çökmesini önleyebilir, hatayı yönetebilir ve kullanıcıya uygun bir geri bildirim sağlayabilirsiniz.


/* Örnek-1 */

// try {
//     //! Hata üretebilecek kod bloğu
//     let sonuc = tanimlanmamisDegisken + 10;
//     console.log(sonuc);

// } catch (error) {
//     //! Hata yönetimi ve işlemler
//     console.log("Bir hata oluştu: " + error.message);
// }



//* try-catch bloğunun ardından kullanılabilen `finally` yapısı try-catch bloğundan bağımsız olarak her durumda çalıştırılacak kodları içermektedir.

try {
    //! Hata üretebilecek kod parçacığı
} catch (error) {
    //! Hata yönetimi ve işlemler
} finally {
    //! Her durumda çalışacak kod parçacığı
}



/* örnek-2 */

try {
    //! Hata üretebilecek kod parçacığı
    console.log("try bloğu çalışıyor");

} catch (error) {
    //! Hata yönetimi ve işlemler
    console.log("Hata yakalandı: " + error.message);
} 
    finally {
    //! Her durumda çalışacak kod parçacığı
    console.log("finally bloğu çalışıyor");
}

/* örnek-3 */

try {
    const a = 10;
    const b = 2;
  
    if (b === 0) {
      throw "Bir sayıyı sıfıra bölemezsiniz.";
    }
  
    const result = a / b;
    console.log("Sonuç: " + result);
  } catch (error) {
    console.log("Hata yakalandı: " + error);
  } finally {
    console.log("İşlem tamamlandı.");
  }


  /* Örnek-4 */

  try {
    let a = 10;
    let b = 0;
  
    if (b === 0) {
      throw new Error("Bu sayıyı sıfıra bölemezsiniz.");
    }
  
    let sonuc = a / b;
    console.log("Sonuç: " + sonuc);
  } catch (error) {
    console.log("Hata yakalandı: " + error.message);
  } finally {
    console.log("İşlem tamamlandı.");
  }

  //* throw new ile özel bir hata mesajı oluşturabilmek için kullanılmaktadır. throw hatayı temsil eder, new ile birlikte kullanıldığında hata sınıfını çağırmaktadır.
  //* En bilinen hata sınıfı 'Error' ile birlikte kullanabilirsiniz. 

