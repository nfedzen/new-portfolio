import React from "react";

export default function ProjectDetail({project, animated}) {
  console.log(project.projectName)
  return (
    <div className="mx-auto">
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
