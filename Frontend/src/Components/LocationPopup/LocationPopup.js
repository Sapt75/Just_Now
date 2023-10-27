import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './LocationPopup.css'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import locationContext from '../../context/LocationContext';
import locationicon from '../images/icons/locationicon.png';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

function LocationPopup() {


    const [code, setCode] = useState([])
    const [icon, showIcon] = useState(false)

    const context = React.useContext(locationContext)

    let { setLocation, setpinn, location, pop, showPop, showLoc, setShowLoc, det } = context

    const handleClose = () => setShowLoc(false);
    const handleShow = () => setShowLoc(true);

    const navg = useNavigate()



    async function pincodeData(e) {
        if (!isNaN(e.target.value)) {
            let data = await fetch(`/pincode_details/${e.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let response = await data.json()
            setCode(response)
        } else {
            let data = await fetch(`/pincode_details/${e.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let response = await data.json()
            setCode(response)

        }
    }


    const boldString = (str, query) => {

        const n = str ? str.toUpperCase() : null;
        const q = query ? query.toUpperCase() : null;
        const x = n.indexOf(q);
        if (!q || x === -1) {
            return str; // bail early
        }
        const l = q.length;
        return <span>
            {str.substr(0, x)}<b>{str.substr(x, l)}</b>{str.substr(x + l)}
        </span>

    }






    return (
        <>
            <div style={{ position: "relative" }}>
                <Button onClick={handleShow} className='g-button border-0 py-2'><img className='locationicon' src={locationicon} alt="location icon" /></Button>
                {window.innerWidth > 600 ? <p style={{ position: "absolute", lineHeight: 1.5 }} className={`pop  ${pop ? "d-block" : "d-none"}`}><span style={{ fontSize: "10px" }}>
                    Current Location :
                </span> <br /> <span style={{ fontSize: "16px" }}>
                        {location}
                    </span></p> : <p style={{ position: "absolute", lineHeight: 1.5 }} className={`pop2 ${pop ? "d-block" : "d-none"}`}><span style={{ fontSize: "10px" }}>
                        Current Location :
                    </span> <br /> <span style={{ fontSize: "16px" }}>
                        {location}
                    </span></p>}

                <div className={`aler ${icon ? "d-block" : "d-none"}`}></div>
            </div>


            <Modal className='lead-form-popup' show={showLoc} onHide={handleClose}>
                <Modal.Header className='pad1' style={{ position: 'relative', overflowX: "hidden", backgroundColor: "#efefef" }} closeButton>
                    <Modal.Title>
                        <div className="black"><h3 className="mt-2 mb-4 fw-bold fs-5">Select Your Area</h3></div>
                    </Modal.Title>
                    <div class="o-bXKmQE view o-bwUciP absolute o-eZxiNd o-eASyWY o-ctIjcA xtJusF snipcss-QyHPS">
                    </div>
                </Modal.Header>
                <Modal.Body className='lead-form-full pad1 py-0 pe-0'>
                    {/* <LeadGenerationForm brand={props.brand} model={props.model} close={setShow} value="one" /> */}
                    <div className='mbody'>
                        <input autoComplete="none" onChange={pincodeData} id='pcode' className='input1' type="text" placeholder='Type Your Pincode or City' />
                        <div className='d-flex loc'>
                            <GpsFixedIcon className='ms-2 my-2' color='primary' />
                            <p className='m-2' style={{ fontSize: "1rem", color: "#1976d2" }}>Detect My Location</p>
                        </div>
                    </div>
                    {code.length > 0 ? <div className='my-3'>
                        <p style={{ fontSize: "16px" }} className='fw-bold mb-1'>Areas in {code.length > 0 ? code[0].City : null}</p>
                        <ul className='list px-0 pb-4'>
                            <div className='pad2'>
                                {code.map((item, index) => {
                                    return <li key={index} id={item.City} className='locli' onClick={(e) => {
                                        let dot = window.location.href.split("/")
                                        let c = ""

                                        
                                        sessionStorage.setItem("city", item.City)
                                        setLocation(item.City)
                                        sessionStorage.setItem("pin", item.pincode)
                                        setpinn(item.pincode)
                                        setShowLoc(false)
                                        showPop(true)
                                        showIcon(true)
                                        setTimeout(() => showPop(false), 3000)
                                        if (det != "initial") {
                                            dot.map((item, index) => {
                                                if (index > 2 && index < dot.length - 1) {
                                                    c = c + `/${item}`
                                                }
                                            })
                                            navg(`${c}/${e.target.id ? `price-in-${e.target.id.toLowerCase().replace(/ /g, "-")}` : `price-in-${item.City.toLowerCase().replace(/ /g, "-")}` }`, {
                                                state: {
                                                    model: det ? det.model : null,
                                                    version: det ? det.version : null
                                                }
                                            })
                                        }

                                    }}>{item.postoffice_name.split("S.O")[0]} - {typeof (item.City) === "string" ? boldString(item.City, document.getElementById('pcode') ? document.getElementById('pcode').value : null) : null}, {typeof (item) === "string" ? `${item.State.charAt(0) + item.State.slice(1).toLowerCase()}, ` : null}
                                        {/* {document.getElementById('pcode').value.split("").map((itm) => { */}

                                        <span>
                                            {boldString(item.pincode.toString(), document.getElementById('pcode') ? document.getElementById('pcode').value : null)}
                                        </span>
                                        {/* <span id='pbold'>
                                            {item.pincode.toString().split("").map((item, index) => {
                                                return document.getElementById("pcode").value.split("").map((itm) => {
                                                    if(item===itm){
                                                        return <span className='fw-bolder'>{item}</span>
                                                    }else{
                                                        return item
                                                    }
                                                })
                                            })}
                                        </span> */}
                                    </li>
                                })}
                            </div>
                        </ul>
                    </div> : <div className='my-3'>
                        {/* <p style={{ fontSize: "16px" }} className='fw-bold mb-1'>Popular Areas in Mumbai</p> */}
                        {/* <ul className='list px-0 pb-4'>
                            <li onClick={() => {
                                setLocation("Mumbai")
                                setShowLoc(false)
                            }} className='locli'>Andheri (W) - Mumbai, 400053</li>
                            <li onClick={() => {
                                setLocation("Mumbai")
                                setShowLoc(false)
                            }} className='locli'>Andheri (E) - Mumbai, 400059</li>
                            <li onClick={() => {
                                setLocation("Mumbai")
                                setShowLoc(false)
                            }} className='locli'>Chembur - Mumbai, 400071</li>
                            <li onClick={() => {
                                setLocation("Mumbai")
                                setShowLoc(false)
                            }} className='locli'>Mulund (W) - Mumbai, 400080</li>
                            <li onClick={() => {
                                setLocation("Mumbai")
                                setShowLoc(false)
                            }} className='locli'>Borivali (W) - Mumbai, 400092</li>

                        </ul> */}
                    </div>}

                </Modal.Body>
            </Modal>
        </>
    )
}

export default LocationPopup
