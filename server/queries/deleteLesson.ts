import {LessonModel} from "../models/allModels";

export function deleteLesson(id: string) {
    return LessonModel.destroy({
        where: {id}
    });
}