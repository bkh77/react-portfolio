import { useEffect } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro(props) {
  useEffect(() => {
    const text = document.querySelector("#typed");
    init(text, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1500,
      strings: ["Frontend", "React", "Redux"],
    });
  });

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Bakhtiyor Khasanov</h1>
          <h3>
            Developer <span id="typed"></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
