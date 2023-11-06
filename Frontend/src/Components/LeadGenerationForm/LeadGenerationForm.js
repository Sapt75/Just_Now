import React, { useState } from 'react';
import './LeadGenerationForm.css';
import { useNavigate } from 'react-router-dom';
import Edit from '../images/icons/edit.png';
import locationContext from '../../context/LocationContext';

function LeadGenerationForm(props) {


    const context = React.useContext(locationContext)

    let { location } = context

    const navigate = useNavigate();

    const [show, setShow] = useState()



    async function handleSubmit(e) {
        e.preventDefault()
        let { name, phone, email, pincode, postoffice } = e.target

        console.log(postoffice)

        let data = await fetch("/price_query", {
            method: "POST",
            body: JSON.stringify({
                name: name.value,
                phone: phone.value,
                pincode: pincode.value,
                car: `${props.value === "one" ? `${props.brand} ${props.model}` : `${props.brand} ${props.model} ${props.version} ${props.fuel} ${props.transmission}`} `
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.text()

        window.alert(response)
        props.close(false)
        navigate(`/${props.brand}/${props.model}/${location}`, {
            state: {
              model: props.model_id,
              version: props.version_id
            }
          })
    }

    async function pincodeData(e) {
        if (e.target.value.toString().length >= 6) {
            let data = await fetch(`/pincode_details/${e.target.value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let response = await data.json()
            setShow(response)
        } else {
            console.log(e.target.value)
        }

    }




    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="leadform-box my-4">
                        <div className="leadform-title d-flex">
                            <h3 className="g-h3 g-bold">{props.brand} {props.model} {props.version} {props.fuel} {props.transmission}</h3>
                            <button className='g-link-button g-underline d-none'><img src={Edit} alt="edit" /> Change Version</button>
                        </div>
                        <div className="leadform-form">
                            <form onSubmit={handleSubmit}>
                                <div className="name d-flex my-3">
                                    <label className='w-50' htmlFor="fname ">Name:</label>
                                    <input autoComplete required className='w-50' type="text" id="name" name="name" ></input>
                                </div>
                                <div className="mobile-number d-flex my-3">
                                    <label className='w-50' htmlFor="lname">Mobile Number:</label>
                                    <input autoComplete required className='w-50' type="number" id="phone" name="phone"></input>
                                </div>
                                <div className="pincode my-3">
                                    <label className='w-50' htmlFor="lname">Pincode:</label>
                                    <input autoComplete onChange={pincodeData} required className='w-50' type="number" id="pincode" name="pincode" ></input>
                                </div>
                                <div className="postofficeadd mb-5">
                                    <h4 className="g-h4">Select Post Office Name:</h4>
                                    <div className="addinfo mt-2 mb-4">
                                        {show ? show.map((item, index) => {
                                            return (<div>
                                                <input type="radio" value={`add${index}`} name="postoffice" /> {item.postoffice_name} , {item.City}, {item.State}, {item.pincode}
                                            </div>)
                                        }) : <div>
                                            <div>
                                                <input type="radio" value="add1" name="postoffice" /> Liberty Garden S.O, Walad West, Mumbai, Maharashtra, 400064
                                            </div>
                                            <div>
                                                <input type="radio" value="add2" name="postoffice" /> Malad S.O, Malad West, Mumbai, Maharashtra, 400064
                                            </div>
                                            <div>
                                                <input type="radio" value="add3" name="postoffice" />Malad West Dely S.O, Malad West, Mumbai, Maharashtra, 400064
                                            </div>
                                        </div>}

                                    </div>
                                    <div className="form-submit-button"><input className='w-100 blue-background-btn border-0 py-2' type="submit" value="Submit"></input></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadGenerationForm