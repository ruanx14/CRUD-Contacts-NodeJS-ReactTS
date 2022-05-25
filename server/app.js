const { MongoClient } = require('mongodb');
const cors = require('cors')
express = require('express');
app = express();

app.use(cors());
app.use(express.json());
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

//User
app.get('/api/user/get', async function(req,res){

})
app.post('/api/user/add', async function(req,res){
      
});

//contacts
app.get('/api/get', async function(req,res){
    try {
        await client.connect();
        const database = client.db("contatos");
        const collection = database.collection("contato");
        const result = await collection.find().toArray();
        res.send(result);
        /* collection.find().toArray((err,result) => {
            res.send(result);   
        }); */
      }catch(e){
          console.log(e.message);
      }
})
app.put('/api/get', async function(req,res){
 /*    res.send('Hello World_put'); */
})
app.delete('/api/get', async function(req,res){
   /*  res.send('Hello World_delete'); */
})
app.post('/api/get', async function(req,res){
    try {
        await client.connect();
        const database = client.db("contatos");
        const collection = database.collection("contato");

        const doc = {
          nome: "RandonName",
          sobrenome: "randomSobrename",
        }

        const result = await collection.insertOne(doc);
        console.log(`Foi inserido, com o id: ${result.insertedId}`);
      } finally {
        await client.close();
      }
});


app.listen(3001);