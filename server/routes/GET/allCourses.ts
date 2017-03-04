import {Router, Request, Response, NextFunction} from 'express';

import {findAllCourses} from "../../queries/getAllCourses";
import onError from '../../helpers/onError';
import onSuccess from '../../helpers/onSuccess';
import {Logger, LoggingLevel} from "../../helpers/logger";

export class Courses {
    private router: Router;
    private path: string;

    /**
     * Initialize the Courses Router
     */
    constructor() {
        this.path = '/api/all-courses';
        this.router = Router();
        this.init();
    }

    /**
     * GET all courses
     */
    @Logger(LoggingLevel.INFO)
    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const courses = await findAllCourses();
            onSuccess(res, courses);
        } catch (e) {
            onError(res, {msg: 'Failed to fetch courses', code: 500}, e);
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.get('/', this.getAll);
    }
}
