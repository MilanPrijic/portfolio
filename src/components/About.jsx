import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ index, title, icon }) => {
  const navigate = useNavigate();

  const determineFilter = (title) => {
    switch (title.toLowerCase()) {
      case "ios developer":
        return "swift";
      case "web developer":
        return "web";
      case "react native developer":
        return "react native";
      case "game developer":
        return "game";
      default:
        return "";
    }
  };

  const handleClick = () => {
    navigate({
      pathname: "/",
      search: `?filter=${determineFilter(title)}`,
      hash: "#projects",
    });

    // ensure smooth scroll to #projects
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = "projects";
      }
    }, 50);
  };

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        onClick={handleClick}
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        varients={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software engineer with expertise in iOS, macOS, and
        full-stack development, leveraging both front-end and back-end
        technologies to deliver robust solutions. I bring experience in leading
        teams as well as collaborating under the direction of others, adapting
        effectively to both roles. With a strong passion for gaming and hands-on
        experience developing single-player and multiplayer projects in Unreal
        Engine 5, I combine creativity with technical expertise. Grounded in
        computer science and committed to continuous learning, I am dedicated to
        building high-quality software that meets user needs and exceeds
        expectations.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
