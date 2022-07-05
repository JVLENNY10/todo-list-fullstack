import cors from 'cors';
import express from 'express';
import tasksRoutes from './routes/tasksRoutes';

class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(tasksRoutes);
  }

  public start(port: number):void {
    this.app.listen(port);
  }
}

export default App;
