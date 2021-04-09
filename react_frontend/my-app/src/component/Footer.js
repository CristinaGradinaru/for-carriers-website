import React, { Component } from 'react'
import '../stylesheets/footerStyle.css'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="flex-rw">
                    <ul className="footer-list-top">
                        <li>
                        <h6 className="footer-list-header">About 4Carriers</h6></li>
                        <li><a href='/' className="generic-anchor footer-list-anchor" itemProp="significantLink">ABOUT US</a></li>
                        <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
                        <li><a href='/job-openings.html' itemProp="significantLink" className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>
                    </ul>
                    <ul className="footer-list-top">
                        <li>
                        <h6 className="footer-list-header">Safety regulations</h6></li>
                        <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">safety compliance</a></li>
                        <li><a href='/Mugs/cat/id/32' className="generic-anchor footer-list-anchor">branded PPE</a></li>
                        <li><a href='/Pet-Lover/cat/id/108' className="generic-anchor footer-list-anchor">latest news</a></li>
                    </ul>
                    <ul className="footer-list-top">
                        <li id='help'>
                        <h6 className="footer-list-header">Find us</h6></li>
                        <li><a href='/shop/about-contact' className="generic-anchor footer-list-anchor" itemProp="significantLink">CONTACT</a></li>
                        <li><a href='/faq.html' className="generic-anchor footer-list-anchor" itemProp="significantLink">FAQ</a></li>
                        <li id='order-tracking'><a href='/shop/order-status' itemProp="significantLink" className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
                    </ul>
                    <section className="footer-social-section flex-rw">
                        <span className="footer-social-overlap footer-social-connect">
                        CONNECT <span className="footer-social-small">with</span> US
                        </span>
                        <span className="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.facebook.com/paviliongift" className="generic-anchor" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor"  title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor"  title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor"  title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i></a>
                        </span>
                    </section>
                    <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">   
                    <i className="fa fa-copyright">
                    
                    </i> 2019  <address className="footer-address">Northbrook, IL</address>
                        </div>
                        <div className="footer-bottom-wrapper">
                        <a href="/" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/" className="generic-anchor" rel="nofollow">Privacy</a>
                        </div>
                    </section>
                </footer>
                
            </div>
        )
    }
}
