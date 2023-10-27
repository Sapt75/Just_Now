import React, { useEffect, useState } from 'react'
import DealerModal from './dealerModal/dealerModal'
import DealerModalDel from './dealerModal/dealerdel'




const Dealer = () => {

    const [brand, setBrand] = useState([])
    const [city, setCity] = useState([])
    const [data, setData] = useState([])


    async function getBrand() {
        let data = await fetch(`/car_brand_admin`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setBrand(res)
    }

    async function getCityData() {
        let data = await fetch('/city_names', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let response = await data.json()
        setCity(response)
    }


    async function handelChange(e) {

        e.preventDefault()

        let data = await fetch('/admin_dealers', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                city: e.target.city.value,
                brand: e.target.brand.value
            })
        })

        let res = await data.json()
        setData(res)
    }





    useEffect(() => {
        getBrand()
        getCityData()
    }, [])



    return (
        <>
            <h1 className='m-[4rem]'>Select Brand and City to Proceed</h1>

            <div className='m-[4rem]'>
                <form onSubmit={handelChange}>
                    <select className='py-[1rem] px-[3rem] mr-[5rem]' name="brand">
                        <option value="select">Select</option>
                        {brand ? brand.map((item) => {
                            return (<option value={item.brand}>
                                {item.brand}
                            </option>)
                        }) : null}

                    </select>

                    <select className='py-[1rem] px-[3rem] mr-[5rem]' name="city">
                        <option value="select">Select</option>
                        {city ? city.map((item) => {
                            return (<option value={item['City Name']}>
                                {item['City Name']}
                            </option>)
                        }) : null}

                    </select>


                    <button type='submit' className='px-20 py-8 bg-purple-600 text-white mx-6 rounded-20'>Submit</button>

                </form>
            </div>
            <div className='flex justify-end m-20'>
                <DealerModal />
            </div>
            <table className='m-[5rem]'>
                <thead>
                    <tr className='border-b-1 border-solid border-black text-center'>
                        <td className='pb-12'>Brand Name</td>
                        <td className='pb-12'>State</td>
                        <td className='pb-12'>City</td>
                        <td className='pb-12'>Dealer</td>
                        <td className='pb-12'>Number</td>
                        <td className='pb-12'>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? data.map((item, index) => {
                        return (<tr key={index} className='text-center'>
                            <td className='py-12'>{item.brand_name}</td>
                            <td className='py-12'>{item.state}</td>
                            <td className='py-12'>{item.city_name}</td>
                            <td className="py-12">{item.dealer_name}</td>
                            <td className="py-12">{item.phone ? item.phone : "NA"}</td>
                            <td className='py-12 flex justify-center space-x-5'>

                                <DealerModal status={true} item={item} />
                                <DealerModalDel item={item} />
                            </td>
                        </tr>)
                    }) : null}
                </tbody>
            </table>
        </>
    )
}

export default Dealer