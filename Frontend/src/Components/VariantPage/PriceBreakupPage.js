// import React from 'react';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';


import '../VariantPage/VariantPage.css';
import Pricetag from '../images/icons/tag.png';
import variantimg1 from '../images/CarVariants/1.png';
import variantimg2 from '../images/CarVariants/breeza.png';
import variantimg3 from '../images/CarVariants/creta.png';
import variantimg4 from '../images/CarVariants/sonet.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import VenueVariants from './HyundaiVenueVariants/VenueVariants';

import offericon from '../images/icons/offer.png';
import VariantsTab from './VariantsTab';
import PopupClone2 from '../PopupLeadForm/Popupclone2';
import locationContext from '../../context/LocationContext';
import RegistrationPop from '../RegistrationPop/RegistrationPop';
import OptionsPop from '../OptionsPopUp/OptionsPop';
import PopupClone from '../PopupLeadForm/Popupclone';
import { Helmet } from 'react-helmet-async';
import { IKImage } from 'imagekitio-react';



const PriceBreakupPage = () => {

  const loc = useLocation()
  var model, version

  console.log(loc.state)


  const [cardetails, setCardetails] = useState([])
  const [getbreakup, setBreakup] = useState([]);
  const [versionPrice, setVersionPrice] = useState([])
  const [allVersionPrice, setAllVersionPrice] = useState([])
  const [finalVersion, setFinalVersion] = useState([])
  const [getVersion, setVersion] = useState([])
  const [tshow, setShow] = useState(false)
  const [showbreakup, setShowBreakup] = useState()
  const [others, setOthers] = useState()
  const [optional, setOptional] = useState()
  const [warrenties, setWarrenties] = useState()
  const [rssa, setRsa] = useState()
  const [registration, setRegistration] = useState(0)
  const [similar, setSimilar] = useState([])


  const brand = useParams("").brand.charAt(0).toUpperCase() + useParams("").brand.slice(1)
  const mod = useParams("").model.split("-").join(" ").charAt(0).toUpperCase() + useParams("").model.split("-").join(" ").slice(1)
  // const ver = useParams("").version.split("-").join(" ").charAt(0).toUpperCase() + useParams("").version.split("-").join(" ").slice(1)



  const context = React.useContext(locationContext)

  let { location, setDet, setShowLoc } = context

  let navigate = useNavigate()




  const GetData = async () => {

    let dt = await fetch(`${loc.state ? `/price_ver/${brand}/${mod}/${loc.state.version}` : `/price_ver/${brand}/${mod}`}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const verp = await dt.json()

    console.log(verp)

    model = verp.model_id
    version = verp.uid

    setDet({
      model: parseInt(verp.model_id),
      version: parseInt(verp.uid)
    })

    setShowBreakup(parseInt(verp.uid))


    const res = await fetch(`/price_car_details/${verp.uid}/${verp.model_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      // window.alert("Invalid Input");
      console.log("Invalid Input");
    } else {
      console.log(data)
      setCardetails(data)
      // window.alert("City Updated");
      console.log("car data sucess");

      // navigate("/car-price-details");
    }

    let vpdata = await fetch(`/version_data/${verp.model_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await vpdata.json()
    setVersion(response)
    setFinalVersion(response)

    let vvpdata = await fetch(`/version_prices/${verp.model_id}/${location}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let vresponse = await vvpdata.json()
    console.log(response, "Hello")
    vresponse == "No Data" ? setAllVersionPrice([]) : setAllVersionPrice(vresponse)


    let svdata = await fetch(`/single_version/${verp.uid}/${location}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let svresponse = await svdata.json()

    console.log(svresponse, "Single")


    svresponse == "No Data" ? setVersionPrice([]) : setVersionPrice(svresponse)


    let pbdata = await fetch(`/price_breakup/${verp.model_id}/${location}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let pbresponse = await pbdata.json()
    console.log(pbresponse)
    setBreakup(pbresponse)

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


  function minVersion() {
    let min = allVersionPrice[0]
    allVersionPrice.map((item) => {
      if (min.ex_showroom_price > item.ex_showroom_price) {
        min = item
      }
    })

    return min
  }

  function maxVersion() {
    let max = allVersionPrice[0]
    allVersionPrice.map((item) => {
      if (max.ex_showroom_price < item.ex_showroom_price) {
        max = item
      }
    })

    return max
  }

  function numFormat(value) {
    const val = Math.abs(value)
    if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
    if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
    return value;
  }

  function numFormat1(num) {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num)
  }



  useEffect(() => {
    GetData();
    getSimilar()
  }, [location]);




  return (
    <>
      {cardetails.length > 0 ? <Helmet>
        {cardetails.length > 0 ? <>
          <title>{cardetails[0].brand} {cardetails[0].model_name} {cardetails[0].version_name} Price in {location}, Price Breakup of {cardetails[0].model_name} {cardetails[0].version_name} in {location} | GetOnRoadPrice</title>
          <meta name="description" content={`${cardetails[0].brand} ${cardetails[0].model_name} ${cardetails[0].version_name} on road price in Bangalore is ${versionPrice.length > 0 ? numFormat(versionPrice[0].ex_showroom_price) : null} .Check ${cardetails[0].brand} ${cardetails[0].model_name} price breakup, ex-showroom price, Registration Charges, Insurance & Other Charges in ${location}. | GetonRoadPrice`} />
        </> : null}

        {/* <link rel="canonical" href={`${window.location.href}`} />
        <meta property="og:type" content="Latest Cars" />
        <meta property="og:image" content="https://th.bing.com/th/id/R.764cdbd03ff0df78a4f5cf8d427ad57d?rik=7BB%2b%2f9hcgLBBDg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2ftesla_roadster_4k-HD.jpg&ehk=00%2fcHRBzZVUkWuiEdOOXMyZZs1RPNEIe9qriLTzYX6M%3d&risl=1&pid=ImgRaw&r=0" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta content={`${brand} ${model} Latest 2023`} property="og:title" />
        <meta content={`${brand} ${model}, ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere? Voluptates quod numquam nemo facere rem. Ut laudantium eveniet saepe.`} property='og:description' /> */}
      </Helmet> : null}
      {cardetails.length > 0 ? <>
        <div className="container desktop-page-width-60 image-title-varient-sec">
          <div className="title-variant-box col-md-6">
            <div className="title-price-box">
              <div className="row">
                <div className="new">
                  <div className="card-box">
                    <div className="car-name-for-phone">
                      <h3 className="g-h3 mt-4">{cardetails[0].brand}&nbsp;{cardetails[0].model_name} On Road Price in&nbsp;{location}</h3>
                      <div className="ratings days top-review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o"></i>
                        <span>(3.7/5)</span>
                      </div>
                      <div style={{ lineHeight: "20px" }} className="price-of-car-for-phone">
                        {versionPrice.length > 0 ? <h4 className="one-price-of-car d-inline  g-h4">{`₹ ${numFormat(versionPrice[0].ex_showroom_price)}`}</h4> : null}
                        <span className="tag-price d-inline-flex">(On Road Price)<br /><span className='g-link-button g-underline' onClick={() => { setShowLoc(true) }} style={{ color: "green", cursor: "pointer" }} >{location}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* change car variant */}
            <div className={`variant-box`}>
              <div className="option-bar clearfix">
                <div className="row change-variant-sec">
                  <div className="col-sm-12 dropdown-variant">
                    <div className="sorting-options2 ">
                      <h5>Change Variant</h5>
                    </div>
                    {getVersion.length > 0 ? <VenueVariants price={true} details={cardetails} cars={finalVersion} model={model} /> : null}
                  </div>
                </div>
              </div>
            </div>
            {/* <button className='g-link-button g-underline display-none-phone'>View Price Breakup</button> */}
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

        <div className="container desktop-page-width-60 car-def-varients mt-4">
          <h3 className='g-bold'>Variants</h3>
          {/* {versionPrice.length > 0 ?<p>{cardetails[0].brand} {cardetails[0].model_name} price in {location} starts from {numFormat(minVersion() ? minVersion().ex_showroom_price:null)} . Check {cardetails[0].brand} {cardetails[0].model_name} price breakup, ex-showroom price, Registration Charges, Insurance & Other
            Charges in Bangalore.
            {cardetails[0].brand} {cardetails[0].model_name} price in {location} starts at ₹ {numFormat(minVersion().ex_showroom_price)} and goes upto ₹ {numFormat(maxVersion().ex_showroom_price)}. {finalVersion.length} variants of {cardetails[0].brand} {cardetails[0].model_name} are available in {location}. {cardetails[0].model_name} On Road price for base model {minVersion().version_name} Petrol is ₹ {numFormat(minVersion().ex_showroom_price)} and price for top model {maxVersion().version_name} Petrol is ₹ {numFormat(maxVersion().ex_showroom_price)}.
            Get On Road Price of all {finalVersion.length} {cardetails[0].brand} {cardetails[0].model_name} Cars available in {location} for 2023, Price Breakup includes Ex-showroom price, Registration
            Charges (RTO), Road Safety Tax, Insurance & Other charges applicable. Get offers from {cardetails[0].brand} Dealers in {location}. Below is the On Road Price of all {cardetails[0].brand}
            {location} Car Variants in {location}</p>:null} */}
          <table className="table varients-table">
            <tbody>
              <tr style={{ borderBottom: "2px solid #d0d0d0" }} className=' varients-firstrow'>
                <td className='table-row-55'>
                </td>
                <td className='table-row-10'><p className='fuleicon'> </p>
                </td>
                <td><strong className='g-bold d-none'> Price (onwords)</strong>
                </td>
              </tr>
              {
                finalVersion.map((element, id) => {
                  return allVersionPrice.length <= 0 ? <tr key={id} className={`varients-firstrow gray-background`}>
                    <td className='table-row-40'>
                      <p className='car-varient-name mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp;<br />{element.displacement}cc&nbsp;{element.engine_type}&nbsp;{element.transmission_type}&nbsp;{element.city_mileage}</p>
                    </td>
                    <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}><img className='width-40' src={offericon} alt="seaticon" />
                      {/* <p className='fuleicon'> <img src={offericon} alt="fuleicon" /></p> */}

                    </td>
                    {/* <td  className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.20 Lakh{element.uid}</p> */}
                    <td style={{ cursor: "pointer" }} colSpan={window.innerWidth <= 600 ? 2 : 1} onClick={() => {
                      // if(setShowBreakup === 0)
                      setShowBreakup(element.uid)

                    }} className='table-com-col' ><p className='table-com-p fuleicon g-bold mb-0 mt-3'> <img src={Pricetag} alt="fuleicon" />₹ 9.5 Lakhs</p>
                      <PopupClone2 brand={cardetails[0].brand} model={cardetails[0].model_name} version={element.version_name} fuel={element.engine_type} transmission={element.transmission_type} />
                    </td>
                  </tr> : allVersionPrice ? allVersionPrice.map((item) => {
                    if (item.Version_UID == element.uid) {
                      return (<tr style={{ border: "2px solid #d0d0d0" }} key={id} className={`varients-firstrow`}>
                        <td className='table-row-40 ps-2 px-lg-4'>
                          <p style={{ fontSize: "16px", fontFamily: "Roboto" }} className='car-varient-name fw-bold mb-0 mt-3'>{element.model_name}&nbsp;{element.version_name}&nbsp; ({element.transmission_type})</p>
                          {getbreakup.length > 0 ? getbreakup.map((item) => {
                            if (item.Version_UID === element.uid) {
                              return (<ul style={{ listStyle: 'none' }} className='mt-4 ps-0'>
                                <div className={`${showbreakup === element.uid ? "d-block" : "d-none"}`}>
                                  <div style={{ fontWeight: 600 }} className='d-flex justify-content-between mb-2'>
                                    <li>Ex-Showroom Price</li>
                                    <li>₹ {item.ex_showroom_price} </li>
                                  </div>
                                  <div className='d-flex justify-content-between mb-2'>
                                    <div>
                                      <li ><RegistrationPop reg={registration} setReg={setRegistration} price={numFormat(item.ex_showroom_price + item.cow_cess + item.registeration_charges + item.road_safety_tax_cess + parseInt(registration === 0 ? item.rto : item[registration]) + item.mcd + item.fastag + item.hypothecation_charges + item.tax_collected_at_source_tcs)} />

                                      </li>
                                      <div className={`m-2 ${others === element.uid ? "d-block" : "d-none"}`}>
                                        <li className={`${item.cow_cess === null ? "d-none" : null}`}>COW Cess</li>
                                        <li className={`${item.registeration_charges === null ? "d-none" : null}`}>Registration Charges</li>
                                        <li className={`${item.rto === null ? "d-none" : null}`}>RTO</li>
                                        <li className={`${item.road_safety_tax_cess === null ? "d-none" : null}`}>Road Safety Tax/Cess</li>
                                        <li className={`${item.mcd === null ? "d-none" : null}`}>MCD</li>
                                      </div>
                                    </div>
                                    <div>
                                      <li className={`text-end fw-bold ${others === element.uid ? "d-none" : "d-block"}`}>₹ {item.cow_cess + item.registeration_charges + parseInt(registration === 0 ? item.rto : item[registration]) + item.road_safety_tax_cess + item.mcd} </li>
                                      <div className={`${others === element.uid ? "d-block" : "d-none"} drop-pd`}>
                                        <li className={`${item.cow_cess === null ? "d-none" : null}`}>₹ {item.cow_cess}</li>
                                        <li className={`${item.registeration_charges === null ? "d-none" : null}`}>₹ {item.registeration_charges}</li>
                                        <li className={`${item.rto === null ? "d-none" : null}`}>₹ {registration === null ? item.rto : item[registration]}</li>
                                        <li className={`${item.road_safety_tax_cess === null ? "d-none" : null}`}>₹ {item.road_safety_tax_cess}</li>
                                        <li className={`${item.mcd === null ? "d-none" : null}`}>₹ {item.mcd}</li>
                                      </div>
                                      <li className={`text-end fw-bold d-block ${others === element.uid ? "d-block" : "d-none"}`}>₹{item.cow_cess + item.registeration_charges + parseInt(registration === 0 ? item.rto : item[registration]) + item.road_safety_tax_cess + item.mcd} </li>
                                    </div>
                                  </div>
                                  <div style={{ fontWeight: 600 }} className='d-flex justify-content-between mb-2'>
                                    <li>Insurance</li>
                                    <li>₹ {item.insurance}</li>
                                  </div>
                                  <div className='d-flex justify-content-between mb-2'>
                                    <div>
                                      <li style={{ fontWeight: 600 }}>Other Charges <InfoOutlinedIcon sx={{ fontSize: 20, color: '#d77904' }} /></li>
                                      <div className={`m-2 ${others === element.uid ? "d-block" : "d-none"}`}>
                                        <li className={`${item.fastag === null ? "d-none" : null}`}>FASTag</li>
                                        <li className={`${item.hypothecation_charges === null ? "d-none" : null}`}>Hypothecation Charges</li>
                                        <li className={`${item.tax_collected_at_source_tcs === null ? "d-none" : null}`}>Tax Collected at Source (TCS)</li>
                                      </div>
                                    </div>
                                    <div>
                                      <li className={`text-end fw-bold ${others === element.uid ? "d-none" : "d-block"}`}>₹ {item.fastag + item.hypothecation_charges + item.tax_collected_at_source_tcs}</li>
                                      <div className={` ${others === element.uid ? "d-block" : "d-none"} drop-pd`}>
                                        <li className={`${item.fastag === null ? "d-none" : null}`}>₹ {item.fastag}</li>
                                        <li className={`${item.hypothecation_charges === null ? "d-none" : null}`}>₹ {item.hypothecation_charges}</li>
                                        <li className={`${item.tax_collected_at_source_tcs === null ? "d-none" : null}`}>₹ {item.tax_collected_at_source_tcs}</li>
                                        <div>
                                        </div>
                                      </div>
                                      <li className={`text-end fw-bold ${others === element.uid ? "d-block" : "d-none"}`}>₹ {item.fastag + item.hypothecation_charges + item.tax_collected_at_source_tcs}</li>
                                    </div>
                                  </div>
                                  <div className='d-flex justify-content-between mb-2'>
                                    <div>
                                      <li style={{ fontWeight: 600 }}>Optional </li>
                                      <li className='my-3' style={{ color: "#0288d1", fontWeight: 700, fontSize: "13px", cursor: "pointer" }} onClick={() => {
                                        others === element.uid ? setOthers(0) : setOthers(element.uid)
                                      }}>{others === element.uid ? "Hide" : "Show"} Detailed Price Breakup {others === element.uid ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon />}</li>
                                    </div>
                                    <div>
                                      <li className={`text-end fw-bold`}>
                                        <OptionsPop list={item} options={optional} war={warrenties} ra={rssa} setra={setRsa} setwar={setWarrenties} setoptions={setOptional} total={item.ex_showroom_price + item.cow_cess + item.registeration_charges + item.road_safety_tax_cess + parseInt(registration === 0 ? item.rto : item[registration]) + item.insurance + item.mcd + item.fastag + item.hypothecation_charges + item.tax_collected_at_source_tcs + (optional ? item[optional.value] : null) + (warrenties ? item[warrenties.value] : null) + (rssa ? item[rssa.value] : null)} />

                                        {optional || warrenties || rssa ? `₹ ${(optional ? item[optional.value] : null) + (warrenties ? item[warrenties.value] : null) + (rssa ? item[rssa.value] : null)}` : null}
                                      </li>
                                    </div>
                                  </div>
                                  <div style={{ fontSize: "17px" }} className='d-flex justify-content-between my-3 fw-bold'>
                                    <li>On-Road Price in {location} : </li>
                                    <li>₹ {numFormat(item.ex_showroom_price + item.cow_cess + item.registeration_charges + parseInt(registration === 0 ? item.rto : item[registration]) + item.insurance + item.road_safety_tax_cess + item.mcd + item.fastag + item.hypothecation_charges + item.tax_collected_at_source_tcs + (optional ? item[optional.value] : null) + (warrenties ? item[warrenties.value] : null) + (rssa ? item[rssa.value] : null))} <PopupClone version={element.version_name} model={mod} brand={brand} mod_id={model} vers_id={version} pag={"price"} /> </li>
                                  </div>
                                </div>
                              </ul>)
                            }
                          }) : null}
                        </td>
                        <td className={`table-row-10 align-middle ${window.innerWidth <= 600 ? "d-none" : null}`}>
                        </td>
                        <td colSpan={window.innerWidth <= 600 ? 2 : 1} onClick={() => {
                          // if(setShowBreakup === 0)
                          showbreakup === element.uid ? setShowBreakup(0) : setShowBreakup(element.uid)
                        }} style={{ cursor: "pointer" }} className='table-com-col bigt' >
                          <p className='table-com-p fuleicon g-bold mb-0 mt-lg-3'>
                            <span className={`${showbreakup === 0 ? "d-inline" : "d-none"}`}>
                              <img src={Pricetag} alt="fuleicon" /> ₹ {numFormat1(item.ex_showroom_price)}</span>
                            <span className='ms-lg-3 ms-1 d-felx'><KeyboardArrowDownIcon /></span></p>
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
        <div className="container desktop-page-width-60 mb-5">
          <h3 className='g-h3 my-2'>Similar Cars</h3>
          <div className='d-flex justify-content-between'>
            {similar.length > 0 ? similar.map((item) => {
              return (<div className="col-3 m-1 s-car-box text-center">
                <img className='w-100' src={variantimg2} alt="car1" />
                <h5 className='g-box-text'>{item.brand} {item.model_name} {item.version_name} {item.fuel_type} {item.transmission_type}</h5>
                {/*<button className='g-h5 bg-white border w-100'>Compare Cars</button> */}
                <button onClick={() => {
                  navigate(`/${item.brand.toLowerCase()}/${item.model_name.toLowerCase().split(" ").join("-")}/${item.version_name.toLowerCase().split(" ").join("-")}/price-in-${location.toLowerCase().replace(/ /g, "-")}`, {
                    state: {
                      model: item.model_id,
                      version: item.uid
                    }
                  })
                  window.location.reload()
                }} className='g-h5 g-button border w-100'>View On Road Price</button>
              </div>)
            }) : null}
          </div>
        </div>
      </> : null}

    </>
  )
}

export default PriceBreakupPage
