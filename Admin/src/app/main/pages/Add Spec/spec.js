import React, { useEffect, useState } from 'react'
import Example from './specModal'
import { Link } from 'react-router-dom'



const Spec = () => {

    const [data, setData] = useState()

    async function getData() {
        let data = await fetch(`/features`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        let res = await data.json()
        setData(res)
    }


    async function updateState(itm) {
        setData(JSON.parse(localStorage.getItem("dat")))

        let data = await fetch(`/update_spec/${itm}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(JSON.parse(localStorage.getItem("dat"))[itm])
        })

        localStorage.removeItem("dat")
    }


    useEffect(() => {
        getData()
    }, [])



    return (
        <>
            <div>
                <div className='flex justify-between mx-[10rem] mt-[10rem]'>
                    <h1>Specifications Sub</h1>
                    <Example title="Specifications" data={data} updateState={updateState} />
                </div>
                <div class="grid grid-cols-4 my-[5rem] mx-[10rem] gap-20">
                    {data ? Object.keys(data.Specifications).map((item) => {
                        return (<div>
                            <Link state={{
                                data: data,
                                head: "Specifications"
                            }} style={{ textDecoration: "none" }} to={`/pages/spec/${item}`}>
                                <p className='px-20 text-center hover:text-white hover:bg-[#1C75BC] hover:border-[#1C75BC] cursor-pointer py-8 rounded-32 text-[#1C75BC] border-2 border-[#1C75BC]'>
                                    {_.startCase(item.replace("_", " "))}
                                </p>
                            </Link>
                        </div>)
                    }) : null}
                </div>
            </div>

            <div>
                <div className='flex justify-between mx-[10rem] mt-[10rem]'>
                    <h1>Features Sub</h1>
                    <Example title="Features" data={data} updateState={updateState} />
                </div>
                <div class="grid grid-cols-4 my-[5rem] mx-[10rem] gap-20">
                    {data ? Object.keys(data.Features).map((item) => {
                        return (<div>
                            <p className='px-20 text-center hover:text-white hover:bg-[#1C75BC] hover:border-[#1C75BC] cursor-pointer py-8 rounded-32 text-[#1C75BC] border-2 border-[#1C75BC]'>
                                {_.startCase(item.replace("_", " "))}
                            </p>
                        </div>)
                    }) : null}
                </div>
            </div>

            {/* {data ?(data.Specifications)} */}
        </>
    )
}

export default Spec