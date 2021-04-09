import React, { Component } from "react";
import "../stylesheets/home.css";
import AFCtransportlogo from "../stylesheets/images/AFCtransportlogo.png";
import CMAXlogo from "../stylesheets/images/CMAXlogo.png";
import dronelogo from "../stylesheets/images/dronelogo.png";
import ELDonelogo from "../stylesheets/images/ELDonelogo.png";
import k1logo from "../stylesheets/images/k1logo.png";
import TarpSystemlogo from "../stylesheets/images/TarpSystemlogo.png";
import teslatransportlogo from "../stylesheets/images/teslatransportlogo.png";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="inner cover">
                <h1 className="cover-heading">Custom items for Carriers</h1>
                <p className="lead mt-4">
                  We offer custom items for your team. Personal Protection
                  Equipment, T-shirts, Hats, Hoodies, and custom stickers that
                  comply with Federal Regulations.
                </p>
                <p className="lead">
                  <a className="btn btn-lg button-cover" href="/aboutus">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-carousel d-block mx-auto">
          <h2 className="carousel-text text-uppercase text-lg-center pt-3">Our clients</h2>
          <div className="row blog">
            <div className="col-md-12">
              <div
                id="blogCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#blogCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#blogCarousel" data-slide-to="1"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={AFCtransportlogo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={CMAXlogo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={dronelogo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={TarpSystemlogo} alt="client" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={k1logo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={AFCtransportlogo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={ELDonelogo} alt="client" />
                        </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={teslatransportlogo} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
