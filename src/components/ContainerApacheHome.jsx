import PropTypes from "prop-types";

const ContainerApacheHome = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-start justify-center py-4 px-0 gap-[80px] text-left text-29xl text-delft-blue font-text-regular-normal ${className}`}
    >
      <img
        className="w-[500px] relative h-[210px] object-cover"
        alt=""
        src="/Screenshot1.png"
      />
      <img
        className="w-[500px] relative h-[253px] object-cover"
        alt=""
        src="/Screenshot2.png"
      />
      <img
        className="w-[500px] relative h-[327px] object-cover"
        alt=""
        src="/Screenshot3.png"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[336px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-inherit">
          Apache Solr Project Open Source Contribution
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start text-base">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
            <div className="self-stretch relative leading-[150%]">I contributed to an open-source project within the Apache Software Foundation: Solr. This search engine is used by industry giants like Salesforce and Comcast. During the process of reformatting Java files, I gained valuable knowledge about modern software architecture and developer practices, including using Git for version control through commands like git pull, git push, and git fetch. </div>
          </div>
          <div className="self-stretch h-[120px] flex flex-col items-start justify-start" />
        </div>
      </div>
    </div>
  );
};

ContainerApacheHome.propTypes = {
  className: PropTypes.string,
};

export default ContainerApacheHome;
