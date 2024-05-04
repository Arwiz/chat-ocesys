import { Question } from './questions';

export interface Group {
    _id?: string;
    title: string;
    questions: Question[];
    sub_group?: Group;
}
