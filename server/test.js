const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb+srv://Barath:Barath2@cluster0.xha1p0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function test() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

test();
