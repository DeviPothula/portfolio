import Image from "next/image";
import NavBar from "./ui/navbar";
import IntroPage from "./ui/intro";
import Projects from "./ui/projects";
import FooterPage from "./ui/footer";
export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col mt-[40px]">
        <NavBar />
        <IntroPage />
        <Projects/>
      </main>
      <footer>
        <FooterPage/>
      </footer>
    </div>
  );
}
