
//!LOOPS (DÖNGÜLER)
//?döngüler belirli başlı tekrar eden kod bloklarını çalıştırmak için kullanılır
//?tekrar eden kodları otomatikleştirmek ve kodu daha verimli hale getirmek için kullanılır

//*for döngüsü kullanımı

// for(baslangicDegeri;kosul;artisDegeri){
   //?işlecek kodlar 
// }

for(let i=0;i<10;i++){
    console.log(i)
}

for(let i=0;i<5;i++){
    console.log("Javascript öğreniyorum")
}

//?bir dizi içerisindeli verileri tek tek gezinmek
//*dizideki elemanları index numarasına göre seçer ve verileri getirir
let renkler = ["kırmızı","mavi","sarı","beyaz"]
for(let i=0;i<renkler.length;i++){
    console.log(renkler[i])
}

//?dizi içerisinde objelerden oluşan toplu veriler arasında geiznmek

let kullanicilar = [
    {
        ad:"mehmet",
        soyad:"coban"
    },
    {
        ad:"semra",
        soyad:"erdogan"
    },
    {
        ad:"bayram",
        soyad:"unlü"
    },
]
//*doğrudan objelere ulaşır
for(let i=0;i<kullanicilar.length;i++){
    console.log(kullanicilar[i])
}

//*obje içerisindeki verilere ulaşmak için;
for(let i=0;i<kullanicilar.length;i++){
    console.log(kullanicilar[i].ad)
}

//?break (döngüyü kırmak) => döngü break ifadesini gördüğü anda artık çalışmayı bırakır
for(let i=0;i<10;i++){
    if(i==4){
        break
    }
    console.log(i) //0,1,2,3
}

//*console.log() yer değiştirmesine göre çıktı değişebilir
for(let i=0;i<10;i++){
    console.log(i) //0,1,2,3,4
    if(i==4){
        break
    }
}

//?continue () => döngüde geride kalan kısımları atlayarak bir sonraki iterasona geçmenizi sağlar
for(let i=0;i<8;i++){
    if(i==5){
        continue
    }
    console.log(i) //0,1,2,3,4,6,7
}

//?basit algoritmik örnekler
for(let i=0;i<10;i++){
    if (i==2 || i==3){
        console.log(i)
    }
    if(i==5){
        break
    }
    //çıktıya göre i sadece 2 ve 3e eşit oludğunda consola yazdıracatır => 2,3 
    //i 5'e eşit olduğunda ise döngü kıralacaktır
}


for(let i=0;i<10;i++){
    if(i==3 && i==8){
        if(i==3){
            console.log(i)
        }
        break
    }
    if (i==0){
        console.log(i)
    }
    //kodun akışına göre bakıldığında ilk if de i hem 3 hemde 8 e eşit olamaz bu yüzden ilk if çalışmaz
    //ikinci ifde ise i sıfıra eşit olucağı için ekrana sadece sıfır yazdırır => 0 
}

//?iç içe for kullanımı
//*for yapısının iç içe kullanım amacı daha karmaşık yapılarda yapıyı kolay hale getirmek için kullanılır
//*iç içe çalışan döngülerde dışardaki döngü bir kere çalıştıktan sonra içerideki döngüye geçilir
//*içerdeki döngü tamamen görevini bitirdikten sonra duşardaki döngü bir arttırılır ve yeniden içerdeki döngü çalışır

for(let i=0;i<=5;i++){
    for(let j=0;j<2;j++){
        console.log(i)
    }
    //0,0,1,1,2,2,3,3,4,4,5,5,
}

//*0'dan 3'a kadar olan sayıları 3 kere yazdırın
for(let i=1;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(i)
    }
    //1,1,1,2,2,2
}