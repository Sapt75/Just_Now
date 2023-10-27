import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TestBody = (props) => {

    const [type, setType] = useState([])
    const [show, setShow] = useState(false)
    

    let { status, val } = props

    const usenav = useNavigate();
    let e = document.getElementById("ddlViewBy");
    function onChnge() {
        usenav(`/filter/${val}/${e.value}`)
        window.location.reload()
    }


    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        let data = await fetch('/all_body_types', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setType(response)
    }


    return (
        <>
            {status ? <form >
                <select className='w-100 p-2' onChange={onChnge} id="ddlViewBy">
                    <option value="none" defaultValue>Select an Option</option>
                    {type.map((item) => {
                        return <option value={`${item[val]}`}>{item[val]}</option>
                    })}
                </select>
            </form> : <div class={`o-cpnuEd o-XylGE o-NBTwp o-bdduDt o-bqHweY o-eNbQSA o-deKpZW o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzptUA o-daXxmY o-ItVGT o-YCHtV o-bIMsfE o-eKWNKE JpQF6d snipcss-TC3A5`}>
                {type.length > 0 ? type.map((item, id) => {
                    return (item !== null ? <Link key={id} to={`/cars/body-type/${item.replace(" ", "-").toLowerCase()}-cars`} class={`${id+1 > 10 && show == false ? "d-none": null} o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp o-dbKqqe o-GFmfi o-dgwiHy P4lFuA S7olNQ`} data-action="BodyTypeTabClick" data-label="SUV-Click">
                        <div class="o-cpnuEd o-dsiSgT mob">
                            <div class="f6c6UW">
                                <div class="o-bqHweY o-bfyaNx o-brXWGL OW5DVf ">
                                    <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src={`https://imgd.aeplcdn.com/0x0/cw/body/svg/${item === "Luxury" || item === "Minivan" || item === "Pickup Truck" ? "suv" : item.toLowerCase()}_clr.svg?v=1`} alt={`${item}`} title={`${item}`} />
                                </div>
                            </div>
                            <span class="o-fznJEv o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                                {item}
                            </span>
                        </div>
                        <svg class="o-dlrcWp svg1 o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                            <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                            </path>
                        </svg>
                    </Link>:null)
                }) : null}
                
            </div>}
        </>

    )
}

export default TestBody