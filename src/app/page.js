import Image from "next/image";
import NavBar from "./ui/navbar";
import IntroPage from "./ui/intro";
import Projects from "./ui/projects";
import FooterPage from "./ui/footer";
import Blogs from "./ui/blogs";
export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col">
        <NavBar />
        <IntroPage />
        <Projects />
        <Blogs />
      </main>
      <footer>
        <FooterPage />
      </footer>
    </div>
  );
}
