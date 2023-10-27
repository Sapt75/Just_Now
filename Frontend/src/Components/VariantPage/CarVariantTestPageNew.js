// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';


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
import PopupClone2 from '../PopupLeadForm/Popupclone2';
import locationContext from '../../context/LocationContext';
import { Helmet } from 'react-helmet-async';
import { IKImage } from 'imagekitio-react';






const CarVariantTestPageNew = () => {
  const [cardetails, setCardetails] = useState([])
  const [getprices, setGetPrices] = useState([]);
  const [versionPrice, setVersionPrice] = useState([])
  const [allVersionPrice, setAllVersionPrice] = useState([])
  const [finalVersion, setFinalVersion] = useState([])
  const [getVersion, setVersion] = useState([])
  // const [tshow, setShow] = useState(false)
  const [read, setRead] = useState(false)
  const [similar, setSimilar] = useState([])

  const { version, brand } = useParams("");

  let car_mod = useParams("").model.split("-").join(" ")


  const loc = useLocation()

  let id, model

  const context = React.useContext(locationContext)

  let { location, setShowLoc } = context


  async function getData() {

    const res = await fetch(`/single_car/${brand.charAt(0).toUpperCase() + brand.slice(1)}/${car_mod.charAt(0).toUpperCase() + car_mod.slice(1)}/${version.split("-").join(" ")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    id = data[0].uid
    model = data[0].model_id

    setCardetails(data)

    let vversion = await fetch(`/version_data/${model}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await vversion.json()
    setVersion(response)
    setFinalVersion(response)

    let vp = await fetch(`/version_prices/${model}/${location}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let vpresponse = await vp.json()
    console.log(vpresponse, "Hello")
    vpresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vpresponse)


    let vvp = await fetch(`/single_version/${id}/${location}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let vvpresponse = await vvp.json()


    vvpresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(vvpresponse)
  }


  async function getSimilar() {
    let data = await fetch(`/similar`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()
    setSimilar(response)
  }




  function numFormat(value) {
    const val = Math.abs(value)
    if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
    if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
    return value;
  }


  const navigate = useNavigate()






  useEffect(() => {
    getData();
    getSimilar()
  }, [location]);





  return (
    <>
      <Helmet>
        {cardetails.length > 0 ? <>
          <title>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Features, Specifications, On Road Price & Dealers | GetOnRoadPrice</title>
          <meta name="description" content={`${cardetails[0].brand} ${cardetails[0].model_name} ${cardetails[0].version_name} Ex-showroom price in India, starts at ${versionPrice.length > 0 ? numFormat(versionPrice[0].ex_showroom_price) : null} . Get ${cardetails[0].brand} ${cardetails[0].model_name} ${cardetails[0].version_name} features, manual, automatic, fuel variant and Price Breakup details at GetonRoadPrice `} />
        </> : null}

        {/* <link rel="canonical" href={`${window.location.href}`} />
        <meta property="og:type" content="Latest Cars" />
        <meta property="og:image" content="https://th.bing.com/th/id/R.764cdbd03ff0df78a4f5cf8d427ad57d?rik=7BB%2b%2f9hcgLBBDg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2ftesla_roadster_4k-HD.jpg&ehk=00%2fcHRBzZVUkWuiEdOOXMyZZs1RPNEIe9qriLTzYX6M%3d&risl=1&pid=ImgRaw&r=0" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta content={`${brand} ${model} Latest 2023`} property="og:title" />
        <meta content={`${brand} ${model}, ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere? Voluptates quod numquam nemo facere rem. Ut laudantium eveniet saepe.`} property='og:description' /> */}
      </Helmet>
      {cardetails.length > 0 ? <>
        <div className="container desktop-page-width-60 image-title-varient-sec">
          <div className="title-variant-box col-md-6">
            <div className="title-price-box">
              <div className="row">
                <div className="new">
                  <div className="card-box">
                    <div className="car-name-for-phone">
                      <h3 className="g-h3 mt-4">{cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}&nbsp;{cardetails[0].Specifications.engine_and_transmission.fuel_type}</h3>
                      {/* <div className="ratings days top-review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <span>(3.7/5)</span>
                      </div> */}
                      <div className="price-of-car-for-phone">
                        {versionPrice.length > 0 ? <h4 className="one-price-of-car d-inline  g-h4">{`₹ ${numFormat(versionPrice[0].ex_showroom_price)}`}</h4> : null}
                        <span className="tag-price d-inline-flex"> (Ex-Showroom Price)  <br /> <span style={{ cursor: "pointer" }} onClick={() => { setShowLoc(true) }} className='g-link-button mx-2 g-underline d-block p-0'>{location}</span></span>
                        {console.log(model, id, "Try Na")}
                        <Link state={{
                          version: cardetails[0].version_name.toLowerCase().split(' ').join("-")
                        }} to={`/${cardetails[0].brand.toLowerCase().split(' ').join("-")}/${cardetails[0].model_name.toLowerCase().split(' ').join("-")}/price-in-${location.toLowerCase().replace(/ /g, "-")}`} className='g-link-button d-block  g-underline'>View Price Breakup</Link>
                        <button className='g-link-button-new g-underline d-none'> <img src={Pricetag} alt="pricetag" />Get Onroad Price</button>
                      </div>
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
                    {getVersion.length > 0 ? <VenueVariants details={cardetails} cars={finalVersion} id={id} model={model} /> : null}
                    {/* <form>
                        <select onChange={onChange} id="ddlViewBy">
                            <option value="1">test1</option>
                            <option value="2" selected="selected">test2</option>
                            <option value="3">test3</option>
                        </select>
                        </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* car variant image  */}
          <div className="col-md-6">
            <div className="carimagebox ">
              <div className="carimage text-center">
                <IKImage className='w-75' publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                  urlEndpoint="https://ik.imagekit.io/GORP"
                  transformationPosition="path" path={`/${cardetails[0].brand}/${cardetails[0].model_name.split(' ').join('_')}/${cardetails[0].model_name.split(' ').join('_')}.jpg`} />
              </div>
            </div>
          </div>
        </div>

        {/* car varient Details  */}
        <div className="container desktop-page-width-60">
          <div className="descriptionbox">
            <div className="descriptiontitle">
              <h3 className="g-h3">2023 {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}&nbsp;{cardetails[0].Specifications.engine_and_transmission.fuel_type} Summary</h3>
            </div>
            <div className="discription my-3">
              <p className="mt-2"><span className={`${read ? "d-none" : 'd-inline ms-1'}`}>
                {cardetails[0].varient_description.slice(0, 100) + "..."}
              </span>
                <span style={{ cursor: "pointer" }} className={`${!read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                  read ? setRead(false) : setRead(true)
                }}>Read More</span>
                <span className={`${read ? 'd-inline ms-1' : 'd-none'}`}>
                  {cardetails[0].varient_description}
                </span><span style={{ cursor: "pointer" }} className={`${read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                  read ? setRead(false) : setRead(true)
                }}>Read Less</span></p>
            </div>
          </div>
        </div>
        <div className="container desktop-page-width-60">
          <div className="variant-spacs-ftrs">
            <div className="variantspacs my-4">
              <div className="specstitle my-2">
                <h3 className="g-h3">Key Specifications of {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}&nbsp;{cardetails[0].Specifications.engine_and_transmission.fuel_type}</h3>
              </div>
              <div className="specsdetails my-2">
                <table className="table">
                  <tbody className='specs-table-box'>
                    <tr className={`gray-background ${cardetails[0].Specifications.engine_and_transmission.arai_mileage === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>ARAI Mileage</td>
                      <td className='text-start'>{cardetails[0].Specifications.engine_and_transmission.arai_mileage}
                      </td>
                    </tr>
                    {/* <tr className='light-gray-background'>
                                <td className='width-70'>City Mileage</td>
                                <td className='text-start'>{cardetails[0].city_mileage}
                                </td>
                                </tr> */}
                    <tr className={`gray-background ${cardetails[0].Specifications.engine_and_transmission.fuel_type === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Fuel Type</td>
                      <td className='text-start'>{cardetails[0].Specifications.engine_and_transmission.fuel_type}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].Specifications.engine_and_transmission.displacement === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Engine Displacement (cc)</td>
                      <td className='text-start'>{cardetails[0].Specifications.engine_and_transmission.displacement}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].no_of_cylinders === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>No. of cylinder</td>
                      <td className='text-start'>{cardetails[0].no_of_cylinders}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].max_power === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Max Power (bhp@rpm)</td>
                      <td className='text-start'>{cardetails[0].max_power}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].max_torque === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Max Torque (nm@rpm)</td>
                      <td className='text-start'>{cardetails[0].max_torque}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].seating_capacity === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Seating Capacity</td>
                      <td className='text-start'>{cardetails[0].seating_capacity}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].transmission_type === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>TransmissionType</td>
                      <td className='text-start'>{cardetails[0].transmission_type}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].Specifications.capacity.boot_space_Litres === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Boot Space(Litres)</td>
                      <td className='text-start'>{cardetails[0].Specifications.capacity.boot_space_Litres}
                      </td>
                    </tr>
                    <tr className={`gray-background ${cardetails[0].Specifications.capacity.fuel_tank_capacity === "NULL" ? 'd-none' : 'd-table-row'}`}>
                      <td className='width-70'>Fuel Tank Capacity</td>
                      <td className='text-start'>{cardetails[0].Specifications.capacity.fuel_tank_capacity}
                      </td>
                    </tr>
                    <tr className='gray-background'>
                      <td className='width-70'>Body Type</td>
                      <td className='text-start'>{cardetails[0].body_type}
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
                <h3 className="g-h3">Key Features of {cardetails[0].brand}&nbsp;{cardetails[0].model_name}&nbsp;{cardetails[0].version_name}&nbsp;{cardetails[0].Specifications.engine_and_transmission.fuel_type}</h3>
              </div>
              <div className="ftrsdetails">
                <table className="table">
                  <tbody className='specs-table-box'>
                    {/* <p>Hello, {cardetails[0].power_steering}!</p>; */}
                    {
                      cardetails[0].power_steering === 'Yes'
                        ? <tr className='gray-background'>
                          <td className='width-70'>Power Steering</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        // <p>Got PS Yes</p>

                        // console.log('Got PS Yes')
                        : console.log()
                    }
                    {/* <tr className='gray-background'>
                                <td className='width-70'>Power Steering</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].power_windows_front === 'Yes'
                        ? <tr className='light-gray-background'>
                          <td className='width-70'>Power Windows Front</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='light-gray-background'>
                                <td className='width-70'>Power Windows Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].anti_lock_braking_system === 'Yes'
                        ? <tr className='gray-background'>
                          <td className='width-70'>Anti Lock Braking System</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='gray-background'>
                                <td className='width-70'>Anti Lock Braking System</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].air_conditioner === 'Yes'
                        ? <tr className='light-gray-background'>
                          <td className='width-70'>Air Conditioner (cc)</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='light-gray-background'>
                                <td className='width-70'>Air Conditioner (cc)</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].driver_airbag === 'Yes'
                        ? <tr className='gray-background'>
                          <td className='width-70'>Driver Airbag</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='gray-background'>
                                <td className='width-70'>Driver Airbag</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].automatic_climate_control === 'Yes'
                        ? <tr className='light-gray-background'>
                          <td className='width-70'>Automatic Climate Control</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='light-gray-background'>
                                <td className='width-70'>Automatic Climate Control</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].fog_lights_front === 'Yes'
                        ? <tr className='gray-background'>
                          <td className='width-70'>Fog Lights - Front</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='gray-background'>
                                <td className='width-70'>Fog Lights - Front</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                    {
                      cardetails[0].alloy_wheels === 'Yes'
                        ? <tr className='light-gray-background'>
                          <td className='width-70'>Alloy Wheels</td>
                          <td className='text-start'><img src={GTick} alt="tick-mark" />
                          </td>
                        </tr>
                        : console.log()
                    }
                    {/* <tr className='light-gray-background'>
                                <td className='width-70'>Alloy Wheels</td>
                                <td className='text-start'><img src={GTick} alt="tick-mark"/>
                                </td>
                                </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="container desktop-page-width-60 mt-5">
          <div className="specs-ftrs-dlrs-box ">
            <div className="tabs-specs-ftrs-dlrs mx-4 my-4">
              {/* <ul className="specs-ftrs-dlrs d-flex justify-content-between">
                <li> <a className='specs-tab' href="#specifications">Specification</a></li>
                <li><a className='ftrs-tab' href="#features">Features</a></li>
                <li>Dealers</li>
              </ul> */}
            </div>
            <div className="specsdetails">
              <h3 className="g-h3 my-2" id='specifications'>Specifications</h3>
              <div className='my-1'><Specifications version={version.charAt(0).toUpperCase() + version.slice(1)} model={cardetails[0].model_id} /></div>
            </div>
            <div className="ftrsdetails mt-4">
              <h3 className="g-h3 my-2" id='features'>Features</h3>
              <div className="my-1"><Features version={version.charAt(0).toUpperCase() + version.slice(1)} model={cardetails[0].model_id} /></div>
            </div>
            <div className="dlrsdetails"></div>
          </div>
        </div>
        <div className="container desktop-page-width-60 car-def-varients mt-5">
          <h3 className='g-bold'>{cardetails[0].brand} {cardetails[0].model_name} Variants 2023</h3>
          <VariantsTab version={getVersion} finalversion={setFinalVersion} />
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
              {
                finalVersion.map((element, id) => {
                  return allVersionPrice.length > 0 ? <tr key={id} className={`varients-firstrow gray-background`}>
                    <td style={{ cursor: "pointer" }} onClick={() => {
                      navigate(`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`)
                      window.location.reload(false)
                    }} className='table-row-40'>
                      <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.Specifications.engine_and_transmission.displacement}cc&nbsp;{element.Specifications.engine_and_transmission.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.Specifications.engine_and_transmission.city_mileage}</p>
                    </td>
                    <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}><img className='width-40' src={offericon} alt="seaticon" />
                      {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                    </td>
                    {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                    <td style={{ cursor: "pointer" }} colSpan={window.innerWidth <= 600 ? 2 : 1} className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.5 Lakhs</p>
                      <PopupClone2 brand={cardetails[0].brand} model={cardetails[0].model_name} version={element.version_name} fuel={element.Specifications.engine_and_transmission.engine_type} transmission={element.transmission_type} />
                    </td>
                  </tr> : allVersionPrice.length > 0 ? allVersionPrice.map((item) => {
                    if (item.Version_UID == element.uid) {
                      return (<tr key={id} className={`varients-firstrow gray-background`}>
                        <td style={{ cursor: "pointer" }} onClick={() => {
                          navigate(`/new-cars/${element.brand.toLowerCase()}/${element.model_name.toLowerCase().split(" ").join("-")}/${element.version_name.toLowerCase().split(" ").join("-")}`)
                          window.location.reload(false)
                        }} className='table-row-40'>
                          <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.Specifications.engine_and_transmission.displacement}cc&nbsp;{element.Specifications.engine_and_transmission.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.Specifications.engine_and_transmission.city_mileage}</p>
                        </td>
                        <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}><img className='width-40' src={offericon} alt="seaticon" />
                          {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                        </td>
                        {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                        <td className='table-com-col' colSpan={window.innerWidth <= 600 ? 2 : 1} ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> ₹ {numFormat(item.ex_showroom_price)}*</p>
                          <PopupClone2 brand={cardetails[0].brand} model={cardetails[0].model_name} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} />
                        </td>
                      </tr>)
                    }

                  }) : null

                })
              }
              {/* <tr className=' varients-firstrow gray-background'>
              <td className='table-row-40'>
                <p className='car-varient-name mb-0 mt-3'>Venue E 1.2 Petrol <br />1197 cc, Petrol, Manual, 17.5</p>
              </td>
              <td className='table-row-10 align-middle'><img className='width-40' src={offericon} alt="seaticon" />
              
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
            </tr> */}
            </tbody>
          </table>
          {/* <div className="showallbtn-sec">
            <div className="showallbtn text-center">
              <button onClick={() => {
                tshow ? setShow(false) : setShow(true)
              }} className='g-link-button g-underline'>Show All Varaints</button>
            </div>
          </div> */}
        </div>
        <div className="container desktop-page-width-60 mb-5 mt-5">
          <h3 className='g-h3 my-2'>Similar Cars</h3>
          <div className='d-flex justify-content-between'>
            {similar.length > 0 ? similar.map((item) => {
              return (<div className="col-3 m-1 s-car-box text-center">
                <img className='w-100' src={variantimg2} alt="car1" />
                <h5 className='g-box-text'>{item.brand} {item.model_name} {item.version_name} {item.Specifications.engine_and_transmission.fuel_type} {item.transmission_type}</h5>
                {/*<button className='g-h5 bg-white border w-100'>Compare Cars</button> */}


                <Link state={{
                  model: item.model_id,
                  version: item.uid
                }} to={`/${item.brand.toLowerCase()}/${item.model_name.toLowerCase().split(" ").join("-")}/${item.version_name.toLowerCase().split(" ").join("-")}/${location.toLowerCase()}`}>
                  <button className='g-h5 g-button border w-100'>View On Road Price</button>
                </Link>
              </div>)
            }) : null}

            {/* <div className="col-3 m-1 s-car-box">
              <img className='w-100' src={variantimg3} alt="car1" />
              <h5 className='g-box-text'>Hyundai Creta E <br />Rs.10.44 Lakh*</h5>
              <button className='g-h5 bg-white border w-100'>Compare Cars</button>
              <button className='g-h5 g-button border w-100'>View On Road Price</button>
            </div>
            <div className="col-3 m-1 s-car-box">
              <img className='w-100' src={variantimg4} alt="car1" />
              <h5 className='g-box-text'>Kia Sonet 1.2 HTE <br />Rs.7.49 Lakh*</h5>
              <button className='g-h5 bg-white border w-100'>Compare Cars</button>
              <button className='g-h5 g-button border w-100'>View On Road Price</button>
            </div> */}
          </div>
        </div>
      </> : null}

    </>
  )
}

export default CarVariantTestPageNew
