import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import content from "../content/index";

export default function Stack() {
  return (
    <div className="min-h-screen bg-blue-200 text-blue-900 flex flex-col items-center justify-center pb-10 font-dosis" id="stack">
        <h1 className="text-5xl font-bold">Technologies</h1>
        <div className="flex flex-wrap justify-center mt-10">
          {content.stack.tech.map((tech, index) => {
            return (
              <span 
              className={`${
                index % 2 === 0 ? 'animate-float' : 'animate-refloat'}
              w-40 h-40 bg-blue-100 shadow-2xl m-2 rounded-full flex items-center p-5`}> 
                <LazyLoadImage src={tech.img} alt={tech.alt} />
              </span>
            );
          })}
        </div>
        <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">{content.stack.desc}</p>
      </div>
  );
}
