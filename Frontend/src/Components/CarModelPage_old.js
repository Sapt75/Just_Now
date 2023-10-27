import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import '../css/CarModelPage.css';
import Pricetag from './images/icons/tag.png';
import engineicon from './images/icons/engine.png';
import Fuletypeicon from './images/icons/fuletypeicon.png';
import Transmissionicon from './images/icons/transmissionicon.png';
import seaticon from './images/icons/seaticon.png';
import fuleicon from './images/icons/fuleicon.png';
import ImageSlider from './SingleProductImageSlider/ImageSlider';
import offericon from './images/icons/offer.png';
import carcolor1 from './images/carcolors/carcolour1.png';
import Thumbsup from './images/icons/thumbsup.png';
import Thumbsdown from './images/icons/thumbsdown.png';
import PopupLeadForm from './PopupLeadForm/PopupLeadForm';
import VariantsTab from './VariantPage/VariantsTab';
// import Tick from './images/icons/tick.png';


// import './ProductImageSlider'


function CarModelPage() {



  return (
    <>
    <div className="specstab">
    <div className="container">
        <div className="tabs-for-cars-info d-flex">
            <ul className="d-flex W-100">
                <li><a href="#cars-overview-sec">Overview</a> </li>
                <li><a href="#car-def-varients-price">Variants</a></li>
                <li><a href="#view-car-colors">Colours</a></li>
                <li><a href="#cars-mileage-sec">Mileage</a></li>
                <li><a href="/">Dealers</a></li>
            </ul>
        </div>
    </div>
    </div>
    <div className="container image-price-title-sec">
      <div className="image-title-price-review">
        <div className="row image-title-price-box">
          <div className="new">
            <div className="card-box">
            <div className="car-name-for-phone">
                    <h3 className="g-h3">Hundai Venue</h3>
                    <div className="ratings days top-review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <span>(3.7/5)</span>
                    </div>
                    <div className="price-of-car-for-phone">
                        <h4 className="one-price-of-car d-inline  g-h4">Rs.9.41 - 15.45 Lakh*</h4>
                        <span className="tag-price d-inline">(Ex Showroom Price)</span>
                        <button className='g-link-button g-underline g-bold display-none-desktop'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                    </div>
                        <button className='g-link-button g-underline'>View Price Breakup</button>
                </div>
                <div className="display-none-phone">
                  <div className="desktop-gop-btn">
                    <button className='g-button border-0 py-2'><img src={Pricetag} alt="pricetag" />GetOnRoadPrice <span className='g-p10'>in your city</span></button>
                    
                  </div>
                  <div className="desplay-none-phone my-2">
                  <button className='g-link-button g-underline text-dark'>Locate Delear Near You</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="imageslider " id='cars-overview-sec'>
        <ImageSlider />
      </div>
    </div>
      {/* <div className="prductimageslider" id='prductimageslider'>
      </div> */}
      <div className="container global-theme-color desktop-page-width-60">
        <div className="locatedealer-sec text-center d-flex justify-content-around p-2">
            <div className="textlocatedealer d-inline">
                <p>Locate Dealer</p>
            </div>
            <div className="searchlocatedealer d-inline">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Enter your Pin Code"/>
                        <button type="submit" className="searchButton px-3">GO
                            {/* <i className="fa fa-search"></i> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container advertisement-box desktop-page-width-60"><div className="advertisement-sec"><p>Advertisement(optional)</p></div></div>
    <div className="container getonroadpricebutton my-2 desktop-page-width-60">
    <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container col-md-6 p-4 desktop-page-width-60">
        <h3 className='g-bold'>Hyundai Venue Key Specifications</h3>
        <p className="about">Hyundai Venue Preice: The Hyundai Venue is priced from Rs 7.53 Lakh to Rs 12.72 Lakh (ex-showroom). Hyundai Venue Variants: Hyundai offers its sub-4m SUV in five trim options:E, S, S+/S(0), SX, and SX(O). Hyundai Venue Seating Capacity: The facelifted Venue is a five-Seater.</p>
      </div>
      <div className="container desktop-page-width-60">
        <div className="row m-auto w-100">
          <div className="col-6 inner-width-sm gray-background">
            <div className="innerbox">
            <p className='pricetagicon m-0'> <img src={Pricetag} alt="pricetagicon" />Price</p>
            <h5 className='g-bold g-p-13'>₹ 9.20 Lakh onwords</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-1">
            <div className="innerbox">
            <p className='fuleicon m-0'> <img src={fuleicon} alt="fuleicon" />Mileage</p>
            <h5 className='g-bold g-p-13'>17.5 to 23.4 kmpl</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-2">
            <div className="innerbox ">
            <p className='engineicon m-0'> <img src={engineicon} alt="engineicon" />Engine</p>
            <h5 className='g-bold g-p-13'>998 to 1493 cc</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm light-gray-background">
            <div className="innerbox">
            <p className='fuletypeicon m-0'> <img src={Fuletypeicon} alt="fuletypeicon" />Fuel Type</p>
            <h5 className='g-bold g-p-13'>Petrol & Diesel</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex gray-background">
            <div className="innerbox">
            <p className='transmissionicon m-0'> <img src={Transmissionicon} alt="transmissionicon" />Transmission</p>
            <h5 className='g-bold g-p-13'>Manual, Clutchless, Manual & Automatic (DTC)</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex background-color-1">
            <div className="innerbox">
            <p className='seaticon m-0'> <img src={seaticon} alt="seaticon" />Seating Capacity</p>
            <h5 className='g-bold g-p-13'>5 Seater</h5>
            </div>
          </div>
        </div>
        {/* <table className="table key-specs-table">
          <tbody>
            <tr className='key-specs-firstrow gray-background'>
              <td className='p-3'><p className='pricetagicon m-0'> <img src={Pricetag} alt="pricetagicon" />Price</p>
              <h5 className='g-bold'>₹ 9.20 Lakh onwords</h5>
              </td>
              <td className='ps-5 pt-3'><p className='fuleicon m-0'> <img src={fuleicon} alt="fuleicon" /></p>
              <h5 className='g-bold'>17.5 to 23.4 kmpl</h5>
              </td>
            </tr>
            <tr className='key-specs-secondtrow light-gray-background'>
              <td className='p-3 ' ><p className='engineicon m-0'> <img src={engineicon} alt="engineicon" />Engine</p>
              <h5 className='g-bold'>998 to 1493 cc</h5>
              </td>
              <td className='ps-5 pt-3'><p className='fuletypeicon m-0'> <img src={Fuletypeicon} alt="fuletypeicon" />Fuel Type</p>
              <h5 className='g-bold'>Petrol & Diesel</h5>
              </td>
            </tr>
            <tr className='key-specs-thirdrow gray-background'>
              <td className='p-3'><p className='transmissionicon m-0'> <img src={Transmissionicon} alt="transmissionicon" />Transmission</p>
              <h5 className='g-bold'>Manual, Clutchless, Manual & Automatic (DTC)</h5>
              </td>
              <td className='ps-5 pt-3'><p className='seaticon m-0'> <img src={seaticon} alt="seaticon" />Seating Capacity</p>
              <h5 className='g-bold'>5 Seater</h5>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
      <div className="container car-def-varients mt-5 desktop-page-width-60" id='car-def-varients-price'>
        <h3 className='g-bold'>Variants</h3>
        <VariantsTab/>
        {/* <div className="car-def-varients-btn">
          <button className="primary varients-btn tab-button-varients border-1 ">View All</button>
            <button className="primary varients-btn tab-button-varients border-1 mx-1">Manual</button>
          <button className="primary varients-btn tab-button-varients border-1 m-1">Automatic</button>
        </div>
        <div className="varient-details">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div> */}
        <table className="table varients-table">
          <tbody>
          <tr className=' varients-firstrow'>
              <td className='table-row-55'>
              </td>
              <td className='table-row-10'><p className='fuleicon'> </p>
              </td>
              <td><strong className='g-bold'> Price (onwords)</strong>
              </td>
            </tr>
            <tr className=' varients-firstrow gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0 mt-3'>Venue E 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}
              
              </td>
              <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0 mt-3'>Venue S 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 10.63 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-thirdrow gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Petrol <br />1197 cc, Petrol, Manual, 17</p>
              
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                {/* <p className='seaticon '> <img src={offericon} alt="seaticon" /></p> */}
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 11.58 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Turbo IMT <br />998 cc, Petrol, Clutchless Ma</p>
              
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className='table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 12.10 Lakh</p>
              <button className='g-link-button g-underline text-start'>Get OnRoad Price</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="showallbtn-sec">
          <div className="showallbtn text-center">
            <button className='g-link-button g-underline'>Show All Varaints</button>
          </div>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
      <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container desktop-page-width-60" id='view-car-colors'>
        <div className="colorstitle">
          <div className="colors">
            <h3 className='g-bold'>Colours</h3>
            <h4 className='g-bold mb-2'>Hyundai Venue Colours</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="colorimage border text-center py-3">
          <img className='w-75' src={carcolor1} alt="CarColorImage" />
          <div className="colourstab text-center">
          <button className='colourgray colortab-m'></button>
          <button className='coloulightblue colortab-m'></button>
          <button className='coloured colortab-m'></button>
          <button className='colorwhite border colortab-m'></button>
          <button className='colorblack colortab-m'></button>
          <button className='colortab-m'></button>
        </div>
        <p className='colourname'>Typhoon Silver</p>
        </div>
      </div>
      <div className="container my-5 desktop-page-width-60" id='cars-mileage-sec'>
        <div className="mileage">
          <div className="mileagetitle">
            <h4 className='g-bold'>Mileage</h4>
            <h4 className='g-bold'>Hyundai Venue Mileage</h4>
          </div>
          <p>Hyundai Venue mileage claimed by ARAI is 17.5 to 23.4 kmpl. The pertrol version has a mileage of 17.5 to 18.1 kmpl. The diesel Version has a mileage of 23.4 kmpl.</p>
          <div className="mileage-table">
            <table className="table">
              <tbody className='milage-table-box'>
              <tr>
                  {/* <th scope="col">#</th> */}
                  <th>Varients</th>
                  <th>Transmission</th>
                  <th>ARAI Mileage</th>
                </tr>
                <tr className='gray-background'>
                  {/* <th scope="row">1</th> */}
                  <td>Petrol (1086 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>20.30 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  {/* <th scope="row">2</th> */}
                  <td>Petrol (1197 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='gray-background'>
                  {/* <th scope="row">3</th> */}
                  <td>Diesel (1100 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  {/* <th scope="row">3</th> */}
                  <td>Diesel (1100 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container my-2 desktop-page-width-60">
        <div className="price-title">
          <h3 className='g-bold'>Price</h3>
          <h4 className='g-bold'>Hyundai Venue price in different cities</h4>
          <div className="price-subtitle">

          </div>
        </div>
        <div className="price-sec">
          <table className="table">
            <tbody className='price-table-box'>
                <tr>
                  <th className='table-row-53'>City</th>
                  <th className='text-center'>Price*(Ex-Showroom)</th>
                </tr>
                <tr className='gray-background'>
                  <td>Mumbai</td>
                  <td className='justify-center-d d-flex'>9.64L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Pune</td>
                  <td className='justify-center-d d-flex'>9.75L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Ahemdabad</td>
                  <td className='justify-center-d d-flex'>9.43L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Chennai</td>
                  <td className='justify-center-d d-flex'>9.55L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Bangalore</td>
                  <td className='justify-center-d d-flex'>9.61L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>New Delhi</td>
                  <td className='justify-center-d d-flex'>9.68L 
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='gray-background'>
                  <td>Kolkata</td>
                  <td className='justify-center-d d-flex'>9.48L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Hyderabad</td>
                  <td className='justify-center-d d-flex'>9.33L
                  <button className='price-table-btn'>Get onroad Price</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
      <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container pros-and-cons-sec mt-2 container desktop-page-width-60">
                            <div className="pros-and-cons-sec-heading">
                                <h3 className='g-bold'>Expert Tips</h3>
                            </div>
                            <div className="pros-and-cons">
                                <div className="pros-of-car">
                                    <h4 className='g-bold'><img src={Thumbsup} alt="" /> Pros</h4>
                                    <ul>
                                        <li>Qulity</li>
                                        <li>Road Presence</li>
                                        <li>Multiple Powertrain Options</li>
                                    </ul>
                                </div>
                                <div className="cons-of-car">
                                    <h4 className='g-bold'><img src={Thumbsdown} alt="" /> Cons</h4>
                                    <ul>
                                        <li>Cramped rear Seat</li>
                                        <li>Unsorted Ride Quality</li>
                                        <li>Expensive top-end Versions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
      <div className="container desktop-page-width-60">
        <div className="videos-sec">
          <h5 className='g-bold mt-5 mb-3'>Videos</h5>
          <div className="row">
          <div className="col-md-6">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/k0IqIjfVHUA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/Hx-8mVFvWOg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          </div>
          {/* <video src="https://www.youtube.com/watch?v=k0IqIjfVHUA"></video> */}
        </div>
        
      </div>
    </>
  )
}

export default CarModelPage
