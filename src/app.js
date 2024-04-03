import express from "express";
import ListCustomersRoute from './routes/ListCustomersRoute.js';
import PostCustomersRoute from './routes/PostCustomersRoute.js';
import ListByIdCustomerRoute from './routes/ListByIdCustomerRoute.js';
import PutCustomerRoute from './routes/PutCustomerRoute.js';
import DeleteCustomerRoute from './routes/DeleteCustomerRoute.js';
import AuthRoutes from './routes/AuthRoutes.js';
import ConectDB from './config/database.js';
import dotenv from 'dotenv';
import passport from 'passport';
import './config/passport.js';
import cors from 'cors'


dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;
ConectDB;

app.use(express.json());
app.use(passport.initialize());

//Rotas
app.use('/customers', ListCustomersRoute); 
app.use('/customers', ListByIdCustomerRoute);
app.use('/customers', PostCustomersRoute); 
app.use('/customers', PutCustomerRoute);
app.use('/customers', DeleteCustomerRoute);

app.use('/auth', AuthRoutes);



app.listen(PORT, () => console.log('Running Server in secret port.'));

export default app;