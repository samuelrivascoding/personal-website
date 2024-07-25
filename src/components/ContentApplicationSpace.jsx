import PropTypes from "prop-types";
import Game from "./tic-tac-toe/Game";
import Stopwatch from "./stop-watch/stopwatch/Stopwatch";
import Timer from "./stop-watch/timer/Timer";
import Dog from "./random-pic/Dog" 

const ContentApplicationSpace = ({ className = "" }) => {


  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center py-0 px-space-2400 ${className}`}
    > 
      <Game />

      <section className="self-stretch flex flex-col items-start justify-start py-20 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
          <div className="self-stretch relative leading-[150%]">
            While it was certainly not easy creating this tic-tac-toe game on React, I greatly enjoyed the process of learning! I learned about the gridTemplate css class and more on javascript logic.
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-y-16 ">
      < Stopwatch />
      <Timer />
      </div>

      <section className="self-stretch flex flex-col items-start justify-start py-20 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
          <div className="self-stretch relative leading-[150%]">
            This was a fun project. I learned more about the React Hook UseState and how to implement a clock in React.
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-y-16">
      < Dog />
      </div>

      <section className="self-stretch flex flex-col items-start justify-start py-20 px-space-2400 text-left text-base text-delft-blue font-text-regular-normal">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
          <div className="self-stretch relative leading-[150%]">
            In this project, I learned how to generate random pictures of dogs! I learned more about using the Fetch API to access external urls. I also learned about how to create a selector component in React. 
          </div>
        </div>
      </section>

      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-4 px-0 gap-[80px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[384px]">
          <h2 className="text-left text-base text-delft-blue font-text-regular-normal">
            Work in Progess: Creating Connect 4 using Java Project
          </h2>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4">
              <div className="self-stretch relative leading-[150%] text-left text-base text-delft-blue font-text-regular-normal">
                Problem solving and thinking through this project was interesting, to say the least. While I do think there is still room for improvement, especially with regard to the AI opponent logic and potentially integrating it as a Java Backend to a frontend React project, thinking through the project I feel has benefited my problem solving skills. In the future, I'm planning to implement Java code as javascript through a Bck2Brwsr gradle plugin for JavaFx, in order to convert the Java Application to actual code I can display on my website.
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row gap-36">

        <img
          className="w-[405px] relative h-[327px] object-cover"
          alt=""
          src="/javacodeapplication.gif"
        />
        <img
          className="w-[405px] relative h-[327px] object-cover"
          alt=""
          src="/javacodeconsole.gif"
        />
        </div>
      </div>

    </section>
    
  );
};

ContentApplicationSpace.propTypes = {
  className: PropTypes.string,
};

export default ContentApplicationSpace;
