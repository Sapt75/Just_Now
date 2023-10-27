import React from 'react';
import SmallCar1 from './images/Footer Image/small-car-3.jpg';
import SmallCar2 from './images/Footer Image/small-car-1.jpg';
import SmallCar3 from './images/Footer Image/small-car-2.jpg';


function MainFooter() {
  return (
    <>
    <footer className="footer">
    <div className="container footer-inner mb-5">
        <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                    <h4>
                        Contact Info
                    </h4>
                    <ul className="contact-info list-unstyled">
                        <li>
                            <i className="flaticon-pin"></i>&nbsp;&nbsp;Jp Nagar, Bangalore
                        </li>
                        <li>
                            <i className="flaticon-mail"></i><a href="mailto:info@getonroadprice.com">&nbsp;&nbsp;info@getonroadprice.com</a>
                        </li>
                        <li>
                            <i className="flaticon-phone"></i><a href="tel:">&nbsp;&nbsp;+0477 85X6 552</a>
                        </li>
                        <li>
                            <i className="flaticon-fax"></i>&nbsp;&nbsp;+0024 85X6 987
                        </li>
                        <li>
                            <i className="flaticon-earth"></i><a href="mailto:info@getonroadprice.com">&nbsp;&nbsp;info@getonroadprice.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div className="footer-item">
                    <h4>Useful Links</h4>
                    <ul className="links list-unstyled">
                        <li>
                            <a href="/" className="link-inner"><span> Home</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> About Us</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> Services</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> Car Listing</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> Blog</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> Gallery</span></a>
                        </li>
                        <li>
                            <a href="/" className="link-inner"><span> Contact Us</span></a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                    <div className="recent-posts">
                        <h4>Recent Cars</h4>
                        <div className="d-flex mb-4 recent-posts-box">
                            <a href="/">
                                <img src={SmallCar1} className="flex-shrink-0 me-3" alt="..."/>
                            </a>
                            <div className="align-self-center">
                                <h5>
                                    <a href="/">Bentley Continental GT</a>
                                </h5>
                                <div className="listing-post-meta">
                                    ₹3.45,000 | <a href="/"><i className="fa fa-calendar"></i> Jan 12, 2020</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mb-4 recent-posts-box">
                            <a href="/">
                                <img src={SmallCar2} className="flex-shrink-0 me-3" alt="..."/>
                            </a>
                            <div className="align-self-center">
                                <h5>
                                    <a href="/">Fiat Punto Red</a>
                                </h5>
                                <div className="listing-post-meta">
                                    ₹7,45,000 | <a href="/"><i className="fa fa-calendar"></i> Sep 06, 2021</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex recent-posts-box">
                            <a href="/">
                                <img src={SmallCar3} className="flex-shrink-0 me-3" alt="..."/>
                            </a>
                            <div className="align-self-center">
                                <h5>
                                    <a href="/">Nissan Micra Gen5</a>
                                </h5>
                                <div className="listing-post-meta">
                                    ₹7,45,000 | <a href="/"><i className="fa fa-calendar"></i> Aug 26, 2021</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                    <h4>Subscribe</h4>
                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <div className="newsletter-content-wrap">
                        <form className="newsletter-form d-flex" action="#">
                            <input className="form-control me-2" type="email" id="email" placeholder="Email Address..."/>
                            <button className="btn btn-theme w-25 ms-2" type="submit"><i className="fa fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="sub-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <p className="copy">© 2022 <a href="/">Getonroadprice</a> All Rights Reserved.</p>
                </div>
                <div className="col-lg-4">
                    <div className="social-list-2">
                        <ul>
                            <li><a href="/" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="/" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="/" className="google-bg"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/" className="linkedin-bg"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default MainFooter