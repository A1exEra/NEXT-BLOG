import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { connectDatabase, insertDocument } from '@/helpers/db-utils';
import { MESSAGE } from '@/helpers/types';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(req.body);
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Please fill all the fields' });
      return;
    }
    //if validation os OK
    const newMessage: MESSAGE = {
      email,
      name,
      message,
    };
    let client;
    try {
      client = await connectDatabase();
    } catch (err: any) {
      res.status(500).json({
        message: 'Connection to database failed...',
        error: err.message,
      });
      return;
    }
    try {
      const result = await insertDocument(client, 'message', newMessage);
      client.close();
      newMessage._id = result.insertedId;
    } catch (err: any) {
      res.status(500).json({
        message: 'Inserting data failed...',
        error: err.message,
      });
      return;
    }
    res.status(201).json({
      message: 'Message was succsfully stored!',
      newMessage: newMessage,
    });
  }
};
export default handler;
