import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'font-awesome/less/font-awesome.less';



export default class Contact extends Component {
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
            <div className="container-fluid container-contact">

                <h2 className="h1-responsive font-weight-bold text-center">Contact us</h2>
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    24h.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="/" method="POST">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" name="name" className="form-control"/>
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" name="email" className="form-control"/>
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input type="text" id="subject" name="subject" className="form-control"/>
                                        <label htmlFor="subject" className="">Subject</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">


                                <div className="col-md-12">

                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                        <label htmlFor="message">Your message</label>
                                    </div>

                                </div>
                            </div>
                        </form>

                        <div className="text-center text-md-left">
                            <a className="btn btn-blue pr-5 pl-5" href="/contact">Send</a>
                        </div>
                        <div className="status"></div>
                    </div>
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fa fa-map-pin fa-2x"></i>
                                <p>Northbrook, IL 60062, USA</p>
                            </li>

                            <li><i className="fa fa-mobile-phone fa-3x mt-2"></i>
                                <p>+ 01 224 415 3659</p>
                            </li>

                            <li><i className="fa fa-envelope-open fa-2x"></i>
                                <p>info@forcarriers.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>

        )
    }
}


