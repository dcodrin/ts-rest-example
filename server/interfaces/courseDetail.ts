import {Lesson} from "./lesson";
import {CourseSummary} from "./courseSummary";
export interface CourseDetail extends CourseSummary {
    longDescription: string,
    comingSoon?: boolean,
    isNew?: boolean,
    isOngoing: boolean,
    lessons: Lesson[]
}