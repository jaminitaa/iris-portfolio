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
        h-screen w-screen p-2 max-w-screen-2xl mx-auto relative
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
  const { setSection, activePortal, setActive, setActivePortal } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection 
        setSection={setSection} 
        activePortal={activePortal} 
        setActive={setActive}
        setActivePortal={setActivePortal}
      />
      <SkillsSection />
      {/* <ProjectsSection /> */}
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection, activePortal, setActive, setActivePortal } = props;

  const introText = {
    SUMMER: "Welcome to my summer portal! Here, I showcase my creative side through playful and interactive designs. Just like this cheerful duck, I bring a fresh and energetic approach to web design, blend functionality with aesthetics, creating digital spaces that feel both practical and welcoming.",
    WINTER: "Step into my winter sanctuary! This cozy kitchen scene represents my love for crafting warm, rational web development. Here, I combining technical expertise with a touch of whimsy."
  }

  const skills = {
    SUMMER: [
      { name: "UI/UX Design(Figma)", level: 70 },
      { name: "Prototyping(Figma|Miro)", level: 70 },
      { name: "GraphicDesign(Photoshop|Illustrator)", level: 60 },
      { name: "Project Management(Jira|Trello|Notion|Asana)", level: 80 }
    ],
    WINTER: [
      { name: "Frontend development (HTML|Javascript|CSS|Sass|SCSS|Tailwind CSS|Material UI)", level: 90 },
      { name: "Javascript frameworks/libraries (React.js|React Native|Next.js)", level: 85 },
      { name: "Backend Development(Node.js|Express)", level: 70 },
      { name: "Cloud & Databases(AWS Amplify|DynamoDB|MongoDB|Firebase)", level: 70 }
    ]
  };

  const languages = {
    SUMMER: [
      { name: "Chinese", level: 100 },
      { name: "English", level: 80 }
    ],
    WINTER: [
      { name: "Chinese", level: 100 },
      { name: "English", level: 80 }
    ]
  };

  const handleExit = () => {
    setActivePortal(null);
    setActive(null);
  };

  return (
    <Section Col mobileTop whileInView={"visible"}>
      {!activePortal ? (
        <>
          <h1 className="text-4xl md:text-6xl font-extrabold font-mono ml-6 leading-snug mt-8 md:mt-0">
            Hi, I'm
            <br />
            <span className="bg-yellow-500 px-1 italic text-white">Iris Chen</span>
          </h1>
          <p className="text-lg text-gray-600 ml-6 mt-4 font-mono tracking-wide">
            Developer | Designer
            <br />
            Explore the different seasons of me by clicking the cards!
          </p>
        </>
      ) : (
        <div className="w-full max-w-2xl mx-auto px-4">
          <div className="bg-white/70 rounded-lg p-6 shadow-lg relative">
            <button 
              onClick={handleExit}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-2xl shadow-lg hover:bg-white transition-colors"
            >
              ×
            </button>
            <p className="text-lg text-gray-800 mb-8 font-mono">
              {introText[activePortal]}
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-mono">Skills</h3>
                <div className="space-y-4">
                  {skills[activePortal].map((skill, index) => (
                    <motion.div 
                      key={index} 
                      className="space-y-2"
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2
                      }}
                    >
                      <div className="flex justify-between font-mono">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-yellow-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + index * 0.2
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 font-mono">Languages</h3>
                <div className="space-y-4">
                  {languages[activePortal].map((lang, index) => (
                    <motion.div 
                      key={index} 
                      className="space-y-2"
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      animate={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 0.8,
                        delay: (skills[activePortal].length + index) * 0.2
                      }}
                    >
                      <div className="flex justify-between font-mono">
                        <span className="font-medium text-gray-800">{lang.name}</span>
                        <span className="text-gray-600">{lang.level}%</span>
                      </div>
                      <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-yellow-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.level}%` }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + (skills[activePortal].length + index) * 0.2
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="grow-4 p-8 w-full h-full relative">
        <h2 className="text-3xl md:text-5xl mb-6 font-bold text-yellow-500 font-mono">Projects</h2>
        <ProjectCards/>
      </motion.div>
    </Section>
  );
};

