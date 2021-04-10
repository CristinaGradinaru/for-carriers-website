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



        <div class="container-flex gallery-container justify-content-center m-5 p-5">
    <div class="row">
      <div class="col-md-8 mb-5">
        <h2>What We Do</h2>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
        <a class="btn btn-blue d-inline m-1" href="/products">Our Shop &raquo;</a>
      </div>
      <div class="col-md-4 mb-5">
        <h2>Contact Us</h2>
        <hr/>
        <address>
          <strong>For Carriers</strong>
          <br/>279 Academy Dr
          <br/> Northbrook, IL 90210
          <br/>
        </address>
        <address>
          <abbr title="Phone">P: </abbr>
          (123) 456-7890
          <br/>
          <abbr title="Email">E: </abbr>
          info@forcarriers.com
        </address>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://placehold.it/300x200" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Branded Safety Gear</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
          </div>
          <div class="card-footer">
            <a href="/" class="btn btn-blue d-inline m-1">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://placehold.it/300x200" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Custom Printed Apparel</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
          </div>
          <div class="card-footer">
            <a href="/" class="btn btn-blue d-inline m-1">Find Out More!</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-5">
        <div class="card h-100">
          <img class="card-img-top" src="https://placehold.it/300x200" alt=""/>
          <div class="card-body">
            <h4 class="card-title">Die-Cut and Transfer Stickers</h4>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div class="card-footer">
            <a href="/" class="btn btn-blue d-inline m-1">Find Out More!</a>
          </div>
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
                          <img className="image-carousel" src={TarpSystemlogo} alt="client"/>
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
  /                      </a>
                      </div>
                      <div className="col-md-3">
                        <a href="/">
                          <img className="image-carousel" src={teslatransportlogo} alt="" />
/                        </a>
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
