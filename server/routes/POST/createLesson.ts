import {Router, Request, Response, NextFunction} from 'express'
const hri = require('human-readable-ids').hri;

import {createLesson} from "../../queries/createLesson";
import onError from '../../helpers/onError';
import onSuccess from '../../helpers/onSuccess';

export class  CreateLesson {
    private router: Router;
    private path: string;

    /**
     * Initialize the CreateLesson Router
     */
    constructor() {
        this.path = '/api/lesson';
        this.router = Router();
        this.init();
    }

    /**
     * POST new lesson
     */

    public async createLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await createLesson(req.body);
            onSuccess(res, course);
        } catch (e) {
            const id = hri.random();
            console.error('Database error occurred', id, e);
            onError(res, {
                msg: `Failed to create lesson, error code: ${id}`,
                code: 500
            }, e);
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.post('/', this.createLesson);
    }
}
