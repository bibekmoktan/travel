import express from 'express';
import mongoose from 'mongoose'
import path from 'path'


const app = express();
const PORT = 3000;
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1:27017/treking')
  .then(() => console.log('Connected!'));

app.get('/', (req, res) => {
    res.send('hello !');
});
app.post('/about', async (req, res) => {
   
    await user.create()
});

app.get('/contact', (req, res) => {
    res.send('Welcome to contact us page');
});
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});