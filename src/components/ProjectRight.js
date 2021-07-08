import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowPosition from "../hook/useWindowPostion";

export default function ProjectRight({ project, animated }) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-12 justify-between md:ml-24 items-center w-11/12 mx-auto mt-10 mb-10">
      <div
        className="transtion duration-2000 ease-in-out p-10 max-w-xl lg:max-w-3xl rounded-lg hidden md:block"
        style={{
          border: "1px solid #e5ecf9",
          transform: animated
            ? "rotate3d(1, 0, 0, 22deg) rotateZ(0deg)"
            : "",
          boxShadow:
            "35px 50px 90px -25px rgba(50, 50, 95, 0.5), 20px 35px 75px -35px rgba(0, 0, 0, 0.5)",
        }}
      >
        <ProjectDetail project={project} />
      </div>
      <div className="flex justify-center items-center md:hidden">
        <ProjectDetail project={project} />
      </div>
      <LazyLoadImage
        effect="blur"
        placeholderSrc={project.imgPlaceholder}
        src={project.img}
        alt="phone prototype"
        className="ml-2 transtion duration-2000 ease-in-out z-10 md:w-4/5 w-4/5 rounded-lg"
      />
    </div>

    
  );
}

const ProjectDetail = ({ project }) => {
  const animated = useWindowPosition("header", 0.6);

  return (
    <div >
      <h1
        className={` ${
          animated ? "" : "translate-y-10 opacity-0"
        }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
      >
        {project.projectName}
      </h1>
      <p
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
      >
        {project.desc}
      </p>
      <button
        className={`${
          animated ? "" : "translate-y-10 opacity-0"
        } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
      >
        <img
          src="https://timo.engineer/assets/icons/rocket.svg"
          alt="rocket"
          className="mr-5"
        />
        <p className="text-lg">Website</p>
      </button>
    </div>
  );
};