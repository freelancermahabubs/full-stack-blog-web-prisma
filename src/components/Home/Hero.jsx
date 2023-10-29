"use client";
import React, {useEffect, useState} from "react";
import Carousel from "react-bootstrap/Carousel";
import {Fade} from "react-awesome-reveal";
import Link from "next/link";
const Hero = (props) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8 col-lg-8 col-sm-12 p-1 col-12">
          {/* <Carousel
            id="carouselHero"
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}>
            {props.slider.map((item, i) => {
              return (
                <Carousel.Item>
                  <Link
                    href={"/Details/" + item["title"] + "?id=" + item["id"]}>
                    <img
                      className="w-100"
                      src={item["img1"]}
                      text="First slide"
                    />
                    <Carousel.Caption className="caption">
                      <Fade>
                        <h4>{item["title"]}</h4>
                        <p>{item["short_des"]}</p>
                      </Fade>
                    </Carousel.Caption>
                  </Link>
                </Carousel.Item>
              );
            })}
          </Carousel> */}
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 p-1 col-6">
          {/* <Link
            href={
              "/Details/" +
              props.featured[0]["title"] +
              "?id=" +
              props.featured[0]["id"]
            }
            id="Hero"
            className="card h-100">
            <img
              className="card-img-top w-100 rounded-2"
              src={props.featured[0]["img2"]}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="caption">
                <Fade>
                  <h4>{props.featured[0]["title"]}</h4>
                  <p>{props.featured[0]["short_des"]}</p>
                </Fade>
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
