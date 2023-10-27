import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const TestPrice = () => {

    const [show, setShow] = useState(false)

    let prices = ["Under 5 Lakh", "Under 6 Lakh", "Under 7 Lakh", "Under 8 Lakh", "Under 10 Lakh", "Under 15 Lakh", "Under 20 Lakh", "Under 25 Lakh", "Under 30 Lakh"]
    // "Luxury Cars"

    return (
        <>
            <div class={`o-eNbQSA o-deKpZW o-fznJEv o-chNNuk o-fznJFh o-cPFhqO o-fzptUA o-daXxmY o-ItVGT o-YCHtV o-bIMsfE o-eKWNKE JpQF6d o-cpnuEd o-NBTwp o-bdduDt o-XylGE o-fzptVd o-eqgCmh o-fzptYr o-fzoHFO o-czsMOo o-fzoHCA o-fraaKH snipcss-4TOG8`}>
                {prices.map((item, id) => {
                    return (<Link key={id} to={`/new-car-price/price-upto-${item.split(' ')[1]}-lakh`} className={`${id + 1 > 10 && show == false ? "d-none" : null} o-fzpimR o-chNNuk o-fzpibr o-dueWSB o-bdcbXd o-etJcWT o-bdcckP o-evuuYC o-bqHweY o-brXWGL o-ItVGT o-bIMsfE o-dpkFbu o-dDakvE o-dAFptd o-dREpvZ o-cpnuEd o-dsiSgT o-bCRRBE o-eemiLE o-cYdrZi o-fznVqX o-fuAKXP o-fznVsN o-dLFWTz o-fzpihY o-cWzten o-fzpilm o-bjRfrx o-bzsJdq o-dkFSTZ o-tvvmc o-eqqVmt Isz1AT`} title={item} data-action="BudgetTabClick" data-label={`${item.toLowerCase()}-Click`}>
                        {item}
                    </Link>)
                })}
            </div>

        </>
    )
}

export default TestPrice