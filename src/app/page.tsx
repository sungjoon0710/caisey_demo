import ChatTranscriptView from "@/components/transcript/ChatTranscriptView";
import NavBar from "@/components/global/NavBar";
import WelcomeScreen from "@/components/global/WelcomeScreen";
//import WelcomeScreen from "@/components/global/WelcomeScreen";

export default function Home() {
  return (
    <div>
      <NavBar />
      <WelcomeScreen />
    </div>
  );
}
