import {Server} from './server/index';
import config from './configs/index';

const app = new Server(config);

app.listen().then(() => {
    console.log(`Listening on ${config.serverHost}:${config.serverPort}`);
}).catch(error => app.close(error));
