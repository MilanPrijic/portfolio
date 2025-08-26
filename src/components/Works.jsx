import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { AppStoreLogo, github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useEffect, useState } from "react";
import ProjectFilter from "./filters/ProjectFilter.jsx";
import DropdownProjectFilter from "@/components/filters/DropdownProjectFilter.jsx";
import { Button } from "@/components/ui/button.js";
import { useSearchParams } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeIn("up", "spring", index * 0.2, 0.5)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl ms:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              {source_code_link.includes("apps.apple.com") ? (
                <img
                  src={AppStoreLogo}
                  alt="appstore"
                  className={"absolute w-1/4 h-1/4 object-contain rounded-full"}
                />
              ) : (
                <img
                  src={github}
                  alt="github"
                  className={"w-1/2 h-1/2 object-contain"}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            {deployed_link && (
              <Button
                className="underline px-1 py-3 bg-tertiary font-medium text-sm rounded-2xl leading-none"
                onClick={() => window.open(deployed_link, "_blank")}
              >
                Visit Site
              </Button>
            )}
          </div>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get("filter");

  const [showMore, setShowMore] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(projects.slice(0, 3));

  useEffect(() => {
    let filteredProjects = projects;

    if (selectedFilter && selectedFilter.toLowerCase() !== "all") {
      // Find the tag object for the selected filter
      const selectedTechnology = technologies.find(
        (technology) =>
          technology.name.toLowerCase() === selectedFilter.toLowerCase(),
      );

      // Build a set of valid values to match
      const validValues = selectedTechnology
        ? [
            selectedTechnology.name.toLowerCase(),
            ...selectedTechnology.correspondingValues.map((v) =>
              v.toLowerCase(),
            ),
          ]
        : [];

      // Filter projects
      filteredProjects = projects.filter((project) =>
        project.tags.some((tag) =>
          validValues.includes(tag.name.toLowerCase()),
        ),
      );
    }

    setProjectsToShow(
      showMore ? filteredProjects : filteredProjects.slice(0, 3),
    );
  }, [showMore, selectedFilter]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <ProjectFilter filters={technologies} />

      <DropdownProjectFilter filters={technologies} />

      <div className="mt-10 flex flex-wrap gap-7">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="mt-20 flex w-full items-center justify-center">
        <Button
          className="px-6 py-3 bg-tertiary font-light text-sm rounded-2xl leading-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
