import React from "react";

function AboutCard({ red = false, title, description, img }) {
  return (
    <>
      <div className={`${red ? "gradientRed" : "bg-tertiary"} h-[30vh] text-white`}>
        <div className="m-4">
          <div>
            <img alt="logo" src={`./${img}`}></img>
          </div>
          <div className="text-white mt-2">
              <h2>{title}</h2>
          </div>
          <div className="mt-2">
              <p>Lorem jhfjhgfhgfhjgfjhgfhjgfjhgfjhgf</p>
          </div>
          <div className="mt-2">
              <a href="www.google.com" className={`{uppercase text-xl} ${red ? "text-white" : "text-costum-red"}`}>Know More</a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .gradientRed {
          background: rgb(213, 31, 43);
          background: linear-gradient(
            180deg,
            rgba(213, 31, 43, 1) 0%,
            rgba(165, 17, 26, 1) 100%
          );
        }
        .gradientGray {
          background: rgb(213, 31, 43);
          background: linear-gradient(
            180deg,
            rgba(213, 31, 43, 1) 0%,
            rgba(165, 17, 26, 1) 100%
          );
        }
      `}</style>
    </>
  );
}

export default AboutCard;
