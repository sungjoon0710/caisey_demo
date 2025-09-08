import Image from "next/image";

export default function WelcomeScreen({}) {
    return(
        <div>
            <Image src="/welcome_screen.png" alt="Welcome Image" width={1500} height={750} />
        </div>

    );
};