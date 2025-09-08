import ChatTranscriptView from "@/components/transcript/ChatTranscriptView";
import NavBar from "@/components/global/NavBar";

export default async function StudentPage({ params }: { params: { student_id: string }}) {
    const { student_id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/transcripts?student_id=${student_id}@columbia.edu`,
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