import React from 'react'

function TopHeader() {
  return (
    <>
    <header className="top-header bg-active" id="top-header-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-7">
                    <div className="list-inline phone-email-time py-3">
                        <a href="tel:+55-4XX-634-7071" className="fa fa-phone">&nbsp;+55-4XX-634-7071</a>
                        <a href="tel:info@getonroadprice.com"><i className="fa fa-envelope"></i>&nbsp;info@getonroadprice.com</a>
                        <a href="info@getonroadprice.com"><i className="fa fa-clock-o"></i>&nbsp;Mon - Sun: 8:00am - 6:00pm</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-5">
                <ul className="top-social-media pull-right list-inline map-login-register py-2 m-0">
                    <li>
                        <a href="/" className="sign-in"><i className="fa fa-map-marker top-head-icon "></i></a>
                    </li>
                    <li className='d-inline top-head-icon me-3 py-2 px-2'>
                        <a href="/" className="sign-in"><i className="fa fa-sign-in"></i> Login</a>
                    </li>
                    <li className='d-inline top-head-icon me-3 py-2 px-2'>
                        <a href="/" className="sign-in "><i className="fa fa-user "></i> Register</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </header>
    </>
    )
}

export default TopHeader