import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const CustomHeading = (props) => {
  const theme = useSelector((state) => state.reducer.theme);
  return (
    <h1
      className={`text-4xl font-bold mb-8 ${
        theme === "dark" ? "text-white" : "text-gray-800"
      }`}
    >
      {props.text}
    </h1>
  );
};

CustomHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CustomHeading;
