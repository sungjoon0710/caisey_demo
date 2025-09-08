import ChatTranscriptView from "@/components/transcript/ChatTranscriptView";
import NavBar from "@/components/global/NavBar";

export default async function AssignmentPage({ params }: { params: { assignment_id: string }}) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/transcripts?assignment_id=${params.assignment_id}`,
        { cache: 'no-store' }
    );
    const transcripts = await res.json();
    return(
        <div>
            <NavBar />
            <ChatTranscriptView transcripts={transcripts} />
        </div>
    );
}