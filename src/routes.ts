import express from 'express';


import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create); // create: criar
routes.get('/points', pointsController.index); // index: mostrar todos
routes.get('/points/:id', pointsController.show); // show: mostrar um


export default routes;