import React from 'react';
import './About.css';
import ReduxIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import JEST from '../assets/jest.png';
import VSCode from '../assets/vscode.png';
import ReactIcon from '../assets/react.png';
import NPMlogo from '../assets/npm.png';
import GitLogo from '../assets/git.png';
import GitHublogo from '../assets/github.png';
import GMeet from '../assets/meet.png';
import Zoomlogo from '../assets/zoom.webp';
import Slack from '../assets/slack.png';
import WebPack from '../assets/webpack.png';
import CDT from '../assets/cdt.png';
import CSS from '../assets/css.png';
import NextJS from '../assets/next.webp';
import JavaScript from '../assets/javascript.png';
import PostMan from '../assets/postman.png';
import Typescript from '../assets/typescript.png';
import NodeJS from '../assets/nodejs.png';
import MONGODB from '../assets/mongodb.png';
import GraphQL from '../assets/graphql.png';
import MySQl from '../assets/mysql.png';

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">About Me</h2>
      <p className="paragraph about-para">
        Hello! I'm a passionate MERN stack developer with a strong foundation in
        web development since 2021. My journey as a developer has been fueled by
        a curiosity to explore the latest updates and trends in web development.
        I take pride in staying in sync with the ever-evolving web landscape,
        allowing me to deliver innovative and modern solutions for projects.
        With a keen eye for detail and a dedication to excellence, I strive to
        turn ideas into reality through clean and maintainable code.
      </p>
      <button className="hire-me">
        <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={ReactIcon} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
          <img src={Typescript} alt="" />
          <p>Typescript</p>
        </div>
        <div className="skill">
          <img src={NextJS} alt="" />
          <p>Next.js</p>
        </div>
        <div className="skill">
          <img src={JavaScript} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src={ReduxIcon} alt="" />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img src={HTML} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img src={CSS} alt="" />
          <p>CSS3</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <img src={NodeJS} alt="" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <img src={MONGODB} alt="" />
          <p>MONGODB</p>
        </div>
        <div className="skill">
          <img src={GraphQL} alt="" />
          <p>GraphQL</p>
        </div>
        <div className="skill">
          <img src={MySQl} alt="" />
          <p>MYSQL</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src={JEST} alt="" />
          <p>JEST</p>
        </div>
        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        <div className="skill">
          <img src={WebPack} alt="" />
          <p>Webpack</p>
        </div>
        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Slack} alt="" />
          <p>Slack</p>
        </div>

        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>
  </section>
);

export default About;
