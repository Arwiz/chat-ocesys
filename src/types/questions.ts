import { QuestionType } from './question_type_enum';
import { StatusType } from './status_type_enum';

export interface Option {
    _id?: string;
    title: string;
    serialNumber: number;
}

export interface Question {
    _id?: string;
    title: string;
    major_id?: string;
    category?: string;
    remarks?: boolean;
    uploads?: boolean;
    sub_category?: string[] | undefined;
    question_type?: QuestionType;
    question_status: StatusType;
    options: Option[];
    createdAt: Date;
    client_id: string | undefined;
}
