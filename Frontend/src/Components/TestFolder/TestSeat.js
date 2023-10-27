import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const TestSeat = (props) => {


    const [type, setType] = useState([])

    let { status, val } = props

    useEffect(() => {

        getData()

    }, [])

    async function getData() {
        let data = await fetch('/all_seating_types', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setType(response)
    }

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
                    {type.map((item) => {
                        return <option value={`${item[val]}`}>{item[val]} Seater</option>
                    })}
                </select>
            </form> : <div class="o-eNbQSA o-deKpZW o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzptUA o-daXxmY o-ItVGT o-YCHtV o-bIMsfE o-eKWNKE JpQF6d o-cpnuEd o-NBTwp o-bdduDt o-XylGE o-fzptVd o-eqgCmh o-fzptYr o-fzoHFO o-czsMOo o-fzoHCA o-fraaKH snipcss-VJ64U">
                {type.length > 0 ? type.map((item, id) => {

                    return (item.seating_capacity !== null ? <Link key={id} to={`/cars/seating-capacity/${item.seating_capacity.toLowerCase()}-seater-cars`} class={`o-fzpimR o-chNNuk o-fzpibr o-dueWSB o-bdcbXd o-etJcWT o-bdcckP o-evuuYC o-bqHweY o-brXWGL o-ItVGT o-bIMsfE o-dpkFbu o-dDakvE o-dAFptd o-dREpvZ o-cpnuEd o-dsiSgT o-bCRRBE o-eemiLE o-cYdrZi o-fznVqX o-fuAKXP o-fznVsN o-dLFWTz o-fzpihY o-cWzten o-fzpilm o-bjRfrx o-bzsJdq o-dkFSTZ o-tvvmc o-eqqVmt Isz1AT`} title={`${item.seating_capacity} Seater`} data-action="SeatingCapacityTabClick" data-label={`${item.seating_capacity} seater-Click`}>
                        {item.seating_capacity} Seater
                    </Link> : null)


                }) : null}

            </div>}
        </>

    )
}

export default TestSeat