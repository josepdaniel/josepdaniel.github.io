import {Pill} from './brute/Pill.js'
import {Burger} from './brute/Burger.js'
import {Paragraph} from './brute/Paragraph.js'

import banner from "./images/banner.jpg"

import './App.css'
import { useEffect, useState } from 'react'



const ControlPanel = (props) => {
  
  let style = {
    display: "flex",
    columnGap: "20px",
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

  let skillStyle = {
    marginRight: 10,
    marginBottom: 7,
    display: "inline-block",
  }

  return (
    <div>
      <div style={{height: "100vh"}}>
        <Header />
        <Name />
      </div>
      <Banner />
      <div style={{marginRight: 30}}>
        <div class="clearfix"> 
          <div>
            <Paragraph style={{marginTop: 30, float: "right", width: 300}}>
              <i> What I do </i> <br />
              <p> Fontend and Backend Engineering </p>
              <p> Serverless </p>
              <p> DevOps Engineering </p>
            </Paragraph>
          </div>
          <div>
            <Paragraph class="list" style={{marginTop: 30, float: "right", width: 300}}>
              <i> Find out more about </i> <br />
              <p> The places I've worked </p>
              <p> Some projects I've created </p>
              <p> My photography </p>
            </Paragraph>
          </div>
        </div>
      </div>


      <div> 
        <div id="skills">
          <div class="skillbox">
            <Paragraph>
              <h2 style={{fontSize: 15, marginBottom: 20}}> Backend Engineering </h2>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Java </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Python </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Flask </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Django </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> SpringBoot </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> NodeJS </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> ExpressJS </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Serverless Architecture </p> </Pill>
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
              <h2 style={{fontSize: 15, marginBottom: 20}}> DevOps </h2>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Kubernetes </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Docker </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> AWS </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> IAM </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> CloudFormation </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> SAM </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Azure </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Jenkins </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Bash Scripting </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Git </p> </Pill>
            </Paragraph>
          </div>

          <div class="skillbox">
            <Paragraph>
              <h2 style={{fontSize: 15, marginBottom: 20}}> Serverless </h2>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Lambda </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> DynamoDB </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> S3 </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Step Functions </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> CloudFormation </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> SAM </p> </Pill>
              <Pill style={skillStyle}> <p style={{margin: 0}}> Cognito </p> </Pill>
            </Paragraph>
          </div>
        </div>
      </div>


      <div style={{height: "100vh"}}></div>
    </div>
  )
  
}

export default App;
