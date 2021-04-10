import React, { Component } from 'react'
import "../stylesheets/gallery.css";


export default class Gallery extends Component {
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
                   <div className="container-flex m-4 p-4" >
                    <h1 className="page-description text-center">FORCarriers Gallery</h1>
                    <p className="page-description text-center">Our Work</p>
                    </div> 
                <div className="container-flex gallery-container justify-content-center m-5 p-5">

                <div className="tz-gallery">

                    <div className="row">

                        <div className="col-sm-12 col-md-4">
                            <a className="lightbox" href="../images/bridge.jpg">
                                <img src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1281&q=80" alt="Bridge"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/park.jpg">
                                <img src="https://images.unsplash.com/photo-1583559121633-63421224a8e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80" alt="Rails"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/tunnel.jpg">
                                <img src="https://images.unsplash.com/photo-1570511883162-7f76248c3d2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Tunnel"/>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-8">
                            <a className="lightbox" href="../images/traffic.jpg">
                                <img src="https://images.unsplash.com/photo-1568392388563-e7b357fa41d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Coast"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/coast.jpg">
                                <img src="https://images.unsplash.com/photo-1601302251485-9d5c77fda2c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Traffic"/>
                            </a>
                        </div> 
                        <div className="col-sm-6 col-md-4">
                            <a class="lightbox" href="../images/rails.jpg">
                                <img src="https://images.unsplash.com/photo-1610553023063-91489681e538?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80" alt="Park"/>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <a className="lightbox" href="../images/bridge.jpg">
                                <img src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1281&q=80" alt="Bridge"/>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <a className="lightbox" href="../images/park.jpg">
                                <img src="https://images.unsplash.com/photo-1583559121633-63421224a8e1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80" alt="Rails"/>
                            </a>
                        </div>

                    </div>

                </div>

                </div>      
            </div>
        )
    }
}
