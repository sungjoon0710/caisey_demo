export type Message = {
    role: string;
    type?: string;
    content: { text: string }[];
};