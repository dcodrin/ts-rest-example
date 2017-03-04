import {CourseModel} from "../models/allModels";
import {CourseSummary} from "../interfaces/courseSummary";

export async function findAllCourses(): Promise<CourseSummary[]> {
    try {
        const courses = await CourseModel.findAll({ order: ['seqNo'], raw: true });
        return courses.map(({id, description, url, iconUrl, courseListIcon, seqNo}: any) => ({
            id,
            description,
            url,
            iconUrl,
            courseListIcon,
            seqNo
        }))
    } catch (e) {
        return e;
    }
}