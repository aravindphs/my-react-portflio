import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bliss Vista"
              description="Bliss Vista is more than just a note-taking application; it's a tool designed to streamline your digital workspace. With features tailored for productivity and organization, it's the perfect solution for professionals seeking to optimize their workflow."
              ghLink="https://github.com/aravindphs/keeper-app-react"
              demoLink="https://keeper-app-react-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Educational Web App"
              description="I developed a website adding few templates for my client using HTML, CSS and JavaScript. Purchased domain and hosted it successfully. You can click the Live Demo button to visit the live Domain."
              ghLink="https://github.com/aravindphs/CEA-Website"
              demoLink="https://www.codeenhanceacademy.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="Created my latest portfolio web app using React Js. You are already inside my web app and it is live ASAP!"
              ghLink="https://github.com/aravindphs/my-react-portflio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
