import React, { useEffect, useState } from "react";
import content from "../content";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Typical from "react-typical";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-500"
      id="header"
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={content.header.img}
            effect="blur"
            placeholderSrc={content.header.imgPlaceholder}
            className="rounded-full"
          />
        </div>
        <div className="text-blue-100 font-dosis text-center md:text-left">
          <h2
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out text-4xl md:text-6xl font-bold`}
          >
            {content.header.text[0]}
            <br />
            {content.header.text[1]}
          </h2>
          <h1
            className={`${
              animated ? "" : "translate-y-10 opacity-0"
            } transform transition duration-2000 ease-in-out font-bold text-2xl text-blue-200`}
          >
            {content.header.text[2]}
            <Typical
              steps={content.header.typical}
              loop={Infinity}
              className="inline-block"
            />
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className="animate-float bg-blue-800 text-blue-100 px-20 py-3 text-xl uppercase mt-10 rounded-lg">
              {content.header.btnText}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
