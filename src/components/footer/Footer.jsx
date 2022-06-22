import React from "react";

const Footer = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p>
            &copy; {new Date().getFullYear()} by{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
