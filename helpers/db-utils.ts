import { MongoClient, SortDirection } from 'mongodb';
require('dotenv').config();
// env: {
//     mongodb_username: 'godOfcode',
//     mongodb_password: 'ILR66swnSHRcd6A2',
//     mongodb_clustername: 'cluster0',
//     mongodb_database: 'devdomination',
//   },
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.pqxxq5k.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);
  return client;
};
export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: object
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
export const getAllDocuments = async (
  client: MongoClient,
  collection: string,
  sortHow: any,
  filter = {}
) => {
  const db = client.db();
  const comments = await db
    .collection(collection)
    .find(filter)
    .sort(sortHow)
    .toArray(); //sorting items in descensing order so the last added item is the first in the array
  return comments;
};
