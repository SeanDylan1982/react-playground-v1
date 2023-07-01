// import { MongoClient, ServerApiVersion } from 'mongodb';
const { MongoClient, ServerApiVersion } = import('mongodb');
const uri = "mongodb+srv://admin:at8woothfkJoXNmg@rpv1.8pfc8ny.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'rpv1db';
const collectionName = 'users';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const db = client.db(dbName);
const collection = db.collection(collectionName);

async function run(newUserObj) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    await collection.insertOne(newUserObj);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
export default run