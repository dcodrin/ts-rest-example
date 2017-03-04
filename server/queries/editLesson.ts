import {LessonModel} from "../models/allModels";

export function editLesson(id: string, props: any) {
    return LessonModel.update(props, {
        where: {id}
    });
}