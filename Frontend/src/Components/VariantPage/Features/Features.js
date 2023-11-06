import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


function Features(props) {

  const [cardetails, setcardetails] = useState([])

  const GetData = async () => {
    const res = await fetch(`/getnewonecardata/${props.model}/${props.version}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      console.log("Invalid Input");
    } else {
      setcardetails(data)
    }

  }

  function titleCase(str) {
    return str.toLowerCase().split(' ').map(x=>x[0].toUpperCase()+x.slice(1)).join(' ');
  }


  useEffect(() => {
    GetData();
  }, []);



  return (
    <Accordion>
      {cardetails.length > 0 ? <>

        {Object.keys(cardetails[0].Features).map((item, index) => {
          return (<>
            <Accordion.Item eventKey={`${index}`}>
              <Accordion.Header><b>{titleCase(item.replace("_", " ").replace("_", " ").replace("and", "&"))}</b></Accordion.Header>
              <Accordion.Body>
                {Object.keys(cardetails[0].Features[item]).map((itm) => {
                  return (<div className={`row spec-data ${cardetails[0].Features[item][itm] === null ? 'd-none' : 'd-flex'}`}>
                    <div className='col-6'>{titleCase(itm.replace("_", " ").replace("_", " ").replace("_", " "))}</div>
                    <div className='col-6 '>{cardetails[0].Features[item][itm] === null ? <p className='m-0'>Not Available</p> : cardetails[0].Features[item][itm]}</div>
                  </div>)
                })}
              </Accordion.Body>
            </Accordion.Item>
          </>)
        })}
      </> : null}

    </Accordion>
  )
}

export default Features
