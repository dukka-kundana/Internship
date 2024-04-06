const express = require('express');
const connectDb = require('./conn');
const router = require('./routes/Transactions')


const app = express();
const PORT = process.env.PORT || 3000;

connectDb()

app.use(express.json())
app.use(express.static('public'))

app.use('/api/transactions', router);

app.get("/",(req,res)=>{

  res.sendFile("index.html")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
