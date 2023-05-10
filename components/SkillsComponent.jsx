import React from "react";
import Image from "next/image";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import Typescript from "../public/assets/skills/typescript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/Tailwind.png";
import Github from "../public/assets/skills/github1.png";
import NodeJs from "../public/assets/skills/node.png";

const SkillsComponent = () => {
  return (
    <>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Html} width="64px" height="64px" alt="/html" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>HTML</h3>
          </div>
        </div>
      </div>

      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Css} width="64px" height="64px" alt="/css" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>CSS</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Javascript} width="64px" height="64px" alt="/js" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Typescript} width="64px" height="64px" alt="/ts" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Typescript</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={ReactImg} width="64px" height="64px" alt="/react" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>React</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Tailwind} width="64px" height="64px" alt="/tailwind" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Tailwind</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={Github} width="64px" height="64px" alt="/github" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Github</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image src={NodeJs} width="64px" height="64px" alt="/node" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>NodeJS</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsComponent;
