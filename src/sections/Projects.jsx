import { useEffect, useRef, useState } from "react";
import Project from "../Components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const [preview, setPreview] = useState(null);

  const requestRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  // Debounced and optimized mouse handler
  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX + 20, y: e.clientY + 20 };

    if (!requestRef.current) {
      requestRef.current = requestAnimationFrame(() => {
        x.set(mouse.current.x);
        y.set(mouse.current.y);
        requestRef.current = null;
      });
    }
  };

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing min-h-screen pt-24 scroll-mt-24"
    >
      <h2 className="text-heading">Featured Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
