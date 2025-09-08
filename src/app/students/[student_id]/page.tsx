import ChatTranscriptView from "@/components/transcript/ChatTranscriptView";
import NavBar from "@/components/global/NavBar";
import { headers } from "next/headers";

export default async function StudentPage({ params }: { params: { student_id: string }}) {
    const { student_id } = await params;

    const h = await headers();
    const proto = h.get("x-forwarded-proto") ?? "https";
    const host  = h.get("host")!;
    const url   = `${proto}://${host}/api/transcripts?student_id=${encodeURIComponent(student_id)}@columbia.edu`;

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`API failed: ${res.status}`);
        const transcripts = await res.json();
        
    return(
        <div>
            <NavBar />
            <ChatTranscriptView transcripts={transcripts} />
        </div>
    );
}