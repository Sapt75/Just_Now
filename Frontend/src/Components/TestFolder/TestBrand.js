import React, { useEffect, useState } from 'react';
import {NavLink, Link, useParams } from 'react-router-dom';
import car1 from '../images/CarVariants/tata.png';
import defaultimg from '../images/CarVariants/default.jpg';


const TestBrand = () => {
    const [getbranddata, setGetbranddata] = useState([]);
    // const [getbrandnumber, setGetbrandnumber] = useState([]);
    // const [pageNumber, setPageNumber] = useState([]);

    // const {pageNumber} = useParams();
    const {brand} = useParams("");
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

    const GetData = async () =>{
        const res = await fetch(`/getonebrandcars?brand=${brand}`,{
            // const res = await fetch(`/getonebrandcars?brand=${brand}&model=${model}&page=${pageNumber}`,{
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        const data = await res.json();
        console.log(data);

        if(res.status === 422 || !data){
            // alert("error");
            console.log("error");
        }else{
            setGetbranddata(data)
            // alert("data added");
            console.log("Data Fetched!");
        }

    }
    useEffect(() => {
        GetData();
        // GetBrand();
    },[]);


const modellist = [];


getbranddata.forEach((element) => {
    let check = modellist.includes(element.model);
    if (check === false) {
        modellist.push(element.model);
    }
});



  

  return (
    
    <div className='container'>
        {/* <h3>Page of {pageNumber}</h3> */}
        {/* <h3>{getbrandnumber}</h3> */}
        {
            modellist.length>=1? 
            // <div><h3>Brand found</h3></div>
        <div>
    {
                    modellist.map((element, id) =>{
                        // let check = modellist.includes(element.model);
                        // if (check === false) {
                        //     modellist.push(element.model);
                        // }
                        return(
                            <div key={id+1}>
                            <div className="car-box-2 cb-4 car-box-full pb-3 p-0 mb-1">
                                <div className="row g-0 bg-white imgdetailbox px-2">
                                    <div className="col-lg-4 col-6">
                                        <div className="photo-thumbnail">
                                            <div className="photo">
                                                <img className="d-block w-100" src={element.brand==="Tata"? car1:defaultimg} alt="car"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center col-6">
                                        <div className="detail">
                                            <h3 className="title mb-0">
                                                <Link to={`/car-model/${brand}/${element}`} >{brand}&nbsp;{element}</Link>
                                                <a className='d-none' href="/">{id+1}</a>
                                            </h3>
                                            <div className="price-box">
                                                <span>Rs.10.44 Lakh*<span>(Ex Showroom)</span></span>
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
                                                    <p className='p-0 m-0'>{element.fuel_type}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="location">
                                                <a href="/">
                                                    <i className="fa fa-map-marker"></i> Locate Dealer Near You
                                                </a>
                                            </div>
                                        <div className="getonroadpricebtn display-none-phone">
                                            {/* <button className="g-link-button-d g-underline">GetOnRoadPrice</button> */}
                                            <NavLink target="_blank" to={`/car-model/${brand}/${element}`}><button className='btn btn-success'>Details</button></NavLink>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                </div>
                            </div>
                        )
                    })
                }</div>
                : <div><h3>Brand Not Found</h3></div>
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

export default TestBrand
