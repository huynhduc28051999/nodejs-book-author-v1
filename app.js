const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

app.use(cors());
mongoose.connect('mongodb+srv://duc:duc1234a@cluster0-pvxto.mongodb.net/author-book?retryWrites=true&w=majority')
mongoose.connection.once('open',() =>{
  console.log('connect to database');
  
});
app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000,() => {
  console.log('now listening for request on port 4000');
})