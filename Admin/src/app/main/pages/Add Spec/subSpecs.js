import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Example from './specModal'

const SubSpecs = () => {


    const { item } = useParams("");

    let [sub, setSub] = useState()


    const loc = useLocation()

    const { data, head } = loc.state


    async function updateState() {
        setSub(JSON.parse(localStorage.getItem("sub")))

        let data = await fetch(`/update_spec/${head}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(JSON.parse(localStorage.getItem("sub"))[head])
        })

        localStorage.removeItem("sub")
    }


    useEffect(() => {
        setSub(data)
    }, [])






    return (
        <>
            <div className='flex justify-between mx-[10rem] mt-[10rem]'>
                <h1>{_.startCase(item.replace("_", " "))} Sub</h1>
                <div>
                    <Example title={head} subHead={item} data={data} updateState={updateState} status={true} />
                    <Link state={{
                        data: data,
                        head: head
                    }} style={{ textDecoration: "none" }} to={`/pages/spec/multi/${item}`}>
                        <button className='px-28 py-8 bg-purple-600 text-white mx-6 rounded-20'>
                            Add Multiple
                        </button>

                    </Link>
                </div>
            </div>
            <div class="grid grid-cols-4 my-[5rem] mx-[10rem] gap-20">
                {sub ? Object.keys(sub[head][item]).map((itm) => {
                    return (<div>
                        <p className='px-20 text-center hover:text-white hover:bg-[#1C75BC] hover:border-[#1C75BC] cursor-pointer py-8 rounded-32 text-[#1C75BC] border-2 border-[#1C75BC]'>
                            {_.startCase(itm.replace("_", " "))}
                        </p>
                    </div>)
                }) : null}
            </div>
        </>
    )
}

export default SubSpecs