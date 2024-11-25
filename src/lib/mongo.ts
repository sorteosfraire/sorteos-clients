import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const options: MongoClientOptions = {
    // other options if needed
};

const client = new MongoClient(uri, options);

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

connect();
