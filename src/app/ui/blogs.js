import Image from "next/image";
import CodingBg from "../assets/images/coding_bg.jpg";
import AwsEksImg from "../assets/images/aws_eks.jpg";
const Blogs = () => {
  const blogsArr = [
    {
      src: AwsEksImg,
      blogUrl:
        "https://medium.com/@devikapothula597/deploying-a-two-tier-react-and-node-js-app-on-amazon-eks-using-an-alb-ingress-controller-6fcad0395e3f",
      title: "Deploying a Two-Tier React, Node.js App on AWS EKS",
      description:
        "In this blog, we’ll explore how to deploy a two-tier application consisting of a React frontend and Node.js backend on Amazon EKS (Elastic Kubernetes Service) using an Ingress Controller as an Application Load Balancer (ALB)....",
    },
    {
      src: CodingBg,
      blogUrl:
        "https://medium.com/@devika.p/unlocking-react-quill-editors-potential-essential-functions-explained-e7fd310c24d7",
      title: "Unlocking React Quill Editor’s Potential",
      description:
        "React Quill Editor is a powerful rich text editor component for React applications. It provides developers with a simple yet feature-rich interface for users to create and edit text content with ease....",
    },
  ];
  return (
    <div className="mt-[50px] mx-[40px]">
      <h1 className="font-bold  text-xl md:text-2xl lg:text-3xl text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[40px]">
        {blogsArr?.map((item, i) => {
          return (
            <div
              className={`blog-info-wrapper  border-b-[4px] border-[#6e06f2] rounded-b-[6px]`}
              key={i}
            >
              <Image
                src={item?.src}
                alt={"BlogThumbnail"}
                objectFit="cover"
                className="border-solid border-1 rounded-xm"
              />
              <a href={item?.blogUrl} rel="noopener noreferrer" target="_blank">
                <div className="p-2">
                  <h3 className="font-bold text-sm md:text-md pb-[4px]">
                    {item?.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item?.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
