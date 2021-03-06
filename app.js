
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
//const braintreeRoutes = require('./routes/braintree');
//const orderRoutes = require('./routes/order');

// app
const path = require('path')
const app = express();

// db
const PORT = process.env.PORT
const MONGO_URL = 'mongodb+srv://NiteshDas:Siu33005@cluster0.y5dul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true 
    }).then( (data,error) =>{ 
          if(error){
                console.log("Have a some error",error)
          }else{
                console.log('Database connected')
          }
    })



// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', require('./routes/category.route'));
//app.use('/api', braintreeRoutes);
//app.use('/api', orderRoutes);

if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/build'));

      app.get('*',(req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      })
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
