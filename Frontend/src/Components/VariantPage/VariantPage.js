import React from 'react';


import '../VariantPage/VariantPage.css';
import Pricetag from '../images/icons/tag.png';
import variantimg1 from '../images/CarVariants/1.png';
import GTick from '../images/icons/g-tick.png';
import variantimg2 from '../images/CarVariants/breeza.png';
import variantimg3 from '../images/CarVariants/creta.png';
import variantimg4 from '../images/CarVariants/sonet.png';

import VenueVariants from './HyundaiVenueVariants/VenueVariants';

import Specifications from './Specifications/Specifications';
import Features from './Features/Features';
import offericon from '../images/icons/offer.png';
import VariantsTab from './VariantsTab';
import Others from './Others/Others';

function VariantPage() {
  return (
    <>
    <div className="container desktop-page-width-60 image-title-varient-sec">
        <div className="title-variant-box col-md-6">
        <div className="title-price-box">
            <div className="row">
                <div className="new">
                    <div className="card-box">
                        <div className="car-name-for-phone">
                            <h3 className="g-h3 mt-4">Hundai Venue E 1.2 Petrol</h3>
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
                                <button className='g-link-button-new g-underline display-none-desktop'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                            </div>
                            <button className='g-link-button g-underline display-none-desktop'>View Price Breakup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* change car variant */}
        <div className="variant-box">
            <div className="option-bar clearfix">
                <div className="row change-variant-sec">
                    <div className="col-sm-12 dropdown-variant">
                        <div className="sorting-options2 ">
                            <h5>Change Variant</h5>
                        </div>
                        <VenueVariants/>
                    </div>
                </div>
            </div>
        </div>
        <button className='g-link-button g-underline display-none-phone'>View Price Breakup</button>
        </div>

        {/* car variant image  */}
        <div className="col-md-6">
            <div className="carimagebox ">
                <div className="carimage text-center">
                    <img className='w-75' src={variantimg1} alt="" />
                </div>
            </div>
        </div>
    </div>

        {/* car varient Details  */}
        <div className="container desktop-page-width-60">
            <div className="descriptionbox">
                <div className="descriptiontitle">
                    <h3 className="g-h3">Hyundai Venue E 1.2 Petrol Summary</h3>
                </div>
                <div className="discription my-3">
                    <p className='g-p'>Hyundai Venue E 1.2 Petrol is the petrol variant in the Hyundai Venue linup and is priced at ₹ 9.17 Lakh. It returs a certified mileage of 17.5 Kmpl. This E 1.2 Petrol variant comes with an engine putting out 82 bhp @ 6000 rpm and 113.8 Nm @ 4000 rpm of max power and max torque respectively. Hyundai Venue E 1.2 Petrol is available in Manual transmission and <a className='g-read-more-btn mx-2' href="/">Read More</a></p>
                </div>
            </div>
        </div>
        <div className="container desktop-page-width-60">
            <div className="variant-spacs-ftrs">
                <div className="variantspacs my-4">
                    <div className="specstitle my-2">
                        <h3 className="g-h3">Key Specifications of Hyundai Venue E 1.2 Petrol</h3>
                    </div>
                    <div className="specsdetails my-2">
                        <table className="table">
                            <tbody className='specs-table-box'>
                                <tr className='gray-background'>
                                <td className='width-70'>ARAI Mileage</td>
                                <td className='text-start'>24.12 kmpl
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>City Mileage</td>
                                <td className='text-start'>19.0 kmpl
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Fuel Type</td>
                                <td className='text-start'>Petrol
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Engine Displacement (cc)</td>
                                <td className='text-start'>1197
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>No. of cylinder</td>
                                <td className='text-start'>4
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Max Power (bhp@rpm)</td>
                                <td className='text-start'>88.50bhp @6000rpm 
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Max Torque (nm@rpm)</td>
                                <td className='text-start'>113Nm @4400rpm
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Seating Capacity</td>
                                <td className='text-start'>5
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>TransmissionType</td>
                                <td className='text-start'>Automatic
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Boot Space(Litres)</td>
                                <td className='text-start'>378
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Fuel Tank Capacity</td>
                                <td className='text-start'>37.0
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Boot Type</td>
                                <td className='text-start'>Sedan
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Service Cost (Avg. of 5 years)</td>
                                <td className='text-start'>₹ 3,546
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="keyftrs my-4">
                    <div className="ftrstitle my-2">
                        <h3 className="g-h3">Key Features of Hyundai Venue E 1.2</h3> 
                    </div>
                    <div className="ftrsdetails">
                        <table className="table">
                            <tbody className='specs-table-box'> 
                                <tr className='gray-background'>
                                <td className='width-70'>Power Steering</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Power Windows Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Anti Lock Braking System</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Air Conditioner (cc)</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Driver Airbag</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Automatic Climate Control</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='gray-background'>
                                <td className='width-70'>Fog Lights - Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                                <tr className='light-gray-background'>
                                <td className='width-70'>Alloy Wheels</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="container desktop-page-width-60 mt-5">
            <div className="specs-ftrs-dlrs-box ">
                <div className="tabs-specs-ftrs-dlrs mx-4 my-4">
                    <ul className="specs-ftrs-dlrs d-flex justify-content-between">
                        <li> <a className='specs-tab' href="#specifications">Specification</a></li>
                        <li><a className='ftrs-tab' href="#features">Features</a></li>
                        <li>Dealers</li>
                    </ul>
                </div>
                <div className="specsdetails">
                    <h3 className="g-h3 my-2" id='specifications'>Specifications</h3>
                    <div className='my-1'><Specifications/></div>
                </div>
                <div className="ftrsdetails mt-4">
                    <h3 className="g-h3 my-2" id='features'>Features</h3>
                    <div className="my-1"><Features/></div>
                </div>
                <div className="ftrsdetails mt-4">
                    <h3 className="g-h3 my-2" id='features'>Features</h3>
                    <div className="my-1"><Others/></div>
                </div>
                <div className="dlrsdetails"></div>
            </div>
        </div>
        <div className="container desktop-page-width-60 car-def-varients mt-5">
        <h3 className='g-bold'>Variants</h3>
        <VariantsTab/>
        <table className="table varients-table var-table-page">
          <tbody>
          <tr className=' varients-firstrow'>
              <td className='table-row-55'>
              </td>
              <td className='table-row-10'><p className='fuleicon'> </p>
              
              </td>
              <td className='phone-text-aling'><strong className='g-bold'> Price (onwords)</strong>
              </td>
            </tr>
            <tr className=' varients-firstrow gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0'>Venue E 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}
              
              </td>
              <td className=' border-0 table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh</p>
              <button className='g-link-button'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0'>Venue S 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className=' border-0 table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 10.63 Lakh</p>
              <button className='g-link-button'>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-thirdrow gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Petrol <br />1197 cc, Petrol, Manual, 17</p>
              
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
                {/* <p className='seaticon '> <img src={offericon} alt="seaticon" /></p> */}
              
              </td>
              <td className=' border-0 table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 11.58 Lakh</p>
              <button className='g-link-button '>Get OnRoad Price</button>
              </td>
            </tr>
            <tr className=' varients-secondrow light-gray-background'>
              <td className='table-row-40 mb-0 mt-3'><p className='car-varient-name'>Venue S(O) 1.2 Turbo IMT <br />998 cc, Petrol, Clutchless Ma</p>
              
              </td>
              <td className='table-row-10'><p className='fuletypeicon'> </p>
              
              </td>
              <td className=' border-0 table-com-col'><p className='fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 12.10 Lakh</p>
              <button className='g-link-button'>Get OnRoad Price</button>
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
      <div className="container desktop-page-width-60 mb-5">
        <h3 className='g-h3 my-2'>Similar Cars</h3>
        <div className='d-flex justify-content-between'>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg2} alt="car1" />
            <h5 className='g-box-text'>Maruti Brezza Lxi <br/>Rs.7.99 Lakh*</h5>
            <button  className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg3} alt="car1" />
            <h5 className='g-box-text'>Hyundai Creta E <br/>Rs.10.44 Lakh*</h5>
            <button  className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
        <div className="col-3 m-1 s-car-box">
            <img className='w-100' src={variantimg4} alt="car1" />
            <h5 className='g-box-text'>Kia Sonet 1.2 HTE <br/>Rs.7.49 Lakh*</h5>
            <button className='g-h5 bg-white border w-100'>Compare Cars</button>
            <button className='g-h5 g-button border w-100'>View On Road Price</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default VariantPage
