import React from "react";
import AboutCard from "./AboutCard";
import MeasurementsCard from "./MeasurementsCard";

function AboutMe() {
  return (
    <div className="bg-primary p-0 m-0 h-screen w-screen relative">
      <div className="bg-secundary w-[50%] h-screen absolute z-0"></div>
      <div
        className="h-3/4 w-3/4 absolute"
        style={{
          left: "calc((100vw - 75vw)/2)",
          top: "calc((100vh - 75vh)/2)",
        }}
      >
        <div className="grid grid-cols-3 gap-3 px-2 ">
          <AboutCard img="tools.png" title="software developer" />
          <AboutCard
            img="./toolsWhite.png"
            red={true}
            title="software developer"
          />
          <AboutCard img="./tools.png" title="software developer" />
        </div>
        <div className="grid grid-cols-6 gap-3 px-2 pt-10">
          <div className="col-span-2 h-[40vh] flex justify-center items-center font-bold">
            <div className="text-center">
              <h2 className="text-8xl text-light-costum-red ">04</h2>
              <h1 className="text-white uppercase mt-1">years Expererience</h1>
            </div>
          </div>
          <div className="col-span-4 h-[40vh]">
            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="">
                <MeasurementsCard />
              </div>
              <div>
                <MeasurementsCard />
              </div>
              <div>
                <MeasurementsCard />
              </div>
              <div>
                <MeasurementsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
