import React, { useState } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalOne from "./Modal/ModalOne";
import ModalTwo from "./Modal/ModalTwo";
import ModalThree from "./Modal/ModalThree";
import ModalFour from "./Modal/ModalFour";

Modal.setAppElement("#root");

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          speed: 300,
          draggable: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="news_inner my_carousel">
        <ul>
          <Slider {...settings}>
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner"  onClick={()=> window.open("https://dev.to/anditorx/how-to-fix-error-decorators-legacy-react-native-45cl", "_blank")}>
                <div className="image">
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/cover_reactnative.png"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <span>
                    June 23, 2022 <a href="#">React Native</a>
                  </span>
                  <h3 className="title">
                    How to fix Error: decorators-legacy in React Native
                    </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog One */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="list_inner">
                <div className="image" onClick={()=> window.open("https://dev.to/anditorx/how-to-fix-eslint-error-must-use-import-to-load-es-module-e2n", "_blank")}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/cover_eslint.png"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <span>
                    June 23, 2022 <a href="#">VsCode</a>
                  </span>
                  <h3 className="title">
                  How to fix EsLint Error: Must use import to load ES Module
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* End list inner */}
            </li>
            {/* End single blog Two */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="list_inner">
                <div className="image" onClick={()=> window.open("https://dev.to/anditorx/how-to-fix-error-cocoapods-pod-install-in-mac-m1-30e", "_blank")}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/cover_cocoapodsm1.jpeg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="news_details">
                  <span>
                    June 23, 2022 <a href="#">Cocoapods</a>
                  </span>
                  <h3 className="title">
                  How to fix Error Cocoapods pod install in mac m1
                  </h3>
                </div>
                {/* End details */}
              </div>
              {/* END LIST INNER */}
            </li>
            {/* End single blog Three */}

            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-dealy="400"
            >
              <div className="list_inner">
                <div className="image" onClick={()=> window.open("https://dev.to/anditorx/react-native-error-task-appmergedexdebug-failed-26m", "_blank")}>
                  <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/news/cover_reactnative.png"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="news_details">
                  <span>
                    June 23, 2022 <a href="#">React Native</a>
                  </span>
                  <h3 className="title">
                    React Native Error: Task :app:mergeDexDebug FAILED
                  </h3>
                </div>
                {/* End details */}
              </div>
            </li>
            {/* End single blog Four */}
          </Slider>
        </ul>

        {/* Start Modal One */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <ModalOne />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End modal One */}

        {/* Start Modal Two */}
        <Modal
          isOpen={isOpen2}
          onRequestClose={toggleModalTwo}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalTwo}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close modal */}
            <div className="box_inner">
              <ModalTwo />
            </div>
          </div>
        </Modal>
        {/* End modal Two */}

        {/* Start Modal Three */}
        <Modal
          isOpen={isOpen3}
          onRequestClose={toggleModalThree}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalThree}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* END CLOSE MODAL */}
            <div className="box_inner">
              <ModalThree />
            </div>
          </div>
        </Modal>
        {/* End Modal Three */}

        {/* Start Modal Four */}
        <Modal
          isOpen={isOpen4}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="custom-modal"
          overlayClassName="custom-overlay"
          closeTimeoutMS={500}
        >
          <div className="edina_tm_modalbox">
            <button className="close-modal" onClick={toggleModalFour}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner">
              <ModalFour />
            </div>
            {/* End box inner */}
          </div>
          {/* End modal box news */}
        </Modal>
        {/* End Modal Four */}
      </div>
    </>
  );
};

export default Blog;
