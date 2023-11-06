import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import car1 from './images/CarVariants/tata.png';
import defaultimg from './images/CarVariants/default.jpg';
import BasicDropdownBrand from './DropDownBrand';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import TestBody from './TestFolder/TestBody';
import TestFuel from './TestFolder/TestFuel';
import TestSeat from './TestFolder/TestSeat';
import TestTransmission from './TestFolder/TestTransmission';
import PopupClone2 from './PopupLeadForm/Popupclone2';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IKContext, IKImage } from 'imagekitio-react';



const CarFilters = () => {
    const [getbranddata, setGetbranddata] = useState([]);
    const [getprices, setGetPrices] = useState([]);
    const [trans, setTrans] = useState([])
    const [read, setRead] = useState(false)

    let { value } = useParams("");

    value = value.split("-")[0]

    let type = (useParams("").type.charAt(0).toUpperCase() + useParams("").type.slice(1)).replace("-", "_")

    console.log(type, value)


    const GetData = async () => {
        // const res = await fetch(`/getonebrandcars?brand=${brand}`,{
        const res = await fetch(`/filter/${type.toLowerCase()}/${value}/${true}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setGetbranddata(data)


        const res_two = await fetch(`/filter_model_prices`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const pricedata = await res_two.json();

        setGetPrices(pricedata)

    }


    async function getTrans() {
        const res = await fetch(`/all_var/${type}/${value}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setTrans(data)
    }

    async function fetchAgain() {
        const res = await fetch(`/filter/${type}/${value}/${false}`, {
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        setGetbranddata((preValue) => [...preValue].concat(data))

    }






    useEffect(() => {
        GetData();
        getTrans()
        // GetBrand();
    }, []);


    function numFormat(value) {
        const val = Math.abs(value)
        if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
        if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
        return value;
    }










    return (

        <div className='container'>
            <div className="my-3">
                <div className="">
                    <div className="brand-main-title text-l mb-0">
                        <h1 className="mb-0">{type === "seating_capacity" ? `${value} Seater` : value} <span className='global-text-color h3-font-size'>Cars</span></h1>
                        <h1 className="mb-0 brand-car-title g-h3">Cars</h1>
                        {/* <p className="mb-3">Hyundai car price starts at Rs 4.89 Lakh for the cheapest model which is Santro and the price of most expensive model, which is Tucson starts at Rs 27.70 Lakh. Hyundai offers 12 car models in India, including 4 cars in SUV category, 1 car in Sedan category, 4 cars in Hatchback category, 2 cars in Compact SUV category, 1 car in Compact Sedan category. Hyundai has 4 upcoming cars in India, New Verna, Creta Facelift, Ioniq 5 and New Kona.</p>  */}
                        <p className="mt-2">There are a total of {getbranddata ? getbranddata.length : 12} {type === "seating_capacity" ? `, ${value} Seater` : value} models currently on sale in india. These include 4 Hatchbaks, 2 Sedans and 6 SUVs. {type === "seating_capacity" ? `${value} Seater` : value} has 11 upcoming car lounches in India. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis hic provident voluptas sapiente facere error at, molestiae animi est blanditiis?
                            <span style={{ cursor: "pointer" }} className={`${!read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                                read ? setRead(false) : setRead(true)
                            }}>Read More</span>
                            <span className={`${read ? 'd-inline ms-1' : 'd-none'}`}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa deleniti asperiores dolores, debitis similique sunt corporis voluptatem deserunt necessitatibus nemo maiores odit adipisci corrupti. Voluptatibus nam nobis tempore impedit. Tempore eligendi neque est repellat nisi, sit rem officia quam nulla, dolores autem necessitatibus omnis similique fuga eveniet ad quidem totam.
                            </span><span style={{ cursor: "pointer" }} className={`${read ? 'd-inline ms-1' : "d-none"} g-read-more-btn`} onClick={() => {
                                read ? setRead(false) : setRead(true)
                            }}>Read Less</span></p>
                    </div>
                </div>
            </div>
            <h3 className='g-h3'>{value} Car Models</h3>
            <div className="col-lg-5 col-md-6 col-sm-12 change-brand-sec">
                <div className="sorting-options2">
                    {type === "body_type" ? <>
                        <h5>Change Body Type</h5>
                        <TestBody status={true} val={type} />
                    </> : null}
                    {type === "fuel_type" ? <>
                        <h5>Change Fuel Type</h5>
                        <TestFuel status={true} val={type} />
                    </> : null}
                    {type === "seating_capacity" ? <>
                        <h5>Change Capacity</h5>
                        <TestSeat status={true} val={type} />
                    </> : null}
                    {type === "transmission_type" ? <>
                        <h5>Change Transmission</h5>
                        <TestTransmission status={true} val={type} />
                    </> : null}
                </div>
            </div>

            {/* <h3>{getbrandnumber}</h3> */}
            {
                getbranddata.length >= 1 ?
                    // <div><h3>Brand found</h3></div>
                    <div>
                        <InfiniteScroll
                            dataLength={getbranddata ? getbranddata.length : null}
                            next={fetchAgain}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
                            {getbranddata ? getbranddata.map((element, id) => {
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

                                                                <IKImage className="d-block w-100" path={`/${element.brand === "Bmw" || element.brand === "Byd" || element.brand === "Mg" ? element.brand.toUpperCase() : element.brand}/${element.model_name.split(' ').join('_')}/${element.model_name.split(' ').join('_')}.jpg?updatedAt=${new Date().getTime() / 1000}`} />

                                                            </IKContext>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-7 align-self-center col-6">
                                                    <div className="detail">
                                                        <h3 className="title mb-0">
                                                            <Link state={{
                                                                uniqueId: element.uid,
                                                                model_id: element.model_id
                                                            }} to={`/new-cars/${element.brand.toLowerCase().split(' ').join("-")}/${element.model_name.toLowerCase().split(' ').join("-")}`} >{element.brand}&nbsp;{element.model_name}</Link>
                                                            <a className='d-none' href="/">{id + 1}</a>
                                                        </h3>
                                                        <div className="price-box">
                                                            {getprices.length > 0 ? getprices.map((item) => {
                                                                return element.model_id === item.model_id ? <span>₹ {numFormat(item.min_price)} - {numFormat(item.max_price)}*<span> (Ex Showroom)</span></span> : null
                                                            }) : <span>Loading</span>}

                                                        </div>
                                                        <div className="facilities-list clearfix p-0 m-0">
                                                            <div className="facilities-list-in">
                                                                <p className='p-0 m-0'>
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
                                                        <div className="location">
                                                            <Link to={`/getonroadprice/car-dealers/${element.brand.toLowerCase()}/${element.model_name.toLowerCase()}`}>
                                                                <i className="fa fa-map-marker"></i> Locate Dealer Near You
                                                            </Link>
                                                        </div>
                                                        <div className="getonroadpricebtn">
                                                            <PopupClone2 page={"filter"} model={element.model_name} brand={element.brand} transmission={element.transmission_type} fuel={element.Specifications.engine_and_transmission.fuel_type} />
                                                            {/* <button className="g-phone-link-button">GetOnRoadPrice</button> */}
                                                            <NavLink className="d-none" target="_blank" to={`/car-model/${element.brand}/${element}`}><button className='btn btn-success'>Details</button></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gorp-button">
                                                <button className='gorp-phone-btn w-100'>GetonRoadPrice</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null
                            }
                        </InfiniteScroll>
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
    )
}

export default CarFilters