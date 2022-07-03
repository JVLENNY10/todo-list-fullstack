import 'dotenv/config'; 
import App from './App';

const app = new App();
const PORT = Number(process.env.PORT);

app.start(PORT);
