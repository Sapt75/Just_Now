import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './price_model.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import React, { useEffect, useState } from 'react';

function MyVerticallyCenteredModal(props) {

    const [breakk, setBreakk] = useState([])
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        getPrice()
    }, [])



    async function getPrice() {
        let price_data = await fetch(`/pricedetail/${props.data}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })



        let price_response = await price_data.json()

        price_response == "No Data" ? setBreakk([]) : setBreakk(price_response)
    }

    return (
        <Modal
            className='price'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Price Break Down
                </Modal.Title>
            </Modal.Header>
            {breakk.length > 0 ? <Modal.Body>
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '15px', color: '#484848' }}>
                    <li>Ex-Showroom Price <InfoOutlinedIcon sx={{fontSize: 20, color: '#d77904'}} /></li>
                    <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].ex_showroom_price}</li>
                </ul>
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '15px', color: '#484848' }}>
                    <li>Registration Charges</li>
                    <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].registeration_charges}</li>
                </ul>
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '15px', color: '#484848' }}>
                    <li>Insurance</li>
                    <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].insurance}</li>
                </ul>
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '15px', color: '#484848' }}>
                    <li>RTO Charges</li>
                    <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].rto}</li>
                </ul>
                <div style={{backgroundColor: '#f9f9f9', padding: '1rem 0.5rem'}} className={`${show ? "d-block" : "d-none"}`}>
                    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '13px', color: '#484848' }}>
                        <li>Fast Tag Charges</li>
                        <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].fastag}</li>
                    </ul>
                    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '13px', color: '#484848' }}>
                        <li>Hypothecation Charges</li>
                        <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {breakk[0].hypothecation_charges}</li>
                    </ul>
                    <hr />
                    <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '13px', color: '#484848' }}>
                        <li>Total Other Charges</li>
                        <li><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {parseInt(breakk[0].hypothecation_charges)+parseInt(breakk[0].fastag)}</li>
                    </ul>
                </div>
                <p style={{color: '#0288d1', fontSize: '13px', fontWeight: 700, cursor: 'pointer'}} onClick={()=> {
                    show ? setShow(false) : setShow(true)
                    open ? setOpen(false) : setOpen(true)
                }}>Show Detailed Price Breakup {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownIcon /> }</p>
                
                <hr />
                <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none', padding: 0, fontSize: '15px', color: '#484848' }}>
                    <li>On Road Price in Bangalore <InfoOutlinedIcon sx={{fontSize: 20, color: '#d77904'}} /></li>
                    <li style={{color: 'black', fontWeight: 600}}><CurrencyRupeeOutlinedIcon sx={{fontSize: 15}} /> {parseInt(breakk[0].ex_showroom_price) + parseInt(breakk[0].insurance) + parseInt(breakk[0].rto) + parseInt(breakk[0].fastag) + parseInt(breakk[0].hypothecation_charges)}</li>
                </ul>
            </Modal.Body> : <p>No Data</p>}
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function PriceModal(props) {
    const [modalShow, setModalShow] = React.useState(false);





    return (
        <>
            <button className='g-link-button g-underline' onClick={() => setModalShow(true)}>
                View Price Breakup
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                data={props.id}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default PriceModal