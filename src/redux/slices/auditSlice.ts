import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export type AnswerType = {
    question_id: string;
    group_id?: string;
    answers: string[];
    remarks?: string;
    uploads?: string[];
};

export type AuditAnswerType = {
    [_id: string]: AnswerType;
};

export type AuditType = {
    audit_id: string;
    answers: AuditAnswerType;
    auditor_id?: string;
};

// Define a type for the slice state
export interface AuditState {
    current_audit?: AuditType | null;
    completedAudits: AuditType[];
}

// Define the initial state using that type
const initialState: AuditState = {
    current_audit: null,
    completedAudits: [],
};

export const auditSlice = createSlice({
    name: 'audit',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        start_audit: (state, action: PayloadAction<{ audit_id: string }>) => {
            if (state.current_audit?.audit_id !== action.payload.audit_id) {
                const new_audit = {
                    audit_id: action.payload.audit_id,
                    answers: {},
                };
                state.current_audit = new_audit;
            }
        },
        update_answer: (
            state,
            action: PayloadAction<{ answer: AnswerType }>
        ) => {
            const audit = state.current_audit;
            if (audit) {
                const answers = audit.answers;
                answers[action.payload.answer.question_id] =
                    action.payload.answer;
                audit.answers = answers;
                state.current_audit = audit;
            }
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        save_audit: (state) => {
            const current_audit = state.current_audit;
            if (current_audit) state.completedAudits.push(current_audit);
        },
    },
});

export const { start_audit, save_audit, update_answer } = auditSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default auditSlice.reducer;
