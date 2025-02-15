import Image from "next/image";
import SplitBillCoverPhoto from "../assets/images/spilitting-bill-across-people.jpeg";
import GraveYard from "../assets/images/graveyard1.jpg";
import PortfolioCoverPhoto from "../assets/images/portfolio-cover-photo.jpg";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const projectsArr = [
    {
      title: "Split Bill",
      src: SplitBillCoverPhoto,
      bgColor: "#213f6c",
      gitRepo: "https://github.com/DeviPothula/Split-Bill",
      description:
        "Split Bill is web-based application for easy bill splitting by calculating each person's share and showing clear payment breakdowns. It makes group expenses transparent and hassle-free",
    },
    {
      title: "Cypresslawn",
      src: GraveYard,
      bgColor: "#296941",
      description:
        "Cypresslawn is grave booking platform for pre-booking cremation or burial services with customizable funeral arrangements. It manages records, payments, and schedules, streamlining the funeral service proces",
    },
    {
      title: "Portfolio",
      src: PortfolioCoverPhoto,
      bgColor: "#117dc2",
      gitRepo: "https://github.com/DeviPothula/portfolio",
      description:
        "Personal portfolio website showcasing my projects, skills, and experience. It highlights my work as a full stack developer with interactive designs and a user-friendly interface",
    },
  ];
  return (
    <div className="project-container text-center mt-[50px] mx-[40px]">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-[1.25rem]">
        My Recent Work
      </h1>
      <p className=" text-[14px] md:text-[1.25rem]">{`Here are a few past  projects I've worked on.`}</p>
      <div className="flex flex-wrap mt-[40px] gap-4 justify-center items-center ">
        {projectsArr?.map((item, i) => {
          //w-[calc(50%-16px)] Ensures each item takes up one by two of the width, subtracting the gap-4 (16px) for consistent spacing
          return (
            <div
              className={`project-info-wrapper relative w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-16px)]  h-[250px] md:h-[300px] border-solid border-1 rounded-lg group`}
              key={i}
            >
              <Image
                src={item?.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="border-solid border-1 rounded-lg"
              />
              <div
                className={`absolute inset-0 opacity-80  border-solid border-1 rounded-lg`}
                style={{ backgroundColor: item?.bgColor }}
              ></div>
              <h1 className="project-title absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                {item?.title}
              </h1>
              {/* Hidden overlay that appears on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#161c3a] text-white text-center p-4 opacity-0 transition-opacity group-hover:opacity-100 border-solid border-1 rounded-lg">
                <p className="project-description mb-4 text-xs md:text-lg">
                  {item?.description}
                </p>
                {item?.gitRepo && (
                  <a
                    href={item?.gitRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="source-code-link w-[30px] h-[30px] md:h-[40px] md:w-[40px] cursor-pointer" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
