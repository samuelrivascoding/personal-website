import PropTypes from "prop-types";

const ContentApplicationSpace = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start py-0 px-space-2400 ${className}`}
    >
      <div className="self-stretch h-[227px] overflow-hidden shrink-0" />
    </section>
  );
};

ContentApplicationSpace.propTypes = {
  className: PropTypes.string,
};

export default ContentApplicationSpace;
