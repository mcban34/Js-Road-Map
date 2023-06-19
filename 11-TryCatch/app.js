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
try {
    //! Hata üretebilecek kod bloğu
    let sonuc = tanimlanmamisDegisken + 10;
    console.log(sonuc);

} catch (error) {
    //! Hata yönetimi ve işlemler
    console.log("Bir hata oluştu: " + error.message);
}



//* try-catch bloğunun ardından kullanılabilen `finally` yapısı oluşturabilirsiniz. 
//* Bu blok, try-catch bloğundan bağımsız olarak her durumda çalıştırılacak kodları içerir. finally bloğu, hata olsun ya da olmasın her zaman çalışır.

