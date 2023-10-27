import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TestFuel = (props) => {

    const [type, setType] = useState([])
    const [show, setShow] = useState(false)

    let { status, val } = props


    useEffect(() => {

        getData()

    }, [])

    const usenav = useNavigate();
    let e = document.getElementById("ddlViewBy");
    function onChnge() {
        usenav(`/filter/${val}/${e.value}`)
        window.location.reload()
    }

    async function getData() {
        let data = await fetch('/all_fuel_types', {
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
            </form> : <div class={`o-eNbQSA o-deKpZW o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzptUA o-daXxmY o-ItVGT o-YCHtV o-bIMsfE o-eKWNKE JpQF6d o-cpnuEd o-XylGE o-NBTwp o-bdduDt o-bqHweY snipcss-AEICA`}>
                {type.length > 0 ? type.map((item, id) => {
                    return (item !== null ? <Link to={`/cars/fuel-type/${item.toLowerCase()}-cars`} class={`${id + 1 > 10 && show == false ? "d-none" : null} o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp o-dbKqqe o-GFmfi o-dgwiHy P4lFuA S7olNQ`} data-action="FuelTypeTabClick" data-label="Petrol-Click">
                        <div class="o-cpnuEd o-dsiSgT fuel">
                            <div class="mjz49c o-wOuZD">
                                <div class="o-brXWGL o-bqHweY o-OisZk o-frwuxB ME7bfG o-fuiuOo o-bfyaNx o-eYMbrh  o-brXWGL RQ1ljp o-bfyaNx" data-hover="true" data-selected="false">
                                    <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR ">
                                        <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src={`https://imgd.aeplcdn.com/0x0/cw/fuel/svg/${item.toLowerCase()}.svg?v=1`} alt={`${item}`} title={`${item}`} />
                                    </div>
                                    <span class="o-bfyaNx o-eurOBO o-bCRRBE o-bXKmQE o-bwUciP">
                                    </span>
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
                    </Link> : null)
                }) : null}



                {/* <a href="/new/best-diesel-cars/" class="o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp o-dbKqqe o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="FuelTypeTabClick" data-label="Diesel-Click">
                <div class="o-cpnuEd o-dsiSgT">
                    <div class="mjz49c o-wOuZD">
                        <div class="o-brXWGL o-bqHweY o-OisZk o-frwuxB ME7bfG o-fuiuOo o-bfyaNx o-eYMbrh  o-brXWGL RQ1ljp o-bfyaNx" data-hover="true" data-selected="false">
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR ">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/diesel.svg?v=1" alt="Diesel" title="Diesel" />
                            </div>
                            <span class="o-bfyaNx o-eurOBO o-bCRRBE o-bXKmQE o-bwUciP">
                            </span>
                        </div>
                    </div>
                    <span class="o-fznJEv o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                        Diesel
                    </span>
                </div>
                <svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                    <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                    </path>
                </svg>
            </a>
            <a href="/new/best-cng-cars/" class="o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer  o-dbKqqe o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="FuelTypeTabClick" data-label="CNG-Click">
                <div class="o-cpnuEd o-dsiSgT">
                    <div class="mjz49c o-wOuZD">
                        <div class="o-brXWGL o-bqHweY o-OisZk o-frwuxB ME7bfG o-fuiuOo o-bfyaNx o-eYMbrh  o-brXWGL RQ1ljp o-bfyaNx" data-hover="true" data-selected="false">
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR ">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/cng.svg?v=1" alt="CNG" title="CNG" />
                            </div>
                            <span class="o-bfyaNx o-eurOBO o-bCRRBE o-bXKmQE o-bwUciP">
                            </span>
                        </div>
                    </div>
                    <span class="o-fznJEv o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                        CNG
                    </span>
                </div>
                <svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                    <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                    </path>
                </svg>
            </a>
            <a href="/new/electric-cars/" class="o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp  o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="FuelTypeTabClick" data-label="Electric-Click">
                <div class="o-cpnuEd o-dsiSgT">
                    <div class="mjz49c o-wOuZD">
                        <div class="o-brXWGL o-bqHweY o-OisZk o-frwuxB ME7bfG o-fuiuOo o-bfyaNx o-eYMbrh  o-brXWGL RQ1ljp o-bfyaNx" data-hover="true" data-selected="false">
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR ">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/electric.svg?v=1" alt="Electric" title="Electric" />
                            </div>
                            <span class="o-bfyaNx o-eurOBO o-bCRRBE o-bXKmQE o-bwUciP">
                            </span>
                        </div>
                    </div>
                    <span class="o-fznJEv o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                        Electric
                    </span>
                </div>
                <svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                    <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                    </path>
                </svg>
            </a>
            <a href="/new/best-hybrid-cars/" class="o-cpnuEd o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp  o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="FuelTypeTabClick" data-label="Hybrid-Click">
                <div class="o-cpnuEd o-dsiSgT">
                    <div class="mjz49c o-wOuZD">
                        <div class="o-brXWGL o-bqHweY o-OisZk o-frwuxB ME7bfG o-fuiuOo o-bfyaNx o-eYMbrh  o-brXWGL RQ1ljp o-bfyaNx" data-hover="true" data-selected="false">
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR ">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/fuel/svg/h-filter-without-background.svg?v=2" alt="Hybrid" title="Hybrid" />
                            </div>
                            <span class="o-bfyaNx o-eurOBO o-bCRRBE o-bXKmQE o-bwUciP">
                            </span>
                        </div>
                    </div>
                    <span class="o-fznJEv o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                        Hybrid
                    </span>
                </div>
                <svg class="o-dlrcWp o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                    <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                    </path>
                </svg>
            </a> */}
            </div>}

        </>

    )
}

export default TestFuel