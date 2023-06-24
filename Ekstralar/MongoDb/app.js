const { MongoClient } = require('mongodb');



//MongoDb veritabanına veri ekleyen fonksiyon

async function addUser () {

    //Localhostumuzu kullanacağız mongoDb compass ile bağlantı yapabiliriz
    const uri = 'mongodb://localhost:27017';

    //clientimizi oluşturuyoruz
    let client = new MongoClient(uri);

    //bağlantı oluşturduk.
    await client.connect();

    //Databasimizi veriyoruz eğer böyle bir database yoksa oluşturur
    const database = client.db('Db');

    //Collectionumuzu oluşturuyoruz eğer böyle bir collections yoksa oluşturur
    const collection = database.collection('users');

    //Ekleyeceğimiz veriyi hazırlıyoruz
    let person = {
        id: 1,
        name: "Mehmet Coban"
    }

    //Ekleme fonksiyonumuzu çağırıyoruz. 
    await collection.insertOne(person, async (err, result) => {

        //Eğer hata alırsak diye hatamızı parse ediyoruz. Daha okunabilir bir görüntü için
        if (err) {

            errRes = {
                error: "1", 
                messages: error.message
            }

            console.log(errRes);

        }

        console.log("Islem basarili.")

    })

}

//User ekleme fonksiyonumuzu çağırıyoruz.
addUser()