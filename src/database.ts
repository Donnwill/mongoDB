/* eslint-disable max-len */
import { MongoClient, ServerApiVersion } from 'mongodb'
import * as dotenv from 'dotenv'
// eslint-disable-next-line no-labels

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// export const getSampleAudio = async () => {
//   dotenv.config()
//   const mongoClient: mongoDB.MongoClient =
//     new mongoDB.MongoClient(DB_CONN_STRING)
//   await mongoClient.connect()
//   const data = await mongoClient.db().collection('listingsAndReviews').find({}).toArray()
//   console.log('!!!', data)
// }

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function getSampleAudio () {
  dotenv.config()
  // await dns.promises.resolve(import.meta.env.VITE_DB_CONN_STRING).then(result => { console.log(result) })
  console.log(import.meta.env.VITE_DB_CONN_STRING)
  const mongoClient: MongoClient =
    new MongoClient(import.meta.env.VITE_DB_CONN_STRING, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true
      }
    })
  try {
    await mongoClient.connect()
    const data = await mongoClient.db().collection('sample_audio').find({}).toArray()
    console.log('!!!', data)
  } catch (e) {
    console.log('!!!', e)
  }
}
