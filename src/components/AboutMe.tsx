import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-12 text-center"
    >
      <h3 className="text-3xl font-semibold mb-4 text-white">About Me</h3>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <p className="text-gray-300 text-lg leading-relaxed">
          I am passionate about creating high-quality mobile applications that provide excellent user experiences. With a strong background in Flutter and a keen eye for design, I strive to deliver apps that are both functional and visually appealing.
        </p>
      </div>
      <h3 className="text-3xl font-semibold mt-12 mb-4 text-white">Flutter Skills</h3>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
        <ul className="list-disc list-inside text-left text-gray-300">
          <li>Cross-platform mobile app development for Android, iOS, and Web</li>
          <li>State management using Riverpod, Bloc, and GetX</li>
          <li>Integration with Firebase services (Authentication, Firestore, Cloud Messaging)</li>
          <li>REST API integration</li>
          <li>UI/UX design and implementation</li>
          <li>CI/CD pipeline setup and maintenance</li>
          <li>App deployment on Google Play Store & Apple App Store</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutMe;
