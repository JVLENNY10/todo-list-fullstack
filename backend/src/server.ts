import 'dotenv/config'; 
import App from './App';

const app = new App();
const port = Number(process.env.PORT) || 5000;

app.start(port);
