import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import {forEach as _forEach} from 'Lodash';

const boodyParser = require('body-parser');

import {routes} from "./routes";

interface Config {
    serverPort: number;
    serverHost: string;
}

/*
 * HTTP server class.
 */

export class Server {

    /*
     * Class constructor.
     */

    private app: any | null;
    private server: any | null;

    constructor(private config: Config) {
        this.app = null;
        this.server = null;
    }

    /*
     * Initialize all the routes.
     */

    private initRoutes(): void {
        _forEach(routes, (Route) => {
            const route = new Route();
            this.app.use(route.path, route.router);
        });
    }

    /*
     * Initialize the default error handler.
     * NOTE: Generic async errors MUST be passed to the 'next' handler
     */

    private initDefaultErrorHandler(): void {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => res.json({error: "An error occurred."}));
    }

    private initMiddleWares(): void {
        this.app.use(boodyParser.json());
    }

    /*
     * Returns a promise which starts the server.
     */

    async listen() {
        if (this.server) return this;

        this.app = express();
        this.initMiddleWares();

        this.initRoutes();
        this.initDefaultErrorHandler();

        await new Promise((resolve) => {
            let {serverPort, serverHost} = this.config;
            this.server = this.app.listen(serverPort, serverHost, resolve);
        });
    }

    /*
     * Returns a promise which stops the server.
     */

    async close(e: Error) {
        if (!this.server) return this;
        await new Promise((resolve) => {
            this.server.close(resolve);
        });
        this.server = null;
        this.app = null;
    }

}
