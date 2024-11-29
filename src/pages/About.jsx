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
      <div className="py-48 bg-orange-50">
        <div className="container">
          <div className="mb-20">
            <div className="gridcolumn7">
              <div className="flex h-full">
                <img className="img2 h-0" src="/momandchild.jpeg" alt="" />
              </div>
              <div className="ml-6 justify-self-end">
                <div className="max-w-lg">
                  <div className="subtitle">OUR STORY</div>
                  <h2 className="h2 mb-6">Why did we start this foundation?</h2>
                  <p className="mb-6 text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere excepturi soluta voluptatum consequatur reiciendis
                    cupiditate, officiis dolore quae. Enim pariatur repellat
                    aliquid excepturi accusantium a tenetur suscipit quisquam
                    deleniti! Aliquam, sequi illo.
                  </p>
                  <p className="text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum aut dolor cumque dolorem aperiam eligendi illo
                    obcaecati asperiores nisi accusamus molestiae officia,
                    similique veniam eius possimus necessitatibus sapiente
                    temporibus magnam, vero maxime tempore, laboriosam animi!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gridcolumn7">
            <div className="mr-6">
              <div className="max-w-lg">
                <div className="subtitle">OUR MISSION</div>
                <h2 className="h2 mb-6">The mission we are working towards</h2>
                <p className="mb-12">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero, delectus soluta, odit et veritatis iste quam vitae
                  necessitatibus nemo nam porro quae repudiandae voluptatem
                  error exercitationem. Aliquam non porro beatae vitae natus.
                </p>
                <a className="mr-0 buttonprimary" href="/donate">
                  Donate now
                </a>
              </div>
            </div>
            <div className="cardmission">
              <h3 className="h3">
                Our mission is to eradicate hunger, poverty and war
              </h3>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat, deserunt voluptas voluptatibus itaque
                aspernatur tenetur odit nulla tempore, incidunt autem harum qui
                assumenda.
              </p>
              <div className="flex items-center mb-4">
                <img className="imgbullet" src="/correct.svg" alt="" />
                <div className="font-bold leading-4 text-neutral-800">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div className="mb-14 flex items-center">
                <img className="imgbullet" src="/correct.svg" alt="" />
                <div className="font-bold leading-4 text-neutral-800">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
              </div>
              <div className="gridcolumn2">
                <div className="flex items-center">
                  <img className="avatar imgbullet" src="/sophie.jpg" alt="" />
                  <div>
                    <div className="font-bold text-xl text-neutral-800">
                      Sophie Moore
                    </div>
                    <div className="font-medium text-xl mt-2">Founder</div>
                  </div>
                </div>
                <img className="mr-0 justify-self-end" src="/sign.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-48">
        <div className="container">
          <div className="gridcolumn8 mb-14">
            <div className="max-w-lg">
              <h2 className="h2">Meet our leaders</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur sunt repellat assumenda placeat reprehenderit eaque,
                dicta rem.
              </p>
            </div>
            <a className="buttonprimary justify-self-end" href="/donate">
              Donate now
            </a>
          </div>
          <div className="mb-10">
            <div className="gridcolumn4">
              <div>
                <a className="teamsquare" href="">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      className="imgbullet mr-0"
                      src="/bigsophie.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="teamcard">
                    <h3 className="h3">Sophie Moore</h3>
                    <div className="text-neutral-600">
                      <div className="font-bold text-base leading-5">
                        FOUNDER
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a className="teamsquare" href="">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      className="imgbullet mr-0"
                      src="/bigjohn.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="teamcard">
                    <h3 className="h3">John Carter</h3>
                    <div className="text-neutral-600">
                      <div className="font-bold text-base leading-5">
                        HEAD OF PARTNERSHIPS
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a className="teamsquare" href="">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      className="imgbullet mr-0"
                      src="/bigemily.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="teamcard">
                    <h3 className="h3">Emily Weber</h3>
                    <div className="text-neutral-600">
                      <div className="font-bold text-base leading-5">
                        HEAD OF DONATIONS
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="cardvolunteers">
            <img className="imgbullet mr-8" src="/people.svg" alt="" />
            <h3 className="h3">And 50,000 more volunteers helping our cause</h3>
          </div>
        </div>
      </div>
      <div className="positionrelative section">
        <div className="container">
          <div className="mx-auto max-w-lg">
            <div className="mb-10 text-center">
              <div className="text-neutral-800 subtitle ">OUR PARTNERS</div>
              <h2 className="h2 mb-0">
                Amazing partners that move our cause forward
              </h2>
            </div>
          </div>
          <div className="cardlogo">
            <div className="gridcolumn9">
              <img
                className="imgbullet mr-0 self-center"
                src="/agency.svg"
                alt=""
              />
              <img
                className="imgbullet mr-0 self-center justify-self-center"
                src="/app.svg"
                alt=""
              />
              <img
                className="imgbullet mr-0 justify-self-end self-center"
                src="/business.svg"
                alt=""
              />
              <img
                className="imgbullet mr-0 self-center"
                src="/venture.svg"
                alt=""
              />
              <img
                className="imgbullet mr-0 justify-self-center self-center"
                src="/company.svg"
                alt=""
              />
              <img
                className="imgbullet mr-0 justify-self-center self-center"
                src="/institute.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a className="buttonprimary" href="/donate">
              Donate now
            </a>
          </div>
        </div>
        <div className="bgsecondary"></div>
      </div>
    </>
  );
};

export default About;
