import React from "react";
import classes from "./sketch.module.css";
export const SketchBavbar = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className={classes.container}>
      <header>
        <nav className="main-nav container">
          <a href="" className="logo">
            Sketch
          </a>
          <ul className="nav-list">
            <li>
              <a href="#">For Designers</a>
            </li>
            <li>
              <a href="#">For Teams</a>
            </li>
            <li
              onClick={() => {
                setVisible(!visible);
              }}
            >
              <a href="#">Resources</a>
              <div className={`sub-menu ${visible ? "active" : ""}`}>
                <div className="container">
                  <ul>
                    <li>
                      <a href="#">
                        Get Help{" "}
                        <span>
                          Read our documentation and FAQs, or get in touch.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Extensions{" "}
                        <span>
                          Read our documentation and FAQs, or get in touch.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Events& Meetups{" "}
                        <span>
                          Read our documentation and FAQs, or get in touch.
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Blog{" "}
                        <span>
                          Read our documentation and FAQs, or get in touch.
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="container">
          <h1>The base products start with Sketch</h1>
          <p>
            Create,prototype,collaborate,and bring your ideas to lift with the
            design platform used by over one million people —— from freelancers,
            to the world's largest teams.
          </p>
        </section>
        <section className="container">
          <h1>The base products start with Sketch</h1>
          <p>
            Create,prototype,collaborate,and bring your ideas to lift with the
            design platform used by over one million people —— from freelancers,
            to the world's largest teams.
          </p>
        </section>
      </main>
      <div className={`overlay ${visible ? "active" : ""}`}></div>
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
          }
          body,
          html {
            height: 100%;
            box-sizing: border-box;
            font-size: 10px;
            overflow: ${visible ? "hidden" : "auto"};
          }
          #__next {
            height: 100%;
          }
        `}
      </style>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        header {
          position: relative;
          width: 100%;
          top: 0;
          background-color: #fff;
          z-index: 1000;
        }
        .container {
          max-width: 80rem;
          margin: 0 auto;
        }
        .main-nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          height: 7.2rem;
        }
        .logo {
          font-size: 2rem;
          color: #333;
        }
        .nav-list {
          list-style: none;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .nav-list a {
          padding: 0 1.4rem;
          color: #333;
          font-size: 1.2rem;
          font-weight: 500;
        }
        .nav-list .sub-menu {
          position: absolute;
          top: 100%;
          width: 100%;
          left: 0;
          right: 0;
          height: 2rem;
          visibility: hidden;
        }
        .nav-list .sub-menu.active {
          visibility: visible;
        }
        .sub-menu ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
        }
        .sub-menu li {
          padding: 1rem 0;
          width: 50%;
        }
        .sub-menu li a {
          padding: 0;
        }
        .sub-menu li a span {
          display: block;
          color: #aaa;
        }
        main > section {
          padding: 10rem 0 8rem;
        }
        section h1 {
          font-size: 4rem;
        }
        .overlay {
          position: fixed;
          width: 100%;
          height: 100%;
          z-index: 100;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(10px);
          visibility: hidden;
          transition: all 0.35s;
          opacity: 0;
        }
        .overlay.active {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
export default SketchBavbar;
