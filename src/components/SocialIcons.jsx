import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const SocialIcons = () => {
  const iconSize = 24;
  const theme = useSelector((state) => state.reducer.theme);

  const getIconColor = () => {
    return theme === "dark" ? "gray" : "white";
  };

  const [iconColor, setIconColor] = useState(getIconColor());

  useEffect(() => {
    setIconColor(getIconColor());
  }, [theme]);

  return (
    <div className="flex justify-center space-x-16 my-5">
      <a
        href="https://github.com/mohammad-kawach"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
        style={theme === "dark" ? { color: "white" } : {}}
      >
        <FaGithub size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-kawach/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
        style={theme === "dark" ? { color: "white" } : {}}
      >
        <FaLinkedinIn size={iconSize} />
      </a>
      <a
        href="https://portofolio-psi-gilt.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${iconColor}-500 hover:text-${iconColor}-700 transition-colors duration-300`}
        style={theme === "dark" ? { color: "white" } : {}}
      >
        <FaUserCircle size={iconSize} />
      </a>
    </div>
  );
};

export default SocialIcons;
