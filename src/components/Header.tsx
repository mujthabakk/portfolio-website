import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Muhammed Mujthaba</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="Hero" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Home</Link></li>
            <li><Link to="about-me" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Experience</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;




