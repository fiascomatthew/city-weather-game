import { MongoClient } from "mongodb";

const mongoUri: string = process.env.MONGO_URI || "mongodb://localhost:23017";
const dbName: string = process.env.DB_NAME || "temperature";

export async function saveScore(pseudo: string, score: number): Promise<void> {
  const client = new MongoClient(mongoUri);
  await client.connect();
  const database = client.db(dbName);
  await database.collection("scores").insertOne({ pseudo, score });
  await client.close();
}