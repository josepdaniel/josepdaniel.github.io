import {Pill} from './brute/Pill.js'
import {Burger} from './brute/Burger.js'
import {Paragraph} from './brute/Paragraph.js'

import banner from "./banner.jpg"

import './App.css'
import { useEffect, useState } from 'react'



const ControlPanel = (props) => {
  
  let style = {
    display: "flex",
    columnGap: "15px",
    position: "fixed",
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

  let [marginTop, setMariginTop] = useState("60vh");

  useEffect(() => {
    let collapse_width = 1100;

    let josephdaniel = document.getElementById("josephdaniel");
    let elementHeight = josephdaniel.clientHeight;
    let windowHeight = window.innerHeight;
    let marginTopAdjustment = window.innerWidth < collapse_width ? 60 : 30;
    setMariginTop(windowHeight-elementHeight-marginTopAdjustment);
  }, [marginTop, setMariginTop])

  let style = {
    fontSize: "11.5vw", marginTop
  }

  return <h1 id="josephdaniel" style={style}> JOSEPH DANIEL </h1>
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
        I like to build cool stuff, learn new things, cook great food, and run long distances (and also, from my problems). <br /><br />
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
      <Header />
      <Name />
      <Banner />
      <div style={{marginRight: 30}}>
        <div>
          <Paragraph style={{marginTop: 30, float: "right", width: 300}}>
            <i> What I do </i> <br />
            <p> Fontend and Backend Engineering </p>
            <p> Serverless Application Development </p>
            <p> DevOps Engineering </p>
            <p> Application performance Monitoring</p>
          </Paragraph>
        </div>
        <div>
          <Paragraph style={{marginTop: 30, float: "right", width: 300}}>
            <i> Find out more about </i> <br />
            <p> The places I've worked </p>
            <p> Some projects I've created </p>
            <p> Some photography </p>
          </Paragraph>
        </div>
      </div>

      <div style={{height: "100vh"}}></div>
    </div>
  )
  
}

export default App;
