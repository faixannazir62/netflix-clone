import React from "react";
import Nav from "../Nav";
import Accordion from "./Accordion";
import { faqs } from "./AccordionData";
import "./FirstScreen.css";
import Form from "./Form";

function FirstScreen({ setUsername }) {
  return (
    <div className="main-container">
      <Nav />
      <div className="inner-main-container">
        <div className="bg-img-gd">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/bd05b4ed-7e37-4be9-85c8-078f067bd150/IN-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="bg-img"
          />
          <div className="bg-gradient"></div>
        </div>
        <div className="hero-text-from">
          <div className="spaceFirstScreen"></div>
          <h1 className="hero-title">Unlimited movies, TV shows and more.</h1>
          <h2 className="hero-sub-title">Watch anywhere. Cancel anytime.</h2>

          {/* signup itput form */}
          <Form setUsername={setUsername} />
        </div>
      </div>
      <div className="animation-section one">
        <div className="inner-animation-section">
          <div className="a-left-text">
            <h1 className="hero-title">Enjoy on your TV.</h1>
            <h2 className="hero-sub-title">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h2>
          </div>
          <div className="a-right-animation">
            <img
              alt=""
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <video
              className="our-story-card-video"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>

      <div className="animation-section no-margin two">
        <div className="inner-animation-section">
          <div className="a-right-animation">
            <img
              alt=""
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              data-uia="our-story-card-img"
            />
            <div
              className="our-story-card-animation"
              data-uia="our-story-card-animation"
            >
              <div className="our-story-card-animation-image">
                <img
                  alt=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
              </div>
              <div className="our-story-card-animation-text">
                <div id="" class="text-0" data-uia="">
                  Stranger Things
                </div>
                <div id="" className="text-1" data-uia="">
                  Downloading...
                </div>
              </div>
              <div
                className="our-story-card-animation-custom"
                data-uia="our-story-card-custom"
                aria-hidden="true"
              ></div>
            </div>
          </div>
          <div className="a-left-text">
            <h1 className="hero-title">
              Download your shows to watch offline.
            </h1>
            <h2 className="hero-sub-title">
              Save your favourites easily and always have something to watch.
            </h2>
          </div>
        </div>
      </div>

      <div className="animation-section no-margin three">
        <div className="inner-animation-section">
          <div className="a-left-text">
            <h1 className="hero-title">Watch everywhere.</h1>
            <h2 className="hero-sub-title">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h2>
          </div>
          <div className="a-right-animation">
            <img
              alt=""
              className="our-story-card-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              data-uia="our-story-card-img"
            />
            <video
              className="our-story-card-video"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
      </div>
      <div className="animation-section no-margin four">
        <div className="inner-animation-section">
          <div className="a-right-animation">
            <img
              alt=""
              className="our-story-card-img"
              src="https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              data-uia="our-story-card-img"
            />
          </div>
          <div className="a-left-text">
            <h1 className="hero-title">Create profiles for children.</h1>
            <h2 className="hero-sub-title">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h2>
          </div>
        </div>
      </div>
      {/* Accordion and bottom signup form */}
      <div className="accordion">
        <h1 className="acc-title">Frequently Asked Questions</h1>
        <div className="inner-acc-container">
          <ul className="acc-list">
            {faqs.map(({ question, answer }) => (
              <Accordion question={question} answer={answer} />
            ))}
          </ul>
          {/* Bottom signup form */}
          <Form setUsername={setUsername} />
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
