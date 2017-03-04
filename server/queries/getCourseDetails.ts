import {CourseModel, LessonModel} from "../models/allModels";
import {CourseDetail} from "../interfaces/courseDetail";
import {Lesson} from "../interfaces/lesson";

export async function getCourseDetails(courseId: number): Promise<CourseDetail> {
    try {
        const course: any = await CourseModel.findById(courseId, {
            include: [
                {
                    model: LessonModel
                }
            ]
        });
        const {
            id,
            description,
            url,
            iconUrl,
            courseListIcon,
            seqNo,
            longDescription,
            comingSoon,
            inNew,
            isOngoing,
            Lessons
        }: any = course.get({plain: true});

        return {
            id,
            description,
            url,
            iconUrl,
            courseListIcon,
            seqNo,
            longDescription,
            comingSoon,
            inNew,
            isOngoing,
            lessons: Lessons.map(({
                id,
                url,
                description,
                duration,
                seqNo,
                courseId,
                pro,
                tags
            }: any): Lesson => ({
                id,
                url,
                description,
                duration,
                seqNo,
                courseId,
                pro,
                tags
            }))
        };


    } catch (e) {
        return e;
    }
}