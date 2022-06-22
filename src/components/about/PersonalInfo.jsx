import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Andi " },
  { meta: "last name", metaInfo: "Rustianto" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Jakarta, Indonesia" },
  { meta: "phone", metaInfo: "+6285881160601" },
  { meta: "Email", metaInfo: "anditodev46@mail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
