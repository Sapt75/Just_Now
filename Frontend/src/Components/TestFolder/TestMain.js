import { IKContext, IKImage } from 'imagekitio-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Brand2 from '../images/Brand Logos/brand-2.png';
// import Brand3 from '../images/Brand Logos/brand-3.png';
// import Brand4 from '../images/Brand Logos/brand-4.png';
// import Brand5 from '../images/Brand Logos/brand-5.png';
// import Brand6 from '../images/Brand Logos/brand-6.png';
// import Brand7 from '../images/Brand Logos/brand-7.png';
// import Brand8 from '../images/Brand Logos/brand-8.png';
// import Brand9 from '../images/Brand Logos/brand-9.png';
// import Brand10 from '../images/Brand Logos/brand-10.png';

const TestMain = (props) => {


  const [gbrand, setBrand] = useState([])
  const [show, setShow] = useState(false)


  async function GBrand() {
    let data = await fetch(`/car_brands/${true}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    setBrand(response)
  }

  async function getAgain() {
    let data = await fetch(`/car_brands/${false}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    let response = await data.json()

    let newDat = gbrand.concat(response)
    let dat = newDat.filter((value, index, self) => {
      return index === self.findIndex((t) => {
        return t == value
      })
    })
    setBrand(dat)
  }


  const navigate = useNavigate()

  const handleOnclick = (brandname) => {
    navigate(`/new-cars/${brandname.toLowerCase().replace(" ", "-")}`);
  };
  // "Hello " + brandname;

  useEffect(() => {
    GBrand()
  }, []);


  return (
    <div className="container">
      <div className="row text-center">

        {gbrand.length > 0 ? gbrand.map((item, id) => {
          return <button key={id} className={`${id + 1 > 10 && show == false ? "d-none" : null} logo-view bg-white border-0`} onClick={() => handleOnclick(item)}>
            <div className="col col-xs-4">
              <div className="brand-box">
              <IKContext
                  publicKey="public_lzmiZh6Ro/q1w/s4jWGPmaB7L4Q="
                  urlEndpoint="https://ik.imagekit.io/GORP"
                  transformationPosition="path"
                >

                  <IKImage width={80} className="d-block mx-auto" alt={item.toLowerCase()} path={`/Logos/${item}.jpg`} />

                </IKContext>
                <h5>{item}</h5>
              </div>
            </div>
          </button>
        }) : null}
        <div className="showallbtn pb-3">
          <button onClick={() => {
            if (show === true) {
              GBrand()
              setShow(false)
            } else {
              getAgain()
              setShow(true)
            }
          }}>Show all Brands</button>
        </div>
      </div>
    </div>
  )
}

export default TestMain