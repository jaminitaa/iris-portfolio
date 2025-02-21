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
  const { setSection, activePortal, setActive } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} activePortal={activePortal} setActive={setActive} />
      <SkillsSection />
      {/* <ProjectsSection /> */}
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection, activePortal, setActive } = props;

  const introText = {
    Summer: "Welcome to my summer portal! Here, I showcase my creative side through playful and interactive designs. Just like this cheerful duck, I bring a fresh and energetic approach to web development, combining technical expertise with a touch of whimsy.",
    Winter: "Step into my winter sanctuary! This cozy kitchen scene represents my love for crafting warm, inviting user experiences. Here, I blend functionality with aesthetics, creating digital spaces that feel both practical and welcoming."
  }

  const skills = {
    Summer: [
      { name: "React", level: 90 },
      { name: "Three.js", level: 85 },
      { name: "WebGL", level: 80 },
      { name: "Creative Coding", level: 85 }
    ],
    Winter: [
      { name: "UI/UX Design", level: 90 },
      { name: "User Research", level: 85 },
      { name: "Prototyping", level: 88 },
      { name: "Design Systems", level: 85 }
    ]
  };

  return (
    <Section Col mobileTop whileInView={"visible"}>
      {!activePortal ? (
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
      ) : (
        <div className="w-full max-w-2xl mx-auto px-4">
          <div className="bg-white/50 rounded-lg p-6 shadow-lg relative">
            <button 
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-white transition-colors"
            >
              ×
            </button>
            <p className="text-lg text-gray-800 mb-8">
              {introText[activePortal]}
            </p>
            <div className="space-y-4">
              {skills[activePortal].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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

