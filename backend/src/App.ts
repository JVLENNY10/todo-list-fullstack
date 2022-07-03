import express from 'express';

class App {
  public app: express.Express;

  constructor() {
    this.config();
    this.app = express();
  }

  private config():void {
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT);
  }
}

export default App;
