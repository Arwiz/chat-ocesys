import { Group } from './group';
import { QuestionType } from './question_type_enum';
import { Question } from './questions';
import { StatusType } from './status_type_enum';

export interface Paper {
    _id?: string;
    title: string;
    questions: Question[];
    groups: Group[];
    duration: null;
    created_by?: string;
    category?: string;
    sub_category?: string[];
    status_type?: string;
    client_id?: string;
    organization_id?: string;
    created_at?: string;
}
