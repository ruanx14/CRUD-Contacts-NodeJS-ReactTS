const { MongoClient } = require('mongodb');
const cors = require('cors')
express = require('express');
app = express();
var ObjectId = require('mongodb').ObjectId;

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
        const database = client.db("contacts_react");
        const collection = database.collection("contact");
        const result = await collection.find().toArray();
        res.send(result);
        /* collection.find().toArray((err,result) => {
            res.send(result);   
        }); */
      }catch(e){
          console.log(e.message);
      }
});
app.put('/api/get', async function(req,res){
 try{
    await client.connect();
    const database = client.db("contacts_react");
    const collection = database.collection("contact");
    doc = {
      $set: {
        name: req.body.name,
        lastName: req.body.lastName,
        number: req.body.number,
        email: req.body.email,
      }
    }
    const filter = {  _id : ObjectId(req.body.idObject) };
    const result = await collection.updateOne(filter,doc);
    console.log(result);
 }catch(e){
   console.log(e.message)
 }
});
app.delete('/api/get', async function(req,res){
  try{
    await client.connect();
    const database = client.db("contacts_react");
    const collection = database.collection("contact");
    doc = {
      _id : ObjectId(req.body.objectId)
    }
    const result = await collection.deleteOne(doc);
    console.log(result);
  }catch(e){
     console.log(e.message); 
  }
});
app.post('/api/get', async function(req,res){
    try {
        await client.connect();
        const database = client.db("contacts_react");
        const collection = database.collection("contact");
  
        const doc = {
          name: req.body.name,
          lastName: req.body.lastName,
          number: req.body.number,
          email: req.body.email,
        }
        if(doc.name=="" || doc.lastName=="" || doc.number=="" || doc.email==""){
          res.status(500).send({'erro': 'Preencher todos os campos'});
          //res.send({erro: 'Preencha todos os campos'});
          throw new Error('Não pode valores nulos');
        }

        const result = await collection.insertOne(doc);
        //console.log(result.acknowledged);
        res.status(200).send({'done': result.acknowledged});
        console.log(`Foi inserido, com o id: ${result.insertedId}`);
      } catch(e){
        console.log(e.message);
    }
});


app.listen(3001); 