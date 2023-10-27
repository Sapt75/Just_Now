import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import car1 from '../images/HyundaiCarModels/creta.png';
import car1 from '../images/CarVariants/tata.png';
import defaultimg from '../images/CarVariants/default.jpg';
// import React from 'react'

const Testthree = () => {
  const [getcardata, setGetcardata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState('');
//   console.log(getcardata);

  const GetData = async(e) =>{
    // e.preventDefault();
    // const {name, email, age, phone, work, address, description} = inpvalue;
    const res = await fetch("/newcarsdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
        // ,
        // body:JSON.stringify({
        //     name, email, age, phone, work, address, description
        // })
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
        // alert("error");
        console.log("error");
    }else{
        setGetcardata(data)
        setFilterdata(data)
        // alert("data added");
        console.log("get data");
    }
}


useEffect(()=>{
  GetData()
},[]);


const {brandname} = useParams("");
    console.log(brandname);



const handlesearch = (event) =>{
    const getSearch = event.target.value;
    console.log(getSearch);

    if(getSearch.length > 0){
        const searchdata= getcardata.filter( (element)=>element.brand.toLowerCase().includes(getSearch));
        setGetcardata(searchdata);
    }
    else{
        setGetcardata(filterdata);
    }
    setQuery(getSearch);
}
const brandlist = [];

  return (
    <>
      <div className="container">
        <div className="row">
            <div className="carlist">
                <h3>Search for the data</h3>
                <input type="search" name="searchcar" id="searchcar" value={query} onChange={(e)=>handlesearch(e)} />
                <div className="brand-head-text">
                    <h2 className='py-2'>Car List</h2>
                </div>

                {
                    getcardata.map((element, id) =>{
                        let check = brandlist.includes(element.brand);
                        if (check === false) {
                            brandlist.push(element.brand);
                        }
                        return(
                            <div key={id+1}>
                                {
                                    element.brand==="Nissan"? 
                                
                            <div className="car-box-2 cb-4 car-box-full pb-3 p-0 mb-1">
                                <div className="row g-0 bg-white imgdetailbox px-2">
                                    <div className="col-lg-4 col-6">
                                        <div className="photo-thumbnail">
                                            <div className="photo">
                                                <img className="d-block w-100" src={element.brand==="Tata"? car1:defaultimg} alt="car" href=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center col-6">
                                        <div className="detail">
                                            <h3 className="title mb-0">
                                                <a href="/">{element.brand}&nbsp;{element.model}</a>
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
                                            <NavLink target="_blank" to={`/testnewcars/${element._id}`}><button className='btn btn-success'>Details</button></NavLink>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                : console.log()
                                }
                            </div>
                        )
                    })
                }
                <div className="brandlistdata">
                    <select name="cars" id="cars">{
                        brandlist.map((element, id)=>{
                            return(
                            <option value="volvo">{brandlist[id]}</option>
                            )
                        })
                    }
                    </select>
                </div>
            </div>
        </div>
      </div>
    </>
  )

}


export default Testthree
