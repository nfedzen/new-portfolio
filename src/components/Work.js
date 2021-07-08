import React from "react";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import "react-lazy-load-image-component/src/effects/blur.css";
import content from "../content";
import useWindowPosition from "../hook/useWindowPostion";

export default function Work() {
  const animated = useWindowPosition("header", 0.6);

  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col "
      style={{
        background: "#89cff0",
      }}
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold mt-10">
        {content.work.title}
      </h1>
      <p className="text-gray-600 text-2xl font-dosis mb-12">I have done</p>
      <div className="hidden md:block">
        {content.work.projects.map((project, key) => {
        if (key % 2 === 0) {
          return <ProjectLeft project={project} animated={animated} />;
        } else {
          return <ProjectRight project={project} animated={animated} />;
        }
      })}
      </div>
      <div className="md:hidden space-y-20 flex flex-col justify-center text-center items-center">
        {content.work.projects.map((project, key) => {
          return <ProjectLeft project={project} animated={animated} />;
        })}
      </div>
      
    </div>
  );
}

// const ProjectDetail = ({ project }) => {
//   const animated = useWindowPosition("header", 0.6);

//   return (
//     <div>
//       <h1
//         className={` ${
//           animated ? "" : "translate-y-10 opacity-0"
//         }   transform transition duration-2000 inline-block m-4  font-dosis text-xl font-bold`}
//       >
//         {project.projectName}
//       </h1>
//       <p
//         className={`${
//           animated ? "" : "translate-y-10 opacity-0"
//         }  transform transition duration-2000 inline-block w-11/12 m-4  text-xl font-dosis`}
//       >
//         {project.desc}
//       </p>
//       <button
//         className={`${
//           animated ? "" : "translate-y-10 opacity-0"
//         } transform transition duration-2000  px-20 py-3 m-4 bg-black flex justify-around text-white rounded-lg shadow-2xl`}
//       >
//         <img
//           src="https://timo.engineer/assets/icons/rocket.svg"
//           alt="rocket"
//           className="mr-5"
//         />
//         <p className="text-lg">Website</p>
//       </button>
//     </div>
//   );
// };
