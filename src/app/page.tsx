import ChatTranscript from "@/components/transcript/ChatTranscript";
import transcripts from "@/mocks//brooklyn_brewery/mockTranscript1.json";

export default function Home() {
  return (
    <div>
      <ChatTranscript transcript={transcripts} />
    </div>
  );
}
