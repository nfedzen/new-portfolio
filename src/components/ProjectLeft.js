import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ProjectDetail from "./ProjectDetail";
import useWindowPosition from "../hook/useWindowPostion";

export default function ProjectLeft({ project, animated }) {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row justify-between space-x-20  w-11/12 mx-auto">
      <LazyLoadImage
        effect="blur"
        placeholderSrc={project.imgPlaceholder}
        src={project.img}
        alt="phone prototype"
        className="transtion duration-2000 ease-in-out md:z-10 md:mx-auto md:w-4/5 mx-auto w-4/5 rounded-lg"
      />
      <div
        className="transtion duration-2000 text-blue-900 bg-blue-200 ease-in-out p-10 max-w-xl lg:max-w-xl rounded-lg hidden md:block mx-auto"
        style={{
          border: "1px solid #e5ecf9",
          transform: animated
            ? "translate(-10%, 0%) rotate3d(1, 0, 0, 22deg) rotateZ(0deg)"
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
    </div>
  );
}

const ProjectDetail = ({ project }) => {
  const animated = useWindowPosition("header", 0.6);

  return (
    <div className="flex flex-col text-blue-800 items-center mr-20 md:mx-auto">
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

      {project.link.site ? 
        <a href={project.link.site}>
          <button
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 px-20 py-3 m-4 bg-blue-800 flex justify-around text-white rounded-lg shadow-2xl`}
          >
            <img
              src="https://timo.engineer/assets/icons/rocket.svg"
              alt="rocket"
              className="mr-5"
            />
            <p className="text-lg">Website</p>
          </button>
        </a> : <a href={project.link.github}>
          <button
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 px-20 py-3 m-4 bg-blue-800 flex justify-around text-white rounded-lg shadow-2xl`}
          >
            <img
              src="https://timo.engineer/assets/icons/rocket.svg"
              alt="rocket"
              className="mr-5"
            />
            <p className="text-lg">Github</p>
          </button>
        </a>
      }
        

    </div>
  );
};
