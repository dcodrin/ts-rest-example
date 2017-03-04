import {Courses} from "./GET/allCourses";
import {CourseDetails} from "./GET/courseDetails";
import {Index} from "./GET/indexPage";
import {CreateLesson} from "./POST/createLesson";
import {EditLesson} from "./PATCH/editLesson";
import {DeleteLesson} from "./DELETE/deleteLesson";

interface Routes {
    [key: string]: any;
}

export const routes: Routes = {
    Index,
    Courses,
    CourseDetails,
    CreateLesson,
    EditLesson,
    DeleteLesson
};