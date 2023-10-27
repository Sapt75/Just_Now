import React, { useEffect, useState } from 'react';
import StraightIcon from '@mui/icons-material/Straight';
import './GlobalInquiries.css';
import CalendarX from './calender';

function Inquiries() {


    const [queries, setQueries] = useState([]);
    const [type, setType] = useState("none")
    const [brand, setBrand] = useState([])
    const [filter, setFilter] = useState()

    const GetData = async (e) => {
        const res = await fetch("/queries/default", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            // alert("error");
            console.log("error");
        } else {
            setQueries(data)
            // alert("data added");
            console.log("get data");
        }
    }


    async function Sort(type) {
        let data = await fetch(`/queries/${type}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await data.json()
        setQueries(res)
    }

    async function getBrand() {
        let data = await fetch(`/all_brands`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()

        setBrand(res)

    }


    async function dateFilter(item) {
        let data = await fetch(`/date_filter`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        let res = await data.json()
        setQueries(res)
    }


    function timeStamp(element) {
        let day = new Date(element.createdAt).getUTCDate().toString().length <= 1 ? `0${new Date(element.createdAt).getUTCDate()}` : new Date(element.createdAt).getUTCDate()
        let month = (new Date(element.createdAt).getMonth() + 1).toString().length <= 1 ? `0${new Date(element.createdAt).getMonth()}` : new Date(element.createdAt).getMonth()
        let year = new Date(element.createdAt).getUTCFullYear()
        let hour = new Date(element.createdAt).getHours().toString().length <= 1 ? `0${new Date(element.createdAt).getHours()}` : new Date(element.createdAt).getHours()
        let minutes = new Date(element.createdAt).getMinutes().toString().length <= 1 ? `0${new Date(element.createdAt).getMinutes()}` : new Date(element.createdAt).getMinutes()
        let seconds = new Date(element.createdAt).getSeconds().toString().length <= 1 ? `0${new Date(element.createdAt).getSeconds()}` : new Date(element.createdAt).getSeconds()

        return (`${day}-${month}-${year} ${hour}:${minutes}:${seconds}`)
    }


    useEffect(() => {
        GetData()
        getBrand()
    }, [filter]);



    return (
        <>
            <div className="md:container md:mx-auto">
                <div className="manage inquiries-box">
                    <div className="manage inquiries-title-box p-20">
                        <div className="manage inquiries-title m-20 ">
                            <div className='flex justify-between relative'>
                                <h4 className='text-xl'>Inquiries</h4>
                                <div>
                                    {brand ? <select onChange={(e)=> setFilter(e.target.value)} className='px-10 py-4 mx-[3rem]'>
                                        <option>Select Brand</option>
                                        {brand.map((item, index) => {
                                            return (<option key={index} value={item.brand}>
                                                {item.brand}
                                            </option>)
                                        })}
                                    </select> : null}
                                    <CalendarX dateFilter={dateFilter} />
                                </div>
                            </div>
                            <div className="innerbox my-20 relative z-0">
                                <div className="inner-title-table-box bg-white p-20">
                                    <div className="tabletitle text-end">
                                        {/* <button className='border rounded py-5 px-10 my-10'>Add inquiries</button> */}
                                    </div>
                                    <div className="overflow-x-auto relative shadow-md mb-10">
                                        {queries.length <= 0 ? <p className='font-semibold text-lg text-red-500'>No Record for this date</p> : <table className="w-full text text-left text-gray-500 dark:text-gray-400">
                                            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="py-3 px-6">
                                                        Name
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Mobile
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Car
                                                    </th>
                                                    <th scope="col" className="py-3 px-6">
                                                        Pincode
                                                    </th>
                                                    <th onClick={() => {
                                                        if (type === "none") {
                                                            setType("ascending")
                                                            Sort(type)
                                                        } else if (type === "ascending") {
                                                            setType("descending")
                                                            Sort(type)
                                                        } else if (type === "descending") {
                                                            setType("ascending")
                                                            Sort(type)
                                                        }

                                                    }} scope="col" className="py-3 px-6 relative cursor-pointer">
                                                        Date <span className='mx-6'><StraightIcon color={`${type === "ascending" ? "secondary" : null}`} fontSize='small' className='absolute' /><StraightIcon fontSize='small' color={`${type === "descending" ? "secondary" : null}`} className='absolute left-[5.6rem]' style={{ rotate: "180deg" }} /></span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {filter ? queries ? queries.map((element, id) => {
                                                    return (
                                                        <tr key={id} className={`bg-white ${filter === element.car.split(" ")[0] ? null : "hidden"} dark:bg-gray-900 dark:border-gray-700`}>
                                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {element.name}
                                                            </th>
                                                            <td className="py-4 px-6">
                                                                {element.number}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {element.car}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {element.pincode}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {timeStamp(element)}
                                                            </td>
                                                        </tr>
                                                    )
                                                }) : null : queries ? queries.map((element, id) => {
                                                    return (
                                                        <tr key={id} className={`bg-white dark:bg-gray-900 dark:border-gray-700`}>
                                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                {element.name}
                                                            </th>
                                                            <td className="py-4 px-6">
                                                                {element.number}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {element.car}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {element.pincode}
                                                            </td>
                                                            <td className="py-4 px-6">
                                                                {timeStamp(element)}
                                                            </td>
                                                        </tr>
                                                    )
                                                }) : null}
                                            </tbody>
                                        </table>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inquiries