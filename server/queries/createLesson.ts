import {LessonModel} from "../models/allModels";

export function createLesson(props: any) {
    return LessonModel.create(props);
}