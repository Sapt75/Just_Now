import React, { useEffect, useState } from 'react'


function NewFooter() {

    let [socials, setSocials] = useState()


    async function getSocial() {
        let data = await fetch("/get_social", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setSocials(res)
    }


    let date = new Date()


    useEffect(() => {
        getSocial()
    }, [])

    return (
        <>
            <div className=" g-theme-background g-white-text pt-3 justify-content-center">
                <div className="footer-box justify-content-center d-flex">
                    <div className="footer-box-inner">
                        <div className="col-4">
                            <ul className="footer-sec-one list-unstyled">
                                <h5 className='footerfont-p m-0 g-bold g-p-lh'>Overview</h5>
                                {/* <a className='nav-link-des' href={"/about-us"}>
                                    <li className='footerfont-p'>About Us</li>
                                </a>
                                <li className='footerfont-p'>FAQs</li> */}
                                <a className='nav-link-des' href={"/privacy-policy"}>
                                    <li className='footerfont-p'>Privacy Policy</li>
                                </a>
                                <a className='nav-link-des' href="/terms">
                                    <li className='footerfont-p'>Terms and Conditions
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div className='col-4 text-center'>
                            <p>VMetrics Solutions Private Limited:
                                103/A, Rishabh CHS LTD, Jai Ambe Mata Mandir Road, Bhayander West, Thane 401101, Maharashtra, India
                            </p>
                        </div>
                        {socials ? <div className="col-4 text-center">
                            <h5 className='footerfont-p g-bold g-p-lh m-0'>Follow Us</h5>
                            <a href={`${socials.facebook}`} target='__blank'>
                                <i className="fa fa-facebook-f mx-1"></i>
                            </a>
                            {/* <a href={`${socials.instagram}`} target='__blank'>
                                <i className="fa fa-instagram mx-1"></i>
                            </a> */}
                            <a href={`${socials.twitter}`} target='__blank'>
                                <i className="fa fa-twitter mx-1"></i>
                            </a>
                            <a href={`${socials.youtube}`} target='__blank'>
                                <i className="fa fa-youtube-play mx-1"></i>
                            </a>
                        </div> : null}
                    </div>
                </div>
                <div className="copyrightsec text-center pt-5">
                All rights reserved in favour of VMetrics Solutions Pvt. Ltd.
                </div>
                <div className="copyrightsec text-center"><p className='m-0 pb-3 footerfont-p g-bold'>&#169; {date.getFullYear()-1} - {date.getFullYear()} GetOnRoadPrice.com</p></div>
            </div>
        </>
    )
}

export default NewFooter
