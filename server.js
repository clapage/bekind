const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./routes/auth'));


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log('Error connecting to MongoDB:', error));

app.get('/', (req, res) => {
  res.send('Welcome to the BeKind API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
