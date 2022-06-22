import React from "react";

const skillsContent = [
  {
    name: "JavaScript",
  },
  {
    name: "React Js",
  },
  {
    name: "React Native",
  },
  {
    name: "Node Js",
  },
  {
    name: "PHP",
  },
  {
    name: "Figma",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
        </div>
      ))}
    </>
  );
};

export default Skills;
