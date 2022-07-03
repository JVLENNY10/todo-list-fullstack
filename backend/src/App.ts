import express from 'express';
import tasksRoutes from './routes/tasksRoutes';

class App {
  private app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(express.json());
    this.app.use(tasksRoutes);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT);
  }
}

export default App;
