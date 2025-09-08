"use client"

import React, { FC } from 'react';
import ChatTranscript from "./ChatTranscript";
import { Transcript } from '../../types';

interface ChatTranscriptViewProps {
    transcripts: Transcript[];
};

const ChatTranscriptView: FC<ChatTranscriptViewProps> = ({transcripts}) => {

    //verify each transcript for essential fields
    console.log(transcripts);

    return (
        <div>
            {transcripts.map((transcript) => (
                <ChatTranscript key={transcript.session_id} transcript={transcript} />
            ))}
        </div>
    );
};

export default ChatTranscriptView;


