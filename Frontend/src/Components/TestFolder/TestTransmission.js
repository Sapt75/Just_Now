import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TestTransmission = (props) => {


    let { status, val } = props

    const usenav = useNavigate();
    let e = document.getElementById("ddlViewBy");
    function onChnge() {
        usenav(`/filter/${val}/${e.value}`)
        window.location.reload()
    }



    return (
        <>
            {status ? <form >
                <select className='w-100 p-2' onChange={onChnge} id="ddlViewBy">
                    <option value="none" defaultValue>Select an Option</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>
            </form> : <div class="o-eNbQSA o-deKpZW o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzptUA o-daXxmY o-ItVGT o-YCHtV o-bIMsfE o-eKWNKE JpQF6d o-cpnuEd o-XylGE o-NBTwp o-bdduDt o-bqHweY snipcss-S5dwf">
                <Link to="/cars/transmission-type/automatic-cars" class="o-cpnuEd trns2 o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp  o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="TransmissionTypeTabClick" data-label="Automatic-Click">
                    <div class="o-cpnuEd o-dsiSgT trns">
                        <div class="o-brXWGL
                  mjz49c o-Axjks">
                            <div class="X0yy0d o-fDxrLd o-XrhZI o-eYMbrh o-bXKmQE o-fuiuOo">
                            </div>
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR o-cXBIhK">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/transmission/svg/automatic_clr.svg?v3.0" alt="Automatic" title="Automatic" />
                            </div>
                            <span class="o-eCLGQS o-emJYLF o-bfyaNx o-bXKmQE o-edUBXX">
                            </span>
                        </div>
                        <span class="o-fznJEv trns3 o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                            Automatic
                        </span>
                    </div>
                    <svg class="o-dlrcWp svg1 o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                        <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                        </path>
                    </svg>
                </Link>
                <Link to="/cars/transmission-type/manual-cars" class="o-cpnuEd trns2 o-bUVylL o-bqHweY o-brXWGL o-dsiSgT o-edUBXX o-dxBGDP o-fzptZB o-czsMOo o-fzptOP o-cOtEaW o-fzptVd o-vInIC o-fzptYr o-bOkGro o-ItVGT o-cRSqer o-cKSifp  o-GFmfi o-dgwiHy P4lFuA S7olNQ" data-action="TransmissionTypeTabClick" data-label="Manual-Click">
                    <div class="o-cpnuEd o-dsiSgT trns txt1">
                        <div class="o-brXWGL im1
                  mjz49c o-Axjks">
                            <div class="X0yy0d o-fDxrLd o-XrhZI o-eYMbrh o-bXKmQE o-fuiuOo">
                            </div>
                            <div class="o-bqHweY o-bfyaNx o-brXWGL dGcAoR o-cXBIhK">
                                <img class="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI" src="https://imgd.aeplcdn.com/0x0/cw/transmission/svg/manual_clr.svg?v3.0" alt="Manual" title="Manual" />
                            </div>
                            <span class="o-eCLGQS o-emJYLF o-bfyaNx o-bXKmQE o-edUBXX">
                            </span>
                        </div>
                        <span class="o-fznJEv trns3 o-eemiLE o-eZTujG o-eqqVmt o-tvvmc">
                            Manual
                        </span>
                    </div>
                    <svg class="o-dlrcWp svg1 o-eoatGj o-cqgkZn o-euTeMg o-bVnkiJ o-eurOBO o-cpNAVm o-dsJzhG" viewBox="0 0 16 16" fill="currentcolor" tabindex="-1" focusable="false" aria-hidden="true" role="img">
                        <path d="M4.35 15.8a.47.47 0 01-.35-.15.48.48 0 010-.65l6.94-7L4 1.05a.48.48 0 010-.7.48.48 0 01.7 0l7.3 7.3a.48.48 0 010 .7l-7.3 7.3a.47.47 0 01-.35.15z">
                        </path>
                    </svg>
                </Link>
            </div>}
        </>


    )
}

export default TestTransmission