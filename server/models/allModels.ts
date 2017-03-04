import {Sequelize} from 'Sequelize';
import * as ORM from 'Sequelize';

import {initCourseModel} from "./initCourseModel";
import {initLessonModel} from "./initLessonModel";

const dbUrl = 'postgres://localhost:5432/testdb';
const sequelize: Sequelize = new ORM(dbUrl);


export const CourseModel = initCourseModel(sequelize);
export const LessonModel = initLessonModel(sequelize);

// Bi-directional relationship
CourseModel.hasMany(LessonModel, {foreignKey: 'courseId'});
LessonModel.belongsTo(CourseModel, {foreignKey: 'courseId'});