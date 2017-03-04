import {Sequelize} from 'Sequelize';
import * as ORM from 'Sequelize';

export function initLessonModel(sequelize: Sequelize) {
    return sequelize.define('Lesson', {
        description: ORM.STRING,
        url: ORM.STRING,
        duration: ORM.STRING,
        seqNo: ORM.INTEGER,
        courseId: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING,
        id: {
            type: ORM.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    });
}