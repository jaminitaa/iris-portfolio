import { useRef, useState, useEffect }  from 'react'
import ProjectsDetail from './ProjectsDetail';
import { motion } from "framer-motion";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const ProjectCards = () => {
  // Modal states
  const [modalViewOpen, setModalViewOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const cld = new Cloudinary({ cloud: { cloudName: 'dwqse2aia' } });

  const projects = [
    {
      title: "Coala",
      description: "B2B comprehensive mobile app that helps coaches to manage their progress through automated curriculum, attendance, evaluation, and reporting all within one app",
      image: cld
        .image('Coala_puubtc')
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)),
      link: "https://main.d1tudobvnhl6lq.amplifyapp.com/"
    },
    {
      title: "Credence",
      description: "B2B single-page application of an all-in-one CRM platform that helps small businesses and freelancers in business manage their business effortlessly, with functions of email scheduling, client and note creation, email retrieval, report graphs and search functionality.",
      image: cld
        .image('project-credence-calendar_eswwb6')
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(300)),
      link: "https://credence.onrender.com/"
    },
    {
      title: "Pin.Co",
      description: "A system that helps people to do safety check-ins, share real-time location with friends, send sos messages to contacts by one-click button and ask call simulation to keep safe.",
      image: cld
        .image('Pinco_pheo8e')
        .format('auto')
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(300)),
      link: "#"
    }
  ];

  // Toggle View modal
  const toggleViewModal = (project) => {
    setModalViewOpen(!modalViewOpen)
    setSelectedProject(project)
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 overflow-y-auto md:overflow-visible pb-4 md:pb-0 h-[calc(100vh-10rem)] md:h-auto">
      {projects.map((project, index) => (
        <div 
          key={index}
          onClick={() => toggleViewModal(project)} 
          className="w-full md:w-1/3 bg-white/20 backdrop-blur-lg rounded-lg p-2 md:p-6 flex flex-col gap-4 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl font-mono"
        >
          <AdvancedImage 
            cldImg={project.image} 
            className="h-50 md:h-50 mt-3 object-cover rounded-xl"
          />
          <div className="p-2 flex flex-col flex-grow">
            <h2 className="font-bold text-xl mb-3 text-yellow-500">{project.title}</h2>
            <p className="text-base leading-relaxed text-gray-800 flex-grow">
              {project.description}
            </p>
          </div>
          <div className="mt-4 m-2">
            <a 
              role='button' 
              href={project.link} 
              className="text-yellow-500 hover:text-gray-500 font-medium text-base py-1 rounded-md transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              View site
            </a>
          </div>
        </div>
      ))}

      {modalViewOpen && selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed left-0 right-0 flex items-center justify-center z-50"
          style={{
            top: '100vh',
            height: '100vh'
          }}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => toggleViewModal(null)}
          />
          <div className="bg-white p-6 rounded-lg shadow-xl relative max-w-md w-full m-4 font-mono">
            <h2 className="text-2xl font-bold mb-4 text-yellow-500">{selectedProject.title}</h2>
            <AdvancedImage 
              cldImg={selectedProject.image}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="flex justify-end">
              <a 
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-yellow-500 hover:text-gray-500 font-medium"
              >
                View site
              </a>
            </div>
            <button
              onClick={() => toggleViewModal(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-mono"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectCards
