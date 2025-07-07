import React from "react";
import { Timeline } from "../Components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <div id="education" className="w-full min-h-screen pt-24 scroll-mt-24">
        <Timeline data ={experiences}/>
    </div>
  );
};

export default Experiences;