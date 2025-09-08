"use client"

import React, { useState } from 'react';
import { Message } from './types';
import { Button } from '../ui/button';

interface ChatLogProps {
    messages: Message[];
}

export default function ChatLog({ messages }: ChatLogProps) {
    const [expanded, setExpanded] = useState(true);

    function handleExpandedToggle() {
        setExpanded(!expanded);
    }

    return (
        <div className="flex flex-col gap-2">
        <ul>
        {expanded&& messages.map((message, index) => (
            <li key={index}>
                <strong>{message.role}</strong>
                <p>{message.content[0].text}</p>
            </li>
        ))}
        </ul>
        <Button onClick={handleExpandedToggle}>{expanded? "See Less" : "See More"}</Button>
        
        </div>
    )
}
