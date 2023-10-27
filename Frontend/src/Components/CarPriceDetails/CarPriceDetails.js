import React from 'react';
import variantimg1 from '../images/CarVariants/1.png';
import EditPen from '../images/icons/editpen.png';
import './CarPriceDetails.css'
import PriceTab from './PriceTab';
import variantimg2 from '../images/CarVariants/breeza.png';
import variantimg3 from '../images/CarVariants/creta.png';
import variantimg4 from '../images/CarVariants/sonet.png';

function CarPriceDetails() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="price-detail-title-price-image">
        <div className="title-text display-none-phone">
            <div className="text-box mt-3">
              <h3 className='g-h3'>On Road Price of Hyundai Venue in Bangalore</h3>
              <p>Hyundai Venue price in Bangalore start at Rs. 7.53 Lakh. The lowest price model is Hyundai Venue E and the most priced model of Hyundai Venue SX Opt Turbo DCT DT priced at Rs. 12.72 Lakh. Used Hyundai Venue in Bangalore available for sale at Rs.7.51 Lakh onwords. Visit your nearest Hyundai Venue Showroom in Bangalore for</p>
            </div>
          </div>
          <div className="price-title-image-box">
            <div className="price-title-box col-md-6 col-12">
                    <div className="card-box my-5">
                        <div className="car-name-for-phone">
                            <h3 className="g-h3 ">Hundai Venue E 1.2 Petrol</h3>
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
                                {/* <button className='g-link-button-new g-underline display-none-desktop'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button> */}
                            </div>
                            <button className='link-button g-underline'>Locate Dealer Near You</button>
                        </div>
                    </div>
            </div>
            <div className="image-box">
            {/* car variant image  */}
            <div className="">
                  <div className="carimagebox ">
                      <div className="carimage text-center">
                          <img className='image-width-80' src={variantimg1} alt="variant-img"/>
                      </div>
                  </div>
            </div>
            </div>
          </div>
          <div className="title-text display-none-desktop">
            <div className="text-box">
              <h3 className='g-h3'>On Road Price of Hyundai Venue in Bangalore</h3>
              <p>Hyundai Venue price in Bangalore start at Rs. 7.53 Lakh. The lowest price model is Hyundai Venue E and the most priced model of Hyundai Venue SX Opt Turbo DCT DT priced at Rs. 12.72 Lakh. Used Hyundai Venue in Bangalore available for sale at Rs.7.51 Lakh onwords. Visit your nearest Hyundai Venue Showroom in Bangalore for</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="price-details">
          <h3 className="g-h3">Hyundai Venue On Road Price in Bangalore </h3>
          <button className="g-link g-underline"><img className='image-20' src={EditPen} alt="edit" />Change City</button>
          <button className='g-link g-underline'>Locate Dealer Near You</button>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="price-tab gap-2 d-flex my-3">
          <button className='blue-background-btn border-0'>View All</button>
          <button className='blue-background-btn border-1'>Diesel</button>
          <button className='blue-background-btn border-1'>Petrol</button>
        </div>
        <div className="price-tab-details my-3">
          <PriceTab/>
          <div className="viewallbtn">
            <div className="d-flex justify-content-center mt-3">
              <button className='g-link-button-d g-underline'>Show All Variants</button>
            </div>
          </div>
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

export default CarPriceDetails
