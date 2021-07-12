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
                <Paragraph>
                    <div class="experience-entry">
                        <h2> Software Engineer <span style={{color: "#bbbbbb"}}> @  Accenture MyWizard AiOps</span></h2>
                        <h3> <i> Feb 2021 - Present </i> </h3>
                        <ul>
                            <li> Design, develop, build and test <strong> serverless </strong> applications for monitoring large-scale distributed systems using <strong>Python</strong>, <strong>Java</strong>, and <strong>TypeScript</strong>. </li>
                            <li> Implement modern, maintainable and performant code, by leveraging <strong>infrastructure-as-code</strong> and <strong> highly abailable architectures. </strong></li>
                            <li> Participate in the design and scoping of greenfield projects and collaborate with other developers in an agile, fast-paced environment. </li>
                        </ul>
                    </div>

                    <div class="experience-entry">
                        <h2> Software Engineer <span style={{color: "#bbbbbb"}}> @  Spot Parking</span></h2>
                        <h3> <i> Jan 2019 - Dec 2020 </i> </h3>
                        <ul>
                            <li> Worked with a small team of developers to build a product that reinvents the parking experience.</li>
                            <li> Led a greenfield project leveraging <strong> computer vision </strong> and <strong> machine learning </strong> to automate data ingestion pipelines. </li>
                            <li> Built out backend microservices using <strong>NodeJS</strong> and <strong>MongoDB</strong>, with a <strong>ReactJS</strong> frontend.</li>
                        </ul> 
                        
                    </div>

                    <div class="experience-entry">
                        <h2> Robotics Intern <span style={{color: "#bbbbbb"}}> @  Australian Centre for Field Robotics</span></h2>
                        <h3> <i> Jan 2018 - Mar 2018 </i> </h3>
                        <ul>
                            <li> Built a <strong>Python</strong> library for procedurally generting robotic arm trajectories to collect randomised footage for use in <strong>SLAM</strong> algorithms. </li>
                            <li> Designed and developed an ultrasonic 'virtual-bumper' module on a <strong>RISC</strong> microcontroller for <strong>autonomous vehicles</strong>. </li>
                            <li> Prototyped and fabricated low level hardware, with software components in <strong> C++</strong>. </li>
                        </ul> 
                    </div>

                    <div class="experience-entry">
                        <h2> Technology Bootcamp Participant <span style={{color: "#bbbbbb"}}> @  Accenture</span></h2>
                        <h3> <i> Jan 2020 </i> </h3>
                        <ul>
                            <li> Built an app over 5 days to help consultants find their next project based on their skills, interests and growth-areas.</li>
                            <li> Programmed backend microservice using <strong>TypeScript</strong>, <strong>NextJS</strong>, <strong>PostgreSQL</strong> and <strong>Elasticsearch</strong>.</li>
                            <li> Employed <strong>analytics</strong> and <strong>machine learning</strong> to maximise search relevance. </li>
                        </ul> 
                    </div>

                    <div class="experience-entry">
                        <h2> Honours Thesis <span style={{color: "#bbbbbb"}}> @  School of Aerospace, Mechanical, and Mechatronic Engineering</span></h2>
                        <h3> <i> Aug 2019 - Aug 2021 </i> </h3>
                        <ul>
                            <li> Designed, implemented and tested a novel ML algorithm for tackling <strong>visual odometry</strong> and <strong>shape estimation</strong>. </li>
                            <li> Proposed methodology out-performed state-of-the-art methods and was accepted to the 2021 <strong>International Conference on Intelligent Robots and Systems</strong>.</li>
                        </ul> 
                    </div>

                    <div class="experience-entry">
                        <h2> Project Lead <span style={{color: "#bbbbbb"}}> @  Ruffalo Noel Levitz</span></h2>
                        <h3> <i> May 2015 - Nov 2018 </i> </h3>
                        <ul>
                            <li> Led the fundraising campaign for important scholarships, research and facilities with over <strong>$500k</strong> raised in 2018.</li>
                            <li> Led a team of 30-40 people, coordinating training and onboarding plans. </li>
                            <li> Coordinated with stakeholders to deliver regular updates and identify key growth segments. </li>
                        </ul> 
                    </div>
                </Paragraph>
            </div>
        </div>
    )
}


export { Resume }