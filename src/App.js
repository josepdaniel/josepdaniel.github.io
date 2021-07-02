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

  let [fontSize, setFontSize] = useState("11.5vw");
  let [marginTop, setMariginTop] = useState("60vh");
  let collapse_width = 1100;

  useEffect(() => {
    let josephdaniel = document.getElementById("josephdaniel");
    let elementHeight = josephdaniel.clientHeight;
    let windowHeight = window.innerHeight;
    let marginTopAdjustment = window.innerWidth < collapse_width ? 60 : 30;
    setMariginTop(windowHeight-elementHeight-marginTopAdjustment);
  })

  let style = {
    fontSize, marginTop
  }

  return <h1 id="josephdaniel" style={style}> JOSEPH DANIEL </h1>
}

const Banner = (props) => {
  return <img src={banner} width="100%"></img>
}


const Header = (props) => {

  let collapse_width = 1100;

  let headerStyle = {
    float: "right",
    marginTop: window.outerWidth < collapse_width ? 100 : 0,
    width: window.outerWidth < collapse_width ? 350 : 800,
  }

  let introStyle = {
    float: "left",
    width: window.outerWidth < collapse_width ? 300 : 400,
    marginLeft: "20px"
  }

  let contactStyle = {
    float: "left",
    width: window.outerWidth < collapse_width ? 300 : 300,
    marginLeft: window.outerWidth < collapse_width ? 20 : 50,
    marginTop: window.outerWidth < collapse_width ? 20 : 0,
  }

  let paragraphStyle = {
    height: window.innerWidth < collapse_width ? null : 160
  }





  return (
    <div style={{ height: "60px" }}>
      <ControlPanel />


      <div style={headerStyle}>

        <div style={introStyle}>
          <Paragraph id="introduction" style={paragraphStyle}>
            G'day, I'm Joseph. I'm a Sydney based <strong> full-stack Software Engineer </strong>. <br /><br />
            I like to build cool stuff, learn new things, cook great food, and run long distances (and also, from my problems). <br /><br />
            I sometimes take photos of things I find interesting. <br /><br />
          </Paragraph>
        </div>
        
        <div style={contactStyle}>
          <Paragraph style={paragraphStyle}>
            <strong> Inquiries </strong>
            <p> joe.daniel@outlook.com.au </p>
          </Paragraph>
        </div>

        
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
      {/* <Name /> */}
    </div>
  )
  
}

export default App;
