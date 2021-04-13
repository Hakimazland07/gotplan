const express = require("express");
const app = express();
const PORT = 7000; 
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const schema = require('./Schemas/index')

app.use(cors());
app.use('/myapi', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log('server is running...')
})
