import {Response} from 'express';

interface ErrorDetails {
    msg: string;
    code: number;
}

export default (res: Response, errDetails: ErrorDetails, err: Error) => {
    console.error("Async error occurred.", err);
    res.status(errDetails.code).send({error: errDetails.msg});
}