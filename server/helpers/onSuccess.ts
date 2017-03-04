import {Response} from 'express';

export default (res: Response, payload: any) => {
    res.status(200).send({payload});
}