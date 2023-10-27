import React, { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './inputpop.css'
import locationContext from '../../context/LocationContext';
import { Link } from 'react-router-dom';


function InputPop() {

    const [show, setShow] = useState([])



    const handleClose = () => setShowInp(false);

    const context = React.useContext(locationContext)

    let { showInp, setShowInp } = context

    async function handleInput(e) {
        let data = await fetch(`/car-search/${e.target.value}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        res.unshift(`All ${res[0].brand} Cars`)
        console.log(res)
        setShow(res)
    }




    return (
        <>
            <Modal className='lead-form-popup' show={showInp} onHide={handleClose}>
                <Modal.Header className='pad1' style={{ position: 'relative', overflowX: "hidden", backgroundColor: "#efefef" }} closeButton>
                    <Modal.Title>
                        <div className="black"><h3 className="mt-2 mb-4 fw-bold fs-5">Select Your Car</h3></div>
                    </Modal.Title>
                    <div class="o-bXKmQE o-bwUciP absolute o-eZxiNd o-eASyWY o-ctIjcA xtJusF snipcss-QyHPS">
                    </div>
                </Modal.Header>
                <Modal.Body className='lead-form-full inp-pad pad1 px-0 py-0'>
                    <input onChange={handleInput} className='w-100 form-control banner-search-form banner-search-input-field text-dark text-center rounded-0' type="text" placeholder='Enter Your Car' />
                    <ul className={`${show.length <= 0 ? "d-none" : "null"} search-list bg-white pt-1`}>
                        {show.length > 0 ? show.map((element) => {
                            if (typeof (element) !== "string") {
                                return (<Link to={`/new-cars/${element.brand.toLowerCase().split(" ").join("-")}/${element.model_name.toLowerCase().split(" ").join("-")}`} >
                                    <li>{element.brand}&nbsp;{element.model_name}</li>
                                </Link>)
                            } else {
                                return (<Link to={`/new-cars/${element.split(" ")[1].toLowerCase()}`} >
                                    <li>{element}</li>
                                </Link>)
                            }

                        }) : null}
                    </ul>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default InputPop
