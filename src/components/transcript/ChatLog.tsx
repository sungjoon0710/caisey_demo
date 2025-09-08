"use client"

import React, { useState } from 'react';
import { Message } from './types';
import { Button } from '../ui/button';
import { formatRole } from '@/lib/formatRole';

interface ChatLogProps {
    messages: Message[];
}

export default function ChatLog({ messages }: ChatLogProps) {
    const [expanded, setExpanded] = useState(true);

    function handleExpandedToggle() {
        setExpanded(!expanded);
    }

    return (
        <div className="flex flex-col p-5">
            <ul>
            {expanded&& messages.map((message, index) => (
                <div>
                    <li key={index} className={`${message.role === "user" ? "my-4 text-right rounded-md bg-gray-900 px-4 py-3 text-white shadow-lg dark:bg-gray-800" : "text-left rounded-md bg-gray-100 px-4 py-3 text-gray-900 shadow-lg dark:bg-gray-950 dark:text-gray-50"}`}>
                        <strong>{formatRole(message.role)}</strong>
                        <p>{message.content[0].text}</p>
                    </li>
                </div>
            ))}
            </ul>
            {expanded&& <Button onClick={handleExpandedToggle}>See Less</Button>}
            {!expanded&& <Button className="max-w-20"onClick={handleExpandedToggle}>See More</Button>}
        </div>
    )
}
