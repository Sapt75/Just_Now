import React, { useEffect, useState } from 'react';
import './Home Page/HomePage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// import Brand1 from './images/Brand Logos/brand-1.png';
// import Brand2 from './images/Brand Logos/brand-2.png';
// import Brand3 from './images/Brand Logos/brand-3.png';
// import Brand4 from './images/Brand Logos/brand-4.png';
// import Brand5 from './images/Brand Logos/brand-5.png';
// import Brand6 from './images/Brand Logos/brand-6.png';
// import Brand7 from './images/Brand Logos/brand-7.png';
// import Brand8 from './images/Brand Logos/brand-8.png';
// import Brand9 from './images/Brand Logos/brand-9.png';
// import Brand10 from './images/Brand Logos/brand-10.png';
// import Brand11 from './images/Brand Logos/brand-11.png';
// import Brand12 from './images/Brand Logos/brand-12.png';
// import Brand13 from './images/Brand Logos/brand-13.png';
// import Brand14 from './images/Brand Logos/brand-14.png';
// import Brand15 from './images/Brand Logos/brand-15.png';
// import Brand16 from './images/Brand Logos/brand-16.png';
// import Brand17 from './images/Brand Logos/brand-17.png';
// import Brand18 from './images/Brand Logos/brand-1.png';
// import Brand19 from './images/Brand Logos/brand-19.png';
import MostSearchedCars from './MostSearchedCars';
import TestMain from './TestFolder/TestMain';
import TestPrice from './TestFolder/TestPrice';
import TestBody from './TestFolder/TestBody';
import TestFuel from './TestFolder/TestFuel';
import TestTransmission from './TestFolder/TestTransmission';
import TestSeat from './TestFolder/TestSeat';
import LocationPopup from './LocationPopup/LocationPopup';
import Inputpop from './InputPopup/inputpop';
import locationContext from '../context/LocationContext';







// import Brand1 from './images/brand1.jpg';
// import Banner from './images/banner1.jpg';

function HomePage() {

    const [show, setShow] = useState([])
    const [banner, setBanner] = useState()
    const [advert, setAdvert] = useState({
        image: "https://ik.imagekit.io/GORP/Home/Advertisement/Advertisement.jpg?updatedAt=1694068375969",
        link: "",
        status: true
    })


    const context = React.useContext(locationContext)

    let { showInp, setShowInp } = context

    async function handleInput(e) {
        let data = await fetch(`/car-search/${e.target.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        res.unshift(`All ${res[0].brand} Cars`)
        console.log(res)
        setShow(res)
    }

    async function getBanner() {
        let data = await fetch("/get_home/Banner", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await data.json()
        let date = Date.parse(res[0].updatedAt)
        setBanner(`https://ik.imagekit.io/GORP/Home/Banner/Banner.jpg?updatedAt=${date}`)

    }

    async function getAdvertisement() {
        let data = await fetch(`/advertisement`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let adv = await fetch(`/get_home/Advertisement`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        let ress = await adv.json()

        let time = Date.parse(ress[0].updatedAt)

        setAdvert({
            image: `https://ik.imagekit.io/GORP/Home/Advertisement/Advertisement.jpg?updatedAt=${time}`,
            link: res[0].advertisement_link,
            status: res[0].status
        })
    }

    useEffect(() => {
        getBanner()
        getAdvertisement()
    }, [])



    return (
        <>
            <div className="banner" id="banner">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner banner">
                        <div style={{ backgroundImage: `url(${banner})` }} className="carousel-item active item-bg bkg-banner">
                            {/* <img className="d-block w-100 h-100" src={Banner} alt="banner"/> */}
                            <div className="carousel-content container banner-info bi-2 bi-3">
                                <div className="text-center banner-text-sec">
                                    <h2 className='h2-font-banner wt-txt-color'>Get<span>OnRoad</span>Price</h2>
                                    <h2 className='h2-font-banner-d wt-txt-color'>Get<span>OnRoadPrice</span>Here</h2>
                                    <h2 className='banner-secondtext'><br />of your Dream Car</h2>
                                    <div className="input-group pt-3">
                                        {window.innerWidth > 600 ? <div style={{ width: "50%" }}>
                                            <input onChange={handleInput} type="search" id="form1" placeholder='Type your car name' className="form-control banner-search-form banner-search-input-field text-dark text-center rounded-0" />
                                            <ul className={`${show.length <= 0 ? "d-none" : "null"} search-list bg-white pt-1`}>
                                                {show.length > 0 ? show.map((element) => {
                                                    if (typeof (element) !== "string") {
                                                        return (<Link to={`/new-cars/${element.brand.toLowerCase().split(" ").join("-")}/${element.model_name.toLowerCase().split(" ").join("-")}`} >
                                                            <li>{element.brand}&nbsp;{element.model_name}</li>
                                                        </Link>)
                                                    } else {
                                                        return (<Link to={`/new-cars/${element.split(" ")[1].toLowerCase()}`} >
                                                            <li>{element}</li>
                                                        </Link>)
                                                    }

                                                }) : null}
                                            </ul>

                                            {/* <label className="form-label" for="form1">Type your car name</label> */}
                                        </div> : <div style={{ paddingTop: "1rem" }}>
                                            <input onClick={() => setShowInp(true)} type="search" id="form1" placeholder='Type your car name' className="form-control banner-search-form banner-search-input-field text-dark text-center rounded-0" />
                                            <Inputpop />
                                        </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertisement section */}
            <div className={`container ${advert.status ? null : "d-none"}`}>
                <a href={`${advert ? advert.link : null}`}>
                    <div style={{ backgroundImage: `url(${advert ? advert.image : null})`, backgroundPosition: "center" }} className="advertisement-sec">
                        <p>Advertisement</p>
                    </div>
                </a>
            </div>

            {/* Find the car for your choice section */}
            <div className="featured-car content-area slide-box-2">
                <div className="container text-center py-5">
                    <div className="main-title pb-3">
                        <h1 className='h3-font-size h1-phone'>Find the cars of your choice</h1>
                    </div>


                    <div className="faq-box">
                        <div className="faq-info">
                            <ul className="nav nav-tabs border-0 mb-4" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="brand-tab" data-bs-toggle="tab" data-bs-target="#brand" type="button" role="tab" aria-controls="brand" aria-selected="true">By Brand</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="budget-tab" data-bs-toggle="tab" data-bs-target="#budget" type="button" role="tab" aria-controls="budget" aria-selected="false">Budget</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="body-tab" data-bs-toggle="tab" data-bs-target="#body" type="button" role="tab" aria-controls="body" aria-selected="false">Body Type</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="fuel-tab" data-bs-toggle="tab" data-bs-target="#fuel" type="button" role="tab" aria-controls="fuel" aria-selected="false">Fuel Type</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="transmission-tab" data-bs-toggle="tab" data-bs-target="#trasmission" type="button" role="tab" aria-controls="trasmission" aria-selected="false">Trasmission</button>
                                </li>
                                {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="seating-tab" data-bs-toggle="tab" data-bs-target="#seating" type="button" role="tab" aria-controls="seating" aria-selected="false">Seating Capacity</button>
                                </li> */}
                            </ul>
                            <div className="tab-content" id="myTabContent2">
                                <div className="tab-pane fade show active" id="brand" role="tabpanel" aria-labelledby="brand-tab">
                                    <div className="row p-3">
                                        <TestMain />
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="budget" role="tabpanel" aria-labelledby="budget-tab">
                                    <TestPrice />
                                </div>
                                <div className="tab-pane fade" id="body" role="tabpanel" aria-labelledby="body-tab">
                                    <TestBody status={false} />
                                </div>
                                <div className="tab-pane fade" id="fuel" role="tabpanel" aria-labelledby="fuel-tab">
                                    <TestFuel />
                                </div>
                                <div className="tab-pane fade" id="trasmission" role="tabpanel" aria-labelledby="transmission-tab">
                                    <TestTransmission />
                                </div>
                                <div className="tab-pane fade" id="seating" role="tabpanel" aria-labelledby="seating-tab">
                                    <TestSeat />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <MostSearchedCars /> */}
        </>
    )
}

export default HomePage