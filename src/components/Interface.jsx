import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";

import ProjectCards from "./ProjectCards";
import { Canvas } from "@react-three/fiber";

const Section = (props) => {
  const { children, mobileTop, Col } = props;

  return (
    <motion.section
      className={`
        h-screen w-screen p-8 max-w-screen-2xl mx-auto relative
        ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
        ${Col ? "flex flex-col items-start" : "flex flex-row items-start"}
      `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection, activePortal } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} activePortal={activePortal} />
      <SkillsSection />
      {/* <ProjectsSection /> */}
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection, activePortal } = props;
  return (
    <Section Col mobileTop whileInView={"visible"}>
      {!activePortal && (
        <>
          <h1 className="text-4xl md:text-6xl font-extrabold ml-6 leading-snug mt-8 md:mt-0">
            Hi, I'm
            <br />
            <span className="bg-yellow-500 px-1 italic text-white">Iris Chen</span>
          </h1>
          <p className="text-lg text-gray-600 ml-6 mt-4">
            Developer | Designer
            <br />
            Explore the different seasons of me by clicking the cards!
          </p>
        </>
      )}
    </Section>
  );
};

const skills = [
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "React Three Fiber",
    level: 60,
  },
  {
    title: "Project Management",
    level: 60,
  },
];
const languages = [
  {
    title: "Chinese",
    level: 100,
  },
  {
    title: "English",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="grow-1 gap-4 p-8" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-gray-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Languages
          </h2>
          <div className="mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-gray-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div className="grow-4 p-8 w-full h-full relative">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Projects</h2>
        <ProjectCards/>
      </motion.div>
    </Section>
  );
};

