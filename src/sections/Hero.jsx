import { Canvas } from "@react-three/fiber";
import HeroText from "../Components/HeroText";
import ParallaxBackground from "../Components/ParallaxBackground";

const Hero = () => {
  return (
    <section id="home" className="flex items-start justify-center 
    md:items-start md:justify-start min-h-screen overflow-hidden 
    c-space">
        <HeroText />
        <ParallaxBackground />
        {/* <figure className="absolute inset-0" style= {{ width: "100vw", height: "100vh"}}>
          <Canvas>
            <Robo />
          </Canvas>
        </figure> */}
    </section>
  );
};

export default Hero;