const connectDB = require('./config/db');
const express = require('express');
const cors = require('cors');
const globalErrorHandler = require('./middlewares/globalErrorHandler');
const userRouter = require('./routes/userRoutes');
const uploadRouter = require('./routes/fileRoutes');
const adminRouter = require('./routes/adminRoutes');
const productRouter = require('./routes/productRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const APPError = require('./utils/appError');
const path = require('path');

const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();

const corsOption = {
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
};
app.use(morgan('dev'));

app.use(cookieParser());

app.use(cors(corsOption));
app.use(express.json());
connectDB();

const port = 3000;

app.use('/api/v1/users', userRouter);
app.use('/api/v1/upload', uploadRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/bookings', bookingRouter);

const clientDir = path.join(__dirname, 'frontend', 'dist');

app.use(express.static(clientDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientDir, 'index.html'));
});

//console.log(x);

//these are unhandled route sohold be put after all routes
app.all('*', (req, res, next) => {
  next(new APPError(`Cannot find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
