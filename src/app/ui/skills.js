import Image from "next/image";
import FrontendImg from "../assets/images/ux-design.png";
import BackendImg from "../assets/images/backend-coding.png";
import ToolsImg from "../assets/images/tools-and-platforms.png";

const SkillsPage = () => {
  return (
    <div className="skills-wrapper text-black ">
      <h1 className="w-full text-xl md:text-2xl lg:text-3xl text-center py-[20px] font-[800]">
        Skills
      </h1>
      <div className="grid gird-cols-1 md:grid-cols-3  gap-4">
        <div className=" flex flex-col pt-[30px] mx-auto border-b md:border w-[100%]">
          <div className="h-[80px] w-[80px] bg-[#5cecbc] flex  items-center justify-center mx-auto rounded-full">
            <Image
              src={FrontendImg}
              alt="frontend-image"
              className="h-[50px] w-[50px]"
            />
          </div>
          <p className="text-lg md:text-xl font-[900] py-[15px] text-center">
            Frontend
          </p>
          <div className="flex flex-col gap-1 text-center pb-[10px]">
            <p>React.Js</p>
            <p>Redux</p>
            <p>Next.Js</p>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind Css</p>
            <p>Bootstrap</p>
            <p>Reactstrap</p>
          </div>
        </div>
        <div className="flex  flex-col pt-[30px] mx-auto border-b md:border w-[100%]">
          <div className="h-[80px] w-[80px] bg-[#5cecbc] flex  items-center justify-center mx-auto rounded-full">
            <Image
              src={BackendImg}
              alt="frontend-image"
              className="h-[50px] w-[50px]"
            />
          </div>
          <p className="text-lg md:text-xl font-[900] py-[15px] text-center">
            Backend
          </p>
          <div className="flex flex-col gap-1 text-center pb-[10px]">
            <p>Node.Js</p>
            <p>Express.Js</p>
            <p>Postgresql</p>
            <p>MongoDB</p>
            <p>SQL</p>
          </div>
        </div>
        <div className="flex  flex-col pt-[30px] mx-auto border-b md:border w-[100%]">
          <div className="h-[80px] w-[80px] bg-[#5cecbc] flex  items-center justify-center mx-auto rounded-full">
            <Image
              src={ToolsImg}
              alt="frontend-image"
              className="h-[50px] w-[50px]"
            />
          </div>
          <p className="text-lg md:text-xl font-[900] py-[15px] text-center">
            Tools and platforms
          </p>
          <div className="flex flex-col gap-1 text-center pb-[10px]">
            <p>Git</p>
            <p>Postman</p>
            <p>Jira</p>
            <p>Jenkins</p>
            <p>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
