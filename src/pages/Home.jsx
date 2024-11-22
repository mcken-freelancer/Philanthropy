import React from "react";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="herosection">
        <div className="container">
          <div className="herogridcolumn">
            <div>
              <div className="headline"></div>
              <h1 className="display2">Giving help to those who need it</h1>
              <p className="paralarge">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
                libero quibusdam? Laboriosam et quidem ducimus soluta?
              </p>
              <div className="buttonrow">
                <a className="buttonprimary" href="/donate">
                  Donate now
                </a>
                <a className="buttonsecondary" href="/about">
                  About our charity
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="heroimage">
          <img className="img" src="/heroimage.jpeg" alt="some beneficiaries" />
        </div>
      </div>
      <div className="pt-36 bg-neutral-200">
        <div className="container">
          <div className="mb-16">
            <div className="gridcolumn">
              <div className="text-center">
                <div className="display2 mb-2">
                  200<span className="text-orange-500">m</span>
                </div>
                <div className="text-300">Humans impacted</div>
              </div>
              <div className="text-center">
                <div className="display2 mb-2">
                  50<span className="text-orange-500">k</span>
                </div>
                <div className="text-300">Collaborators</div>
              </div>
              <div className="text-center">
                <div className="display2 mb-2">
                  370<span className="text-orange-500">k</span>
                </div>
                <div className="text-300">Donations</div>
              </div>
              <div className="text-center">
                <div className="display2 mb-2">
                  100<span className="text-orange-500">+</span>
                </div>
                <div className="text-300">Assisted communities</div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      </div>
      <div className="bg-neutral-200 py-48">
        <div className="container">
          <div className="gridcolumn2">
            <div>
              <div className="max-w-xl mb-14">
                <div className="subtitle">ABOUT US</div>
                <h2 className="h2">
                  We are here to support vulnerable communities
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam, mollitia hic facilis corporis aliquam minus, ut,
                  perspiciatis eaque molestiae inventore quos possimus
                  repellendus officia libero autem voluptatem beatae reiciendis?
                </p>
              </div>
              <div>
                <div className="mb-8 flex">
                  <img
                    className="img2"
                    src="/girl.jpeg"
                    alt="picture of a girl"
                  />
                </div>
                <div className="flex">
                  <img
                    className="img2"
                    src="/womanandchild.jpeg"
                    alt="picture of a woman and a female student"
                  />
                </div>
              </div>
            </div>
            <div className="gridcolumn1">
              <div className="mb-12">
                <div className="buttonrow justify-end">
                  <a className="buttonprimary" href="/donate">
                    Donate now
                  </a>
                  <a className="buttonsecondary" href="/about">
                    About us
                  </a>
                </div>
              </div>
              <div className="flex mb-12">
                <img
                  className="img2"
                  src="/boys.jpg"
                  alt="the chikdren again"
                />
              </div>
              <div className="justify-self-end max-w-xl">
                <div>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim sed fuga facere, repellendus sequi ea quaerat
                    accusamus, aspernatur quas nobis magni tempore qui incidunt
                    aperiam repellat quisquam? Dolor dolorum sed, totam pariatur
                    earum eaque! Itaque.
                  </p>
                  <div className="flex mb-5 items-center">
                    <img
                      className="imgbullet"
                      src="/correct.svg"
                      alt="bullet point"
                    />
                    <div className="font-bold leading-4 text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="flex mb-5 items-center">
                    <img
                      className="imgbullet"
                      src="/correct.svg"
                      alt="bullet point"
                    />
                    <div className="font-bold leading-4 text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                  <div className="flex mb-5 items-center">
                    <img
                      className="imgbullet"
                      src="/correct.svg"
                      alt="bullet point"
                    />
                    <div className="font-bold leading-4 text-neutral-800">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-48">
        <div className="container">
          <div className="gridcolumn3">
            <div className=" max-w-lg">
              <div className="subtitle">OUR RESULTS</div>
              <h2 className="h2 mb-8">
                Take a look at the big impact we have done
              </h2>
              <div className="mb-16">
                <div className="gridcolumn2">
                  <div className="flex">
                    <img className="imgbullet" src="/heart.svg" alt="heart" />
                    <div>
                      <div className="display3">500m</div>
                      <div className="font-medium leading-4">
                        Liters of water
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <img
                      className="imgbullet"
                      src="/heartheld.svg"
                      alt="heartheld"
                    />
                    <div>
                      <div className="display3">7000+</div>
                      <div className="font-medium leading-4">Houses built</div>
                    </div>
                  </div>
                  <div className="flex">
                    <img className="imgbullet" src="/ball.svg" alt="a ball" />
                    <div>
                      <div className="display3">10,000+</div>
                      <div className="font-medium leading-4">
                        Toys delivered
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <img className="imgbullet" src="/cap.svg" alt="heartheld" />
                    <div>
                      <div className="display3">2000+</div>
                      <div className="font-medium leading-4">Schools built</div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="buttonprimary mr-0" href="/donate">
                Donate now
              </a>
            </div>
            <div className="justify-self-end max-w-xl">
              <div className="flex">
                <img className="img2" src="/boy.jpeg" alt="a boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-200 section">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <div className="subtitle text-neutral-800">
                TAKE A LOOK AT OUR VIDEO
              </div>
              <h2 className="mb-10 h2">
                We have helped over 200 vulnerable communities worldwide
              </h2>
              <div className="justify-center buttonrow">
                <a className="bg-neutral-800 buttonprimary" href="/donate">
                  Donate now
                </a>
                <a className="bg-neutral-100 buttonsecondary" href="/about">
                  About our charity
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden mb-20">
            <div className="relative">
              <img
                className="imgbullet mr-0"
                src="/thumbnail.png"
                alt="the video"
              />
              <div className="overlay">
                <a className="vidwrapper" href="#">
                  <img
                    className="imgbullet mr-0"
                    src="/playicon.svg"
                    alt="play icon"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="gridcolumn2">
            <div>
              <h3 className="h3">The goal and mission behind</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                nobis ratione commodi vel. Incidunt, officiis recusandae
                consectetur sunt iure aperiam ex voluptatem reiciendis ut illo,
                quod nobis corrupti dolorum obcaecati quam. Dolores assumenda,
                eos voluptatem at accusamus exercitationem.
              </p>
            </div>
            <div>
              <h3 className="h3">How our charity got started</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                ipsa, optio saepe voluptatibus dolores tempora perspiciatis
                temporibus cupiditate itaque nemo corporis, et provident
                reprehenderit quo? Distinctio saepe, id aperiam impedit modi sit
                dolores ea fugiat quo, possimus nostrum?
              </p>
            </div>
          </div>
        </div>
        <div className="iconsecondary"></div>
      </div>
      <div className="container px-0 mt-8">
        <div className="divider mx-6"></div>
      </div>
      <div className="py-52 relative">
        <div className="container">
          <div className="gridcolumn2 mb-16">
            <div>
              <div className="subtitle">HOW WE HELP?</div>
              <h2 className="h2 mb-0">
                What are we doing to assist these communities?
              </h2>
            </div>
            <a className="buttonprimary mr-0 justify-self-end" href="/donate">
              Donate now
            </a>
          </div>
          <div className="gridcolumn4">
            <div className="cardcontent">
              <img
                className="imgbullet mb-6"
                src="/house.svg"
                alt="the house"
              />
              <h3 className="h3">House & shelter</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
            <div className="cardcontent">
              <img className="imgbullet mb-6" src="/love.svg" alt="the love" />
              <h3 className="h3">Love & Support</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
            <div className="cardcontent">
              <img
                className="imgbullet mb-6"
                src="/groceries.svg"
                alt="the groceries"
              />
              <h3 className="h3">Food & Groceries</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
            <div className="cardcontent">
              <img className="imgbullet mb-6" src="/tree.svg" alt="the tree" />
              <h3 className="h3">Environmental Help</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
            <div className="cardcontent">
              <img
                className="imgbullet mb-6"
                src="/education.svg"
                alt="the education"
              />
              <h3 className="h3">Education</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
            <div className="cardcontent">
              <img
                className="imgbullet mb-6"
                src="/health.svg"
                alt="the education"
              />
              <h3 className="h3">Health & Insurance</h3>
              <p className="mt-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                exercitationem voluptate laboriosam nemo expedita inventore a.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="positionrelative">
        <div className="container">
          <div className="ctacard">
            <img className="ctaleft imgbullet mr-0" src="/design.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

//https://github.com/ZapTek-React-Project/Philanthropy.git
