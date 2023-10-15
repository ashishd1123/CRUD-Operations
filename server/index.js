const app = require('./app');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });