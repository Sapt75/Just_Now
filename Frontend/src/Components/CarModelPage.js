import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import PriceModal from './Price_Modal/price_modal';
import PopupClone from './PopupLeadForm/Popupclone';
import PopupClone2 from './PopupLeadForm/Popupclone2';
import locationContext from '../context/LocationContext';
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
import { IKContext, IKImage } from 'imagekitio-react';



// import './ProductImageSlider'


function CarModelPage() {
  const [getmodels, setGetModels] = useState([]);
  const [versionPrice, setVersionPrice] = useState([])
  const [finalVersion, setFinalVersion] = useState([])
  const [getprices, setGetPrices] = useState([]);
  const [modelPrice, setModelPrice] = useState([])
  const [getVersion, setVersion] = useState([])
  const [tshow, setShow] = useState(false)
  const [modal, showModal] = useState(false)
  const [spec, setSpecs] = useState()
  const [read, setRead] = useState(false)
  const [city, setCity] = useState([])
  const [rcity, setRCity] = useState([])
  const [tips, setTips] = useState({
    pros: "",
    cons: ""
  })

  let [uniqueId, setUID] = useState()
  let [model_id, setModel_ID] = useState()

  const [colors, setColors] = useState([])

  const [advert, setAdvert] = useState({
    image: "https://sfondo.info/i/original/e/b/8/37366.jpg",
    link: "",
    status: true
  })

  const context = React.useContext(locationContext)

  let { location, setShowLoc, setLocation } = context

  let { brand, model } = useParams("");

  brand = brand.charAt(0).toUpperCase() + brand.slice(1)
  model = model.split("-").join(" ").charAt(0).toUpperCase() + model.split("-").join(" ").slice(1)

  console.log(brand, "", model, "");

  const loc = useLocation()

  console.log(loc.state)

  // const { uniqueId, model_id } = loc.state



  let overview = useRef(null)
  let car_va = useRef(null)
  let car_col = useRef(null)
  let car_mil = useRef(null)








  const GetData = async (e) => {
    const res = await fetch(`/getmodelnewdetails?brand=${brand}&model_name=${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setTips({
        pros: {
          __html: data[0].pros
        },
        cons: {
          __html: data[0].cons
        }
      })
      setUID(data[0].uid)
      setModel_ID(data[0].model_id)
      setGetModels(data)

      //Model Price Fetching
      let model = await fetch(`/model_prices/${data[0].model_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let response = await model.json()


      response == "No Data" ? setModelPrice([]) : setModelPrice(response)

      let version = await fetch(`/version_data/${data[0].model_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let vresponse = await version.json()
      setVersion(vresponse)
      setFinalVersion(vresponse)

      //Version Price Fetch
      let vp = await fetch(`/version_prices/${data[0].model_id}/${location}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let vpresponse = await vp.json()

      vpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vpresponse)
      // console.log("Data Fetched!");


      //City Price
      let city_p = await fetch(`/diff_prices/${data[0].uid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"

        }
      })

      let citresponse = await city_p.json()
      setCity(citresponse)


      let nomlcit = await fetch(`/norml_cities/${data[0].uid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      let nomcity = await nomlcit.json()
      setRCity(nomcity)
    }



    // const res_two = await fetch(`/pricedetail/${uniqueId}`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
    // const pricedata = await res_two.json();
    // // console.log(pricedata);
    // if (res_two.status === 422 || !pricedata) {
    //   console.log("error");
    // } else {
    //   setGetPrices(pricedata)
    //   console.log("PriceData Fetched!");
    // }
  }

  async function getAdvertisement() {
    let data = await fetch(`/model_advertisement`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await data.json()
    setAdvert({
      image: res[0].advertisement_image,
      link: res[0].advertisement_link,
      status: res[0].status
    })
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  async function getColors() {
    let data = await fetch(`/color_images/${brand}/${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()

    setColors(res)
  }



  async function getModel() {
    let specef = {
      transmission: "",
      fuel: "",
      seat: ""
    }
    let data = await fetch(`/model_car/${brand}/${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let res = await data.json()

    specef.transmission = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.transmission_type == value.transmission_type
      })
    })

    specef.fuel = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
      })
    })

    console.log(specef.fuel)
    specef.seat = res.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t.seating_capacity == value.seating_capacity
      })
    })

    setSpecs(specef)



  }


  const usenav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    usenav(`/new-car-dealers/${brand}/${model}/${e.target.pincode.value}`)
  }

  function numFormat(value) {
    const val = Math.abs(value)
    if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
    if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
    return value;
  }

  function numFormat2(value) {
    const val = Math.abs(value)
    if (val >= 10000000) return `${(value / 10000000).toFixed(2)}`
    if (val >= 100000) return `${(value / 100000).toFixed(2)}`
    return value;
  }

  let can = useLocation()




  useEffect(() => {
    GetData()
    getModel()
    getAdvertisement()
    getColors()
  }, [location]);







  return (
    <>
      <Helmet>
        <title>{brand} {model} Price, {model} Varients, Mileage & Features & Specifications | GetOnRoadPrice</title>
        <meta name="description" content={`${brand} ${model} price in India starts at ${modelPrice.length > 0 ? numFormat(modelPrice[0].min_price) : null}. Get ${brand} ${model} key specs, features, ${model} Price Breakup, mileage, color, variants Price at GetonRoadPrice  `} />
        {/* <link rel="canonical" href={Utils.getSiteUrl()} /> */}
        {/* 
        <meta property="og:type" content="Latest Cars" />
        <meta property="og:image" content="https://th.bing.com/th/id/R.764cdbd03ff0df78a4f5cf8d427ad57d?rik=7BB%2b%2f9hcgLBBDg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2ftesla_roadster_4k-HD.jpg&ehk=00%2fcHRBzZVUkWuiEdOOXMyZZs1RPNEIe9qriLTzYX6M%3d&risl=1&pid=ImgRaw&r=0" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta content={`${brand} ${model} Latest 2023`} property="og:title" />
        <meta content={`${brand} ${model}, ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere? Voluptates quod numquam nemo facere rem. Ut laudantium eveniet saepe.`} property='og:description' /> */}
      </Helmet>
      <div className="specstab mb-5">
        <div className="container">
          <div className="tabs-for-cars-info d-flex">
            <ul className="d-flex W-100">
              <li style={{ cursor: "pointer" }} onClick={() => scrollToSection(overview)}>Overview</li>
              <li style={{ cursor: "pointer" }} onClick={() => scrollToSection(car_va)}>Variants</li>
              <li style={{ cursor: "pointer" }} onClick={() => scrollToSection(car_col)}>Colours</li>
              <li style={{ cursor: "pointer" }} onClick={() => scrollToSection(car_mil)}>Mileage</li>
              <li><Link to={`/new-car-dealers/${brand.toLowerCase()}-car-dealers-${location.toLowerCase().replace(/ /g, '-')}`}>Dealers</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className='col-6'>
            <ImageSlider brand={brand} model={model} />
          </div>
          <div className='col-6'>
            <div className="new">
              <div className="card-box">
                <div className="car-name-for-phone">
                  <h3 className="g-h3">{brand} {model}</h3>
                  <div className="ratings days top-review">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                    <span>(3.7/5)</span>
                  </div>
                  <div className="price-of-car-for-phone">
                    {/* <h4 className="one-price-of-car d-inline  g-h4">Rs.{minpriceinlakh} - {maxpriceinlakh}*</h4> */}
                    <h4 className="one-price-of-car d-inline  g-h4">₹ {modelPrice.length > 0 ? `${numFormat2(modelPrice[0].min_price)} - ${numFormat(modelPrice[0].max_price)}* ` : "No Data"}</h4>
                    <span className="tag-price d-inline-flex">(Ex-Showroom Price) <br /><span onClick={() => { setShowLoc(true) }} style={{ color: 'green', cursor: "pointer" }} className='g-link-button g-underline'>
                      {location}
                    </span></span>
                    <button className='g-link-button g-underline g-bold d-none'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                  </div>
                  <Link to={`/${brand.toLowerCase()}/${model.toLowerCase().split(" ").join("-")}/price-in-${location.toLowerCase().replace(/ /g, "-")}`} className='g-link-button g-underline'>View Price Breakup</Link>
                  {/* <PriceModal id={uniqueId} /> */}
                </div>
                <div className="display-none-phone">
                  <div className="desktop-gop-btn">
                    <PopupClone brand={brand} model={model} mod_id={model_id} vers_id={uniqueId} />
                    {/* <button onClick={()=>{
                      modal ? showModal(false) : showModal(true)
                    }} className='g-button border-0 py-2'><img src={Pricetag} alt="pricetag" />GetOnRoadPrice <span className='g-p10'>in your city</span></button> */}

                  </div>
                  <div className="desplay-none-phone my-2">
                    <Link to={`/new-car-dealers/${brand.toLowerCase()}-car-dealers-${location.toLowerCase().replace(/ /g, '-')}`}>
                      <button className='g-link-button g-underline text-dark'>Locate Delear Near You</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <form onSubmit={handleSubmit}>
                  <input type="text" name='pincode' className="searchTerm" placeholder="Enter your Pin Code" />
                  <button type="submit" className="searchButton px-3">GO
                    {/* <i className="fa fa-search"></i> */}
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`container ${advert.status ? null : "d-none"} advertisement-box desktop-page-width-60`}>
        <div style={{ backgroundImage: `url(${advert ? advert.image : null})`, backgroundPosition: "center" }} className="advertisement-sec"><p>Advertisement(optional)</p></div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 g-h3'>Get On Road Price</button> */}
      </div>
      <div ref={overview} className="container p-4 desktop-page-width-60">
        <h3 className='g-bold'>{brand} {model} Key Price</h3>
        <p className="mt-2 about"><span dangerouslySetInnerHTML={{ __html: getmodels.length > 0 ? getmodels[0].model_description.slice(0, 295) + "..." : null }} className={`${read ? 'd-none' : 'd-inline ms-1'}`}>
        </span>
          <span style={{ cursor: "pointer" }} className={`${!read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
            read ? setRead(false) : setRead(true)
          }}>Read More</span>
          <span dangerouslySetInnerHTML={{ __html: getmodels.length > 0 ? getmodels[0].model_description : null }} className={`${read ? 'd-inline ms-1' : 'd-none'}`}>
          </span><span style={{ cursor: "pointer" }} className={`${read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
            read ? setRead(false) : setRead(true)
          }}>Read Less</span></p>
      </div>
      <div className="container desktop-page-width-60">
        <div className="row m-auto w-100">
          <div className="col-6 inner-width-sm gray-background">
            <div className="innerbox">
              <p className='pricetagicon m-0'> <img src={Pricetag} alt="pricetagicon" />Price</p>
              <h5 className='g-bold g-p-13'>₹ {modelPrice.length > 0 ? numFormat(modelPrice[0].min_price) : null} Onwards</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-1">
            <div className="innerbox">
              <p className='fuleicon m-0'> <img src={fuleicon} alt="fuleicon" />Mileage</p>
              <h5 className='g-bold g-p-13'>{modelPrice.length > 0 ? modelPrice[0].min_mileage + " to " + modelPrice[0].max_mileage : null} kmpl</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm background-color-2">
            <div className="innerbox ">
              <p className='engineicon m-0'> <img src={engineicon} alt="engineicon" />Engine</p>
              <h5 className='g-bold g-p-13'> {modelPrice.length > 0 ? modelPrice[0].min_engine + " to" + modelPrice[0].max_engine : null} cc</h5>
            </div>
          </div>
          <div className="col-6 inner-width-sm light-gray-background">
            <div className="innerbox">
              <p className='fuletypeicon m-0'> <img src={Fuletypeicon} alt="fuletypeicon" />Fuel Type</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.fuel.map((item, index) => {
                return index !== spec.fuel.length - 1 ? item.Specifications.engine_and_transmission.fuel_type + ", " : item.Specifications.engine_and_transmission.fuel_type
              }) : null}</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex gray-background">
            <div className="innerbox">
              <p className='transmissionicon m-0'> <img src={Transmissionicon} alt="transmissionicon" />Transmission</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.transmission.map((item, index) => {
                return index !== spec.transmission.length - 1 ? item.transmission_type + ", " : item.transmission_type
              }) : null}</h5>
            </div>
          </div>
          <div className="col-6 inner-width-ex background-color-1">
            <div className="innerbox">
              <p className='seaticon m-0'> <img src={seaticon} alt="seaticon" />Seating Capacity</p>
              <h5 className='g-bold g-p-13'>{spec ? spec.seat.map((item, index) => {
                return index !== spec.seat.length - 1 ? item.seating_capacity + ", " : item.seating_capacity
              }) : null} Seater</h5>
              {/* {spec ? console.log() : null} */}
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
      <div ref={car_va} className="container car-def-varients mt-5 desktop-page-width-60">
        <h3 className='g-bold'>{brand} {model} Variants</h3>
        <VariantsTab version={getVersion} finalversion={setFinalVersion} />
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
              <td>
                {/* <strong className='g-bold'> Price (Onwards)</strong> */}
              </td>
            </tr>
            {finalVersion.map((element, id) => {
              return versionPrice.length <= 0 ? <tr key={id} className={`${id > 5 && tshow == false ? "d-none" : null} varients-firstrow gray-background`}>
                <td className='table-row-40'><Link state={{
                  id: element.uid,
                  model: model_id,
                  car_version: element.version_name
                }} to={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                  <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.Specifications.engine_and_transmission.displacement}cc&nbsp;{element.Specifications.engine_and_transmission.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.Specifications.engine_and_transmission.city_mileage}</p>
                </Link>
                </td>
                <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}><img className='width-40' src={offericon} alt="seaticon" />
                  {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                </td>
                {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                <td className='table-com-col' colSpan={window.innerWidth <= 600 ? 2 : 1}><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.5 Lakhs*</p>
                  <PopupClone2 brand={brand} model={model} version={element.version_name} fuel={element.Specifications.engine_and_transmission.engine_type} transmission={element.transmission_type} />
                </td>
              </tr> : versionPrice ? versionPrice.map((item) => {
                if (item.Version_UID == element.uid) {
                  return (<tr key={id} className={`${id > 5 && tshow == false ? "d-none" : null} varients-firstrow gray-background`} >
                    <td className='table-row-40'><Link state={{
                      id: element.uid,
                      model: model_id,
                      car_version: element.version_name
                    }} to={`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`}>
                      <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.Specifications.engine_and_transmission.displacement}cc&nbsp;{element.Specifications.engine_and_transmission.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.Specifications.engine_and_transmission.city_mileage}</p>
                    </Link>
                    </td>
                    <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}><img className='width-40' src={offericon} alt="seaticon" />
                      {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                    </td>
                    {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                    <td className='table-com-col' colSpan={window.innerWidth <= 600 ? 2 : 1} ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> ₹ {numFormat(item.ex_showroom_price)}*</p>
                      <PopupClone2 brand={brand} model={model} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} />
                    </td>
                  </tr>)
                }

              }) : null

            })
            }
          </tbody>
        </table>
        <div className="showallbtn-sec">
          <div className="showallbtn text-center">
            <button onClick={() => {
              tshow ? setShow(false) : setShow(true)
            }} className='g-link-button g-underline'>Show All Varaints</button>
          </div>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container desktop-page-width-60" ref={car_col}>
        <div className="colorstitle">
          <div className="colors">
            <h3 className='g-bold'>Colours</h3>
            <h4 className='g-bold mb-2'>{brand} {model} Colour Options</h4>
          </div>
          <p>{getmodels.length > 0 ? getmodels[0].color_algorithm : null}</p>
        </div>
        <div className="colorimage border text-center py-3">
          <IKContext
            publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
            urlEndpoint="https://ik.imagekit.io/GORP"
            transformationPosition="path"
          >
            <IKImage id='colori' className='w-75' path={"/Hyundai/Aura/Colors/Aura_typhoonsilver.webp"} />
          </IKContext>
          <div className="colourstab text-center">
            <IKContext
              publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
              urlEndpoint="https://ik.imagekit.io/GORP"
              transformationPosition="path"
            >
              {colors.map((item) => {
                return (<span style={{ cursor: "pointer" }} onClick={() => {
                  let name = item.name.split(".")[0].split("_")[0] + "_" + item.name.split(".")[0].split("_")[1]
                  document.getElementById("colori").src = `https://ik.imagekit.io/GORP/${brand}/${model}/Colors/${name}.webp`
                  document.getElementById("colorn").innerText = item.name.split("_")[1].charAt(0).toUpperCase() + item.name.split("_")[1].slice(1)
                }}>
                  <IKImage className='my-5 mx-3' height={50} width={50} path={item.filePath} />
                </span>
                )
              })}


            </IKContext>
          </div>
          <p id='colorn' className='colourname'>{colors.length > 0 ? colors[0].name.split("_")[1].charAt(0).toUpperCase() + colors[0].name.split("_")[1].slice(1) : null}</p>
        </div>
      </div>
      <div className="container my-5 desktop-page-width-60" ref={car_mil}>
        <div className="mileage">
          <div className="mileagetitle">
            <h4 className='g-bold'>Mileage</h4>
            <h4 className='g-bold'>{brand} {model} Mileage</h4>
          </div>
          <p>{getmodels.length > 0 ? getmodels[0].mileage_algorithm : null}</p>
          <div className="mileage-table">
            <table className="table">
              <tbody className='milage-table-box'>
                <tr>
                  {/* <th scope="col">#</th> */}
                  <th>Varients</th>
                  <th>Transmission</th>
                  <th>ARAI Mileage</th>
                </tr>
                {
                  getmodels.map((element, id) => {
                    return (
                      <tr key={id} className={`gray-background ${element.Specifications.engine_and_transmission.arai_mileage === "NULL" ? 'd-none' : 'd-table-row'} ${element.Specifications.engine_and_transmission.arai_mileage ? null : "d-none"}`}>
                        {/* <th scope="row">1</th> */}
                        <td>{element.Specifications.engine_and_transmission.fuel_type}({element.Specifications.engine_and_transmission.displacement})</td>
                        <td>{element.transmission_type}</td>
                        <td className={`g-bold`}>{element.Specifications.engine_and_transmission.arai_mileage}</td>
                      </tr>
                    )
                  })
                }
                {/* <tr className='gray-background'>
                  <td>Petrol (1086 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>20.30 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Petrol (1197 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='gray-background'>
                  <td>Diesel (1100 cc)</td>
                  <td>Automatic(AMT)</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr>
                <tr className='light-gray-background'>
                  <td>Diesel (1100 cc)</td>
                  <td>Manual</td>
                  <td className='g-bold'>21.00 kmpl</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container my-2 desktop-page-width-60">
        <div className="price-title">
          <h3 className='g-bold'>Price</h3>
          <h4 className='g-bold'>{brand} {model} price in top metro cities</h4>
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
              {city.length > 0 ? city.map((itm) => {
                return <tr style={{ cursor: "pointer" }} onClick={() => {
                  setLocation(itm.city_name)
                  usenav(`/${brand}/${model}/${itm.city_name}`, {
                    state: {
                      model: model_id,
                      version: uniqueId
                    }
                  })
                }} className='gray-background'>
                  <td className='fw-bold'>{itm.city_name}</td>
                  <td className='justify-center-d d-flex fw-bold'>₹{numFormat(itm.ex_showroom_price)}*</td>
                </tr>
              }) : null}
              {rcity.length > 0 ? rcity.map((itm) => {
                return <tr style={{ cursor: "pointer" }} onClick={() => {
                  setLocation(itm.city_name)
                  usenav(`/${brand}/${model}/${itm.city_name}`, {
                    state: {
                      model: model_id,
                      version: uniqueId
                    }
                  })
                }} className='gray-background'>
                  <td className='fw-bold'>{itm.city_name}</td>
                  <td className='justify-center-d d-flex fw-bold'>₹{numFormat(itm.ex_showroom_price)}*</td>
                </tr>
              }) : null}
            </tbody>
          </table>
        </div>
      </div>
      <div className="container getonroadpricebutton my-2 desktop-page-width-60">
        <PopupLeadForm />
        {/* <button onClick={getonroadpricebtn} className='w-100 border-0 blue-background-btn py-3 my-4 g-h3'>Get On Road Price</button> */}
      </div>
      <div className="container pros-and-cons-sec mt-2 desktop-page-width-60">
        <div className="pros-and-cons-sec-heading">
          <h3 className='g-bold'>{brand} {model} Expert Tips</h3>
        </div>
        <div className="pros-and-cons">
          <div className="pros-of-car">
            <h4 className='g-bold'><img src={Thumbsup} alt="" /> Pros</h4>
            <div dangerouslySetInnerHTML={tips.pros ? tips.pros : null}></div>
          </div>
          <div className="cons-of-car">
            <h4 className='g-bold'><img src={Thumbsdown} alt="" /> Cons</h4>
            <div dangerouslySetInnerHTML={tips.cons ? tips.cons : null}></div>
          </div>
        </div>
      </div>
      <div className="container desktop-page-width-60">
        <div className="videos-sec">
          <h5 className='g-bold mt-5 mb-3'>{brand} {model} Video Reviews</h5>
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
