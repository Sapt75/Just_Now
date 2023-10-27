import React, { useEffect, useState } from 'react';
import '../MostSearchedCarsTab/MostSearchedCarsTab.css';
import car1 from '../images/Most Searched Car/car-2.jpg';
import car2 from '../images/Most Searched Car/car-3.jpg';
import car3 from '../images/Most Searched Car/car-1.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import PopupClone2 from '../PopupLeadForm/Popupclone2';

function MostSearchedCarsTab() {

  const [data, setData] = useState([])
  const [price, setPrice] = useState([])



  const GetData = async () => {

    const res = await fetch(`/alldata`, {

      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    // console.log(data)

    setData(data)
  }

  async function getPrice() {
    const res = await fetch(`/most_price`, {

      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    setPrice(data)
  }

  function numFormat(value) {
    const val = Math.abs(value)
    if (val >= 10000000) return `${(value / 10000000).toFixed(2)} Crore`
    if (val >= 100000) return `${(value / 100000).toFixed(2)} Lakh`
    return value;
  }


  useEffect(() => {
    GetData()
    getPrice()
  }, [])





  return (
    <>
      <Tabs>
        <TabList className='mostsearchedcarstab'>
          <Tab>Prices</Tab>
          <Tab>Hatchback</Tab>
          <Tab>Sedan</Tab>
          <Tab>SUV</Tab>
          <Tab>MUV</Tab>
          <Tab>Coupe</Tab>
          <Tab>Luxury</Tab>
        </TabList>





        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {price.length > 0 ? price.map((item, index) => {
                return index <= 2 ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car1} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {price.map((itm) => {
                          return typeof (itm) === "object" ? itm.length > 0 ? itm.map((it) => {
                            return it.model_id === item.model_id ? <Link to={`/car-model/${item.brand}/${item.model_name}/${item.uid}/${item.model_id}`}><a href="/">₹ {numFormat(it.min_price)} - {numFormat(it.max_price)} </a><br /></Link> : null
                          }) : null : null
                        })}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}

            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "Hatchback" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car1} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}

            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "Sedan" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car3} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}
            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "SUV" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car2} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}
            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "MUV" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car2} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}
            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "Coupe" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car1} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}
            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel >
          <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="hatchback">
            <div className="row">
              {data.length > 0 ? data.map((item) => {
                return item.body_type === "Luxury" ? <div className="col-lg-4 col-md-4 col-6">
                  <div className="car-box">
                    <div className="car-thumbnail">
                      <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`} className="car-img">
                        <img className="d-block w-100" src={car1} alt="car" />
                      </Link>
                    </div>
                    <div className="detail">
                      <h1 className="title">
                        <Link state={{
                        uniqueId: item.uid,
                        model_id: item.model_id
                      }} to={`/new-cars/${item.brand.toLowerCase().replace(/ /g, '-')}/${item.model_name.toLowerCase().replace(/ /g, '-')}`}>{item.brand} {item.model_name}</Link><br />
                        {/* <a href="/">Rs4.25 - 5.65 Lakhs</a><br /> */}
                        <PopupClone2 page={"filter"} model={item.model_name} brand={item.brand} transmission={item.transmission_type} fuel={item.fuel_type} />
                      </h1>
                    </div>
                  </div>
                </div> : null
              }) : null}
            </div>
            {/* <div className=" text-center showallbtn pb-3">
              <button>View All</button>
            </div> */}
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

export default MostSearchedCarsTab
