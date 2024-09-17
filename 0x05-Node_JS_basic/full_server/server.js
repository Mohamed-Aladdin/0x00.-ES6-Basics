import express from 'express';
import configureRoutes from './routes/index';

const PORT = 1245;
const app = express();

configureRoutes(app);

app.listen(PORT, () => {});

export default app;
