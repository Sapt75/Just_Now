import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

const Multiple = () => {


    const { item } = useParams("");

    let [sub, setSub] = useState(1)


    const loc = useLocation()

    const { data, head } = loc.state



    async function updateState(itm) {
        let data = await fetch(`/update_spec/${head}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itm)
        })

    }


    async function handelData(e) {
        e.preventDefault()

        let allData = data

        let spcs = []



        await Promise.allSettled(Object.values(e.target).map((itm) => {
            if (itm.nodeName === "INPUT") {
                spcs.push(itm.value)
            }
        }))



        for (let i = 0; i <= spcs.length; i += 2) {
            if (spcs[i]) {
                allData[head][item][spcs[i]] = spcs[i + 1]
            }
            if (i === spcs.length) {
                updateState(allData)
            }
        }




    }


    




    return (
        <div>
            <div className='justify-between mx-[10rem] mt-[10rem]'>
                <h1>{_.startCase(item.replace("_", " "))} Sub</h1>
                <div className='my-[5rem]'>
                    <form onSubmit={handelData}>
                        <div>
                            {sub > 0 ? Array.from(Array(sub), (e, i) => {
                                return (<div className='flex space-x-[5rem] mb-[2rem]'>
                                    <div>
                                        <p className='font-semibold text-lg mb-[1rem]'>Name</p>
                                        <input className='px-[2rem] py-[0.5rem]' type="text" />
                                    </div>
                                    <div>
                                        <p className='font-semibold text-lg mb-[1rem]'>Value</p>
                                        <input className='px-[2rem] py-[0.5rem]' type="text" />
                                    </div>
                                </div>)
                            }) : null}
                            <div className='flex'>
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    setSub(sub + 1)
                                }} className='my-[3rem] px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>
                                    Add New
                                </button>
                                <button type='submit' className='my-[3rem] px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Multiple