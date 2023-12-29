import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";

const SocialIcons = () => {
  const iconSize = 24;
  const iconColor = "gray";

  return (
    <div className="flex justify-center space-x-16 my-5">
      <a
        href="https://github.com/mohammad-kawach"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-kawach/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      <a
        href="https://portofolio-psi-gilt.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
      >
        <FaUserCircle size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
