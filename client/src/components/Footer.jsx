import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../assest/img/logo.png";
import {FiSend, FiFacebook} from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
// import "restaurant\src\components\footer.css";
import "../footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <><div className="divider mt-4"></div>
      <footer className="footer bg-black">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <Link to={"/"} className="py-2">
                <img src={logo} alt="logo" />
              </Link>
              <h5 className="font__2 text-yellow-300">Udaipur City</h5>
              <p className="font__5 text-pink-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title font__1 text-red-500">Delivery Time -</h5>
            <ListGroup className="deliver__time-list font__5">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span className=" text-pink-100">Monday - Saturday</span>
                <p className=" text-lime-100">10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span className=" text-pink-100">Sunday</span>
                <p className=" text-lime-100">Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title font__1 text-red-500">Contact -</h5>
            <ListGroup className="deliver__time-list font__5">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p className=" text-lime-100">Location: Sector-14, Udaipur 313002, Rajasthan </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span className=" text-lime-100">Phone: +91-0000000000</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span className=" text-lime-100">Email: chetanjorwal3@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title font__1 text-red-500">Newsletter -</h5>
            <p className=" font__5 text-lime-100">Subscribe our newsletter</p>
            <div className="newsletter font__5 border-teal-500 font-semibold text-xm">
              <input type="email" placeholder="Enter your email" />
              <FiSend className=" text-red-500" />
            </div>
          </Col>
        </Row>

        <Row className="mt-5 font__1">
          <Col lg="6" md="16">
            <p className="copyright__text font-semibold ">
              Copyright - 2023, Website made by Chetan Jorwal. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="16">
            <div className="social__links d-flex align-items-center gap-5 justify-content-end text-red-300">
              <p className="m-0 text-lg">Follow -</p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/profile.php?id=100004547629448">
                  <FiFacebook className="text-cyan-500   text-lg hover:text-red-500" />
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/Chetanjorwal3">
                  <FaGithub className="text-cyan-500   text-lg hover:text-red-500" />
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.instagram.com/_chetanjorwal_/">
                  <FaInstagram className="text-cyan-500   text-lg hover:text-red-500" />
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/chetan-jorwal-b459561a0/">
                  <SlSocialLinkedin className="text-cyan-500   text-lg hover:text-red-500" />
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer></>
  );
};

export default Footer;
