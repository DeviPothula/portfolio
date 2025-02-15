import Image from "next/image";
import ProfilePic from "../assets/images/ProfilePic.jpeg";
import SkillsPage from "./skills";
import Experience from "./experience";

const IntroPage = () => {
  return (
    <div className="w-full self-intro-wrapper flex flex-col items-center justify-center mt-[50px] gap-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center">
        Full Stack Developer
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        Passionate about building scalable and efficient End to End Web
        Applications
      </p>
      <div className="py-[20px]">
        <Image
          src={ProfilePic}
          alt="my-profile-pic"
          className="h-[200px] w-[200px] rounded-full"
        ></Image>
      </div>
      <div className="w-full flex flex-col gap-2 bg-[#6e06f2] text-white rounded-md">
        <div className="pt-[100px] pb-[220px] px-[10px] md:px-[5px] text-center">
          {" "}
          <p className="text-xl font-[1000] md:text-2xl lg:text-3xl">{`Hi, I'm Devi. Nice to meet you.`}</p>
          <p className="text-md md:text-lg pt-[15px]">
            Currently working as a Full-Stack Developer at Veltris, specializing
            in building scalable and high-performance web applications. I bridge
            engineering and design to create seamless, efficient, and visually
            engaging digital experiences. Whether optimizing backend systems or
            refining UI, I focus on delivering robust and impactful solutions
          </p>
          <p className="text-lg md:text-xl font-bold-800 pt-[10px]">
            {" "}
            Open to exciting full-time opportunities to contribute and grow!
          </p>
        </div>
      </div>
      <div className="bg-white w-[90%] rounded-lg mt-[-150px] border">
        <SkillsPage />
        <Experience />
      </div>
    </div>
  );
};

export default IntroPage;
