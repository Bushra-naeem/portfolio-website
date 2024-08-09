import React from "react";
import laptopImg from "../assets/images/aboutImage.png";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import "./styles.css";

export default function About() {
  return (
    <section className="px-6 md:px-12 lg:pl-40 lg:pr-28 pb-16">
      <div
        className="w-full flex flex-col lg:flex-row lg:items-center py-20 gap-8 mb-0 lg:mb-4 pt-32 lg:pt-40"
        id="home"
      >
        <div className="w-full lg:w-1/2 md:pl-4">
          <h1 className="font-normal text-4xl pb-8 text-center text-white">
            Know Who
            <span className="font-semibold" style={{ color: "#C770F0" }}>
              {" "}
              I'M
            </span>
          </h1>
          <p className="pb-3 text-white">
            Hi everyone, I'm a{" "}
            <span style={{ color: "#C770F0" }}>
              Front-end React JS developer
            </span>
            . I love to create simple yet beautiful websites with great user
            experience. I'm interested in the whole frontend stack like trying
            new things and building great projects.
          </p>
          <p className="pb-4 text-white">
            I believe everything is an Art when you put your consciousness in
            it. You can connect with me via social links.
          </p>
          <p className="pb-4 text-white">
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ listStyleType: "disc" }} className="ml-8 text-white">
            <li>Reading Books</li>
            <li>Travelling</li>
            <li>Calligraphy</li>
            <li>Baking</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full pr-6 md:pr-12"
            src={laptopImg}
            alt="Modern house model"
          />
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-normal text-5xl mb-8" style={{ color: "#C770F0" }}>
          My Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <div className="tech-icons">
            <FaHtml5 className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <FaCss3 className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiJavascript1 className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <RiTailwindCssFill className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiReact className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiNodejs className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiMongodb className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiPython className="text-7xl text-white" />
          </div>
          <div className="tech-icons">
            <DiGit className="text-7xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
