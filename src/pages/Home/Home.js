import React from "react";
import { FaFacebook, FaFilter, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <header className="hero-bg">
        <div className="hero-content">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="hero-text">
                  <h2>Lingorise</h2>
                  <p>
                    This endeavor began with the belief that third-world
                    nations’ primary challenge while competing the world is
                    English communication. We’re building an app to make English
                    communication simpler to learn, reach, and teach. A 24-hour
                    English environment in the subcontinent.
                  </p>
                  <Link to="/survey" className="survey-btn">
                    Take Survey
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-img d-flex align-items-center">
                  <img src="/img/bg.png" className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="application-feature pt-5 pb-5 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="section-heading text-center">
                <h6 className="text-danger">Application Features</h6>
                <h2>We Like To Find Simple Solutions To Complex Challenges</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-box">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-feature text-center rounded shadow p-5">
                  <span>
                    <FaFilter />
                  </span>
                  <h2>Enhance Productivity</h2>
                  <p>
                    The four of functions of management included planning
                    deciding upon on business goals the methods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vission d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mission-img">
                <img src="/img/about.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-vission-text">
                <h2>Mission and Vission</h2>
                <p>
                  Our mission is very straight-forward: we want to build the
                  best English learning platform in the world. Every English
                  learning enthusiast will choose Lingorise to initiate their
                  English learning journey. We want to create world class
                  English language tests that will be accepted and granted
                  throughout the world as an English Proficiency Certificate. We
                  are on our way to bringing in new technology to disrupt the
                  English language industry of the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="how-it-works text-center">
                <h6 className="text-danger">App Screen</h6>
                <h2>How it works</h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-3 col-lg-4 col-sm-12">
              <div className="single-work">
                <img
                  src="/img/ss1.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <h4 className="text-center mt-4">Welcome to Lingorise</h4>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-sm-12">
              <div className="single-work">
                <img
                  src="/img/ss2.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <h4 className="text-center mt-4">Enroll a course</h4>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-sm-12">
              <div className="single-work">
                <img
                  src="/img/ss3.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <h4 className="text-center mt-4">Complete the course</h4>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-sm-12">
              <div className="single-work">
                <img
                  src="/img/ss4.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <h4 className="text-center mt-4">Share your achievemen</h4>
              </div>
            </div>
            <div className="col-md-3 col-lg-4 col-sm-12">
              <div className="single-work">
                <img
                  src="/img/ss5.jpg"
                  className="img-fluid rounded shadow"
                  alt=""
                />
                <h4 className="text-center mt-4">See your progress</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team d-flex align-items-center mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              <div className="single-team text-center pt-5 pb-3">
                <img src="/img/team1.jpg" className="img-fluid " alt="" />
                <p>Saidur Rahman Kohinoor</p>
                <span>CEO</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-team text-center pt-5 pb-3">
                <img src="/img/team2.jpg" className="img-fluid " alt="" />
                <p>Khalid Sayfullah</p>
                <span>CTO</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-team text-center pt-5 pb-3">
                <img src="/img/team3.jpg" className="img-fluid " alt="" />
                <p>Raiyan Sarhad</p>
                <span>COO</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contributor mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 className="text-center">Contributor</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-3">
              <div className="single-contributor text-center pt-5 pb-3 shadow">
                <img src="/img/contributor.jpg" className="img-fluid " alt="" />
                <p>Raiyan Sofwan</p>
                <span>Co founder Shikhbe Shobai</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="achivement d-flex align-items-center mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
            <div className="single-achievement text-center pt-5 pb-3 shadow">
                <img src="/img/achievement.jpg" className="img-fluid " alt="" />
                <p>6th in regional (Sylhet) round at Bdapps national hackathon.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
                <div className="footer-logo">
                  <img src="/img/footer-logo.png" className="img-fluid" alt="" />
                </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center">
              <div className="copyright-text">
                <p>© Copyright 2022. Lingorise</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center  justify-content-between">
              <div className="footer-menu">
                <ul className="d-flex justify-content-between">
                  <li>Terms Of Services</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-center  justify-content-between">
                <div className="social">
                  <ul className="d-flex">
                    <li> <FaFacebook /> </li>
                    <li> <FaLinkedin /> </li>
                    <li> <FaTwitterSquare /> </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
