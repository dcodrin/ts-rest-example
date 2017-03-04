export interface Lesson {
    readonly id: number,
    description: string,
    readonly url: string,
    duration: string,
    courseId: string,
    seqNo: number,
    pro: boolean,
    tags?: string
}