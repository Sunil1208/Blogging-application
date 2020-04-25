import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mongo from "../../static/mongo.png";
import photo from "../../static/blog.jpeg"
import express from "../../static/express.png";
import react from "../../static/react.png";
import node from "../../static/node.png";
import "./Landing.css";

const Landing = () => (
   <Container
      style={{ height: "75vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
   >
      {" "}
      <Row className="mb-4">
         <p className="text-secondary h3"> Blogging Application</p>
      </Row>
      <Row>
         <Col className="col-12 col-md-12 col-xs-3">
            <img src={photo} alt="Home Page" className="img-fluid" />
         </Col>
      </Row>
   </Container>
);

export default Landing;
