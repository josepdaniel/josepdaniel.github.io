import {Pill} from './brute/Pill.js'
import {Burger} from './brute/Burger.js'
import {Resume} from './Resume.js'
import {Paragraph} from './brute/Paragraph.js'

import banner from "./images/banner.jpg"

import './App.css'

const ControlPanel = (props) => {
  
  let style = {
    display: "flex",
    columnGap: "20px",
    position: "absolute",
    top: 20,
    left: 20
  }

  return (
      <span style={style}>
        <Burger> </Burger>
        <span> <Pill> <i> About </i> </Pill> </span>
        <span> <Pill> Projects </Pill> </span>
      </span>

  );
}

const Name = (props) => {
  return <h1 id="josephdaniel"> JOSEPH DANIEL </h1>
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
        G'day, I'm Joseph. I'm a Sydney based <strong> full-stack Software Engineer </strong>. <br /><br />
        I like to <strong> build </strong> cool stuff, <strong> learn </strong> new things, cook great food, and run long distances. <br /><br />
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

const App = () => {

  

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
              <p> Fontend and Backend Engineering </p>
              <p> Serverless </p>
              <p> DevOps Engineering </p>
            </Paragraph>
          </div>
          <div class="shortcuts">
            <Paragraph>
              <i> Find out more about </i> <br />
              <p> The places I've worked </p>
              <p> Publications and projects </p>
              <p> My photography </p>
            </Paragraph>
          </div>
        </div>
      </div>

      <div id="resume" class="clearfix">
        <Resume />
      </div>

      


      <div style={{height: "700px"}}></div>
    </div>
  )
  
}

export default App;
