import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function Specifications(props) {


  const [cardetails, setcardetails] = useState([])

  function titleCase(str) {
    return str.toLowerCase().split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  }

  console.log(props.model, props.version )

  const GetData = async () => {
    const res = await fetch(`/getnewonecardata/${props.model}/${props.version.split("-").join(" ")}`, {
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
      setcardetails(data)
      // window.alert("City Updated");
      console.log("car data sucess");

      // navigate("/car-price-details");
    }

  }


  useEffect(() => {
    GetData();
  }, []);




  return (
    <Accordion>
      {cardetails.length > 0 ? <>

        {Object.keys(cardetails[0].Specifications).map((item, index) => {
          return (<>
            <Accordion.Item eventKey={`${index}`}>
              <Accordion.Header><b>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</b></Accordion.Header>
              <Accordion.Body>
                {Object.keys(cardetails[0].Specifications[item]).map((itm) => {
                  return (<div className={`row spec-data ${cardetails[0].Specifications[item][itm] === "NULL" ? 'd-none' : 'd-flex'}`}>
                    <div className='col-6'>{titleCase(itm.replace("_", " ").replace("_", " ").replace("_", " "))}</div>
                    <div className='col-6 '>{cardetails[0].Specifications[item][itm] === "NULL" ? <p className='m-0'>Not Available</p> : cardetails[0].Specifications[item][itm]}</div>
                  </div>)
                })}
              </Accordion.Body>
            </Accordion.Item>
          </>)
        })}
      </> : null
      }
    </Accordion >
  )
}

export default Specifications
