import React from "react";
import Header from "../components/Header";
import "./Styles.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="pt-28">
        <div className="container">
          <div className="mb-16">
            <div className="gridcolumn6">
              <div>
                <div className="headline"></div>
                <h1 className="h1">
                  The mission behind our charity foundation.
                </h1>
              </div>
              <div className="buttonrow justify-self-end">
                <a className="buttonprimary" href="/donate">
                  Donate now
                </a>
                <a className="buttonsecondary" href="/contact">
                  How can I help
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img className="img1" src="/girl1.jpeg" alt="" />
            <img className="imgoverlap" src="/womanandchild.jpeg" alt="" />
          </div>
        </div>
      </div>
      <div className="pt-36 pb-48">
        <div className="container">
          <div className="mx-auto max-w-xl">
            <div className="mb-8 text-center">
              <div className="subtitle">OUR RESULTS</div>
              <h2 className="h2 mb-4">
                Take a look at the big impact we have done
              </h2>
            </div>
          </div>
          <div className="gridcolumn">
            <div className="text-center">
              <div className="display2 mb-2">
                200<span className="text-orange-500">m</span>
              </div>
              <div className="text-xl text-slate-400">Humans impacted</div>
            </div>
            <div className="text-center">
              <div className="display2 mb-2">
                50<span className="text-orange-500">k</span>
              </div>
              <div className="text-xl text-slate-400">Collaborators</div>
            </div>
            <div className="text-center">
              <div className="display2 mb-2">
                370<span className="text-orange-500">k</span>
              </div>
              <div className="text-xl text-slate-400">Donations</div>
            </div>
            <div className="text-center">
              <div className="display2 mb-2">
                100<span className="text-orange-500">+</span>
              </div>
              <div className="text-xl text-slate-400">Assisted Communities</div>
            </div>
          </div>
        </div>
      </div>
      <h2>I am "About" to start :)....get it:)</h2>
    </>
  );
};

export default About;
