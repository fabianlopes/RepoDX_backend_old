const { MongoClient, ObjectId } = require("mongodb");
 
let singleton;
 
async function connect() {
    if (singleton) return singleton;
 
    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
 
    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

const COLLECTION = "tecnicas";
 
async function findAll() {
    const db = await connect();
    return db.collection(COLLECTION).find().toArray();
}

async function findOne(id) {
    
    const db = await connect();
    return db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });
}
 
module.exports = { findAll, findOne } 
