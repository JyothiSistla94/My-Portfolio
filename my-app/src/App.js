import React, { useEffect, useRef, useState } from "react";
import logo from "./images/logo.png";
import profilepic from "./images/My_photo.png"
import "./App.css";
import Typed from "typed.js";

function ContactForm({ setSubmitted }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Contact Me</h2>
        <p><i class='bx bx-phone' ></i> Contact no. : xxxxxxxx </p>
        <p><i class='bx bx-envelope' ></i> Email : xxxxxxxxx@gmail.com</p>
        <p><i class='bx bxl-whatsapp' ></i> WhatsApp : xxxxxxxx</p>
      </div>

      <div>
        <div className="input-container">
          <h2>Provide Details For Us to Contact</h2>
          <input type="text" id="fname" name="Name" placeholder="Enter your Name" required/><br/>
          <input type="tel" id="pnum" name="Phone Number" pattern="[0-9]{10}" placeholder="Enter your Phone Number" required/><br/>
          <input type="email" id="email" name="Email Address" placeholder="Enter your Email Address" required/><br/>
        </div>
        <button className="button" id="submit" type="submit">Submit</button>
        </div>
    </form>
  );
}

function App() {
  const textRef = useRef(null);
  const typedRef = useRef(null);
  const [submitted, setSubmitted] = useState(false); 


  useEffect(() => {
    const links = document.querySelectorAll(".menu a");

    const handleClick = (event) => {
      links.forEach((item) => item.classList.remove("active"));
      event.target.classList.add("active");
    };

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  useEffect(() => {
    if (textRef.current) {
      typedRef.current = new Typed(textRef.current, {
        strings: ["Full Stack Developer", "Technical Support Engineer", "QA Manual Tester"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy(); // Cleanup Typed.js instance
        typedRef.current = null;
      }
    };
  }, []);
  
  return (
    <div className="App">
      <head>
        <title>Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
    
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <input type="checkbox" id="check" />
          <span className="menu">
            <li><a href="#home"> Home </a></li>
            <li><a href="#services"> Services </a></li>
            <li><a href="#skills"> Skills </a></li>
            <li><a href="#work"> Work Experience</a></li>
            <li><a href="#intern"> Internships </a></li>
            <li><a href="#contact"> Contact Me </a></li>
            <label htmlFor="check" className="close-menu"><i className="bx bx-x-circle"></i></label>
          </span>
          <label htmlFor="check" className="open-menu"><i className="bx bx-menu"></i></label>
        </ul>
      </nav>

      <section class="home" id="home">
        <div>   
          <h3>Hello, I am</h3>
          <h1>Sistla Jyothi Dakshayani Devi</h1>
          <h3>And I am a <span ref={textRef} className="text"></span></h3>
          <p>I am a Technical Support Engineer with extensive experience of 8 years and would like to switch to Full Stack Developer to leverage my skills in a dynamic work environment for mutual growth.</p>
          <div class="icons">
            <a href="https://www.facebook.com/"><i className='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/"><i className='bx bxl-github'></i></a>
          </div>
        </div>

        <div>
          <img class="image" src={profilepic} alt=""/>
        </div>
      </section>

      <section class="services" id="services">
        <div>
          <h2>Full Stack Developer</h2>
          <p> I want to be a Full Stack Developer to leverage my skills in a dynamic work environment for mutual growth. To kick start my career as a Full Stack Developer, I am doing my Internship by learning <strong><u>HTML, CSS, JavaScript and React JS.</u></strong></p>
        </div>
    
        <div>
          <h2>Technical Support Engineer</h2>
          <p>As a Technical Support Engineer I am expertise in Email Writing, Handling Live chat and Phone call, Taking Online Screen Sharing Sessions and debugging sessions, Product Trainings. I am skilled in Problem solving, and Communication.</p>
        </div>
    
        <div>
          <h2>QA Manual Testing</h2>
          <p>As a QA tester, I have done manual testing to identify UI and Functionality issues of the product.</p>
        </div>
    
        <div>
          <h2>AR Management and RCM Services</h2>
          <p> I have taken care of project Account Payable, client RCM services.</p>
        </div>
      
        <div>
          <h2>Compliance</h2>
          <p>I have taken compliance training related to HIPAA, HITECH Act.</p>
        </div>  
      </section>

      <section class="skills" id="skills">
        <div>
          <h2>Technical Skills</h2>
          <div class="tech">
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path1" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">90% HTML</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path2" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">80% CSS</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path3" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">75% JavaScript</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path1" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">90% Java</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path1" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">90% Python</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path4" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">95% MySQL</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path1" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">90% MongoDB</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path5" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">60% React</div>
            </div>
            <div class="radial">
              <svg x="0px" y="0px" viewbox="0 0 200 200">
                <circle class="progress_bar" cx="80" cy="80" r="60"></circle>
                <circle class="path path4" cx="80" cy="80" r="60"></circle>
              </svg>
              <div class="percent">95% C programming</div>
            </div>
          </div>
        </div>

        <div>
          <h2>Non-Technical Skills</h2>
          <div class="non-tech">
            <div class="bar">
              <h4>Creativity</h4>
              <div class="percent-bar create-bar">
                <span>90%</span> 
              </div>
            </div>
            <div class="bar">
              <h4>Communication</h4>
              <div class="percent-bar communication-bar">
                <span>90%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Team work</h4>
              <div class="percent-bar team-bar">
                <span>100%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Email Support</h4>
              <div class="percent-bar email-bar">
                <span>95%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Live Chat Support</h4>
              <div class="percent-bar live-bar">
                <span>90%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Customer Handling</h4>
              <div class="percent-bar ch-bar">
                <span>95%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Product Training</h4>
              <div class="percent-bar prod-bar">
                <span>90%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Customer Retention</h4>
              <div class="percent-bar cr-bar">
                <span>80%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Online Sessions</h4>
              <div class="percent-bar os-bar">
                <span>80%</span>
              </div>
            </div>
            <div class="bar">
              <h4>Compliance Training</h4>
              <div class="percent-bar ct-bar">
                <span>80%</span>
              </div>
            </div>
            <div class="bar">
              <h4>AR Management</h4>
              <div class="percent-bar ar-bar">
                <span>95%</span>
              </div>
            </div>
            <div class="bar">
              <h4>RCM services</h4>
              <div class="percent-bar rs-bar">
                <span>95%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="work" id="work">
          <div>
            <h2>Zoho corporation pvt limited - Technical support Engineer (11/2016 - 10/2024)</h2>
            <div class="project">
              <h3>Project : </h3>
              <img class="pimg" src="https://www.charmhealth.com/in/images/logo.png" alt=""></img>
            </div>
            <p></p>
            <a class="button" href="https://www.charmhealth.com/">Website</a>
            <p></p>
            <p>As part of the project, I got an opportunity to provide customer support in various ways for the below mentioned sub-projects.</p>
            <ul>
              <li><u> EHR </u> : Used by hospitals to store the patient medical data </li>
              <li> <u> PHR </u> : Used by patients to communicate with the practice and get their medical data from practice. They can also add data by themselves. </li>
              <li><u> Medical Billing Platform </u> : using which billers of the practice can perform billing for more than 1 practice using this platform.</li>
              <li>Mobile Applications
                <ul>
                  <li>KIOSK</li>
                  <li>Charm Connect</li>
                  <li>Charm mPHR</li>
                  <li>Charm mEHR</li>
                  <li>Charm EHR Scheduler</li>
                </ul>
              </li>
          </ul>
          <p>All these platforms provide different types of functionalities and add-ons for the ease of work.</p>
          </div>
      </section>

      <section class="intern" id="intern">
        <div>
          <h2>Zoho Corporation Pvt Limited (07/2016 - 11/2016)</h2>
          <p>I have worked in RCM services, done Research Related to NDC codes of drugs and performed manual testing for new UI releases. I got an opportunity to prepare documents on various test cases and issues.</p>
        </div>
        <div>
          <h2>Krutanic Solutions (Ongoing)</h2>
          <p>I have learn't HTML, CSS, JavaScript and got an opportunity to work on different assignments and projects.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        {submitted ? (
          <h2>Form submitted successfully!</h2>
        ) : (
          <>
            <ContactForm setSubmitted={setSubmitted} />
          </>
        )}
      </section>
    </div>
  );
}

export default App;
