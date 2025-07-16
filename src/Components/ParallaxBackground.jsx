import {motion, useScroll, useSpring, useTransform } from "motion/react";
import React from "react";

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress,{damping:50 });
    const mountain3Y = useTransform(x,[0,0.5], ["0%", "70%"]);
    const planetsX = useTransform(x,[0,0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x,[0,0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x,[0,0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/50 ">
        <div className="relative h-screen overflow-y-hidden">
            {/*Background video*/}
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-screen object-cover -z-50">
            <source src="https://res.cloudinary.com/do9fq5li1/video/upload/v1752678743/d06bbe94-ea79-4e2e-a9ea-e8e51cb93ca6.mp4_ag70cj.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        </div>
    </section>
  );
};

export default ParallaxBackground;
