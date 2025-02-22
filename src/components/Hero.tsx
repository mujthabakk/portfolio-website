import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Muhammed Mujthaba</h1>
              <h2 className="text-2xl md:text-3xl text-blue-400">Flutter Developer | Mobile App Specialist</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                A highly skilled Flutter Developer specializing in cross-platform mobile app development for Android, iOS, and Web. Experienced in Flutter, Firebase, GetX, Riverpod, Bloc, Provider, REST APIs, Django, App Store, Play Store, CI/CD and UI/UX design.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about creating seamless user experiences and delivering high-quality applications. Let's work together to bring your ideas to life!
              </p>
              <div className="flex flex-wrap gap-4">
                {/* ✅ Fixed Download Resume Button */}
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://drive.google.com/file/d/1u0u8cvQ3ZbbQRce-5e4SX2c94sUvdD5K/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>

                {/* ✅ Fixed Contact Me Button */}
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-colors cursor-pointer"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </motion.button>
              </div>

              {/* ✅ Fixed Social Media Links */}
              <div className="flex gap-6">
                <a href="tel:+918113853193" className="text-gray-400 hover:text-white transition-colors">
                  <Phone size={24} />
                </a>
                <a href="mailto:mujthabakk9@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://github.com/mujthabakk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/mujthabakk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
                <motion.img 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Muhammed Mujthaba"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
