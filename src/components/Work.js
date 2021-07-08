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
      className="min-h-screen flex justify-center items-center flex-col bg-blue-500 "
      id="mywork"
    >
      <h1 className="text-5xl font-dosis font-bold mt-10 text-blue-800">
        {content.work.title}
      </h1>
      <p className="text-blue-200 text-2xl font-dosis mb-12">I have done</p>
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

