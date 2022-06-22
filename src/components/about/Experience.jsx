import React from "react";

const experienceContent = [
  {
    year: "   July 2021 - Present",
    position: "Mobile Application Developer",
    compnayName: "Visionet Data Internasional",
    details: `Bug fixing and maintenance of existing mobile applications. Update new features and release on PlayStore and AppStore. Collaborate with BE, BA, and QA.`,
  },
  {
    year: "April 20220 - July 2021",
    position: "Mobile Application Developer",
    compnayName: "Permata Indo Sejahtera",
    details: `Revamp and release TopCareer mobile app from webview to react native. Revamp and release Spotcheck Sales Monitoring mobile app from java to react native. Build hospitality mobile app using react native. Create Restfull-API Create UI Design using Figma. Collaborate with 2-3 developers.`,
  },
  {
    year: "July 2018 - March 2020",
    position: "Web Developer",
    compnayName: "Permata Indo Sejahtera",
    details: `Build and maintenance report system base on web. Build inventory system for internal project. Handle 3 client & 7 project web base. Collaborate with 2-3 developers.`,
  },
  {
    year: "Jan 2017 - Nov 2017",
    position: "Search Engine Optimization Specialist",
    compnayName: "TopCareer",
    details: `Research & Analyst keywords. Planing and executing SEO strategies (on-page and off-page). Perform analysis base on Social Media and Google Analytics.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
