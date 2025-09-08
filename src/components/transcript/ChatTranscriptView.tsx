"use client"

import React, { FC } from 'react';
import ChatTranscript from "./ChatTranscript";
import transcript1 from "@/mocks/transcripts/mockTranscript1.json";
import transcript2 from "@/mocks/transcripts/mockTranscript2.json";
import transcript3 from "@/mocks/transcripts/mockTranscript3.json";
import transcript4 from "@/mocks/transcripts/mockTranscript4.json";
import transcript5 from "@/mocks/transcripts/mockTranscript5.json";
import transcript6 from "@/mocks/transcripts/mockTranscript6.json";
import transcript7 from "@/mocks/transcripts/mockTranscript7.json";
import transcript8 from "@/mocks/transcripts/mockTranscript8.json";

interface ChatTranscriptViewProps {
    assignment_id: string;
}

const ChatTranscriptView: FC<ChatTranscriptViewProps> = ({assignment_id}) => {

    //find relevant transcripts and render using ChatTranscript
    const query_result = [transcript5, transcript6, transcript7, transcript8]; //placeholder for actual query

    return (
        <div>
            {query_result.map((transcript) => (
                <ChatTranscript key={transcript.session_id} transcript={transcript} />
            ))}
        </div>
    );
};

export default ChatTranscriptView;

