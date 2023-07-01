//!ASENKRON PROGRAMLAMA
/*
Asenkron programlama, bir programın işlemleri sıralı olarak değil, eş zamanlı olarak gerçekleştirebilmesini sağlayan bir programlama yaklaşımıdır. 
Bu yaklaşım, işlem sürelerinin uzun olduğu durumlarda, giriş/çıkış işlemlerinin (dosya okuma/yazma, ağ istekleri, veritabanı sorguları gibi) 
bekleme sürelerinde zaman kaybetmeyi önler ve programın daha etkin bir şekilde çalışmasını sağlar.
*/

//!setTimeout ve setInterval birer asenkron programlama örnekleridir!

setTimeout(() => {
    console.log("1. Fonksiyon Çalıştı");
}, 3000);


setTimeout(() => {
    console.log("2. Fonksiyon Çalıştı");
}, 2000);


setTimeout(() => {
    console.log("3. Fonksiyon Çalıştı");
}, 1000); //?kodu ilk okuduğunuzda aslında yukarıdan aşşağıya doğru sırayla okunacakmış gibi düşünebilirsiniz.
//?aslında doğru kod yukarıdan aşşağıya doğru okunur fakat işlemleri sıraya alır ve önce 3. Fonksiyon çalışır. Sırasıyla 2. fonksiyon ve son oalrak 1. Fonksiyon


//!async await
//*JavaScript'in asenkron programlama modelini daha okunabilir ve senkron bir şekilde yazmamızı sağlayan bir yapıdır. 
//*async anahtar kelimesi bir fonksiyonun asenkron olduğunu belirtirken, await anahtar kelimesi bir asenkron işlemin tamamlanmasını beklememizi sağlar.
const getuser = async () => {
    let getData = await fetch("https://dummyjson.com/users")
    let data = await getData.json()
    console.log(data)
}
getuser()