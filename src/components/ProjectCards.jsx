import { useRef, useState, useEffect }  from 'react'
import ProjectsDetail from './ProjectsDetail';
import { motion } from "framer-motion";

const ProjectCards = () => {
  // Modal states
  const [modalViewOpen, setModalViewOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Coala",
      description: "B2B comprehensive mobile app that helps coaches to manage their progress through automated curriculum, attendance, evaluation, and reporting all within one app",
      image: "../../public/projects/Coala.png",
      link: "https://main.d1tudobvnhl6lq.amplifyapp.com/"
    },
    {
      title: "Credence",
      description: "B2B single-page application of an all-in-one CRM platform that helps small businesses and freelancers in business manage their business effortlessly, with functions of email scheduling, client and note creation, email retrieval, report graphs and search functionality.",
      image: "../../public/projects/project-credence-calendar.jpg",
      link: "https://credence.onrender.com/"
    },
    {
      title: "Pin.Co",
      description: "A system that helps people to do safety check-ins, share real-time location with friends, send sos messages to contacts by one-click button and ask call simulation to keep safe.",
      image: "../../public/projects/Pinco.png",
      link: "#"
    }
  ];

  // Toggle View modal
  const toggleViewModal = (project) => {
    setModalViewOpen(!modalViewOpen)
    setSelectedProject(project)
  }

  return (
    <div className="relative w-full h-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      {projects.map((project, index) => (
        <div 
          key={index}
          onClick={() => toggleViewModal(project)} 
          className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
        >
          <img className="h-40 object-cover rounded-xl" src={project.image} alt={project.title}/>
          <div className="p-2">
            <h2 className="font-bold text-lg mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
          <div className="m-2">
            <a 
              role='button' 
              href={project.link} 
              className="text-yellow-600 bg-transparent py-1 rounded-md hover:text-blue-700"
              onClick={(e) => e.stopPropagation()}  // Prevent modal from opening when clicking link
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
            top: '100vh',  // Position at second page
            height: '100vh'
          }}
        >
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => toggleViewModal(null)}
          />
          <motion.div 
            className="bg-white rounded-lg p-8 relative max-w-2xl w-full mx-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <button
              onClick={() => toggleViewModal(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-xl"
            >
              ×
            </button>
            <img 
              className="w-full h-64 object-cover rounded-lg mb-4" 
              src={selectedProject.image} 
              alt={selectedProject.title}
            />
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-600">{selectedProject.description}</p>
            <div className="mt-4">
              <a 
                href={selectedProject.link} 
                className="text-yellow-600 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View site
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectCards
