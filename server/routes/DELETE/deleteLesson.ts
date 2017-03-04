import {Router, Request, Response, NextFunction} from 'express'
const hri = require('human-readable-ids').hri;

import {deleteLesson} from "../../queries/deleteLesson";
import onError from '../../helpers/onError';
import onSuccess from '../../helpers/onSuccess';

export class  DeleteLesson {
    private router: Router;
    private path: string;

    /**
     * Initialize the DeleteLesson Router
     */
    constructor() {
        this.path = '/api/lesson';
        this.router = Router();
        this.init();
    }

    /**
     * DELETE lesson
     */
    public async deleteLesson(req: Request, res: Response, next: NextFunction) {
        try {
            const course = await deleteLesson(req.params.id);
            onSuccess(res, course);
        } catch (e) {
            const id = hri.random();
            console.error('Database error occurred', id, e);
            onError(res, {
                msg: `Failed to delete lesson, error code: ${id}`,
                code: 500
            }, e);
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.delete('/:id', this.deleteLesson);
    }
}
