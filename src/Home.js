import {Pill} from './brute/Pill.js'
import {Burger} from './brute/Burger.js'
import {Resume} from './Resume.js'
import {Projects} from './Projects.js'
import {Paragraph} from './brute/Paragraph.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import banner from "./images/banner.jpg"

import './App.css'

const ControlPanel = (props) => {
  
  let style = {
    display: "flex",
    columnGap: "5px",
    position: "absolute",
    top: 20,
    left: 20
  }

  return (
      <span style={style}>
        <Burger style={{marginRight: 15}}> </Burger>
        <span> <Pill> <AnchorLink href="#contact" style={{textDecoration: "none"}}> <i> Contact </i> </AnchorLink> </Pill> </span>
        <span> <Pill> <AnchorLink href="#projects" style={{textDecoration: "none"}}>Projects</AnchorLink> </Pill> </span>
      </span>

  );
}

const Name = (props) => {
  return <h1 id="josephdaniel"> JOE DANIEL </h1>
}

const Banner = (props) => {
  return <img src={banner} width="100%" alt="Hola"></img>
}


const Header = (props) => {

  const ContactInfo = () => {
    return <div id="contact-info">
        <Paragraph>
          <strong> Inquiries </strong>
          <p> joe.daniel@outlook.com.au </p>
        </Paragraph>
      </div>
  }

  const Introduction = () => {
    return <div id="gday">
      <Paragraph>
        G'day, I'm JD. I'm a Copenhagen based <strong> full-stack Software Engineer </strong> with 4 years of experience. <br /><br />
        I enjoy building cool stuff, learning new things, cooking and eating great food, and running long distances. <br /><br />
        I sometimes take photos of things I find interesting. <br /><br />
      </Paragraph>
    </div>
  }

  return (
    <div style={{ height: "60px" }}>
      <ControlPanel />
      <div id="welcome">
        <Introduction />
        <ContactInfo />
      </div>
    </div>

  )
}

const Home = () => {

  

  return (
    
    <div>
      <div style={{height: "100vh"}}>
        <Header />
        <Name />
      </div>
      <Banner />
      <div style={{marginRight: 30}}>
        <div class="clearfix"> 
          <div class="shortcuts">
            <Paragraph>
              <i> What I do </i> <br />
              <div style={{fontSize: "20px"}}>
                <p> Frontend and Backend Dev </p>
                <p> Serverless </p>
                <p> DevOps Engineering </p>
              </div>
            </Paragraph>
          </div>
          <div class="shortcuts">
            <Paragraph>
              <i> Find out more about </i> <br />
              <div style={{fontSize: "20px"}}>
                <p> <a href="#experience" style={{textDecoration: 'none'}}>Where I've worked</a> </p>
                <p> <a href="#skills" style={{textDecoration: 'none'}}>Technologies I'm using</a> </p>
                <p> <a href="#projects" style={{textDecoration: 'none'}}>Projects and publications</a> </p>
              </div>
            </Paragraph>
          </div>
        </div>
      </div>

      <div id="resume" class="clearfix">
        <Resume />
      </div>

      <div id="projects" class="clearfix" style={{marginTop: 100}}>
        <Projects />
      </div>

      


      <div style={{height: "100vh", padding: "30px", fontWeight: "lighter"}} id="contact">

        {/* <div style={{border: "1px solid white", height: "90%", padding: "10px"}}> */}
          <h2 style={{paddingTop: "30vh", fontSize: "30px", textAlign: "center"}}> Say g'day 👋 </h2>
          <h4 style={{fontSize: "25px", fontWeight: "lighter", textAlign: "center"}}> <u> <a href="mailto:joe.daniel@outlook.com.au" style={{color: "white"}}>Email </a> </u> </h4>
          <h4 style={{fontSize: "25px", fontWeight: "lighter", textAlign: "center"}}> <u> <a href="https://github.com/josepdaniel" style={{color: "white"}}>Github </a> </u> </h4>
          <h4 style={{fontSize: "25px", fontWeight: "lighter", textAlign: "center"}}> <u> <a href="https://www.linkedin.com/in/josep-daniel/" style={{color: "white"}}>LinkedIn </a> </u> </h4>
        {/* </div> */}
        {/* </div> */}

      </div>
    </div>

    
  )
  
}

export default Home;
