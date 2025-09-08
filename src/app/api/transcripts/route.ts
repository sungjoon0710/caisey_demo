// app/api/transcripts/route.ts
import { NextResponse } from 'next/server';
import transcripts from '@/mocks/transcripts/mockTranscriptCombined.json';
import type { Transcript } from '@/types';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const assignment_id = searchParams.get('assignment_id');
    const student_id = searchParams.get('student_id');
  
    let result: Transcript[] = transcripts as Transcript[];
  
    if (assignment_id) result = result.filter(t => t.assignment_id === assignment_id);
    if (student_id)    result = result.filter(t => t.student_id === student_id);
  
    // sort newest first
    result = result.toSorted((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp));
  
    return NextResponse.json(result, { headers: { 'Cache-Control': 'no-store' } });
}