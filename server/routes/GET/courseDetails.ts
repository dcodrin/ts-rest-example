import {Router, Request, Response, NextFunction} from 'express';

import {getCourseDetails} from "../../queries/getCourseDetails";
import onError from '../../helpers/onError';
import onSuccess from '../../helpers/onSuccess';

export class CourseDetails {
    private router: Router;
    private path: string;

    /**
     * Initialize the CourseDetails Router
     */
    constructor(id: number) {
        this.path = '/api/course';
        this.router = Router();
        this.init();
    }

    /**
     * GET course details including all lessons
     */

    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const courseId = parseInt(req.params.id);
            const courseDetails = await getCourseDetails(courseId);
            onSuccess(res, courseDetails);
        } catch (e) {
            onError(res, {msg: 'Failed to fetch course details', code: 500}, e);
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints. Note that the root path of each router instance is '/'
     */

    init() {
        this.router.get('/:id', this.getAll);
    }
}
