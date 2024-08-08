export interface Lesson {
    number: number,
    title: string,
    body: string[]
}


export interface Course {
    image_id: string,
    title: string,
    author: string,
    short_info: string,
    about: string,
    program: Lesson[]
}