import express from 'express'
import config from './config'
import usuariosRoutes from './routes/usuariosRoutes'


const app = express();

app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usuariosRoutes);

export default app