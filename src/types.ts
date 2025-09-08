export type Transcript = {
    session_id: string,
    assignment_id: string,
    timestamp: string,
    student_id: string,
    student_name?: string,
    messages: Message[]
};

export type Message = {
    role: string;
    type?: string;
    content: { text: string }[];
};