import { Pill } from "./brute/Pill.js";
import { Paragraph } from "./brute/Paragraph.js";

import "./Resume.css";

import robot from "./images/robot.jpg";
import loft from "./images/loft.png"
import spottyvision from "./images/spottyvision.png"

const Projects = () => {
  let skillStyle = {
    marginRight: 10,
    marginBottom: 7,
    display: "inline-block",
  };

  return (
    <div id="component-resume">
      <div id="projects">
        <h1 style={{ fontSize: 40 }}> Projects and Publications </h1>

        <Paragraph>
          <div className="experience-entry" style={{ maxWidth: 800 }}>
            <h2>
            <a href="https://master.d1car40kguqg10.amplifyapp.com"> LOFT</a> &nbsp;
              <span style={{ color: "#bbbbbb" }}>
                // A serverless app for tracking financial assets.
              </span>
            </h2>
           
            <img src={loft} style={{ maxWidth: 750, width: "90%", marginTop: 20 }} alt="LOFT"/>
            <p>
              Loft is a financial asset tracker for quick insights into portfolio performance. The backend is built on AWS' serverless technologies - 
              Lambda executes code, DynamoDB provides persistence and Cognito manages auth, meanwhile the frontend is powered by React and TypeScript.
              The app is live <a href="https://master.d1car40kguqg10.amplifyapp.com">here</a>.
            </p>

            <Pill style={skillStyle}> Python </Pill>
            <Pill style={skillStyle}> DynamoDB </Pill>
            <Pill style={skillStyle}> Lambda </Pill>
            <Pill style={skillStyle}> React </Pill>
            <Pill style={skillStyle}> TypeScript </Pill>
          </div>
        </Paragraph>

        <Paragraph>
          <div className="experience-entry" style={{ maxWidth: 800 }}>
            <h2>
              Self-supervised learning for light fields &nbsp; 
              <span style={{ color: "#bbbbbb" }}>
                  // &nbsp;
                <a href="https://arxiv.org/abs/2103.11322">
                Published @ IROS 2021
                </a>
              </span>
            </h2>
           
            <img src={robot} style={{ maxWidth: 750, width: "90%", marginTop: 20  }} alt="robots"/>

            <p>
              A continuation of my honours thesis, this paper explores novel
              techniques for dealing with 'non-traditional' imaging modalities.
              In August 2021, our paper was accepted to the International
              Conference on Intelligent Robots and Systems, and we produced a
              video workshop presenting our ideas. As modern computational
              imaging evolves, we find ourselves less restricted by the type of
              hardware available to us, and so this paper asks the question -
              how can emerging imaging technologies be incorporated into
              robotics with little to no supervision? Read the paper <a href="https://arxiv.org/abs/2103.11322">
                here
                </a>.
            </p>

            <Pill style={skillStyle}> Python </Pill>
            <Pill style={skillStyle}> PyTorch </Pill>
            <Pill style={skillStyle}> Deep Learning </Pill>
          </div>
        </Paragraph>

        <Paragraph>
          <div className="experience-entry" style={{ maxWidth: 800 }}>
            <h2>
              Spotty Vision: &nbsp; 
              <span style={{ color: "#bbbbbb" }}>
                  // Automated interpretation of parking signs
              </span>
            </h2>
           
            <img src={spottyvision} style={{ maxWidth: 750, width: "90%", marginTop: 20, backgroundColor: "#232323"  }} alt="robots"/>

            <p>
              As we move to a world of smart vehicles, the way we utilise the kerb will experience a fundamental shift. Spot Parking seeks to reimagine
              how the kerb is used by collecting and analysing basic data about kerbside usage and restrictions. While working at Spot Parking, I 
              pitched the idea of using Machine Learning to dramatically reduce the amount of manual workload needed to
              interpret image data of parking signs. SpottyVision is a library I developed while working at Spot that leveraged cloud computing and deep learning libraries
              to automate the interpretation of parking signs from street-level imagery (obtainable from street-view providers). 
            </p>

            <Pill style={skillStyle}> Python </Pill>
            <Pill style={skillStyle}> PyTorch </Pill>
            <Pill style={skillStyle}> Deep Learning </Pill>
          </div>
        </Paragraph>

        <Paragraph>
          <div className="experience-entry" style={{ maxWidth: 800 }}>
            <h2>
              {" "}
              Winter Research Program{" "}
              <span style={{ color: "#bbbbbb" }}>
                {" "}
                @ Australian Centre for Field Robotics
              </span>
            </h2>
            <h3>
              {" "}
              <i> Jan 2018 - Mar 2018 </i>{" "}
            </h3>
            <ul>
              <li>
                {" "}
                Built a <strong>Python</strong> library for procedurally
                generting robotic arm trajectories to collect randomised footage
                for use in <strong>SLAM</strong> algorithms.{" "}
              </li>
              <li>
                {" "}
                Designed and developed an ultrasonic 'virtual-bumper' module on
                a <strong>RISC</strong> microcontroller for{" "}
                <strong>autonomous vehicles</strong>.{" "}
              </li>
              <li>
                {" "}
                Prototyped and fabricated low level hardware, with software
                components in <strong> C++</strong>.{" "}
              </li>
            </ul>
            <Pill style={skillStyle}> Python </Pill>
            <Pill style={skillStyle}> C/C++ </Pill>
            <Pill style={skillStyle}> Assembly Language </Pill>
          </div>
        </Paragraph>

        <Paragraph>
          <div className="experience-entry" style={{ maxWidth: 800 }}>
            <h2>
              {" "}
              Technology Bootcamp Participant{" "}
              <span style={{ color: "#bbbbbb" }}> @ Accenture</span>
            </h2>
            <h3>
              {" "}
              <i> Jan 2020 </i>{" "}
            </h3>
            <ul>
              <li>
                {" "}
                Built an app over 5 days to help consultants find their next
                project based on their skills, interests and growth-areas.
              </li>
              <li>
                {" "}
                Programmed backend microservice using{" "}
                <strong>TypeScript</strong>, <strong>ExpressJS</strong>,{" "}
                <strong>PostgreSQL</strong> and <strong>Elasticsearch</strong>.
              </li>
              <li>
                {" "}
                Employed <strong>analytics</strong> and{" "}
                <strong>machine learning</strong> to maximise search relevance.{" "}
              </li>
            </ul>
            <Pill style={skillStyle}> TypeScript </Pill>
            <Pill style={skillStyle}> ExpressJS </Pill>
            <Pill style={skillStyle}> React </Pill>
            <Pill style={skillStyle}> Rapid Prototyping </Pill>
          </div>
        </Paragraph>

      </div>
    </div>
  );
};

export { Projects };
