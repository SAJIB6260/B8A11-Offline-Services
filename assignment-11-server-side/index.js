const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


//  middleware
app.use(cors());
app.use(express.json());


// console.log(process.env.DB_USER)


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v61q93t.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const serviceCollection = client.db('cleaningDB').collection('allService');
    const bookingCollection = client.db('cleaningDB').collection('allBooking');
    const feedbackCollection = client.db('cleaningDB').collection('allFeedBack');

    // services data
    app.get('/allService', async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/allService/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: new ObjectId(id) }
      const result = await serviceCollection.findOne(query)
      res.send(result)
    })

    app.get("/allService/provider/:email", async (req, res) => {
      const email = req.params.email;
      const query = { provider_email: email }
      const cursor = serviceCollection.find(query);
      const result = await cursor.toArray();

      // query basic clear na mone hoy ei jonno milaite pari ani

      // console.log(req.query.email)
      // let query = {}
      // if(req.query?.email){
      //   query = { provider_email : req.query.email}
      // }
      // const result = await serviceCollection.find(query).toArray();
      
      res.send(result)
    })

    app.post("/allService", async (req, res) => {
      const addService = req.body;
      const result = await serviceCollection.insertOne(addService);
      res.send(result);
    })

    app.put("/allService/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true};
      const updatedService = req.body;
      const Service = {
          $set: {
              name: updatedService.name,
              image: updatedService.image,
              description: updatedService.description,
              price: updatedService.price,
              location: updatedService.location                 
          }
      }
      const result = await serviceCollection.updateOne(filter, Service, options);
      res.send(result);
  });

    app.delete("/allService/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await serviceCollection.deleteOne(query)
      res.send(result)
  })


    // service booking
    app.get("/allBooking", async (req, res) => {
      console.log(req.query.email)
      let query = {}
      if (req.query?.email) {
        query = { provider_email: req.query.email }
      }
      const result = await bookingCollection.find(query).toArray();
      // const cursor = bookingCollection.find();
      // const result = await cursor.toArray();
      res.send(result)
    })

    app.get("/allBooking/user", async (req, res) => {
      console.log(req.query.email)
      let query = {}
      if (req.query?.email) {
        query = { user_email: req.query.email }
      }
      const result = await bookingCollection.find(query).toArray();
      // const cursor = bookingCollection.find();
      // const result = await cursor.toArray();
      res.send(result)
    })


    app.post("/allBooking", async (req, res) => {
      const booking = req.body;
      const result = await bookingCollection.insertOne(booking);
      res.send(result);
    })

    app.patch("/allBooking/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id : new ObjectId(id)};
      const updatedPending = req.body;
      console.log(updatedPending)
      const updateDoc = {
        $set: {
          status: updatedPending.status
        },
      }
      const result = await bookingCollection.updateOne(filter, updateDoc);
      res.send(result)
    })


    app.delete("/allBooking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await bookingCollection.deleteOne(query)
      res.send(result)
  })

  // customer feedback 
  app.get('/allFeedBack', async (req, res) => {
    const cursor = feedbackCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  })

  app.post("/allFeedBack", async (req, res) => {
    const addFeedBack = req.body;
    const result = await feedbackCollection.insertOne(addFeedBack);
    res.send(result);
  })


    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




// server connecting check
app.get("/", (req, res) => {
  res.send("Cleaning Service Server is runing")
})

app.listen(port, () => {
  console.log(`Cleaning Service Server is runing on port : ${port}`)
})
