"use client"

import React, { FC, useState } from 'react';
import { Card, CardHeader, CardAction } from '../ui/card';
import { Button } from '../ui/button';
import ChatLog from './ChatLog';
import { formatAssignmentId } from '../../lib/formatAssignmentId';
import { formatTimestamp } from '@/lib/formatTimestamp';
import { Transcript } from '../../types';

interface ChatTranscriptProps {
  transcript: Transcript;
}

const ChatTranscript: FC<ChatTranscriptProps> = ({ transcript }) => {

    const [score, setScore] = useState(95);

    //Implement checking for fields so if something is missing, react as neccessary 
    if (!transcript) {
        return <div>No transcript data available.</div>;
    } else if (!transcript.messages || transcript.messages.length === 0) {
        return <div>No messages in this transcript.</div>;
    } else if (!transcript.student_name || !transcript.student_id) {
        return <div>Missing essential student information.</div>;
    } else if (!transcript.messages) {
        return <div>Missing message log.</div>;
    }

    //<CardDescription>Session_id: {transcript.session_id}</CardDescription>
    const AssignmentId = formatAssignmentId(transcript.assignment_id);
    const Timestamp = formatTimestamp(transcript.timestamp);

    const handleReevaluationRequest = () => {
        // Placeholder for re-evaluation request logic
        setScore(Math.floor(Math.random() * (100 - 80 + 1)) + 80);
    }

    const handleReturnHome = () => {
        window.location.href = '/';
    }   

    return (
        <div>
            <Card className="bg-blue-950 text-white">
                <CardHeader>Chat Transcript for {transcript.student_name} [{transcript.student_id}]</CardHeader>
                
                <CardAction>
                    <strong>Assignment: <br/></strong>
                    {AssignmentId}
                </CardAction>

                <CardAction>
                    <strong>Time: <br/></strong>
                    {Timestamp}
                </CardAction>

                <CardAction className="rounded-sm">
                    <strong>Chat Log: <br/></strong>
                    <ChatLog messages = {transcript.messages}/>
                </CardAction>

                <CardAction className="flex flex-col gap-2">
                    <strong>Overall Assessment: <br/></strong>
                    {score}/100 pts
                </CardAction>

                <div className="flex flex-row gap-3">
                    <Button onClick={handleReevaluationRequest}>
                        Request Re-evaluation
                    </Button>
                    <Button onClick={handleReturnHome}>
                        Return Home
                    </Button>
                </div>
                

            </Card>
        </div>
    );
};

export default ChatTranscript;

