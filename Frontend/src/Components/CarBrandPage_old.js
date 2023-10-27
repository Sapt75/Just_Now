import React from 'react';
import { useNavigate } from "react-router-dom";
import BasicDropdownBrand from './DropDownBrand';
import car1 from './images/HyundaiCarModels/creta.png';
import car2 from './images/HyundaiCarModels/venue.png';
import car3 from './images/HyundaiCarModels/i20.png';
import car4 from './images/HyundaiCarModels/verna.png';
import car5 from './images/HyundaiCarModels/tucsan.png';
import car6 from './images/HyundaiCarModels/alcazar.png';
// import LocationIcon from './images/icons/locationicon 2.ico';


function CarBrandPage() {
    let navigate = useNavigate(); 
    const getonroadpricebtn = () =>{ 
    let path = `/lead-generating-form`; 
    navigate(path);
  }
  return (
    <>
    {/* Banner */}
        {/* <div className="sub-banner">
            <div className="container breadcrumb-area">
                <div className="breadcrumb-areas">
                    <h1>Hyundai Cars</h1>
                    <ul className="breadcrumbs">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Hyundai Cars</li>
                    </ul>
                </div>
            </div>
        </div> */}
    {/* Banner */}

    {/* Brand Name and Description  */}
    <div className="my-3">
        <div className="container">
            <div className="brand-main-title text-l mb-0">
                {/* <h1 className="mb-0">Hyundai <span className='global-text-color h3-font-size'>Cars</span></h1> */}
                <h1 className="mb-0 brand-car-title g-h3">Hyundai Cars</h1>
                <div className="ratings days top-review">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span>(3.7/5)</span>
                </div>
                {/* <p className="mb-3">Hyundai car price starts at Rs 4.89 Lakh for the cheapest model which is Santro and the price of most expensive model, which is Tucson starts at Rs 27.70 Lakh. Hyundai offers 12 car models in India, including 4 cars in SUV category, 1 car in Sedan category, 4 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category. Hyundai has 4 upcoming cars in India, New Verna, Creta Facelift, Ioniq 5 and New Kona.</p> */}
                <p className="mt-2">There are a total of 12 Hyundai models currently on sale in india. These include 4 Hatchbaks, 2 Sedans and 6 SUVs. Hyundai has 11 upcoming car lounches in India - the IONIQ 5, Alcazar 2023, Kona Electric 2022, Nexo, Stargazer, Ioniq, Santa Fe 2022, Staria, Verna 2023, Palisade, Creta 2023.<div className='d-inline'><button className='text-end g-read-more-btn'>Read More</button></div> </p>
            </div>
        </div>
    </div>
    {/* Brand Name and Description Ends */}
    <div className="featured-car content-area pb-5">
    <div className="container">
        {/* Option bar start */}
        <div className="option-bar clearfix">
            <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 change-brand-sec">
                    <div className="sorting-options2">
                        <h5>Change Brand</h5>
                    </div>
                    <BasicDropdownBrand/>
                    <div className="sorting-options-3 d-none">
                        <div className="dropdown bootstrap-select search-fields">
                            {/* <select className="selectpicker search-fields" name="default-order">
                                <option>Hyundai</option>
                                <option>Audi</option>
                                <option>Aston Martin</option>
                                <option>BMW</option>
                                <option>Honda</option>
                            </select> */}
                            {/* <button type="button" tabIndex="-1" className="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Hyundai">
                                <div className="filter-option">
                                    <div className="filter-option-inner">
                                        <div className="filter-option-inner-inner">Hyundai</div>
                                    </div> 
                                </div>
                            </button> */}
                            <div className="dropdown-menu ">
                                <div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1">
                                    <ul className="dropdown-menu inner show" role="presentation"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12">
                    
                </div>
            </div>
        </div>
        <div className="row mx-1">
            <div className="brand-head-text">
                <h2 className='py-2'>Hyudai Car Models</h2>
            </div>
           {/* Car box 1 start */}
        <div className="car-box-2 cb-4 car-box-full pb-3 p-0 mb-1">
            <div className="row g-0 bg-white imgdetailbox px-2">
                <div className="col-lg-4 col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car1} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7 align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai Creta</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                {/* <img src={LocationIcon} alt="locationicon" /> */}
                                {/* <i class="fa fa-map-marker">Locate Dealer Near You</i> */}
                                {/* <i className="flaticon-pin1"></i> Locate Dealer Near You */}
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                       <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" onClick={getonroadpricebtn} className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
           {/* Car box 2 start */}
           <div className="car-box-2 cb-4 car-box-full px-0 py-3 mb-1 gray-color-background-phone">
            <div className="row g-0 imgdetailbox px-2">
                <div className="col-lg-4 col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car2} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7  align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai Venue</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                        <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
            {/* Car box 3 start */}
            <div className="car-box-2 cb-4 car-box-full px-0 py-3 mb-1 gray-color-background-phone">
            <div className="row g-0 imgdetailbox px-2">
                <div className="col-lg-4 col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car3} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7 align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai i20</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                        <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
            {/* Car box 4 start */}
            <div className="car-box-2 cb-4 car-box-full px-0 py-3 mb-1 gray-color-background-phone">
            <div className="row g-0 imgdetailbox px-2">
                <div className="col-lg-4 col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car4} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7  align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai Verna</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                        <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
            {/* Car box 5 start */}
            <div className="car-box-2 cb-4 car-box-full px-0 py-3 mb-1 gray-color-background-phone">
            <div className="row g-0 imgdetailbox px-2">
                <div className="col-lg-4  col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car5} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7  align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai Tucson</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                        <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
            {/* Car box 6 start */}
            <div className="car-box-2 cb-4 car-box-full px-0 py-3 mb-1 gray-color-background-phone">
            <div className="row g-0 imgdetailbox px-2">
                <div className="col-lg-4  col-6">
                    <div className="photo-thumbnail">
                        <div className="photo">
                            <img className="d-block w-100" src={car6} alt="car"/>
                            {/* <a href="/">
                                <span className="blog-one__plus"></span>
                            </a> */}
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-7  align-self-center col-6">
                    <div className="detail">
                        <h3 className="title mb-0">
                            <a href="/">Hyundai Alcazar</a>
                        </h3>
                        <div className="price-box">
                            <span>Rs.10.44 Lakh*<p>(Ex Showroom)</p></span>
                        </div>
                        <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div>
                        <div className="facilities-list clearfix p-0 m-0">
                            <div className="facilities-list-in">
                                <p className='p-0 m-0'>Disel/Petrol<br/>
                                Manual/Automatic
                                </p>
                            </div>
                        </div>
                        <div className="location">
                            <a href="/">
                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                            </a>
                        </div>
                        <div className="getonroadpricebtn display-none-phone">
                        <buttton className="g-link-button-d g-underline">GetOnRoadPrice</buttton>
                       </div>
                    </div>
                </div>
            </div>
            <div className="form-group mb-0 display-none-desktop">
                <button type="button" className="btn btn-primary btn-4 btn-lg">Get onroad price</button>
            </div>
        </div>
        </div>
        </div>
        {/* Page navigation start */}
        {/* <div className="pagination-box text-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="/"><i className="fa fa-angle-left"></i></a>
                    </li>
                    <li className="page-item"><a className="page-link active" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/"><i className="fa fa-angle-right"></i></a>
                    </li>
                </ul>
            </nav>
        </div> */}
    </div>
    <div className="container global-theme-color display-none-desktop">
        <div className="locatedealer-sec text-center d-flex justify-content-around p-2">
            <div className="textlocatedealer d-inline">
                <p>Locate Dealer</p>
            </div>
            <div className="searchlocatedealer d-inline">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm border-0 g-p-13" placeholder="Enter your Pin Code"/>
                        <button type="submit" className="searchButton px-3 border-0 g-p-13">GO
                            {/* <i className="fa fa-search"></i> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default CarBrandPage
