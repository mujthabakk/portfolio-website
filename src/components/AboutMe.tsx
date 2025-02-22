import { FaBuilding, FaCode, FaMobileAlt, FaDatabase, FaPaintBrush, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <>
      {/* <Header /> Add this line */}
      <div id="about-me" className="container mx-auto px-4 py-8 text-white">
        <div className="flex flex-wrap -mx-4">
          <section className="mb-12 w-full md:w-1/2 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full transition-colors duration-300 hover:bg-gray-700">
              <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
              <p className="text-lg leading-relaxed">
                A highly skilled Flutter Developer specializing in cross-platform mobile app development for Android, iOS, and Web. Experienced in Flutter, Firebase, GetX, Riverpod, Bloc, Provider, REST APIs, Django, App Store, Play Store, CI/CD and UI/UX design.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Passionate about creating seamless user experiences and writing clean, maintainable code. Always eager to learn new technologies and improve existing skills.
              </p>
              <h2 className="text-4xl font-bold mt-8 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2 text-sm leading-relaxed">
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaMobileAlt className="inline mr-2" />Flutter</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaDatabase className="inline mr-2" />Firebase</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />GetX</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />Riverpod</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />Bloc</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />Provider</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaDatabase className="inline mr-2" />REST APIs</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />Django</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaMobileAlt className="inline mr-2" />App Store</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaMobileAlt className="inline mr-2" />Play Store</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaCode className="inline mr-2" />CI/CD</div>
                <div className="bg-gray-700 px-4 py-2 rounded-full text-center transition-colors duration-300 hover:bg-gray-600"><FaPaintBrush className="inline mr-2" />UI/UX design</div>
              </div>
            </div>
          </section>

          <section className="mb-12 w-full md:w-1/2 px-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 h-full transition-colors duration-300 hover:bg-gray-700">
              <h2 className="text-4xl font-bold mb-4 text-center">Experience</h2>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">Flutter Developer</h3>
                <p className="text-lg flex items-center mb-2"><FaBuilding className="mr-2" /> <span className="font-bold">Levelx</span></p>
                <p className="text-lg flex items-center mb-2"><FaCalendarAlt className="mr-2" /> 06/2023 to 23/2024</p>
                <p className="text-lg flex items-center mb-4"><FaMapMarkerAlt className="mr-2" /> Calicut</p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                  <li>Created and managed cross-platform mobile apps with the Flutter framework, guaranteeing optimal performance and contentment for users.</li>
                  <li>Worked together to transform UI/UX designs into useful and aesthetically pleasing features with the design and development teams.</li>
                  <li>Integrated RESTful APIs and third-party libraries to enhance app functionality and user experience.</li>
                  <li>Actively participated in code reviews, offering helpful criticism and recommendations for improvements.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Flutter Developer</h3>
                <p className="text-lg flex items-center mb-2"><FaBuilding className="mr-2" /> <span className="font-bold">Akira Software Solution</span></p>
                <p className="text-lg flex items-center mb-2"><FaCalendarAlt className="mr-2" /> 26/08/2024 to Present</p>
                <p className="text-lg flex items-center mb-4"><FaMapMarkerAlt className="mr-2" /> Thiruvananthapuram</p>
                <ul className="list-disc list-inside text-lg leading-relaxed">
                  <li>Developing high-performance Flutter apps for Android, iOS, and Web.</li>
                  <li>Building and maintaining POS systems, real-time tracking apps, and management solutions.</li>
                  <li>Implementing state management using Riverpod, Bloc, and GetX.</li>
                  <li>Integrating Firebase services (Authentication, Firestore, Cloud Messaging) and REST APIs.</li>
                  <li>Optimizing UI/UX with smooth animations, responsive design, and performance improvements.</li>
                  <li>Deploying and maintaining apps on Google Play Store & Apple App Store.</li>
                  <li>Writing clean, maintainable Dart code, debugging, and improving app performance.</li>
                  <li>Collaborating with teams to develop innovative solutions and enhance existing projects.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
