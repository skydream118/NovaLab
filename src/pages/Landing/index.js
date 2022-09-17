import * as React from "react";
import Main from "../../layouts/Main";
import CustomerReview from "../../components/CustomerReview";
import ProductCard from "../../components/ProductCard";

import ReactImg from "../../assets/images/react.svg";
import AngularImg from "../../assets/images/angular.svg";
import NodeImg from "../../assets/images/node.svg";
import SolidityImg from "../../assets/images/solidity.svg";
import VectorImg from "../../assets/images/vector.svg";
import SymbridgeLogo from "../../assets/images/symbridge.svg";
import ShiftLogo from "../../assets/images/shift.svg";
import LinkImg from "../../assets/images/huy-link.svg";
import IndustryImg from "../../assets/images/industry.png";
import QuestImg from "../../assets/images/quest.png";
import SoundMintImg from "../../assets/images/soundmint.png";
import KTFImage from "../../assets/images/10ktf.png";
import DefiDinosImg from "../../assets/images/defi-dinos.png";
import SolKittiesImg from "../../assets/images/sol-kitties.png";

import Avatar1 from "../../assets/images/avatar1.png";
import Avatar2 from "../../assets/images/avatar2.png";
import Avatar3 from "../../assets/images/avatar3.png";
import Avatar4 from "../../assets/images/avatar4.png";
import Avatar5 from "../../assets/images/avatar5.png";

import Left from "../../assets/images/left.png";
import Right from "../../assets/images/right.png";

import EmailIcon from "../../assets/images/email-icon.svg";
import UiDesign from "../../assets/images/ui-design.svg";
import SmartContract from "../../assets/images/smartcontract.svg";
import AppDesign from "../../assets/images/app-design.svg";
import Dapp from "../../assets/images/dapp.svg";
import LogoWhite from "../../assets/images/logo-white.svg";
import Github from "../../assets/images/github.svg";

const products = [
  {
    img: QuestImg,
    imgText: "dApp Design & Development - June 20, 2022",
    caption: "Ordinem Quest",
    description:
      "The ordinem dapp requires you to stake your nft & connect your twitter while in return urning tokens for raiding projects and other holders twitters.",
  },
  {
    img: SoundMintImg,
    imgText: "Smart Contract - June 20, 2022",
    caption: "Development Of NFT Contract For SoundMint",
  },
  {
    img: KTFImage,
    imgText: "Website Development - June 20, 2022",
    caption: "Development of a new Website for 10KTF",
  },
  {
    img: DefiDinosImg,
    imgText: "Front End - June 20, 2022",
    caption: "Front End Development for Defi-Dinos",
  },
  {
    img: SolKittiesImg,
    imgText: "Full Project Development - June 20, 2022",
    caption: "Full Project Development for Sol Kitties",
  },
];

const customers = [
  {
    img: Avatar1,
    description:
      "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Anna",
    position: "Founder of Varibo",
  },
  {
    img: Avatar2,
    description:
      "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Tom Aprilla",
    position: "Founder of Varibo",
  },
  {
    img: Avatar3,
    description:
      "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Ricky Aprilla",
    position: "Founder of Varibo",
  },
  {
    img: Avatar4,
    description:
      "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Jacky Aprilla",
    position: "Founder of Varibo",
  },
  {
    img: Avatar5,
    description:
      "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum turpis amet id posuere torto quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    name: "Olena Aprilla",
    position: "Founder of Varibo",
  },
];

const LandingPage = () => {
  return (
    <Main>
      <div className="landing-page-wrapper">
        <div className="slide-panel">
          <div className="typewriter">
            <h2>
              We Build Impactful Digital <span className="type-products"></span>{" "}
            </h2>
          </div>
          <h5 className="mt-1">Handcrafting Your User's Digital Experiences</h5>
          <h6 className="mt-4">Work with any Technology</h6>
          <div className="d-flex justify-content-around align-items-center pt-2">
            <img className="px-2" src={ReactImg} alt="React.js" />
            <img className="px-2" src={AngularImg} alt="Angular" />
            <img className="px-2" src={NodeImg} alt="Node.js" />
            <img className="px-2" src={SolidityImg} alt="Solidity" />
            <img className="px-2" src={VectorImg} alt="Vector" />
            <h6>+ Many More</h6>
          </div>
          <div className="d-flex mt-5">
            <button className="btn-contact mx-3">Contact Us</button>
            <button className="btn-join mx-3">Join Nova Labs</button>
          </div>
        </div>

        <div className="firms-wrapper">
          <h4 className="py-4">Trusted By Large Firms All Over The World</h4>
          <div className="d-flex">
            <img className="px-3" src={SymbridgeLogo} alt="symbridge" />
            <img className="px-3" src={ShiftLogo} alt="shift" />
          </div>
        </div>

        <div className="affaliate-wrapper mx-auto">
          <div className="left-panel">
            <img src={LinkImg} alt="link" />
            <h5>Join our Affaliate program</h5>
          </div>
          <div className="right-panel">
            <h6>
              Join our Affaliate program and Earn money by helping NovaLabs
              Grow.
            </h6>
            <div className="d-flex justify-content-start">
              <button>
                Affaliate<span className="play-icon"></span>
              </button>
              <button className="px-2">
                Know more<span className="play-icon"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="industry-wrapper mt-5 mx-auto">
          <h3 className="gradient-text">Industry-focused Development</h3>
          <div className="d-flex justify-content-center align-items-center">
            <h5 className="lh-lg">
              All our products are specific to the demands of your industry. We
              pledge to properly examine your market to ensure the success of
              your digital product and to develop a creative solution that is
              tailored to your company, reflects your values, and appeals to the
              appropriate demographics.
            </h5>
            <div className="flex-shrink-0">
              <img src={IndustryImg} alt="Industry" />
            </div>
          </div>
        </div>

        <div className="digital-products-wrapper mx-auto mt-5">
          <h2 className="gradient-text text-start">
            We create world-class digital products
          </h2>
          <h6>
            By information about design the world to the best instructors, heatc
            helping By information
          </h6>
          <div className="row mt-4">
            <div className="col-md-6 col-sm-12">
              <ProductCard product={products[0]} />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row gy-5">
                {products.slice(1).map((product, index) => {
                  return (
                    <div className="col-md-6">
                      <ProductCard
                        product={product}
                        size="sm"
                        key={"products" + index}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="customer-reviewer-wrapper mt-5">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div>
              <img src={Left} alt="left" />
            </div>
            <div className="mx-4">
              <h3 className="gradient-text">
                Customer
                <br />
                Reviews
              </h3>
            </div>
            <div>
              <img src={Right} alt="right" />
            </div>
          </div>
          <CustomerReview records={customers} />
        </div>

        <div className="help-wrapper mt-5">
          <div className="row gx-5 gy-3">
            <div className="col-md-6 col-sm-12">
              <h3 className="gradient-text text-start py-2">
                How We Can Help You
              </h3>
              <h6 className="help-description">
                Follow our newsletter. We will regulary update our latest
                project and availability
              </h6>
              <div className="email-panel mt-5">
                <div className="d-flex">
                  <img src={EmailIcon} alt="email" />
                  <input
                    className="email-input"
                    type="text"
                    placeholder="Enter your email address"
                  />
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row gy-4">
                <div className="col-sm-6 col-xs-12">
                  <img src={UiDesign} alt="UI/UX Design" />
                  <h5 className="py-2">UI/UX Design</h5>
                  <h6>
                    Designing of user interfaces for all kind of digital
                    appliances.
                  </h6>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <img src={SmartContract} alt="Smart Contract Building" />
                  <h5 className="py-2">Smart Contract Building</h5>
                  <h6>Development of Cryptocurrency tokens on all Networks.</h6>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <img src={AppDesign} alt="App Design & Development" />
                  <h5 className="py-2">App Design & Development</h5>
                  <h6>
                    Designing & Developing your application for all devices.
                  </h6>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <img src={Dapp} alt="DAPP & Site Development" />
                  <h5 className="py-2">DAPP & Site Development</h5>
                  <h6>
                    Development of Web2 and Web3 Web Applications or Websites.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="github-wrapper my-5">
          <div className="left px-3">
            <img src={LogoWhite} alt="Logo" />
            <h5 className="mx-3">X</h5>
            <img src={Github} alt="Github" />
          </div>
          <div className="right px-3">
            <h4>
              Open-Source Github Library:<span>Nova Labs</span>
            </h4>
            <div className="play-btn"></div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default LandingPage;
