import {Router, Request, Response, NextFunction} from 'express'
const hri = require('human-readable-ids').hri;

import {editLesson} from "../../queries/editLesson";
import onError from '../../helpers/onError';
import onSuccess from '../../helpers/onSuccess';

export class  EditLesson {
    private router: Router;
    private path: string;

    /**
     * Initialize the EditLesson Router
     */
    constructor() {
        this.path = '/api/lesson';
        this.router = Router();
        this.init();
    }

    /**
     * PATCH lesson
     */

    public async editLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await editLesson(req.params.id, req.body);
            onSuccess(res, course);
        } catch (e) {
            const id = hri.random();
            console.error('Database error occurred', id, e);
            onError(res, {
                msg: `Failed to edit lesson, error code: ${id}`,
                code: 500
            }, e);
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.patch('/:id', this.editLesson);
    }
}
