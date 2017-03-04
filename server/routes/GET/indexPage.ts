import {Router, Request, Response, NextFunction} from 'express';

export class Index {
    private router: Router;
    private path: string;

    /**
     * Initialize the Index Router
     */
    constructor() {
        this.path = '/';
        this.router = Router();
        this.init();
    }

    /**
     * GET the Index page
     */

    public getIndex(req: Request, res: Response, next: NextFunction) {
        res.send('The Index.');
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.get('/', this.getIndex);
    }
}