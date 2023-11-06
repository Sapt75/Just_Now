import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import car1 from './images/CarVariants/tata.png';
import defaultimg from './images/CarVariants/default.jpg';
import BasicDropdownBrand from './DropDownBrand';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import locationContext from '../context/LocationContext';
import PopupClone2 from './PopupLeadForm/Popupclone2';
import { IKImage, IKContext } from 'imagekitio-react';
import { Helmet } from 'react-helmet-async';






const CarBrandPage = () => {
    const [getbranddata, setGetbranddata] = useState([]);
    const [getprices, setGetPrices] = useState([]);
    const [read, setRead] = useState(false)
    const [trans, setTrans] = useState([])
    const [cbrand, setBrand] = useState([])
    const [desc, setDesc] = useState()

    const context = React.useContext(locationContext)

    let newData = []

    let { location, setShowLoc } = context

    // const [getbrandnumber, setGetbrandnumber] = useState([]);
    // const [pageNumber, setPageNumber] = useState([]);

    // const {pageNumber} = useParams();
    let brand = useParams("").brand.split("-").map((itm) => itm.charAt(0).toUpperCase() + itm.slice(1))
    let filt = useParams("").brand
    if (filt === "mercedes-benz" || filt === "rolls-royce") brand = brand.join("-")
    else brand = brand.join(" ")
    // const {model} = useParams("");
    // console.log(brand);
    // console.log(pageNumber);


    // const GetBrand = async () =>{
    //     const res = await fetch(`/getbrandcars?${brand}`,{
    //         method:"Get",
    //         headers:{
    //             "Content-Type" : "application/json"
    //         }
    //     });
    //     const data = await res.json();
    //     // console.log(data);
    //     if(res.status===422 || !data){
    //         console.log("error");
    //     }else{
    //         setGetbrandnumber(data)
    //         console.log("sucess");
    //     }
    // }

    const GetData = async () => {
        // const res = await fetch(`/getonebrandcars?brand=${brand}`,{
        const res = await fetch(`/getonebrandcarsnew?brand=${brand}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setGetbranddata(data)


        const res_two = await fetch(`/all_model_prices/${brand}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const pricedata = await res_two.json();

        setGetPrices(pricedata)

    }

    async function getTrans() {
        const res = await fetch(`/all_typ/${brand}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        setTrans(data)
    }

    async function getBrand() {
        let data = await fetch(`/all_brands`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setBrand(res)
    }

    async function brandDesc() {
        let data = await fetch(`/brand_desc/${brand}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

            let res = await data.json()
            setDesc(res)

    }




    useEffect(() => {
        GetData();
        getTrans()
        getBrand()
        brandDesc()
        // GetBrand();
    }, []);


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




    const usenav = useNavigate();
    let e = document.getElementById("ddlViewBy");
    function onChange() {
        let value = e.value;
        let text = e.options[e.selectedIndex].text;
        usenav(`/new-cars/${text.toLowerCase().replace(" ", "-")}`);
        window.location.reload();
        //   console.log(value, text);
    }
    // e.onchange = onChange;
    // onChange();

    let date = new Date()









    return (
        <>
            <Helmet>
                <title>{brand} Cars in India {date.getFullYear().toString()}, {brand} New Car Models, On Road Price, Car Details & Video Reviews | GetOnRoadPrice</title>
                <meta name="description" content={`${brand} Car price in India starts at ₹ ${desc ? desc.brand_description.split(" ")[9] : null} Lakh. Get On Road Price of all ${getbranddata.length} ${brand} Cars available in ${date.getFullYear().toString()}, View Features, Price Breakup, Mileage, Colours, Variants Price and more at GetonRoadPrice
`} />
                {/* <link rel="canonical" href={Utils.getSiteUrl()} /> */}
                {/* 
        <meta property="og:type" content="Latest Cars" />
        <meta property="og:image" content="https://th.bing.com/th/id/R.764cdbd03ff0df78a4f5cf8d427ad57d?rik=7BB%2b%2f9hcgLBBDg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2ftesla_roadster_4k-HD.jpg&ehk=00%2fcHRBzZVUkWuiEdOOXMyZZs1RPNEIe9qriLTzYX6M%3d&risl=1&pid=ImgRaw&r=0" />
        <meta property="og:url" content={`${window.location.href}`} />
        <meta content={`${brand} ${model} Latest 2023`} property="og:title" />
        <meta content={`${brand} ${model}, ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere? Voluptates quod numquam nemo facere rem. Ut laudantium eveniet saepe.`} property='og:description' /> */}
            </Helmet>
            <div className='container'>
                <div className="my-3">
                    <div className="">
                        <div className="brand-main-title text-l mb-0">
                            {/* <h1 className="mb-0">Hyundai <span className='global-text-color h3-font-size'>Cars</span></h1> */}
                            <h1 className="mb-0 brand-car-title g-h3">{brand} Cars in India {date.getUTCFullYear()}</h1>
                            {/* <div className="ratings days top-review">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                            <span>(3.7/5)</span>
                        </div> */}
                            {/* <p className="mb-3">Hyundai car price starts at Rs 4.89 Lakh for the cheapest model which is Santro and the price of most expensive model, which is Tucson starts at Rs 27.70 Lakh. Hyundai offers 12 car models in India, including 4 cars in SUV category, 1 car in Sedan category, 4 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category. Hyundai has 4 upcoming cars in India, New Verna, Creta Facelift, Ioniq 5 and New Kona.</p> */}


                            <p className={`mt-2`}><span className={` ${read ? "d-none" : null}`}>
                                {desc ? desc.brand_description.slice(0, 280) + "..." : null}
                            </span>
                                <span style={{ cursor: "pointer" }} className={`${!read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                                    read ? setRead(false) : setRead(true)
                                }}>Read More</span>
                                <span className={`${read ? null : 'd-none'}`}>
                                    {desc ? desc.brand_description : null}
                                </span><span style={{ cursor: "pointer" }} className={`${read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                                    read ? setRead(false) : setRead(true)
                                }}>Read Less</span></p>
                        </div>
                    </div>
                </div>
                <div className="option-bar clearfix">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12 change-brand-sec">
                            <div className="sorting-options2">
                                <h5>Change Brand</h5>
                            </div>
                            <form >
                                <select className='w-100 p-2' onChange={onChange} id="ddlViewBy">
                                    <option value="none" defaultValue>Select an Option</option>
                                    {cbrand.length > 0 ? cbrand.map((item) => {
                                        return <option>{item.brand}</option>
                                    }) : null}
                                </select>
                            </form>
                            {/* <BasicDropdownBrand/> */}
                        </div>
                    </div>
                </div>
                <h3 className='g-h3'>{brand} Car Models</h3>
                {/* <h3>{getbrandnumber}</h3> */}
                {
                    getbranddata.length >= 1 ?
                        // <div><h3>Brand found</h3></div>
                        <div>
                            {getbranddata ? getbranddata.map((element, id) => {
                                // let check = modellist.includes(element.model);
                                // if (check === false) {
                                //     modellist.push(element.model);
                                // }
                                return (
                                    <div className='container bb-box' key={id + 1}>
                                        <div className="car-box-2 cb-4 car-box-full pb-3 p-0 mb-1">
                                            <div className="row g-0 bg-white m-bg imgdetailbox px-2">
                                                <div className="col-lg-4 col-6">
                                                    <div className="photo-thumbnail">
                                                        <div className="photo">

                                                            <IKContext
                                                                publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                                                                urlEndpoint="https://ik.imagekit.io/GORP"
                                                                transformationPosition="path"
                                                            >

                                                                <IKImage className="d-block w-100" path={`/${brand === "Bmw" || brand === "Byd" || brand === "Mg" ? brand.toUpperCase() : brand}/${element.model_name.split(' ').join('_')}/${element.model_name.split(' ').join('_')}.jpg?updatedAt=${new Date().getTime() / 1000}`} />

                                                            </IKContext>
                                                            {/* <img 
                                                            src={`./assets/car_images/${brand}/${element.model_name.split(' ').join('_')}/${element.model_name.toLowerCase().split(' ').join('_')}.jpg`}
                                                            alt="car" href={`/car-model/${brand}/${element.model_name}`} /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 align-self-center col-6">
                                                    <div className="detail">
                                                        <h3 className="title mb-0">
                                                            <Link to={`/new-cars/${brand.toLowerCase()}/${element.model_name.toLowerCase().split(' ').join("-")}`} >{brand}&nbsp;{element.model_name}</Link>
                                                            <a className='d-none' href="/">{id + 1}</a>
                                                        </h3>
                                                        <div className="price-box">
                                                            {getprices.length > 0 ? getprices.map((item) => {
                                                                return element.model_id === item.model_id ? <span>₹ {numFormat2(item.min_price)} - {numFormat(item.max_price)}*<span> (Ex-Showroom Price)</span></span> : null
                                                            }) : <span>Loading</span>}

                                                        </div>
                                                        {/* <div className="ratings days top-review">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <span>(3.7/5)</span>
                                                    </div> */}
                                                        <div className="facilities-list clearfix p-0 m-0">
                                                            <div className="facilities-list-in">
                                                                <p className='p-0 m-0'>
                                                                    <span style={{ cursor: "pointer" }} onClick={() => setShowLoc(true)} className='g-link-button g-underline d-block p-0'>{location}</span>
                                                                    {/* {element.fuel_type} */}
                                                                    {/* {allFuelTypeString}<br/> */}
                                                                    {trans.filter((value, index, self) => {
                                                                        return index === self.findIndex((t) => {
                                                                            if (t.model_name === element.model_name) {
                                                                                return t.Specifications.engine_and_transmission.fuel_type == value.Specifications.engine_and_transmission.fuel_type
                                                                            }
                                                                        })

                                                                    }).map((itm, ind) => {
                                                                        return ind === 0 ? itm.Specifications.engine_and_transmission.fuel_type : ", " + itm.Specifications.engine_and_transmission.fuel_type
                                                                    })} <br />
                                                                    {/* {element.fuel_type} <br /> */}
                                                                    {/* {allTransmissionTypeString} */}
                                                                    {trans.filter((value, index, self) => {
                                                                        return index === self.findIndex((t) => {
                                                                            if (t.model_name === element.model_name) {
                                                                                return t.transmission_type == value.transmission_type
                                                                            }
                                                                        })

                                                                    }).map((itm, ind) => {
                                                                        return ind === 0 ? itm.transmission_type : ", " + itm.transmission_type
                                                                    })}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        {/* <div className="location">
                                                            <Link to={`/new-car-dealers/${brand.toLowerCase()}-car-dealers-${location.toLowerCase().replace(/ /g, '-')}`}>
                                                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                                                            </Link>
                                                        </div> */}
                                                        <div className="getonroadpricebtn">
                                                            <PopupClone2 page={"filter"} model={element.model_name} brand={brand} transmission={element.transmission_type} fuel={element.fuel_type} />
                                                            {/* <button className="g-phone-link-button">GetOnRoadPrice</button> */}
                                                            <NavLink className="d-none" target="_blank" to={`/car-model/${brand}/${element}`}><button className='btn btn-success'>Details</button></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gorp-button">
                                                {/* <PopupClone2 page={"brand"} model={element.model_name} brand={brand} transmission={element.transmission} fuel={element.fuel_type} /> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null
                            }
                        </div>
                        : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                            Loading...&nbsp;
                            <CircularProgress />
                        </Box>
                    // <div><h3>Brand Not Found</h3></div>
                }
                {/* <div className="modelname">
                <div className="brandlistdata">
                    <select name="cars" id="cars">{
                        modellist.map((element, id)=>{
                            return(
                            <option value="volvo">{modellist[id]}</option>
                            )
                        })
                    }
                    </select>
                </div>
                </div> */}

                {/* Pagination Start */}

                {/* <div className="brandpagination text-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        <li className="page-item">
                            <NavLink>
                            <button onClick={handleOnclick} className="page-link border-0" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </button>
                            </NavLink>
                        </li>
                        {[...Array(pages)].map((e, i) => 
                        <li key={i} className="page-item"><NavLink to={`/testbrand/${brand}/&page=${i}`}><button onClick={handleOnclick} className="page-link border-0" href="/">{i}</button></NavLink></li>)}
                        <li className="page-item">
                        <NavLink>
                            <button onClick={handleOnclick} className="page-link border-0" href="/" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div> */}
            </div>
        </>

    )
}

export default CarBrandPage
