import {Pill} from './brute/Pill.js'
import {Paragraph} from './brute/Paragraph.js'

import './Resume.css'

const Resume = () => {

    let skillStyle = {
        marginRight: 10,
        marginBottom: 7,
        display: "inline-block",
      }

    return (
        <div id="component-resume">
            <div id="skills">
                <h1 style={{marginLeft: 10, fontSize:40}}> Technologies </h1>
                <div class="skillbox">
                    <Paragraph>
                        <h2 style={{fontSize: 15, marginBottom: 20}}> Backend Engineering </h2>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Java </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Python </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> TypeScript </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> C/C++ </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Flask </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Django </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> SpringBoot </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> PostgreSQL </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> MongoDB </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> NodeJS </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> ExpressJS </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Bash </p> </Pill>
                    </Paragraph>
                </div>

                <div class="skillbox">
                    <Paragraph>
                        <h2 style={{fontSize: 15, marginBottom: 20}}> Frontend Engineering </h2>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> React </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Vue </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Javascript </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Redux </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Jest </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> CSS </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> HTML </p> </Pill>
                    </Paragraph>
                </div>

                <div class="skillbox">
                    <Paragraph>
                        <h2 style={{fontSize: 15, marginBottom: 20}}> DevOps and Serverless </h2>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Kubernetes </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Docker </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Ansible </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> AWS </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> IAM </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> CloudFormation </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Azure </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Jenkins </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Bash Scripting </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Lambda </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> DynamoDB </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> S3 </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> SQS </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> EventBridge </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Step Functions </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> CloudFormation </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> SAM </p> </Pill>
                        <Pill style={skillStyle}> <p style={{margin: 0}}> Cognito </p> </Pill>
                    </Paragraph>
                </div>
            </div>

            <div id="experience">
            <h1 style={{fontSize: 40}}> Experience </h1>
                <Paragraph>
                    <div class="experience-entry">
                        <h2> Software Engineer <span style={{color: "#bbbbbb"}}> @  <a href="https://www.afr.com/chanticleer/how-accenture-s-sydney-ai-team-of-one-went-global-20210618-p5825c">Accenture MyWizard AiOps</a></span></h2>
                        <h3> <i> Feb 2021 - Present </i> </h3>
                        
                        <ul>
                            <li> Backend engineer for <i> MyWizard AiOps </i>, a software-as-a-service product for low-code/no-code automation solutions. </li>
                            <li> Designed, developed, built and tested <strong> serverless </strong> monitoring applications for large-scale distributed systems. </li>
                            <li> Implement modern, maintainable and performant code, by leveraging <strong>infrastructure-as-code</strong> and <strong> highly available architectures. </strong></li>
                            <li> Coordinate annual bootcamps and Hackathons in Melbourne, Adelaide, and Sydney for university students.</li>
                        </ul>
                        <Pill style={skillStyle}> TypeScript </Pill>
                        <Pill style={skillStyle}> Python </Pill>
                        <Pill style={skillStyle}> Serverless </Pill>
                        <Pill style={skillStyle}> AWS </Pill>
                        <Pill style={skillStyle}> Azure DevOps </Pill>
                    </div>
                    </Paragraph>

                    <Paragraph>
                    <div class="experience-entry">
                        <h2> Software Engineer <span style={{color: "#bbbbbb"}}> @  <a href="https://spotparking.com.au" > Spot Parking</a>  </span></h2>
                        <h3> <i> Jan 2019 - Dec 2020 </i> </h3>
                        <ul>
                            <li> Full stack engineer for a digital-parking application, building out ML services to reduce manual workload by 80%. </li>
                            <li> Built a computer-vision service for converting image data to machine-readable business rules for parking restrictions.</li>
                            <li> Worked with a small team of developers to build a product that reinvents the parking experience.</li>
                            <li> Led a greenfield project leveraging <strong> computer vision </strong> and <strong> machine learning </strong> to automate data ingestion pipelines. </li>
                            <li> Built out backend microservices using <strong>NodeJS</strong> and <strong>MongoDB</strong>, with a <strong>ReactJS</strong> frontend.</li>
                        </ul> 
                        <Pill style={skillStyle}> PyTorch </Pill>
                        <Pill style={skillStyle}> Python </Pill>
                        <Pill style={skillStyle}> C/C++ </Pill>
                        <Pill style={skillStyle}> React </Pill>
                        <Pill style={skillStyle}> AWS </Pill>
                    </div>
                    </Paragraph>

                    <Paragraph>
                    <div class="experience-entry">
                        <h2> Robotics Intern <span style={{color: "#bbbbbb"}}> @  Australian Centre for Field Robotics</span></h2>
                        <h3> <i> Jan 2018 - Mar 2018 </i> </h3>
                        <ul>
                            <li> Built a <strong>Python</strong> library for procedurally generting robotic arm trajectories to collect randomised footage for use in <strong>SLAM</strong> algorithms. </li>
                            <li> Designed and developed an ultrasonic 'virtual-bumper' module on a <strong>RISC</strong> microcontroller for <strong>autonomous vehicles</strong>. </li>
                            <li> Prototyped and fabricated low level hardware, with software components in <strong> C++</strong>. </li>
                        </ul> 
                        <Pill style={skillStyle}> Python </Pill>
                        <Pill style={skillStyle}> C/C++ </Pill>
                        <Pill style={skillStyle}> Assembly Language </Pill>
                    </div>
                    </Paragraph>

                <Paragraph>
                    <div class="experience-entry">
                        <h2> Project Lead <span style={{color: "#bbbbbb"}}> @  Ruffalo Noel Levitz</span></h2>
                        <h3> <i> May 2015 - Nov 2018 </i> </h3>
                        <ul>
                            <li> Led the fundraising campaign for important research, scholarships, and facilities with over <strong>$500k</strong> raised in 2018.</li>
                            <li> Led a team of 35+ people and refined the onboarding materials, reducing employee turnover by 30%. </li>
                            <li> Coordinated with stakeholders to deliver regular updates and identify key growth segments. </li>
                        </ul> 
                        <Pill style={skillStyle}> Stakeholder Management </Pill>
                        <Pill style={skillStyle}> Project Delivery  </Pill>
                    </div>
                </Paragraph>
            </div>
        </div>
    )
}


export { Resume }