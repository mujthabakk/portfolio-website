import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Store, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  playStore?: string;
  appStore?: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "Smart School Pro",
    description: "A complete school management system featuring fee payments, student-teacher interactions, assignments, QR-based gate pass, live chat, timetable, homework, and an Instagram-like timeline.",
    techStack: ["Flutter", "GetX", "Firebase", "QR Code"],
    playStore: "https://play.google.com/store/apps/details?id=com.smartschoolpro",
    appStore: "https://apps.apple.com/app/smart-school-pro",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Smart Tracker",
    description: "Real-time school bus tracking application with push notifications, safety QR scanning, route management, and attendance tracking.",
    techStack: ["Flutter", "GetX", "Maps API", "Firebase"],
    playStore: "https://play.google.com/store/apps/details?id=com.smarttracker",
    appStore: "https://apps.apple.com/app/smart-tracker",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Coupon Connect",
    description: "POS machine app for generating WiFi coupons with seamless backend integration and real-time updates.",
    techStack: ["Flutter", "Riverpod", "Firebase"],
    playStore: "https://play.google.com/store/apps/details?id=com.couponconnect",
    appStore: "https://apps.apple.com/app/coupon-connect",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Blue Ocean",
    description: "Hotel booking application with room availability checking, payment integration, and check-in/check-out management.",
    techStack: ["Flutter", "GetX", "Payment Gateway", "REST API"],
    playStore: "https://play.google.com/store/apps/details?id=com.blueocean",
    appStore: "https://apps.apple.com/app/blue-ocean",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Accord Approval",
    description: "Warehouse management app for Nesto with stock approvals and role-based access control.",
    techStack: ["Flutter", "GetX", "REST API"],
    playStore: "https://play.google.com/store/apps/details?id=com.accordapproval",
    appStore: "https://apps.apple.com/app/accord-approval",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Rent Hub",
    description: "Location-based rental application with OTP authentication, theme customization, integrated payments, and map integration.",
    techStack: ["Flutter", "Firebase", "Maps API", "Payment Gateway"],
    github: "https://github.com/mujthabakk/rent-hub",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Movie App",
    description: "Movie browsing application using TMDB API with features to browse movies, view details, and mark favorites.",
    techStack: ["Flutter", "REST API", "TMDB API"],
    github: "https://github.com/mujthabakk/movie-app",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Zaagha",
    description: "Local music player app with background playback, favorites, and intuitive interface.",
    techStack: ["Flutter", "Local Storage"],
    github: "https://github.com/mujthabakk/zaagha",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.playStore && (
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="Play Store"
            >
              <Store size={20} />
            </a>
          )}
          {project.appStore && (
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="App Store"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of Flutter applications, showcasing expertise in mobile development,
            user experience design, and technical innovation.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;